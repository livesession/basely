
import jscodeshift from 'jscodeshift';

const rx_any = /./;
const rx_http = /^https?:\/\//;
const rx_relative_path = /^\.\.?\//;
const rx_absolute_path = /^\//;

function load_http_module(href) {
    return fetch(href).then(function (response) {
        return response.text().then(function (text) {
            // Transform the text content using jscodeshift
            try {
                const root = jscodeshift(text);
                let hasRewrites = false;
                
                root
                    .find(jscodeshift.ImportDeclaration)
                    .filter(p => p.node.source.value.startsWith('/'))
                    .forEach(p => {
                        const oldVal = p.node.source.value;
                        p.node.source.value = `http://localhost:4444${oldVal}`;
                        hasRewrites = true;
                    });

                if (hasRewrites) {
                    const transformedText = root.toSource({ quote: 'double' });
                    console.log(`Transformed imports in ${href}`);
                    return (
                        response.ok
                            ? { contents: transformedText, loader: "js" }
                            : Promise.reject(
                                new Error("Failed to load module '" + href + "': " + transformedText)
                            )
                    );
                } else {
                    return (
                        response.ok
                            ? { contents: text, loader: "js" }
                            : Promise.reject(
                                new Error("Failed to load module '" + href + "': " + text)
                            )
                    );
                }
            } catch (error) {
                console.warn(`Failed to transform ${href}:`, error.message);
                return (
                    response.ok
                        ? { contents: text, loader: "js" }
                        : Promise.reject(
                            new Error("Failed to load module '" + href + "': " + text)
                        )
                );
            }
        });
    });
}

export default {
    name: "http_imports",
    setup(build) {
        build.onResolve({ filter: rx_relative_path }, function (args) {
            if (rx_http.test(args.importer)) {
                return { path: new URL(args.path, args.importer).href };
            }
        });
        build.onResolve({ filter: rx_absolute_path }, function (args) {
            if (rx_http.test(args.importer)) {
                return { path: new URL(args.path, args.importer).href };
            }
        })
        build.onLoad({ filter: rx_any, namespace: "http" }, function (args) {
            return load_http_module("http:" + args.path);
        });
        build.onLoad({ filter: rx_any, namespace: "https" }, function (args) {
            return load_http_module("https:" + args.path);
        });
    }
}

