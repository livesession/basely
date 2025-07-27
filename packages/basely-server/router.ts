import type { Route } from "./types";

export function router(...routes: Route[]): Route {
    return async (url, req) => {
        for (const route of routes) {
            const res = await route(url, req);
            if (res !== undefined) return res;
        }
        return undefined;
    };
} 