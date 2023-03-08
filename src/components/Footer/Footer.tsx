/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/config/routes';
import { navigationLinks } from '../../utils/navigation-links';
import { socialMediaLinks } from '../../utils/social-media-links';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="main-grid">
                <Row gutter={[20, 40]}>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <h4 className='footer__title'>OSD BB app</h4>
                        <p>Download OSD BB app in</p>
                        <div className="d-flex">
                            <img className='footer__store-logo' src="https://icons.iconarchive.com/icons/hamzasaleem/stock-style-3/512/App-store-icon.png" alt="" />
                            <img className='footer__store-logo' src="https://www.androidpolice.com/wp-content/uploads/2017/05/nexus2cee_ic_launcher_play_store_new_thumb-1.png" alt="" />
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <h4 className='footer__title'>Follow us</h4>
                        <div className="d-flex">
                            {socialMediaLinks.map((socialMediaLink) => (
                                <Link key={socialMediaLink.icon} className='footer__icon' to={socialMediaLink.path}><i className={`fab fa-${socialMediaLink.icon} color-light`} /></Link>
                            ))}
                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24}>
                        <h4 className='footer__title'>Quick Links</h4>
                        {navigationLinks.map((navigationLink) => (
                            <Link key={navigationLink.title} to={navigationLink.path} className='footer__link color-light'> {navigationLink.title} </Link>
                        ))}
                        <Link to={routes.rulesPath} className='footer__link color-light'>Betting Rules</Link>
                        <Link to={routes.termsPath} className='footer__link color-light'>Terms & Conditions</Link>
                        <Link to={routes.policyPath} className='footer__link color-light'>Privacy Policy</Link>
                    </Col>
                    <Col lg={24}>
                        <p className='color-grey mt-3'>Copyright © 2022 Orient Software Development - Intern team</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Footer;
