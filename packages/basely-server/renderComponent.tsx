import React from "react";

import { Fonts } from "./Fonts";

// TODO: in the future plugins better css etc.

export function renderComponent(Component: React.ComponentType<any>) {
    return function (props: any) {
        const { font, css, ...rest } = props;

        return (
            <html>
                <head>
                    <Fonts href={font} />
                    <Styles css={css} />
                </head>
                <body>
                    <div id="component">
                        <Component
                            {...rest}
                        />
                    </div>
                </body>
            </html>
        );
    }
}

function Styles({ css }: { css: string[] }) {
    let cssLinks: React.ReactNode[] = [];
    if (Array.isArray(css)) {
        cssLinks = css.map((c) => {
            if (isRemoteCss(c)) {
                return <link rel="stylesheet" href={c} key={c} />
            }
            return <style key={c}>{c}</style>
        });
    } else if (css) {
        if (isRemoteCss(css)) {
            cssLinks = [<link rel="stylesheet" href={css} key={css} />];
        } else {
            cssLinks = [<style key={css}>{css}</style>];
        }
    }

    return <>
        {cssLinks}
    </>
}

function isRemoteCss(css: string) {
    return css.startsWith("https")
        || css.startsWith("http")
        || css.startsWith("//")
        || css.startsWith("data:")
        || css.startsWith("blob:")
        || css.startsWith("/")
}