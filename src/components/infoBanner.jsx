import React from "react";

const InfoBanner = ( {image, children} ) =>  {
    return (
        <div className="info-banner">
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