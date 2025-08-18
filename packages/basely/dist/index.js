function getEnvUrl(key, fallback) {
    if (typeof process !== "undefined") {
        return process.env[key] || fallback;
    }
    return fallback;
}
const SERVER_URL = getEnvUrl("SERVER_URL", "http://localhost:3000");
const IMPORT_URL = getEnvUrl("IMPORT_URL", "http://localhost:3344");
class BaselyImg {
    constructor(baseUrl = SERVER_URL) {
        this.baseUrl = baseUrl;
    }
    async render(pkg, options) {
        const params = new URLSearchParams();
        const isRemote = pkg.startsWith("http://") || pkg.startsWith("https://");
        const resolvedPkg = isRemote ? pkg : `${IMPORT_URL}/${pkg}`;
        params.set("pkg", resolvedPkg);
        params.set("component", options.import);
        if (options.font) {
            params.set("font", options.font);
        }
        if (options.css) {
            for (const css of options.css) {
                params.append("css", css);
            }
        }
        if (options.props) {
            params.set("props", JSON.stringify(options.props));
        }
        const url = `${this.baseUrl}/render?${params.toString()}`;
        return fetch(url);
    }
    async baseline(title, data) {
        const params = new URLSearchParams();
        params.set("title", title);
        if (data) {
            params.set("toolGroups", JSON.stringify(data));
        }
        const url = `${this.baseUrl}/baseline.png?${params.toString()}`;
        return fetch(url);
    }
}
function imgAPI(baseUrl) {
    const instance = new BaselyImg(baseUrl);
    async function img(pkg, options) {
        return instance.render(pkg, options);
    }
    img.baseline = instance.baseline.bind(instance);
    return img;
}
const basely = {
    img: imgAPI(SERVER_URL),
};
export default basely;
