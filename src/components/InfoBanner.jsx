import React from "react";
import '../assets/scss/infobanner.scss';

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