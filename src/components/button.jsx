import React from "react";

export const Button = (props) => {
    const { className, children } = props;
    return (
        <button
            className={`button roobert-bold-black-16px ${className || ""}`}
        >
            {children}
        </button>
    );
};


export const ButtonIcon = (props) => {
    const { className, children } = props;
    return (
        <div className={`button ${className || ""}`}>
            <div className="icons24-arrow-down-2">
            <img className="union" src="/img/union@2x.svg" alt="Union" />
            {children}
            </div>
        </div>
    );
}

