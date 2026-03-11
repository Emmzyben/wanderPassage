import { Link } from "react-router-dom";

const services = [
    { name: 'Visa Processing & Guidance', link: '/services/visa-processing' },
    { name: 'Australia PR Visa', link: '/immigration/australia' },
    { name: 'Canada Immigration', link: '/immigration/canada' },
    { name: 'UK Skilled Worker Visa', link: '/immigration/uk' },
    { name: 'Travel & Accommodation', link: '/services/travel-assistance' },
    { name: 'Test Preparation', link: '/services/test-preparation' },
];

const openingHours = [
    { day: 'Mon - Fri', time: '09.00 AM - 6.00 PM' },
    { day: 'Saturday', time: '10.00 AM - 4.00 PM' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Support', time: '24/7 Online' },
];

const ServiceSidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Our Services</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                                <Link to={service.link}>{service.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>Opening Hours</h3>
                </div>
                <div className="opening-category">
                    <ul>
                        {openingHours.map((hour, index) => (
                            <li key={index}>
                                <i className="fa-regular fa-clock" />
                                {hour.day}: {hour.time}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("/img/service/post.jpg")' }}>
                <div className="contact-text">
                    <div className="icon">
                        <i className="fa-solid fa-phone" />
                    </div>
                    <h4>Need Help? Call Here</h4>
                    <h5>
                        <Link to="tel:+2349135000681">+234 913 500 0681</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;