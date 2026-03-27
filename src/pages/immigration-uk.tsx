import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqs = [
    { q: "What is the minimum salary for a UK Skilled Worker Visa?", a: "The minimum salary threshold is £26,200 per year or £10.75 per hour (whichever is higher). Certain roles on the Shortage Occupation List may qualify at 80% of the going rate." },
    { q: "How long is the UK Skilled Worker Visa valid?", a: "The visa is granted for up to 5 years. After 5 continuous years on this visa, you may apply for Indefinite Leave to Remain (ILR / settled status)." },
    { q: "Can I bring my family to the UK?", a: "Yes. Your spouse/partner and children under 18 can come as dependants. They are permitted to live, work, and study in the UK for the duration of your visa." },
    { q: "What is a Certificate of Sponsorship (CoS)?", a: "A CoS is a unique reference number issued by your UK employer (who must hold a valid Sponsor Licence). It contains your job, salary, and start date details - required for your visa application." },
    { q: "Do I need an English language test?", a: "Yes, in most cases. You must demonstrate English at B1 CEFR level or above - via IELTS, TOEFL or OET. Citizens of majority English-speaking countries or those with degrees taught in English may be exempt." },
];

const UkImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="uk-immigration-page">
            <PageTitle
                title="UK Skilled Worker Visa"
                currentPage="UK Immigration"
                backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">UK-Specialist Immigration Experts</span>
                        <h2>UK Skilled Worker Visa Consultants</h2>
                        <p>Our certified UK immigration consultants have guided thousands of skilled professionals to work and settle in the United Kingdom. From securing a sponsor to submitting your application - we navigate every step for you.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1530&auto=format&fit=crop"
                            alt="UK Immigration"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Key Facts */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">At a Glance</span>
                        <h2>UK Skilled Worker Visa - Key Facts</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Requirement</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Points Required</td><td>70 points (mandatory threshold)</td></tr>
                                    <tr><td>Minimum Salary</td><td>£26,200 / year or the going rate for the occupation</td></tr>
                                    <tr><td>Skill Level</td><td>RQF Level 3 or above (A-Level equivalent)</td></tr>
                                    <tr><td>English Requirement</td><td>B1 CEFR level (IELTS, TOEFL, OET accepted)</td></tr>
                                    <tr><td>Maintenance Funds</td><td>£1,270 in bank account for 28+ consecutive days</td></tr>
                                    <tr><td>Visa Duration</td><td>Up to 5 years per grant</td></tr>
                                    <tr><td>Path to ILR</td><td>After 5 continuous years on the visa</td></tr>
                                    <tr><td>Path to Citizenship</td><td>1 year after ILR (total ~6 years)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Step by Step</span>
                        <h2>How to Apply</h2>
                    </div>
                    <div className="process-steps-wrapper">
                        {[
                            { num: "01", icon: "fa-clipboard-check", title: "Check Eligibility", desc: "Confirm you meet all criteria - job offer, salary threshold, skill level, English proficiency and maintenance funds." },
                            { num: "02", icon: "fa-handshake", title: "Secure a Job Offer", desc: "Get a confirmed offer from a UK employer who holds a valid Sponsor Licence to hire overseas workers." },
                            { num: "03", icon: "fa-certificate", title: "Certificate of Sponsorship (CoS)", desc: "Your employer issues a CoS - a unique reference number with your role, salary, and employment start date." },
                            { num: "04", icon: "fa-laptop", title: "Online Application", desc: "Submit your visa application online via the UKVI portal with all supporting documents and pay the visa fee + IHS." },
                            { num: "05", icon: "fa-fingerprint", title: "Biometrics Appointment", desc: "Attend a biometric enrolment at your nearest Visa Application Centre for fingerprints and a photo." },
                            { num: "06", icon: "fa-flag-checkered", title: "Visa Decision", desc: "Receive a decision - typically 3 weeks inside the UK or 8 weeks outside. Priority services available." },
                        ].map((step, idx) => (
                            <div key={idx} className="process-step">
                                <div className="step-connector"></div>
                                <div className="step-icon-wrap">
                                    <i className={`fa-solid ${step.icon}`}></i>
                                </div>
                                <div className="step-body">
                                    <span className="step-num">Step {step.num}</span>
                                    <h5>{step.title}</h5>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleOpenModal} className="theme-btn">GET APPLICATION HELP</button>
                    </div>
                </div>
            </section>

            {/* Points breakdown */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Points-Based System</span>
                        <h2>UK Visa Points Breakdown</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Criterion</th><th>Points</th><th>Type</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Job offer from an approved sponsor</td><td>20 pts</td><td>Mandatory</td></tr>
                                    <tr><td>Job at appropriate skill level (RQF 3+)</td><td>20 pts</td><td>Mandatory</td></tr>
                                    <tr><td>English language proficiency (B1+)</td><td>10 pts</td><td>Mandatory</td></tr>
                                    <tr><td>Salary ≥ £26,200 / year</td><td>20 pts</td><td>Tradeable</td></tr>
                                    <tr><td>Job in a Shortage Occupation</td><td>20 pts</td><td>Tradeable</td></tr>
                                    <tr><td>PhD in a relevant subject</td><td>10–20 pts</td><td>Tradeable</td></tr>
                                    <tr><td><strong>Minimum Required</strong></td><td><strong>70 pts</strong></td><td><strong>Total</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleOpenModal} className="theme-btn">CHECK MY ELIGIBILITY</button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Got Questions?</span>
                        <h2>UK Visa FAQs</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="immig-faq-list">
                                {faqs.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className={`immig-faq-item ${openFaq === idx ? 'open' : ''}`}
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    >
                                        <div className="faq-question">
                                            <span>{faq.q}</span>
                                            <i className={`fa-solid ${openFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        {openFaq === idx && (
                                            <div className="faq-answer"><p>{faq.a}</p></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your UK Career Starts <br /> Right Here</h2>
                            <p>Let our certified UK immigration specialists handle your Skilled Worker Visa end-to-end - from finding the right sponsor to your visa approval. Book your free session today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UkImmigration;
