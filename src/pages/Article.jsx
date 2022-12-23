import React, { useRef, useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

import Layout from '../components/Layout';
import GoToTop from '../components/GotToTop';
import '../assets/scss/articles.scss';

import ArticleSmallImage from "../assets/img/article-small.png";
import ArticleBigImage from "../assets/img/article-big.png";
// import LeftArrow from "../assets/img/left-arrow-bg.svg";
// import RightArrow from "../assets/img/right-arrow-bg.svg";


export const Article = () => {
    const topRef = useRef(null);
    const images = [
        { url:  ArticleSmallImage },
        { url: ArticleSmallImage },
        { url: ArticleSmallImage },
        { url: ArticleSmallImage },
    ];
    
    return (
        <Layout className="light-bg">
            <div ref={topRef} className="container article-wrapper">
                <div className="article-intro-banner">
                    <div>
                        <h1 className="roobert-bold-black-56px">
                            Article title goes here even if it's long
                        </h1>
                        <p className="roobert-regular-normal-black-18px">
                            Here goes some short summary which explain the essence of the article but doesn't spoil the content. It can be 3 lines long or even longer.
                        </p>
                    </div>
                    <img src={ArticleSmallImage} alt="article intro banner" />
                </div>
                <div className="article-header-text">
                    <h2 className="roobert-bold-black-40px">
                        Section title goes here
                    </h2>
                    <p className="roobert-regular-normal-grey-18px">
                        Here goes some subtitle but it might unecessary to use it as below goes the section content.
                    </p>
                </div>
                <p className="roobert-regular-normal-black-18px"> 
                    Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                </p>
                <p className="roobert-regular-normal-black-18px">
                    Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                </p>
            </div>
            <div className="article-emphasized">
                <div className="container article-emphasized-wrapper">
                    <div className="article-emphasized-title">
                        <h2 className="roobert-bold-black-40px">
                            Section title goes here and it's an example of a section which is emphasized
                        </h2>
                        <p className="roobert-regular-normal-grey-18px">
                            Discover how we help some of Africa's leading businesses
                        </p>
                    </div>
                    <div className="article-emphasized-subtitle">
                        <h3 className="roobert-bold-black-28px">
                            Section subtitle goes here
                        </h3>
                        <p className="roobert-regular-normal-grey-18px">
                            This is the bullet list:
                        </p>
                        <ul>
                            <li className="roobert-regular-normal-black-18px">Bullet 1</li>
                            <li className="roobert-regular-normal-black-18px">Bullet 2</li>
                            <li className="roobert-regular-normal-black-18px">Bullet 3</li>
                            <li className="roobert-regular-normal-black-18px">Bullet 4</li>
                        </ul>
                    </div>
                    <div className="article-emphasized-content1">
                        <h3 className="roobert-bold-black-28px">
                            Section subtitle goes here
                        </h3>
                        <p className="roobert-regular-normal-grey-18px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                        </p>
                    </div>
                    <div className="article-emphasized-content2">
                        <h3 className="roobert-bold-black-28px">
                            Section subtitle goes here
                        </h3>
                        <div className="article-media-alone">
                            {/* <img src={ArticleBigImage} alt="article title" /> */}
                            <SimpleImageSlider
                                width={800}
                                height={466}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            {/* <div className="nav-slider">
                                <div className="left-arrow">
                                    <img src={LeftArrow} alt="left-arrow" />
                                </div>
                                <div className="right-arrow" onClick={handleUpdateIndex}>
                                    <img src={RightArrow} alt="left-arrow" />
                                </div>
                            </div> */}

                            <p className="roobert-regular-normal-grey-12px">
                                Here comes the image description. It's optional but it may be good to use it anyway.
                            </p>
                        </div>
                        <p className="roobert-regular-normal-grey-18px">
                            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                        </p>
                    </div>
                </div> 
            </div>
            <div className="container article-wrapper2">
                <div className="article-full-width">
                    <div className="article-header-text">
                        <h2 className="roobert-bold-black-40px">
                            Section title goes here and the image
                        </h2>
                        <p className="roobert-regular-normal-grey-18px mini-text">
                            Here goes some subtitle but it might unecessary to use it as below goes the section content.
                        </p>
                    </div>
                    <div className="article-media">
                        <img src={ArticleBigImage} alt="article title" />
                        <p className="roobert-regular-normal-grey-12px">
                            Here comes the image description. It's optional but it may be good to use it anyway.
                        </p>
                    </div>
                    <p className="roobert-regular-normal-black-18px"> 
                        Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                    </p>
                </div>
                <div className="article-full-width">
                    <div className="article-header-text">
                        <h2 className="roobert-bold-black-40px">
                            Section title goes here and the image
                        </h2>
                        <p className="roobert-regular-normal-grey-18px mini-text">
                            Here goes some subtitle but it might unecessary to use it as below goes the section content.
                        </p>
                    </div>
                    <div className="article-media">
                        <img src={ArticleBigImage} alt="article title" />
                        <p className="roobert-regular-normal-grey-12px">
                            Here comes the image description. It's optional but it may be good to use it anyway.
                        </p>
                    </div>
                    <p className="roobert-regular-normal-black-18px"> 
                        Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
                    </p>
                </div>
            </div>
            <GoToTop displayAfter={200} target={topRef} />
        </Layout>
    );
}

export default Article;