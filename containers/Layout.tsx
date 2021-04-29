import React, { FC } from "react";
import { Header, Footer } from "../components";

interface LayoutProps {
    children: any;
    title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }): JSX.Element => {
    return (
    <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
