interface ImgOptions {
    import: string;
    font?: string;
    css?: string[];
    props?: Record<string, any>;
}
type ImgBaselineData = Array<Array<{
    tool: string;
    supported?: boolean;
}>>;
interface BaselyImgAPI {
    (pkg: string, options: ImgOptions): Promise<Response>;
    baseline: (title: string, data?: ImgBaselineData) => Promise<Response>;
}
declare const basely: {
    img: BaselyImgAPI;
};
export default basely;
