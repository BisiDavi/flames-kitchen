import { Icon, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    icon: {
        height: 70,
        width: 70,
        borderRadius: "50%",
        marginTop: "-30px",
    },
    img: {
        width: "100%",
        height: "100%",
    },
});

const LogoIcon = () => {
    const classes = useStyles();
    return (
        <Icon className={classes.icon}>
            <img className={classes.img} src="./logo.jpg" alt="logo" />
        </Icon>
    );
};

export default LogoIcon;
