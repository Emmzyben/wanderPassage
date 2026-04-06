import SectionTitle from "@/components/ui/sectionTitle"
import { SuHands } from "@/lib/icons"
import { Link } from "react-router-dom"

const AboutThree = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6 wow slideUp" data-delay=".4">
                            <div className="about-image">

                                <img src="/img/serve.jpg" alt="about-img" />

                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>ABOUT WANDERPASSAGE</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Expert Immigration & <br /> Study Services</SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    At WanderPassage Travels and Tours, our team of adept professionals is dedicated to helping you achieve your international education dreams through expert, step-by-step guidance.
                                </p>
                                <div className="icon-area wow slideUp" data-delay=".7">
                                    <ul className="list">
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            University Selection & Applications
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Visa Processing & Guidance
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check" />
                                            Pre-departure Support
                                        </li>
                                    </ul>
                                    <div className="icon-items">
                                        <div className="icon">
                                            <SuHands />
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <span className="count">1,500</span>+
                                            </h2>
                                            <span>Successful Students</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow slideUp" data-delay=".8">
                                        <Link to="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                    <div className="author-icon wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div className="content">
                                            <span>Call Us Now</span>
                                            <h5>
                                                <Link to="tel:+2349135000681">+234 913 500 0681</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutThree