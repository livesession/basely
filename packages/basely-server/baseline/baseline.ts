import { Browser } from "puppeteer";

export async function baseline(
    url: URL,
    req: Request,
    browser: Browser,
) {
    // 1) your fixed bits
    const pkg = `${process.env.IMPORT_URL}/@xyd-js/components/system`;
    const component = "Baseline";

    // 2) grab props out of the incoming URL
    const titleParam = url.searchParams.get("title") ?? "";
    const tgParam = url.searchParams.get("toolGroups") ?? "[]";

    const props = {
        title: titleParam,
        toolGroups: JSON.parse(tgParam),
    }

    const fontParam = url.searchParams.get("font") ?? "";
    const cssParam = url.searchParams.get("css") ?? "";
    const heightParam = url.searchParams.get("height") ?? "";
    const widthParam = url.searchParams.get("width") ?? "";
    // 3) rebuild your outgoing query
    const out = new URLSearchParams();
    out.append("pkg", pkg);
    out.append("component", component);
    out.append("props", JSON.stringify(props));
    if (heightParam) {
        out.append("height", heightParam)
    }
    if (widthParam) {
        out.append("width", widthParam)
    }
    // TODO in the future better api
    if (!fontParam) {
        out.append("font", "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
    }
    if (!cssParam) {
        out.append("css", `${import.meta.env.IMPORT_URL}/@xyd-js/components/dist/index.css`);
        out.append("css", `
            html {
                font-family: "Inter", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
            }    
        `);
    }

    const renderUrl = `${process.env.SERVER_URL}/render?${out.toString()}`;
    const res = await fetch(renderUrl);
    return res;
}