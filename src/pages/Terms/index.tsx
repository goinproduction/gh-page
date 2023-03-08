/* eslint-disable react/no-unescaped-entities */
import useScrollToTop from '../../hooks/useScrollToTop';
import coinImage from '../../assets/images/coin.png';
import useTitle from '../../hooks/useTitle';
import { defaultTitle, pageTitle } from '../../utils/constants/title-page';

const Terms = () => {
    useScrollToTop();
    useTitle(`${pageTitle.termsPage} - ${defaultTitle}`);
    return (
        <div className="document">
            <div className="document-content">
                <h1 className="color-secondary mt-2 font-500">Terms & Conditions</h1>
                <p className="font-600 mt-1">
                    IMPORTANT: PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE.
                </p>
                <p className="font-600 mt-1">
                    THESE TERMS AND CONDITIONS ARE DRAFTED IN ENGLISH. ANY TRANSLATION INTO ANOTHER LANGUAGE
                    IS ONLY FOR THE CONVENIENCE OF THE READER. IN THE EVENT OF ANY CONFLICT OR INCONSISTENCY
                    THE ENGLISH LANGUAGE VERSION SHALL PREVAIL OVER ANY TRANSLATED VERSION.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">1. Contact Information</h2>
                <p>
                    <span className="font-600">1.1 </span>
                    To contact us, please email osdbbgames@gmail.com.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">2. When These Terms and Conditions Apply</h2>
                <p>
                    <span className="font-600">2.1 </span>
                    These Terms and Conditions together with the Privacy Policy and the Betting Rules set out
                    the terms which apply between OSDBB and any person accessing or using any of the products and
                    services offered through OSDBB’s website (located at: https://www.osdbb-games.com).
                </p>
                <p>
                    <span className="font-600">2.2 </span>
                    These Terms and Conditions form a legally binding agreement between you and OSDBB.
                    By registering an account, utilizing the Services or by proceeding to access the Website,
                    you are deemed to have accepted and understood them.  You agree to be bound by the Terms and
                    Conditions and You agree to the use of electronic communications in order to enter into contracts
                    and, to the extent permitted by law.
                </p>
                <p>
                    <span className="font-600">2.3 </span>
                    These Terms and Conditions will come into effect on June 1st 2022.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">3. Changes to the Terms and Conditions</h2>
                <p>
                    <span className="font-600">3.1 </span>
                    We may need to amend the Terms and Conditions from time to time for a number of reasons,
                    including (without limitation) for commercial reasons, to comply with law or regulations,
                    to comply with instructions, guidance or recommendations from a regulatory body, or for
                    customer service reasons. The most up-to-date Terms and Conditions can be accessed from the
                    link in the footer section of the Website, and the date on which they will come into force will be noted at paragraph
                    <span className="font-600"> 2.3</span>.
                </p>
                <p>
                    <span className="font-600">3.2 </span>
                    Where we wish to make substantial changes to the Terms and Conditions, we will give you as much prior notice of such
                    changes as is reasonably practicable via email (to the email address you have supplied us with).
                </p>
                <p>
                    <span className="font-600">3.3 </span>
                    For minor or insubstantial changes, we may not give you any notice of such changes, so you are advised
                    to review the Terms and Conditions through the link on the Website on a regular basis. Your continued use
                    of the Website after these changes have been made shall be deemed as your acceptance of the changes.
                </p>
                <p>
                    <span className="font-600">3.4 </span>
                    We may, at our discretion, invite you to accept any new Terms and Conditions by clicking on
                    "yes" or "I accept", checking a 'tick box' or any other similar method of confirmation by you.
                    If you provide us with an acknowledgment or if you continue to use Your Account or otherwise access
                    the Website following notification of a change to the Website, you shall, from such time, be deemed
                    to have accepted, and be bound by, the new Terms and Conditions.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">4. Opening Your Account</h2>
                <p>
                    <span className="font-600">4.1 </span>
                    To utilize our Services and undertake any betting transactions on our Website you must first register on the Website and open an Account.
                </p>
                <p>
                    <span className="font-600">4.2 </span>
                    In order to open Your Account you will be asked to provide us with your name, and details including your email
                    address and telephone number ("Personal Information").
                </p>
                <p>
                    <span className="font-600">4.3 </span>
                    You agree to provide all relevant Personal Information to us on opening of Your Account and it is your
                    responsibility to ensure that your Personal Information are kept up-to-date on the Website.  You may update
                    your Personal information as required from time to time through the Account Page on the Website.
                </p>
                <p>
                    <span className="font-600">4.4 </span>
                    For information relating to our collection of and processing of your Personal Information please refer to our Privacy Policy.
                </p>
                <p>
                    <span className="font-600">4.5 </span>
                    In opening an account with us you warrant that:
                </p>
                <p className="ml-1">
                    (a) You agree that your use of this Website is at your sole risk and further understand and
                    agree that by using the Website and/or the Services, you may lose money on bets and you accept
                    full responsibility for any such loss.
                </p>
                <p className="ml-1">
                    (b) You accept and acknowledge that you are solely responsible for understanding and complying
                    with any laws and regulations applicable, in the country in which you reside, to your use of the
                    Services and access to this Website.

                </p>
                <p className="ml-1">
                    (c) You are opening an account for your own personal use.
                </p>
                <p>
                    <span className="font-600">4.6 </span>
                    You may open only one Account with us.
                </p>
                <p>
                    <span className="font-600">4.7 </span>
                    You may NOT open an account or operate an account on behalf of a business or legal entity.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">5. Verification of Identity</h2>
                <p>
                    <span className="font-600">5.1 </span>
                    By accepting these Terms and Conditions you warrant that the name and address you supply when opening Your Account are correct.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">6. Your Account Details</h2>
                <p>
                    <span className="font-600">6.1 </span>
                    As part of our security procedures, on opening an Account you may be required to provide us with a username and password (“Account Details”).
                    You must treat your Account Details as confidential and must not disclose them to any third party.
                </p>
                <p>
                    <span className="font-600">6.2 </span>
                    You shall be responsible for any misuse and/or unauthorized disclosure of your Account Details.  If you are concerned that your Account Details
                    have been deliberately or unintentionally disclosed to a third party, or that Your Account has been accessed by any third party without your
                    knowledge or consent, you must notify customer service immediately to deactivate Your Account.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">7. Credit Account</h2>
                <p>
                    <span className="font-600">7.1 </span>
                    By accepting these Terms and Conditions you warrant that you are able to pay the debt before the deadline.
                    We allow you to have a credit account, the debt will be paid monthly at the end of the month.
                </p>
                <p>
                    <span className="font-600">7.2 </span>
                    If you require prepayment. We also allow you to give an upfront payment before the deadline.
                </p>
                <p>
                    <span className="font-600">7.3 </span>
                    For any reason, if you don't pay by the due date, we reserve the right to accrue the debt to the next
                    month along with an interest rate of 10% based on the current debt.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">8. Placing Your Bets</h2>
                <p>
                    <span className="font-600">8.1 </span>
                    We will only accept bets from persons with a valid Account. It is your responsibility to ensure
                    that the details of any bet, stake or similar transaction that you place is correct in accordance with the relevant betting rules.
                </p>
                <p>
                    <span className="font-600">8.2 </span>
                    We reserve the right to refuse the whole or part of any Bet at any time in our absolute discretion.
                </p>
                <p>
                    <span className="font-600">8.3 </span>
                    You will not be allowed to cancel once they have been placed and we are under no obligation to cancel Bets that have been validly
                    placed in accordance with these Terms and Conditions and the Betting Rules. However, you can change your Bets before the start time
                    of the event. If we find that any bet, for any reason, is inadvertently accepted after the relevant start time, we reserve the right
                    to give the lose result to that bets.
                </p>
                <p>
                    <span className="font-600">8.4 </span>
                    We shall not, in any event, be liable for any damages or losses that are deemed or alleged to have resulted from or been caused by
                    the Website or its content, including but without limitation to, delays or interruptions in operation or transmission, communications
                    lines failure, any person's use or misuse of the Website or its content, or any errors or omissions in content in relation thereto.
                </p>
                <p>
                    <span className="font-600">8.5 </span>
                    All bet amount displayed on the Website are fixed at the time a Bet is placed. We reserve the right, at our absolute discretion without
                    explanation, to change the handicap, bet amount, or any information without prior notice to you. We further reserve the right at our
                    absolute discretion to either void any affected bets at any time or to correct any error when by error, omission or mistake the incorrect
                    odds, bet amount, or any information on a bet type, market or event at any time where displayed.
                </p>
                <p>
                    <span className="font-600">8.6 </span>
                    The Bet amount of any event is subject to change without prior notice at our absolute discretion.
                </p>
                <p>
                    <span className="font-600">8.7 </span>
                    We do not allow live or “in play” betting.
                </p>

                <h2 className="color-astronaut-blue mt-2 font-600">9. Currency</h2>
                <p className="d-flex align-items-center">
                    <span className="font-600 mr-1">9.1 </span>
                    All data related to currency are used by <img src={coinImage} className='icon-coin-sm' alt='coins' />.
                </p>
                <p className="d-flex align-items-center">
                    <span className="font-600 mr-1">9.2 </span>
                    1 <img src={coinImage} className='icon-coin-sm' alt='coins' /> is converted to 1.000 VND.
                </p>
            </div>
        </div>
    );
};

export default Terms;
