import React from "react";
import { Container } from "@material-ui/core";
import { PageTitle } from "../components/Header";

const Profile = () => {
    return (
        <>
            <PageTitle title="Profile page" />
            <Container maxWidth="xl">
                <h1>Profile page</h1>
            </Container>
        </>
    );
};

export default Profile;
