import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    makeStyles,
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { LogoIcon } from "../../icons";

const useStyles = makeStyles({
    root: {
        width: "100%",
        "& svg": {
            width: "35px",
            height: "35px",
        },
    },
    footer: {
        position: "fixed",
        width: "100%",
        bottom: 0,
    },
});

const footerIcons = [
    {
        icon: <NotificationsActiveIcon />,
        label: "Subscribe",
        value: 0,
        link: "/subscribe",
    },
    {
        icon: <LogoIcon />,
        label: "Home",
        value: 1,
        link: "/",
    },
    {
        icon: <AccountCircleIcon />,
        label: "Profile",
        value: 2,
        link: "/profile",
    },
];

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const router = useRouter();

    useEffect(() => {
        loadPage();
        return () => {
            loadPage();
        };
    }, [value]);

    const loadPage = () => {
        switch (value) {
            case 0:
                return router.push("/subscribe");
            case 1:
                return router.push("/");
            case 2:
                return router.push("/profile");
            default:
                return null;
        }
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <footer className={classes.footer}>
            <BottomNavigation
                defaultValue="home"
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                {footerIcons.map((footerIcon, index) => (
                    <BottomNavigationAction
                        label={footerIcon.label}
                        key={index}
                        value={footerIcon.value}
                        icon={footerIcon.icon}
                    />
                ))}
            </BottomNavigation>
        </footer>
    );
};

export default Footer;
