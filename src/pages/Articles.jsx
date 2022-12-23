import React from 'react';
import { ArticleComponent } from '../components/ArticleComponent';
import Layout from '../components/Layout';
import ArticleSmallImage from "../assets/img/article-small.png";
import { Button } from '../components/Button';

export const Articles = () => {
    return (
        <Layout className="bg-light">
            <div className="container articles-wrapper">
                <div className="articles-top-section">
                    <div className="articles-header">
                        <h1 className="animate__animated animate__bounce roobert-bold-black-56px">Articles</h1>
                        <p className="roobert-regular-normal-black-18px">Making a general inquiry, or you'll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible.</p>
                    </div>
                    <div className="articles-filter">
                        <p className="roobert-bold-black-18px">
                            Discover more of what matters to you
                        </p>
                        <div className="articles-categories">
                            <Button className="button-black-bg category-button">Category</Button>
                            <Button className="button-black-bg category-button">Category</Button>
                            <Button className="button-black-bg category-button">Category</Button>
                            <Button className="button-black-bg category-button">Category</Button>
                            <Button className="button-black-bg category-button">Category</Button>
                            <Button className="button-black-bg category-button">Category</Button>
                        </div>
                    </div>
                </div>
                <div className="articles-list">
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                    <ArticleComponent
                        image={ArticleSmallImage}
                        title="Article title goes here and it should be long up to two lines"
                        tags="Category • Category"
                        link="/article"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Articles;