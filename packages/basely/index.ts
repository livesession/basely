interface ImgOptions {
  import: string;
  props?: any;
}

interface BaselineOptions {
  title: string;
  toolGroups?: any[];
}

interface BadgeOptions {
  title: string;
  data?: any;
}

class BaselyImg {
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3000") {
    this.baseUrl = baseUrl;
  }

  async render(pkg: string, options: ImgOptions): Promise<Response> {
    const params = new URLSearchParams();
    params.append("pkg", pkg);
    params.append("component", options.import);
    if (options.props) {
      params.append("props", JSON.stringify(options.props));
    }

    const url = `${this.baseUrl}/render?${params.toString()}`;
    return fetch(url);
  }

  async baseline(title: string, data?: any): Promise<Response> {
    const params = new URLSearchParams();
    params.append("title", title);
    if (data) {
      params.append("toolGroups", JSON.stringify(data));
    }

    const url = `${this.baseUrl}/baseline.png?${params.toString()}`;
    return fetch(url);
  }
}

class BaselyBadge {
  baseline = {
    download: (data: any) => {
      // This method processes the data and returns it for use with baseline
      return data;
    }
  };
}

// Create the basely object with the expected API
const imgInstance = new BaselyImg();
const badgeInstance = new BaselyBadge();

// Create a function that can be called as basely.img() or used as basely.img.render()
const imgFunction = async (pkg: string, options: ImgOptions): Promise<Response> => {
  return imgInstance.render(pkg, options);
};

// Add the render and baseline methods to the function
Object.assign(imgFunction, {
  render: imgInstance.render.bind(imgInstance),
  baseline: imgInstance.baseline.bind(imgInstance)
}) as typeof imgFunction & {
  render: typeof imgInstance.render;
  baseline: typeof imgInstance.baseline;
};

const basely = {
  img: imgFunction,
  badge: badgeInstance
};

export default basely;
export { BaselyImg, BaselyBadge };
