import React from "react";

import { Browser } from "puppeteer";

import { Route } from "./types";
import { serve } from "./serve";
import { renderComponent } from "./renderComponent";

// Simple in-memory cache for PNG screenshots
const screenshotCache = new Map<string, { buffer: Uint8Array; expires: number }>();

export function route(
    browser: Browser,
): Route {
    return async function (url: URL, req: Request): Promise<Response | undefined> {
        if (url.pathname !== "/render") {
            return undefined;
        }

        const { pkg, component, render, props } = await parseRenderParams(url.search);

        const mod = await import(pkg);
        const Component = renderComponent(mod[component || "default"]);

        // Direct React render when requested
        if (render) {
            return serve.react(<Component {...props} />);
        }

        // Puppeteer screenshot path
        const cacheKey = req.url;
        const now = Date.now();
        const cached = screenshotCache.get(cacheKey);
        if (cached && cached.expires > now) {
            return new Response(cached.buffer, { headers: { "Content-Type": "image/png", "X-Cache": "HIT" } });
        }

        try {
            const page = await browser.newPage();
            await page.setViewport({
                width: 468,
                height: 800,
                deviceScaleFactor: 2, // 2x resolution
            });

            // Navigate to same URL with render parameter
            const screenshotUrl = new URL(req.url);
            screenshotUrl.searchParams.set("render", "1");

            await page.goto(screenshotUrl.href, { waitUntil: "networkidle0" });

            // Wait for the component element to mount
            await page.waitForSelector("#component", { timeout: 10000 });
            const element = await page.$("#component");
            if (!element) throw new Error("#component element not found");

            const buffer = await element.screenshot({ type: "png", omitBackground: true });
            // Cache the result for 30 seconds
            screenshotCache.set(cacheKey, { buffer, expires: now + 30_000 });
            return new Response(buffer, { headers: { "Content-Type": "image/png", "X-Cache": "MISS" } });
        } catch (err) {
            console.error("Screenshot failed:", err);
            return new Response("Screenshot error", { status: 500 });
        } finally {
            // if (browser) await browser.close();
        }
    }
}

// Helper to decode and parse query params
async function parseRenderParams(search: string) {
    let query = search.startsWith("?") ? search.slice(1) : search;
    try { query = decodeURIComponent(query); } catch { }

    const params = new URLSearchParams(query);
    const pkg = params.get("pkg") || "";
    const component = params.get("component") || "";
    let props: any = params.get("props") || "";
    const render = params.get("render") === "1" || params.get("render") === "true";

    // Handle file parameter - fetch and parse content
    const fileUrl = params.get("file");
    if (fileUrl) {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
                throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
            }
            const content = await response.text();

            // Try to parse as JSON first
            try {
                const parsed = JSON.parse(content);
                props = (parsed && typeof parsed === "object") ? parsed : {};
            } catch {
                // If not JSON, try to parse as other formats or use as-is
                console.warn("File content is not valid JSON, using fallback parsing");
                props = {};
            }
        } catch (err) {
            console.error("Error fetching file:", err);
            // Continue with default values if file fetch fails
            props = {};
        }
    } else {
        try {
            const parsed = JSON.parse(props || "{}");
            props = (parsed && typeof parsed === "object") ? parsed : {};
        } catch {
            props = {};
        }
    }

    return { render, pkg, component, props };
}
