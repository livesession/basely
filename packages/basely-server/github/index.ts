import { Route } from "../types";

export function route(): Route {
    return async function (url: URL, req: Request): Promise<Response | undefined> {
        if (url.pathname.startsWith("/github/download/releases/")) {
            // Example: /github/download/releases/livesession/xyd?asset=node-support-baseline.png
            const parts = url.pathname.split("/");
            // parts: ["", "github", "download", "releases", "livesession", "xyd"]
            if (parts.length < 6) {
                return new Response("Invalid path", { status: 400 });
            }
            const owner = parts[4];
            const repo = parts[5];
            const tag = url.searchParams.get("tag") || "latest";
            const asset = url.searchParams.get("asset");
            if (!asset) {
                return new Response("Missing asset query parameter", { status: 400 });
            }

            // Fetch release info from GitHub
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/${tag === "latest" ? "latest" : `tags/${tag}`}`;
            const releaseRes = await fetch(apiUrl);
            if (!releaseRes.ok) {
                return new Response("Release not found", { status: 404 });
            }
            const release = await releaseRes.json();
            const assetObj = release.assets?.find((a: any) => a.name === asset);
            if (!assetObj) {
                return new Response("Asset not found", { status: 404 });
            }

            // Download asset from GitHub
            const assetRes = await fetch(assetObj.browser_download_url);
            if (!assetRes.ok) {
                return new Response("Failed to download asset", { status: 502 });
            }
            // Stream the asset response
            return new Response(assetRes.body, {
                status: 200,
                headers: {
                    "Content-Type": assetRes.headers.get("Content-Type") || "application/octet-stream",
                    "Content-Disposition": `attachment; filename="${assetObj.name}"`
                }
            });
        }
    }
}