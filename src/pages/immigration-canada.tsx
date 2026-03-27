import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqs = [
    { q: "Which is the most popular Canada PR pathway?", a: "Express Entry is the most popular - it manages applications for FSW, FST and CEC streams using the CRS score. Draws are held every 2 weeks with most applications processed within 6 months." },
    { q: "How long does the Canada PR process take?", a: "Express Entry applications are typically processed within 6 months of receiving an Invitation to Apply (ITA). Provincial Nominee Program (PNP) applications can take 12–18 months depending on the province." },
    { q: "Can I include my family in my PR application?", a: "Yes. Your spouse/common-law partner and dependent children can be included. They receive PR status at the same time as you once the application is approved." },
    { q: "How much settlement funds do I need?", a: "For 1 person: CAD $13,757. For 2: CAD $17,127. For 3: CAD $21,055. Funds are not required if you have a valid Canadian job offer." },
    { q: "What is the minimum CRS score needed?", a: "There is no fixed minimum - cutoff scores vary per draw. Recent draws have ranged from 470 to 540+ points depending on the stream and draw category." },
];

const CanadaImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Canada Immigration"
                currentPage="Canada Immigration"
                backgroundImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Trusted Immigration Experts</span>
                        <h2>Canada Immigration Consultants</h2>
                        <p>Our certified immigration professionals have helped thousands of families build their Canadian dream. From Express Entry to PNP - we guide you through every step of the journey with precision and care.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop"
                            alt="Canada Immigration"
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
                        <h2>Canada - Key Facts</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Factor</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Currency</td><td>Canadian Dollar (CAD)</td></tr>
                                    <tr><td>Languages</td><td>English & French</td></tr>
                                    <tr><td>Minimum Wage</td><td>CAD $17.30 / hour</td></tr>
                                    <tr><td>Processing Time</td><td>Express Entry: ~6 months | PNP: 12–18 months</td></tr>
                                    <tr><td>Settlement Funds (Single)</td><td>CAD $13,757 minimum</td></tr>
                                    <tr><td>Path to Citizenship</td><td>3 years after receiving PR</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* PR Pathways */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Your Immigration Route</span>
                        <h2>Major PR Pathways</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-rocket", badge: "Most Popular", title: "Express Entry", desc: "Fastest PR pathway for skilled workers via FSW, FST or CEC. Candidates are ranked by CRS score and invited in regular draws - often every 2 weeks.", points: ["Federal Skilled Worker (FSW)", "Canadian Experience Class (CEC)", "Federal Skilled Trades (FST)"] },
                            { icon: "fa-map-location-dot", badge: "Province-Specific", title: "Provincial Nominee Program (PNP)", desc: "Provinces nominate candidates based on regional labour needs. A provincial nomination adds 600 CRS points - virtually guaranteeing an ITA.", points: ["Ontario Immigrant Nominee (OINP)", "BC Provincial Nominee Program", "Alberta Advantage Immigration"] },
                            { icon: "fa-water", badge: "Atlantic Canada", title: "Atlantic Immigration Program", desc: "Targets skilled workers and graduates for Nova Scotia, New Brunswick, PEI and Newfoundland to drive regional economic growth.", points: ["Atlantic High-Skilled Program", "Atlantic International Graduate", "Atlantic Intermediate-Skilled"] },
                            { icon: "fa-snowflake", badge: "Quebec", title: "Quebec Skilled Worker (QSWP)", desc: "Quebec manages its own immigration system via the Arrima platform. Points based on Education, Language, Work Experience and Adaptability.", points: ["Arrima Expression of Interest", "Quebec Experience Program (PEQ)", "Quebec Business Programs"] },
                        ].map((prog, idx) => (
                            <div key={idx} className="col-lg-6">
                                <div className="program-card">
                                    <div className="program-card-top">
                                        <div className="prog-icon"><i className={`fa-solid ${prog.icon}`}></i></div>
                                        <span className="prog-badge">{prog.badge}</span>
                                    </div>
                                    <h4>{prog.title}</h4>
                                    <p>{prog.desc}</p>
                                    <ul className="prog-highlights">
                                        {prog.points.map((p, pi) => (
                                            <li key={pi}><i className="fa-solid fa-arrow-right"></i><span>{p}</span></li>
                                        ))}
                                    </ul>
                                    <button onClick={handleOpenModal} className="prog-cta-btn">Get Assessment <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Do You Qualify?</span>
                        <h2>CRS Eligibility Criteria</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>CRS Factor</th><th>Max Points</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Age, Education & Language (Core Human Capital)</td><td>Up to 500 pts</td></tr>
                                    <tr><td>Spouse / Common-Law Partner Factors</td><td>Up to 40 pts</td></tr>
                                    <tr><td>Skills Transferability (Education + Work + Language)</td><td>Up to 100 pts</td></tr>
                                    <tr><td>French Language Proficiency</td><td>Up to 50 pts</td></tr>
                                    <tr><td>Canadian Study / Siblings in Canada</td><td>Up to 15 pts</td></tr>
                                    <tr><td>LMIA Job Offer</td><td>Up to 200 pts</td></tr>
                                    <tr><td>Provincial Nomination</td><td>+600 pts (guaranteed ITA)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleOpenModal} className="theme-btn">CHECK MY CRS SCORE</button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Got Questions?</span>
                        <h2>Canada Immigration FAQs</h2>
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
                            <h2>Start Your Canadian Journey <br /> With Confidence</h2>
                            <p>Let our certified immigration consultants handle your Express Entry, PNP, or any Canadian PR pathway. Book a free 30-minute session and take your first step.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1511&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CanadaImmigration;
