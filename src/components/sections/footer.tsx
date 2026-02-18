import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 7/24",
        value: "+234 913 500 0681",
        link: "tel:+2349135000681",
    },
    {
        icon: <SuEmail />,
        label: "Email Us",
        value: "info@wanderpassage.com",
        link: "mailto:info@wanderpassage.com",
    },
    {
        icon: <SuLocation />,
        label: "Head Office",
        value: "Plot 64 Ext 2, Arab Road, Abuja",
    },
];

const popularCountries = [
    { text: "Study In Australia", link: "/study-abroad/australia" },
    { text: "Study In USA", link: "/study-abroad/usa" },
    { text: "Study In UK", link: "/study-abroad/uk" },
    { text: "Study In Canada", link: "/study-abroad/canada" },
    { text: "Study In Ireland", link: "/study-abroad/ireland" },
    { text: "Study In Germany", link: "/study-abroad/germany" },
    { text: "Study In New Zealand", link: "/study-abroad/new-zealand" },
    { text: "Study In Singapore", link: "/study-abroad/singapore" },
];

const migrationServices = [
    { text: "Canada PR Visa", link: "/migration/canada-pr" },
    { text: "Canada Work Permit", link: "/migration/canada-work" },
    { text: "Canada Visitor Visa", link: "/migration/canada-visitor" },
    { text: "Australia PR Visa", link: "/migration/australia-pr" },
    { text: "UK Skilled Worker Visa", link: "/migration/uk-skilled" },
];

const studentServices = [
    { text: "Education Loan", link: "/student-services/loan" },
    { text: "Forex Card", link: "/student-services/forex" },
    { text: "Health Insurance", link: "/student-services/insurance" },
    { text: "Accomodation", link: "/student-services/accommodation" },
    { text: "Student Visa", link: "/student-services/visa" },
];

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/img/logo/logo.jpeg" alt="logo-img" width={120} height={120} style={{ borderRadius: '10px' }} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Wander Passage Travels and Tours is your trusted partner for global education and migration, providing expert guidance from Nigeria to the world.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link to="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Popular Countries</h3>
                                </div>
                                <ul className="list-area">
                                    {popularCountries.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".6"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Migration Services</h3>
                                </div>
                                <ul className="list-area">
                                    {migrationServices.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow slideUp"
                            data-delay=".7"
                        >
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Student Services</h3>
                                </div>
                                <ul className="list-area">
                                    {studentServices.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link to="/about">
                                            <i className="fa-solid fa-chevron-right" />
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/news">
                                            <i className="fa-solid fa-chevron-right" />
                                            Blogs & Articles
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2026 by <Link to="/">Wander Passage</Link>
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="contact">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link to="contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;