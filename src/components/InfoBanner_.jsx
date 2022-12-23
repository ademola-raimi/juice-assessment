import React from "react";

const InfoBanner = ( {id, image, children} ) =>  {
    return (
        <div id={id} className="info-banner">
            <div className="info-banner-wrapper">
                <div>
                    {children}
                </div>
                <img src={image} alt="info-banner" />
            </div>
        </div>
    );
};

export default InfoBanner;