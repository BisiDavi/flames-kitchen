import React, { useState } from "react";
import { Logo } from "../../icons";
import { Hamburger } from "../Button";

const Header = () => {
    const [btnState, setBtnstate] = useState(false);

    const hamburgerHandler = () => setBtnstate(!btnState);

    const sidebarState = (menuState) => (menuState ? "menu opened" : "menu");

    return (
        <>
            <header>
                <Logo />
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={sidebarState(btnState)}
                />
            </header>
            <style jsx>
                {`
                    header {
                        background-color: white;
                        color: white;
                        height: 100px;
                        padding: 10px 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    h1 {
                        margin: 0px;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
