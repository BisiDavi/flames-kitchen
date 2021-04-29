import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Layout } from "../containers";
import "../styles/globals.css";
import { Loading } from "../icons";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.on("routeChangeStart", start);
            Router.events.on("routeChangeComplete", end);
            Router.events.on("routeChangeError", end);
        };
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            {loading && <Loading />}
            <CssBaseline />
            <Layout title="Subscribe page">
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
