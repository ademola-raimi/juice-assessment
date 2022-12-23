import React from 'react';
import Layout from '../components/Layout';

export const Articles = () => {
    return (
        <Layout className="bg-light">
            <div className="container articles-wrapper">
                <div className="articles-top-section">
                    <h1 className="roobert-bold-black-56px">Articles</h1>
                    <p className="roobert-regular-normal-black-18px">Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible.</p>
                </div>
            </div>
        </Layout>
    );
}

export default Articles;