import { Browser } from "puppeteer";

import { Route } from "../types";
import { serve } from "../serve";
import { baseline } from "./baseline";

export function route(
    browser: Browser
): Route {
    return async function (url: URL, req: Request): Promise<Response | undefined> {
        switch (url.pathname) {
            case "/baseline.png": {
                return baseline(url, req, browser);
            }
        }
    }
}