import {bundle} from "@remotion/bundler";
import {selectComposition, renderMedia} from "@remotion/renderer";
import fs from "node:fs/promises";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);

import { Route } from "../types";

export function route(): Route {
    return async function (url: URL, req: Request): Promise<Response | undefined> {
        if (url.pathname.startsWith("/stargazer")) {
            const repoOrg = url.searchParams.get("repoOrg");
            const repoName = url.searchParams.get("repoName");
            const starCount = url.searchParams.get("starCount") || 50;
            const duration = url.searchParams.get("duration") || 5;
            const gdpr = url.searchParams.get("duration") || false

            if (!repoOrg || !repoName) {
                const err = {
                    error: "Repository organization / name is required",
                }

                return new Response(JSON.stringify(err), {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            }

            const inputProps = {
                repoOrg,
                repoName,
                starCount,
                duration,
                gdpr,
            }

            const entryPoint = require.resolve("./lib/index.ts")

            const serveUrl = await bundle({
                entryPoint: entryPoint,
            });

            const composition = await selectComposition({
                serveUrl,
                id: "main",
                inputProps,
            });

            const result = await renderMedia({
                serveUrl,
                composition,
                codec: "h264",       
                outputLocation: null, 
                inputProps,
            });

            return new Response(result.buffer ? new Uint8Array(result.buffer) : null, {
                status: 200,
                headers: {
                    "Content-Type": "video/mp4",
                    "Content-Length": result.buffer ? result.buffer.byteLength.toString() : "0",
                }
            });
        }
    }
}
