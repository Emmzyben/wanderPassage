import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuList from './mobileNavBar';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/">
                                        <img src="/img/logo/logo.jpeg" alt="logo-img" style={{ width: 100 }} />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList onClose={toggleOffcanvas} />
                            <p className="text d-none d-lg-block">
                                Wander Passage Travels and Tours is your trusted partner for global education and migration, providing expert guidance from Nigeria to the world.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4 style={{ fontSize: '18px', marginBottom: '15px' }}>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fa-solid fa-location-dot" style={{ fontSize: '14px' }} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#" style={{ fontSize: '14px' }}>Plot 64 Ext 2, Arab Road, Abuja</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-solid fa-envelope" style={{ fontSize: '14px' }} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="mailto:info@wanderpassage.com"><span className="mailto:info@wanderpassage.com" style={{ fontSize: '14px' }}>info@wanderpassage.com</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-regular fa-clock" style={{ fontSize: '14px' }} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#" style={{ fontSize: '14px' }}>Mon - Fri, 09am - 05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-solid fa-phone" style={{ fontSize: '14px' }} />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="tel:+2349135000681" style={{ fontSize: '14px' }}>+234 913 500 0681</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link to="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
                                    <Link to="#"><i className="fab fa-youtube" /></Link>
                                    <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );
};

export default ExtraInfoOffcanvas;