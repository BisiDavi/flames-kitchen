import React from "react";
import Link from "next/link";
import { Hamburger } from "../Button";
import { Logo } from "../../icons";

const MobileMenu = ({ closeMenu, menuClassName }) => {
    const menuLinks = [
        { name: "Home", link: "/", type: "main" },
        { name: "About us", link: "/about-us", type: "main" },
        { type: "divider" },
        { name: "Log in", link: "/login", type: "secondary" },
        { name: "Start Free Trial", link: "/free-trial", type: "secondary" },
    ];
    return (
        <nav>
            <ul className="menulist">
                {menuLinks.map((menuLink, index) => {
                    return menuLink.type === "main" ? (
                        <li key={index}>
                            <Link href={menuLink.link}>
                                <a>{menuLink.name}</a>
                            </Link>
                        </li>
                    ) : menuLink.type === "divider" ? (
                        <div key={index} className="divider"></div>
                    ) : (
                        <li key={index}>
                            <Link href={menuLink.link}>
                                <a>{menuLink.name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <style jsx>
                {`
                    nav {
                        position: absolute;
                        z-index: 100;
                        background: white;
                        width: 100%;
                        height: 88vh;
                        top: 12vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    nav ul {
                        padding: 0px;
                        margin-top: -100px;
                    }

                    nav ul li {
                        list-style: none;
                        text-align: left;
                        margin: 20px auto;
                    }

                    .divider {
                        background-color: red;
                        width: 20%;
                        height: 5px;
                    }

                    nav li a {
                        font-size: 25px;
                    }
                    nav button {
                        position: absolute;
                        top: 20px;
                        right: 20px;
                    }
                `}
            </style>
        </nav>
    );
};

export default MobileMenu;
