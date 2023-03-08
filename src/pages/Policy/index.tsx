import useScrollToTop from '../../hooks/useScrollToTop';
import useTitle from '../../hooks/useTitle';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const Policy = () => {
    useScrollToTop();
    useTitle(`${pageTitle.policyPage} - ${defaultTitle}`);
    return (
        <div className="document">
            <div className="document-content">
                <h2>Legal</h2>
                <h1 className="color-secondary mt-2 font-500">Privacy Policy</h1>

                <h2 className="color-astronaut-blue mt-2 font-600">Introduction</h2>
                <p>
                    - This Privacy Notice explains how OSDBB uses your personal information when you’re using our website.
                </p>
                <p>
                    - Your privacy is important to us, and we are committed to protecting your privacy. We will be clear
                    and open about why we collect your personal information and how we use it. Where you have choices or
                    rights, we will explain these to you.
                </p>
                <p>
                    - If you do not agree with any statements contained within this Privacy Notice, please do not proceed any
                    further on our website. Please be aware that registering an account on our website, placing bets and transferring
                    funds will be deemed confirmation of your full agreement with our Terms and Conditions and our Privacy Notice.
                    You have the right to cease using the website at any time; however, we may still be legally required to retain
                    some of your personal information.
                </p>
                <p>
                    - If we change any of the terms of this Privacy Policy in the future, we will notify you by email.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">Information we collect about you</h2>
                <h2 className="color-astronaut-blue font-600">Personally identifiable information</h2>
                <p>
                    - You provide this information to us in the process of setting up an account, placing bets and using the
                    services of the website. This information is required to give you access to certain parts of our website
                    and related services. This data is collected when you:
                    <ul className="ml-2">
                        <li>
                            <p>
                                Register an account with OSDBB
                            </p>
                        </li>
                        <li>
                            <p>
                                Voluntarily provide it when using the website
                            </p>
                        </li>
                        <li>
                            <p>
                                Personally disclose the information in public areas of the website
                            </p>
                        </li>
                        <li>
                            <p>
                                Provide it when you contact our customer support team
                            </p>
                        </li>
                    </ul>
                </p>
                <p>
                    - The information includes your:
                    <ul className="ml-2">
                        <li>
                            <p>
                                First and surname
                            </p>
                        </li>
                        <li>
                            <p>
                                Email address
                            </p>
                        </li>
                        <li>
                            <p>
                                Phone number
                            </p>
                        </li>
                    </ul>
                </p>

                <h2 className="color-astronaut-blue mt-1 font-600">How and why we use your personal information</h2>
                <p>
                    - We use your personal information in a range of ways that fall into the following categories:
                    <ul className="ml-2">
                        <li>
                            <p>
                                To provide you with the products or services you have requested
                            </p>
                        </li>
                        <li>
                            <p>
                                To meet our legal or regulatory obligations
                            </p>
                        </li>
                        <li>
                            <p>
                                To monitor our website performance
                            </p>
                        </li>
                        <li>
                            <p>
                                To provide you with marketing information
                            </p>
                        </li>
                    </ul>
                </p>
                <p>
                    - Your rights over your personal information differ according to which category and lawful basis these fall into.
                    This section provides more information about each category, the rights it gives you, and how to exercise these rights.
                    <span className="font-600"> These rights are in bold following each category.</span>
                </p>

                <h2 className="color-astronaut-blue mt-1 font-600">Providing our products and services</h2>
                <p>
                    - We use your personal information to enable you to use our websites, to set up your account, and to provide you with customer service assistance.
                </p>
                <p>
                    - To provide our products and services, we share your information with external organizations working on our behalf.
                    Further information can be found in the Sharing Information section.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">Your Rights</h2>
                <h2 className="color-astronaut-blue font-600">Your rights to rectification</h2>
                <p>
                    - If you believe the personal information we hold on you is incorrect, you have the right for this to be rectified.
                    For any information that cannot be updated through My Account, please contact osdbbgames@gmail.com.
                </p>

                <h2 className="color-astronaut-blue font-600">Your right to update, access, or delete your Personal Information</h2>
                <p>
                    - If you wish to update Personal Information you believe is incorrect, you may be able to update some of your
                    information via the ‘My Profile’ page on our website.
                </p>
                <p>
                    - It is Your responsibility to maintain your Personal Information and ensure that it is up-to-date and accurate.
                </p>
                <p>
                    - Personal Information requests, questions or other related privacy issues may also be made via live chat or
                    by e-mail to the Rivalry Data Privacy Officer at osdbbgames@gmail.com.
                </p>
            </div>
        </div>
    );
};

export default Policy;
