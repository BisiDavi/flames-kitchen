import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <h1>Hello from header</h1>
            </header>
            <style jsx>
                {`
                    header {
                        background-color: black;
                        color: white;
                        height: 60px;
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
