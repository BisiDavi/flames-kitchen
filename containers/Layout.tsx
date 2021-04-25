import React, { FC } from "react";

interface LayoutProps {
    children: any;
    title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }): JSX.Element => {
    return (
        <>
            <head>
                <title>Flames Kitchen | {title}</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </head>
            <main>{children}</main>
        </>
    );
};

export default Layout;
