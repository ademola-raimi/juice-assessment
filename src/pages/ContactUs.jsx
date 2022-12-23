import React from 'react';
import Layout from '../components/Layout';
import UseCase from '../components/UseCase';
import { Button } from '../components/Button';
import FadLogo from "../assets/img/fad_logo-fl.svg";
import RewireLogo from "../assets/img/fad_logo-rewire.svg";
import GithubLogo from "../assets/img/carbon_logo-github.svg";
import VmWareLogo from "../assets/img/carbon_logo-vmware.svg";

export const ContactUs = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Layout className="gradient-bg">
            <div className="container contact-us-wrapper">
                <div className="contact-form-section">
                    <div className="contact-info-section">
                        <h1 className="animate__animated animate__bounce roobert-bold-black-56px">How can we help?</h1>
                        <p className="roobert-regular-normal-black-18px">Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible.</p>
                        <div className="contact-credentials">
                            <div className="credentials-icons">
                                <img src={RewireLogo} alt="" />
                                <img src={FadLogo} alt="" />
                                <img src={GithubLogo} alt="" />
                                <img src={VmWareLogo} alt="" />
                                <img src={RewireLogo} alt="" />
                                <img src={FadLogo} alt="" />
                            </div>
                            <p className="roobert-regular-normal-grey-12px">DIVERSE INDUSTRY LEADERS TRUST JUICE</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleFormSubmit}>
                            <input placeholder='First name (required)' type="text" />
                            <input placeholder='Last name (required)' type="text" />
                            <input placeholder='Company email (required)' type="text" />
                            <textarea placeholder='Message (required)'></textarea>
                            <input type="Submit" value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className="contact-header-text2">
                    <h2 className="roobert-bold-black-40px">
                        Payment solutions for diverse use cases
                    </h2>
                    <p className="roobert-regular-normal-grey-18px">
                        Discover how we help some of Africa's leading businesses
                    </p>
                </div>
                <div className="use-case-wrapper">
                    <UseCase
                        title="Operating businesses"
                        content="Start accepting payments in real time, no matter where your customers are based. Payments will settle in under one day. Increase your conversion with multiple payment methods your customers can choose from, for their ease."
                    />
                    <UseCase
                        title="Finance managers"
                        content="Empower your team with scalable technology that saves you time and money. Optimize your treasury operations to move money in the quickest and most compliant way possible. "
                    />
                    <UseCase
                        title="BDCs and IMTOs"
                        content="Convert local currency to USD with ease. Expand your diaspora remittance inflow and outflow to over 100 countries worldwide. "
                    />
                    <div className="use-case-contact">
                        <h3 className="roobert-bold-black-28px">Not sure if you're a good match?</h3>
                        <p className="roobert-regular-normal-black-18px">
                        Want us to take a closer look at your idea and how you can utilize our products? Let's discuss in detail.</p>
                        <Button
                            className="button-black-bg"
                            link="/contact-us"
                        >
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ContactUs;