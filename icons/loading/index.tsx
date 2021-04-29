import React from "react";

const index = () => {
    return (
        <>
            <div className="loading">
                <img src="/fire.gif" />
            </div>
            <style jsx>
                {`
                    .loading {
                        opacity: 0.7;
                        background-color: #888386;
                        background-color: black;
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1;
                    }
                    .loading img {
                        height: 150px;
                        width: 150px;
                        border-radius: 50%;
                    }
                `}
            </style>
        </>
    );
};

export default index;
