import { renderToString } from "react-dom/server";

import { serveStatic } from "./static";

export const serve = {
    css: async (url: URL | string, file: boolean = true) => {
        let css: string = "";
        if (file) {
            css = await Bun.file(url).text();
        } else {
            css = await (await fetch(url)).text()
        }

        return new Response(css, { headers: { "Content-Type": "text/css" } });

    },
    react: async (component: React.ReactNode) => {
        const html = renderToString(component);

        return new Response("<!DOCTYPE html>" + html, {
            headers: { "Content-Type": "text/html" },
        });
    },
    static: async (url: URL) => {
        return serveStatic(url);
    }
}