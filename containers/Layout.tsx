import React, { FC } from "react";
import Head from "next/head";
import { Header, Footer } from "../components";

interface LayoutProps {
    children: any;
    title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }): JSX.Element => {
    return (
        <>
            <Head>
                <title>Flames Kitchen | {title}</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
