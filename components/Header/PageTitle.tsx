import React from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {
    return (
        <Head>
            <title>Flames Kitchen | {title}</title>
        </Head>
    );
};

export default PageTitle;
