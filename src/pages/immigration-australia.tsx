import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqs = [
    { q: "What is the minimum points score for Australian PR?", a: "You need a minimum of 65 points to submit an EOI. However, recent invitation rounds have required 80–100+ points depending on the occupation and visa subclass." },
    { q: "How long does the Australian PR process take?", a: "Subclass 189 and 190 applications are typically processed within 6–12 months after receiving an invitation to apply from SkillSelect." },
    { q: "Can I include my family in my PR application?", a: "Yes. Your spouse/de facto partner and dependent children can be included and will all receive permanent residency at the same time." },
    { q: "Do I need a job offer for Subclass 189?", a: "No. The Skilled Independent Visa (Subclass 189) does not require a job offer, employer sponsorship, or state nomination - it is purely points-based." },
    { q: "What English test is accepted?", a: "IELTS (Academic or General), TOEFL iBT, PTE Academic, Cambridge C1 Advanced, or OET. 'Competent English' is the minimum requirement - higher scores earn more points." },
];

const AustraliaImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="australia-immigration-page">
            <PageTitle
                title="Australia PR Visa"
                currentPage="Australia Immigration"
                backgroundImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Certified & Trusted Experts</span>
                        <h2>Australia Immigration Consultants</h2>
                        <p>Our certified immigration professionals have helped thousands of families achieve their Australian PR dream. From Subclass 189 to regional pathways - we guide you through every step with precision and care.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1470&auto=format&fit=crop"
                            alt="Australia Immigration"
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
                        <h2>Australia - Key Facts</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Factor</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Currency</td><td>Australian Dollar (AUD)</td></tr>
                                    <tr><td>Minimum Wage</td><td>AUD $24.10 / hour</td></tr>
                                    <tr><td>Minimum Points</td><td>65 points to lodge EOI (higher = sooner invitation)</td></tr>
                                    <tr><td>Processing Time</td><td>6–12 months after invitation</td></tr>
                                    <tr><td>Path to Citizenship</td><td>4 years after PR grant (1 year as PR minimum)</td></tr>
                                    <tr><td>Healthcare</td><td>Medicare - free access for PRs and citizens</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visa Pathways */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Choose Your Visa</span>
                        <h2>Major PR Visa Subclasses</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-star", badge: "No Sponsor Needed", title: "Skilled Independent (Subclass 189)", desc: "Points-tested visa for skilled workers with no employer or state sponsor required. Live and work anywhere in Australia permanently.", points: ["No job offer or sponsorship required", "Live & work anywhere in Australia", "Pathway to Australian citizenship"] },
                            { icon: "fa-map-location-dot", badge: "State Nominated", title: "Skilled Nominated (Subclass 190)", desc: "An Australian state or territory nominates you. Adds 5 points to your score. Requires commitment to live in the nominating state for 2 years.", points: ["State/territory nomination (+5 pts)", "Permanent residence pathway", "Live & work in nominated state"] },
                            { icon: "fa-tree-city", badge: "Regional Focus", title: "Skilled Regional (Subclass 491)", desc: "Live and work in regional Australia for up to 5 years. Regional sponsorship adds 15 points. Pathway to PR via Subclass 191.", points: ["Regional sponsorship (+15 pts)", "5-year provisional visa", "PR pathway via Subclass 191"] },
                            { icon: "fa-building", badge: "Employer Sponsored", title: "Employer Nomination (Subclass 186)", desc: "For skilled workers nominated by an approved Australian employer through the Direct Entry or Temporary Residence Transition streams.", points: ["Requires employer nomination", "Direct Entry or TSS transition", "Permanent residence on grant"] },
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

            {/* Points Grid */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Points Test</span>
                        <h2>Australia Points Grid</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Factor</th><th>Max Points</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Age (25–32 years = highest)</td><td>30 pts</td></tr>
                                    <tr><td>Education Qualification</td><td>20 pts</td></tr>
                                    <tr><td>English Proficiency (Superior)</td><td>20 pts</td></tr>
                                    <tr><td>Skilled Employment in Australia</td><td>20 pts</td></tr>
                                    <tr><td>Overseas Work Experience</td><td>15 pts</td></tr>
                                    <tr><td>Regional Sponsorship (Subclass 491)</td><td>15 pts</td></tr>
                                    <tr><td>Australian Study Requirement</td><td>10 pts</td></tr>
                                    <tr><td>State Nomination (Subclass 190)</td><td>5 pts</td></tr>
                                    <tr><td><strong>Minimum to Lodge EOI</strong></td><td><strong>65 points</strong></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleOpenModal} className="theme-btn">CALCULATE MY POINTS</button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Got Questions?</span>
                        <h2>Australia PR FAQs</h2>
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
                            <h2>Start Your Australian Journey <br /> With Confidence</h2>
                            <p>Let our certified immigration consultants calculate your points score, select the right visa subclass, and manage your application from EOI to visa grant.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AustraliaImmigration;
