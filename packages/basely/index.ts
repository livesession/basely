interface ImgOptions {
  import: string;
  font?: string;
  css?: string[];
  props?: Record<string, any>;
}

type ImgBaselineData = Array<Array<{
  tool: string;
  supported?: boolean;
}>>

interface BaselyImgAPI {
  (pkg: string, options: ImgOptions): Promise<Response>;
  // render: (pkg: string, options: ImgOptions) => Promise<Response>;
  baseline: (title: string, data?: ImgBaselineData) => Promise<Response>;
}

function getEnvUrl(key: string, fallback: string): string {
  if (typeof process !== "undefined") {
    return process.env[key] || fallback;
  }

  return fallback;
}

const SERVER_URL = getEnvUrl("SERVER_URL", "http://localhost:3000");
const IMPORT_URL = getEnvUrl("IMPORT_URL", "http://localhost:3344");

class BaselyImg {
  constructor(private baseUrl: string = SERVER_URL) { }

  async render(pkg: string, options: ImgOptions): Promise<Response> {
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

  async baseline(title: string, data?: any): Promise<Response> {
    const params = new URLSearchParams();
    params.set("title", title);

    if (data) {
      params.set("toolGroups", JSON.stringify(data));
    }

    const url = `${this.baseUrl}/baseline.png?${params.toString()}`;

    return fetch(url);
  }
}

function imgAPI(baseUrl: string): BaselyImgAPI {
  const instance = new BaselyImg(baseUrl);

  async function img(pkg: string, options: ImgOptions): Promise<Response> {
    return instance.render(pkg, options);
  }

  img.baseline = instance.baseline.bind(instance);

  return img;
}

const basely = {
  img: imgAPI(SERVER_URL),
};

export default basely;