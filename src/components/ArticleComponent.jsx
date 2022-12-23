import React from "react";
import { Link } from "react-router-dom";

const ArticleComponent = (props) => {
    const { link, image, title, tags} = props;
    return (
        <div className="single-article-component">
            <Link href={link}>
                <img src={image} alt={title} />
            </Link>
            <Link href={link}>
                <h4 className="roobert-bold-black-24px">{title}</h4>
            </Link>
            <p className="roobert-regular-normal-grey-12px">{tags}</p>
        </div>
    );
};

export default ArticleComponent;