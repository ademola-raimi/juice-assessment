import React from "react";
import { Link } from "react-router-dom";
import ExternalIcon from "../assets/img/external-link.svg";
import '../assets/scss/button.scss';

export const Button = (props) => {
    const { className, link, type="button", children } = props;
    return (
        <button
            className={`button roobert-bold-black-16px ${className || ""}`}
            type={type}
        >
            {link ? (
                <Link to={link} target="_blank" rel="noopener noreferrer" className="button-icon">
                    {children}
                </Link>
            ) : (
                children
            )}
            
        </button>
    );
};


export const ButtonIcon = (props) => {
    const { className, link, children } = props;
    return (
        <button className={`button roobert-bold-black-18px ${className || ""}`}>
            <Link to={link} target="_blank" rel="noopener noreferrer" className="button-icon">
                {children}
                <img className="union" src={ExternalIcon} alt="external-link" />
            </Link>
        </button>
    );
}

export const ButtonArrow = (props) => {
    const { className, arrowType } = props;
    return (
        <button className={`button button-arrow ${className || ""}`}>
            <img className="union" src={arrowType} alt="arrow" />
        </button>
    );
}

