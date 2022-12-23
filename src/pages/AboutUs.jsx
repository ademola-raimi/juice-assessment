import React, { useRef } from 'react';
import Layout from '../components/Layout';
import InfoBox from '../components/InfoBox';
import InfoBanner from '../components/InfoBanner';
import TeamComponent from '../components/TeamComponent';
import { Button } from "../components/Button";
import GoToTop from '../components/GotToTop';
import "../assets/scss/aboutus.scss";

import IntroImage from "../assets/img/about-intro-image.png";
import NetflixBubbles from "../assets/img/netflix-bubbles.png";
import HandMoney from "../assets/img/hand-money.svg";
import TeamMember from "../assets/img/team-member.png";
import SuccessIcon from "../assets/img/success.svg";
import Home14 from "../assets/img/home14.png";
import '../assets/scss/contactus.scss';

export const AboutUs = () => {
    const topRef = useRef(null);
    return (
        <Layout className="light-bg">
            <div ref={topRef} className="container about-us-wrapper">
                <div className="about-intro-banner">
                    <div>
                        <h1 className="roobert-bold-black-56px">About us</h1>
                        <p className="roobert-regular-normal-black-18px">
                            For one year, Juice has been innovating with payment technology. With every iteration, we move closer to our ultimate goal - to get global payments to the safest, quickest and most inexpensive it can be.
                        </p>
                    </div>
                    <img src={IntroImage} alt="about intro banner" />
                </div>
                <div className="about-header-text">
                    <h2 className="roobert-bold-black-40px">
                        Payment solutions for diverse use cases
                    </h2>
                    <p className="roobert-regular-normal-grey-18px">
                        Discover how we help some of Africa's leading businesses
                    </p>
                </div>
                <div className="about-subsection">
                    <div className="about-subsection1">
                        <div>
                            <h3 className="roobert-bold-black-28px">Lorem ipsum</h3>
                            <p className="roobert-regular-normal-black-18px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet.
                            </p>
                        </div>
                        <img src={NetflixBubbles} width="476" alt="netflix-bubbles" />
                    </div>
                    <div className="about-subsection2">
                        <InfoBox 
                            icon={HandMoney}
                            title="Lorem ipsum"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet."
                        />
                        <InfoBox 
                            icon={HandMoney}
                            title="Lorem ipsum"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc arcu, iaculis quis ipsum vel, efficitur venenatis lacus. Nulla mattis nulla sem, a tempor urna vehicula sit amet."
                        />
                    </div>
                </div>
            </div>
            <div className="container team-wrapper">
                <div className="team-header-text">
                    <h2 className="roobert-bold-black-40px">
                        Our team
                    </h2>
                    <p className="roobert-regular-normal-grey-18px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="team-section">
                    <div className="team-department">
                        <h3 className="roobert-bold-black-28px">Management</h3>
                        <div className="team-members">
                            <TeamComponent
                                link="/"
                                image={TeamMember}
                                name="Ife Johnson"
                                jobTitle="Job position title"
                                socialUrl=""
                            />
                            <TeamComponent
                                link="/"
                                image={TeamMember}
                                name="Ife Johnson"
                                jobTitle="Job position title"
                                socialUrl=""
                            />
                        </div>
                    </div>
                </div>
                <div className="team-section2">
                    <div className="team-department">
                        <h3 className="roobert-bold-black-28px">Engineering</h3>
                        <div className="team-members">
                            <TeamComponent
                                link="/"
                                image={TeamMember}
                                name="Ife Johnson"
                                jobTitle="Job position title"
                                socialUrl=""
                            />
                            <TeamComponent
                                link="/"
                                image={TeamMember}
                                name="Ife Johnson"
                                jobTitle="Job position title"
                                socialUrl=""
                            />
                            <TeamComponent
                                link="/"
                                image={TeamMember}
                                name="Ife Johnson"
                                jobTitle="Job position title"
                                socialUrl=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <InfoBanner image={Home14}>
                <h2 className="roobert-bold-lighter-grey-40px">Do you think you're a good fit?</h2>
                <p className="roobert-regular-normal-lighter-grey-18px">Even though we may not be looking for talents and the moment we are open to any inquiries. Reach out to us and convince why we should work toghether. </p>
                <ul>
                    <li className="roobert-regular-normal-lighter-grey-18px">
                        <img src={SuccessIcon} alt="success-icon" />
                        Make sure your resume is attached 
                    </li>
                    <li className="roobert-regular-normal-lighter-grey-18px">
                        <img src={SuccessIcon} alt="success-icon" />
                        We value skills the most
                    </li>
                    <li className="roobert-regular-normal-lighter-grey-18px">
                        <img src={SuccessIcon} alt="success-icon" />
                        We'll reply to every email regardless of the decision
                    </li>
                </ul>
                <Button
                    className="button-white-bg"
                    link="/contact-us"
                >
                    Contact us
                </Button>
            </InfoBanner>
            <GoToTop displayAfter={200} target={topRef} />
        </Layout>
    );
}

export default AboutUs;