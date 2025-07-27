import React from "react";

import { GoogleFonts } from "./GoogleFonts";

// TODO: in the future plugins better css etc.

export function renderComponent(Component: React.ComponentType<any>) {
    return function (props: any) {
        return (
            <html>
                <head>
                    {/* TODO: configurable + by user */}
                    <GoogleFonts />
                    <link rel="stylesheet" href="/components.css" />
                    <link rel="stylesheet" href="/index.css" />
                </head>
                <body>
                    <div id="component">
                        <Component
                            {...props}
                        />
                    </div>
                </body>
            </html>
        );
    }
}