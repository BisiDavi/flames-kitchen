import React from "react";
import { useRouter } from "next/router";

const MobileMenu = ({ closeMenu }) => {
    const router = useRouter();
    const menuLinks = [
        { name: "Home", link: "/", type: "main" },
        { name: "About us", link: "/about-us", type: "main" },
        { type: "divider" },
        { name: "Log in", link: "/auth/login", type: "secondary" },
        { name: "Start Free Trial", link: "/free-trial", type: "secondary" },
    ];
    const loadPage = (link) => {
        closeMenu();
        router.push(link);
    };
    return (
        <nav>
            <ul className="menulist">
                {menuLinks.map((menuLink, index) => {
                    return menuLink.type === "main" ? (
                        <li key={index}>
                            <a onClick={() => loadPage(menuLink.link)}>
                                {menuLink.name}
                            </a>
                        </li>
                    ) : menuLink.type === "divider" ? (
                        <div key={index} className="divider"></div>
                    ) : (
                        <li key={index}>
                            <a onClick={() => loadPage(menuLink.link)}>
                                {menuLink.name}
                            </a>
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
