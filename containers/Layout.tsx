import React, { FC } from "react";
import { Header, Footer } from "../components";

interface LayoutProps {
    children: any;
    title: string;
}

const Layout: FC<LayoutProps> = ({ children, title }): JSX.Element => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
