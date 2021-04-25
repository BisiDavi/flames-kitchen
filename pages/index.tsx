import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Layout } from "../containers";

export default function Home() {
    const useStyles = makeStyles({
        container: {
            position: "relative",
        },
    });

    const classes = useStyles();
    return (
        <Layout title="Welcome">
            <Container className={classes.container} maxWidth="xl">
                <h1>Welcome to flames</h1>
            </Container>
        </Layout>
    );
}
