import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            <img src="./logo.jpg" />
            <style jsx>
                {`
                    .logo img {
                        border-radius: 50%;
                    }
                `}
            </style>
        </div>
    );
};

export default Logo;
