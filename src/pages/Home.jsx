import React, { useRef } from 'react';
import Banner from '../components/Banner';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import InfoBanner from '../components/InfoBanner';
import UseCase from '../components/UseCase';
import GoToTop from '../components/GotToTop';

import HeartCaution from "../assets/img/heart-caution.svg";
import HandMoney from "../assets/img/hand-money.svg";
import WalletIcon from "../assets/img/wallet-icon.svg";
import WorldIcon from "../assets/img/world-icon.svg";
import MapIcon from "../assets/img/map-icon.svg";
import PhonesIcon from "../assets/img/phones-icon.svg";
import NetflixBubbles from "../assets/img/netflix-bubbles.png";
import Banner12 from "../assets/img/banner12.png";
import SuccessIcon from "../assets/img/success.svg";
import Home13 from "../assets/img/home13.png";
import Home14 from "../assets/img/home14.png";

import { Button, ButtonIcon } from "../components/Button";

function Home() {
  const topRef = useRef(null);

  console.log(topRef);
  return (
    <Layout className="light-bg">
      <div ref={topRef}>
        <Banner />
      </div>
      <div className="container home-section-1">
        <div className="section-1-header-text">
          <h2 className="roobert-bold-black-40px">Accept and process payments in a secure and scalable way</h2>
        </div>
        <div className="section-1-subsection1">
          <div>
            <h3 className="roobert-bold-black-28px">Speedy settlements</h3>
            <p className="roobert-regular-normal-black-18px">Legacy payments take up to 4 business days to settle. With Juice's rapid payment system,  payments settle in only a couple of hours. <br/>Save time and effort with effective scheme management, and timely settlement.</p>
          </div>
          <img src={NetflixBubbles} width="476" alt="netflix-bubbles" />
        </div>
        <div className="section-1-subsection2">
          <h3 className="roobert-bold-light-28px">You're in control</h3>
          <div>
            <p className="roobert-regular-normal-light-18px">One robust dashboard to manage all your finance operations within our ecosystem.</p>
            <p className="roobert-regular-normal-light-18px">With both top-level and indepth transaction history view on the dashboard, Juice helps finance teams reconcile transactions efficiently and conveniently.</p>
          </div>
          <img src={Banner12} alt="" className="image-full-width" />
        </div>
        <div className="section-1-info-box-wrapper">
          <InfoBox 
            icon={HeartCaution}
            title="Security enabled"
            desc="Juice delivers a frictionless flow that offers many layers of protection without sacrificing user experience. Accrue way less in operational expenses associated with fraud investigations."
          />
          <InfoBox 
            icon={HandMoney}
            title="Great pricing"
            desc="Especially valuable for businesses processing huge volumes at high frequencies, Juice charges a flat fee per transaction. No percentage or any surprise monthly fees."
          />
        </div>
        <div className="section-1-subsection3">
          <h3 className="roobert-bold-light-28px">$50 for for all payin and payout transactions</h3>
          <div>
            <p className="roobert-regular-normal-light-18px">Using Juice rails, cross border payments is simple. <br/> See your transfers settle as soon as the next business hour. We offer clear pricing and no surprise fees.</p>
            <ul>
              <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                Transfer and settlement in minutes 
              </li>
              <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />No monthly or hidden fees
              </li>
              <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />End-to-end data security
              </li>
            </ul>
          </div>
        </div>
      </div>
      <InfoBanner image={Home13} id="section1">
        <h2 className="roobert-bold-lighter-grey-40px">Higher levels of operational efficiency with our API suite </h2>
        <p className="roobert-regular-normal-lighter-grey-18px">Juice is an ecosystem of services making business cross border payment less complex, more reliable and compliant than ever before.</p>
        <ul>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                Transfer and settlement in minutes 
            </li>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                No monthly or hidden fees
            </li>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                End-to-end data security
            </li>
        </ul>
        <ButtonIcon 
            className="animate__animated animate__swing button-white-bg"
            link="https://docs.spendjuice.org/docs"
        >
            <span className="text-underline">Documentation</span>
        </ButtonIcon>
      </InfoBanner>
      <div className="container home-section-2">
        <div className="section-2-header-text">
          <h2 id="section2" className="animate__animated animate__bounce roobert-bold-black-40px">Benefits</h2>
          <p className="roobert-regular-normal-black-18px">Why Juice</p>
        </div>
        <div className="section-2-info-box-wrapper">
          <InfoBox 
            icon={PhonesIcon}
            title="Digital wallets"
            desc="Generate white label custodial wallets for your business and your end users via our API. This wallet can receive digital currency on-chain and via regular bank transfer."
          />
          <InfoBox 
            icon={WorldIcon}
            title="International payouts"
            desc="Frictionlessly move funds to major destinations in the world via our unified dashboard. We charge 0% in commission, only a per-transaction fee of $50 only."
          />
          <InfoBox 
            icon={HandMoney}
            title="Liquidity sourcing"
            desc="Maintain cash flow required for international payments. Juice will provide your business with cash available for swaps whenever you want to make global payments."
          />
          <InfoBox 
            icon={MapIcon}
            title="Cross border remmittance"
            desc="Send money to major destinations in the world in either USD, or users local currency."
          />
          <InfoBox 
            icon={HeartCaution}
            title="KYC & fraud checks"
            desc="Get your business and your users onboarded safely and compliantly, without all the frustrations. Maximize payments from legitimate customers and minimize fraud."
          />
          <InfoBox 
            icon={WalletIcon}
            title="Payment gateway"
            desc="Avoid the collections difficulties in emerging markets. Enable fully compliant payment collections for your business. Accept payments from your users in both digital and."
          />
        </div>
        <div className="section-2-subsection2">
          <div className="section-2-subsection2-inner">
            <div>
              <h3 className="roobert-bold-lighter-grey-28px">+70</h3>
              <p className="roobert-regular-normal-lighter-grey-18px">Countries supported for USD payments</p>
            </div>
            <div>
              <h3 className="roobert-bold-lighter-grey-28px">+100</h3>
              <p className="roobert-regular-normal-lighter-grey-18px">Countries supported for local payouts</p>
            </div>
            <div>
              <h3 className="roobert-bold-lighter-grey-28px">70%</h3>
              <p className="roobert-regular-normal-lighter-grey-18px">Quicker payout time</p>
            </div>
          </div>
          <p className="roobert-regular-normal-light-grey-12px text-uppercase">all bragging rights unreserved.*</p>
        </div>
        <div id="section3" className="section-2-header-text2">
          <h2 className="animate__animated animate__bounce roobert-bold-black-40px">Payment solutions for diverse use cases</h2>
          <p className="roobert-regular-normal-black-18px">Discover how we help some of Africa's leading businesses</p>
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
      <InfoBanner id="section4" image={Home14}>
        <h2 className="animate__animated animate__bounce roobert-bold-lighter-grey-40px">All the guidance you'll need</h2>
        <p className="roobert-regular-normal-lighter-grey-18px">Our team of experts provide guidance from inquiry to integration and beyond. Get personalized recommendations for your business use case.</p>
        <ul>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                Extensive integration support 
            </li>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                Compliance & risk experts
            </li>
            <li className="roobert-regular-normal-lighter-grey-18px">
                <img src={SuccessIcon} alt="success-icon" />
                Dedicated product usecase workshop
            </li>
        </ul>
        <Button
            className="animate__animated animate__swing button-white-bg"
            link="/contact-us"
        >
            Contact us
        </Button>
      </InfoBanner>
      <GoToTop displayAfter={200} target={topRef} />
    </Layout>
  );
}

export default Home;
