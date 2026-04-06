import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const AboutTwo = () => {
    return (
        <section id="about" className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper style-simple">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-simple wow slideLeft" data-delay=".3">
                                <img
                                    src="/img/students.jpg"
                                    alt="About WanderPassage"
                                    className="img-fluid rounded-4 shadow-lg"
                                />
                                <div className="experience-badge shadow">
                                    <h3>15+</h3>
                                    <span>Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="about-content ps-lg-5">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>ABOUT OUR AGENCY</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Providing Seamless <span>Travel & Visa</span> Solutions</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-4 wow slideUp" data-delay=".4">
                                    WanderPassage Travels is dedicated to simplifying your journey. We provide expert guidance for visas, flight bookings, and complete travel logistics with a client-centric approach.
                                </p>
                                <ul className="about-simple-list mt-4 wow slideUp" data-delay=".5">
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Expert Visa Assistance (Student, Work, Tourism)
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Seamless International & Local Flight Bookings
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Reliable & Affordable Travel Logistics
                                    </li>
                                </ul>
                                <div className="mt-5 wow slideUp" data-delay=".6">
                                    <Link to="/contact" className="theme-btn">
                                        LEARN MORE
                                        <i className="fa-solid fa-arrow-right-long ps-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo