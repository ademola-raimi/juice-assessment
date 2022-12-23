import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/img/linkedIn.svg";

const TeamComponent = (props) => {
    const { link, image, name, jobTitle, socialUrl } = props;
    return (
        <div className="team-component">
            <Link to={link}>
                <img src={image} alt={name} className="team-image" />
            </Link>
            <div className="team-info">
                <Link to={link}>
                    <h4 className="roobert-bold-black-24px team-name">{name}</h4>
                </Link>
                <p className="roobert-regular-normal-grey-12px">{jobTitle}</p>
                <div className="social">
                    <Link to={socialUrl}>
                        <img src={LinkedIn} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;