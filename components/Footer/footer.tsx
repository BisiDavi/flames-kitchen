import React from "react";
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
        value: "subscribe",
    },
    {
        icon: <LogoIcon />,
        label: "Home",
        value: "home",
    },
    {
        icon: <AccountCircleIcon />,
        label: "Profile",
        value: "profile",
    },
];

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("home");

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <footer className={classes.footer}>
            <BottomNavigation
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
