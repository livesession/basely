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

    // 3) rebuild your outgoing query
    const out = new URLSearchParams();
    out.append("pkg", pkg);
    out.append("component", component);
    out.append("props", JSON.stringify(props));

    const renderUrl = `${process.env.SERVER_URL}/render?${out.toString()}`;
    console.log("fetching render with:", renderUrl);
    const res = await fetch(renderUrl);
    return res;
}