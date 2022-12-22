import React from "react";

const InfoBox = ( {icon, title, desc} ) =>  {
    return (
        <div className="info-box">
            <img src={icon} className="info-icon" alt="" />
            <h3 className="roobert-bold-black-28px">{title}</h3>
            <p className="roobert-regular-normal-black-18px">{desc}</p>
        </div>
    );
};

export default InfoBox;