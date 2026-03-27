import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}

const TopHeaderTwo = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (!document.querySelector('script[src*="translate.google.com"]')) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.body.appendChild(script);
            }

            window.googleTranslateElementInit = () => {
                if (window.google && window.google.translate) {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false,
                        },
                        "google_translate_element"
                    );
                }
            };
        };

        addGoogleTranslateScript();
    }, []);

    return (
        <div className="header-top-section top-style-3">
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to="mailto:info@wanderpassage.com" className="link">info@wanderpassage.com</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to="tel:+2349135000681">+234 913 500 0681</Link>
                        </li>
                    </ul>
                    <div className="top-right">
                        <div className="google-translate-container d-flex justify-content-end align-items-center">
                            <div id="google_translate_element"></div>
                        </div>
                        <div className="social-icon d-flex align-items-center">
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fa-brands fa-x-twitter" /></Link>
                            <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
                            <Link to="#"><i className="fa-brands fa-youtube" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeaderTwo;