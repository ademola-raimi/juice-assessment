import React from 'react';
import Layout from '../components/layout';
import CompanyLogo1 from '../assets/img/CompanyLogo1.png';
import CompanyLogo2 from '../assets/img/CompanyLogo2.png';
import UseCase from '../components/UseCase';
import '../assets/scss/contactus.scss';

export const ContactUs = () => {
    return (
        // <Layout>
            <div className="frame-296">
                <div className="top-1">
                    <div className="frame-296-1">
                    <div className="group-295">
                        <div className="flex-col-7">
                        <div className="how-can-we-help roobert-bold-licorice-56px">How can we help?</div>
                        <p className="making-a-general-inq roobert-regular-normal-licorice-18px">Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible.</p>
                        <div className="credentials-1">
                            <img className="group-82-1" src={CompanyLogo1} alt="Group 82" />
                            <img className="group-83" src={CompanyLogo2} alt="Group 83" />
                            <p className="diverse-industry-leaders-use-juice roobert-regular-normal-cape-cod-12px">
                                DIVERSE INDUSTRY LEADERS USE JUICE
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className='form'>
                        <form>
                            <input placeholder='First name (required)' />
                        </form>
                    </div>
                    
                    {/* <Form
                        inputTitle1={formProps.inputTitle1}
                        inputTitle2={formProps.inputTitle2}
                        inputTitle3={formProps.inputTitle3}
                        inputTitle4={formProps.inputTitle4}
                        inputTitle5={formProps.inputTitle5}
                        submit={formProps.submit}
                        backgroundsInputActiveProps={formProps.backgroundsInputActiveProps}
                    /> */}
                    </div>
                </div>
                <div className="payment-solutions-for-diverse-use-cases-3">
                    <div className="group-294">
                        <p className="discover-how-we-help roobert-regular-normal-cape-cod-18px">
                            Discover how we help some of Africa’s leading businesses
                        </p>
                        <p
                            className="payment-solutions-for-diverse-use-cases-1 roobert-bold-licorice-40px"
                            id="payment-solutions-for-diverse-use-cases"
                        >
                            Payment solutions for diverse use cases
                        </p>
                    </div>
                    <div className="frame-295-3">
                    <UseCase
                        title="Operating Businesses"
                        // buttonsIconProps={useCasesProps.buttonsIconProps}
                    />
                    <UseCase
                        title="Finance managers"
                        // buttonsIconProps="buttons-icon-4"
                    />
                    <UseCase
                        title="Not sure if you're a good match?"
                        // buttonsIconProps={useCases22Props.buttonsIconProps}
                    />
                    <UseCase />
                    </div>
                </div>
            </div>
        // </Layout>
    );
}

export default ContactUs;