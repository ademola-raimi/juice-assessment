import React from "react";
import { Link } from "react-router-dom";

export const ArticleComponent = (props) => {
    const { link, image, title, tags} = props;
    return (
        <div className="animate__animated animate__bounce single-article-component">
            <Link to={link}>
                <img src={image} alt={title} />
            </Link>
            <Link to={link}>
                <h4 className="roobert-bold-black-24px">{title}</h4>
            </Link>
            <p className="roobert-regular-normal-grey-12px">{tags}</p>
        </div>
    );
};

export const ArticleFullWidth = (props) => {
    const { title, miniText, image, mediaDescription, children } = props;
    return (
        <div className="article-full-width">
            <div className="article-header-text">
                <h2 className="roobert-bold-black-40px">
                    {title}
                </h2>
                <p className="roobert-regular-normal-grey-18px mini-text">
                    {miniText}
                </p>
            </div>
            <div className="article-media">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    children
                )}
                <p className="roobert-regular-normal-grey-12px">{mediaDescription}</p>
            </div>
            <p className="roobert-regular-normal-black-18px"> 
                Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
            </p>
        </div>
    );
};
