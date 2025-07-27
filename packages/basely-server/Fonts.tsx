import React from "react";

interface FontsProps {
    href: string
}

export function Fonts({ href }: FontsProps) {
    if (!href) {
        return null;
    }

    let preloads: React.ReactNode = null

    if (href.includes("https://fonts.googleapis.com")) {
        preloads = <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </>
    }

    return <>
        {preloads}
        <link
            href={href}
            rel="stylesheet"
        />
    </>
}