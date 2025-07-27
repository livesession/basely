import { Browser } from "puppeteer";

import { Route } from "../types";
import { serve } from "../serve";
import { baseline } from "./baseline";

export function route(
    browser: Browser
): Route {
    return async function (url: URL, req: Request): Promise<Response | undefined> {
        switch (url.pathname) {
            // case "/components.css": {
            //     let styleUrl: string = ""
            //     let isFile = true;

            //     const modUrl = `${import.meta.env.IMPORT_URL}/@xyd-js/components/dist/index.css`;
            //     try {
            //         const { default: styles } = await import(modUrl);

            //         styleUrl = styles;
            //     } catch (e) {
            //         styleUrl = modUrl;
            //         isFile = false;
            //     }

            //     return serve.css(styleUrl, isFile);
            // }

            case "/baseline.png": {
                return baseline(url, req, browser);
            }
        }
    }
}