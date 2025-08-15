import Bun from "bun";
import React from "react";
import puppeteer, { Browser } from "puppeteer";

import { serve } from "./serve";
import { router } from "./router";
import { route as baselineRoute } from "./baseline/index";
import { route as renderRoute } from "./render";
import {route as githubRoute } from "./github";

import httpImportPlugin from "./httpImportPlugin";
import { NotFound } from "./NotFound";

const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
console.log("[puppeteer] Browser launched");

const match = router(
    baselineRoute(browser),
    renderRoute(browser),
    githubRoute(),
)

Bun.plugin(httpImportPlugin);

Bun.serve({
    port: Number(process.env.PORT || 3000),
    async fetch(req) {
        const url = new URL(req.url);

        const response = await match(url, req);
        if (response) {
            return response;
        };

        const staticRes = await serve.static(url);
        if (staticRes) {
            return staticRes;
        }

        return serve.react(<NotFound />);
    },
});

console.log("[bun] Bun.serve started on port 3000");
