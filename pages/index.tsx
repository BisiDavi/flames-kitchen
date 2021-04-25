import React from "react";
import { Container } from "@material-ui/core";
import { Layout } from "../containers";

export default function Home() {
    return (
        <Layout title="Welcome">
            <Container maxWidth="lg">
                <h1>Welcome to flames</h1>
            </Container>
        </Layout>
    );
}
