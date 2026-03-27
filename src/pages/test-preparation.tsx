import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const tests = [
    { name: "IELTS", full: "International English Language Testing System", desc: "The world's most widely accepted English test for study, work and migration. Required by universities in the UK, Australia, Canada, Ireland and more.", target: "Band 6.0 – 8.0+", duration: "2 hrs 45 mins" },
    { name: "TOEFL", full: "Test of English as a Foreign Language", desc: "Primarily accepted in the USA and Canada. Measures reading, listening, speaking and writing ability at university level.", target: "Score 80 – 110+", duration: "About 3 hours" },
    { name: "PTE", full: "Pearson Test of English Academic", desc: "A computer-based English test with fast results (within 48 hours). Accepted by universities and immigration authorities across 90+ countries.", target: "Score 58 – 79+", duration: "2 hrs 15 mins" },
    { name: "GRE", full: "Graduate Record Examinations", desc: "Required by most top graduate programmes worldwide. Tests verbal reasoning, quantitative reasoning and analytical writing.", target: "Score 310 – 330+", duration: "3 hrs 45 mins" },
    { name: "GMAT", full: "Graduate Management Admission Test", desc: "The standard test for MBA and business school admissions globally. Tests data insights, quantitative and verbal reasoning.", target: "Score 650 – 730+", duration: "2 hrs 15 mins" },
    { name: "SAT / ACT", full: "US Undergraduate Admissions Tests", desc: "Required for undergraduate admissions at most US universities. SAT tests math and evidence-based reading; ACT tests English, math, reading and science.", target: "SAT 1200+ / ACT 27+", duration: "3 – 3.5 hours" },
];

const faqs = [
    { q: "How long does it take to prepare for IELTS?", a: "Most students need 4–12 weeks of dedicated preparation depending on their current level. Our structured programmes are designed to show measurable improvement within 8 weeks." },
    { q: "Can I take the test online?", a: "Yes. IELTS, PTE, TOEFL and GRE all offer online at-home testing options. We help you set up your test environment and practice under real exam conditions." },
    { q: "What is the average score improvement with your coaching?", a: "Students on our programme typically improve by 1.0–1.5 IELTS bands in 8 weeks, or 20–40 points on TOEFL/GRE. Results depend on starting level and consistency." },
    { q: "Do you offer group or one-to-one classes?", a: "Both. Group classes (max 8 students) are cost-effective and collaborative; private one-to-one sessions offer maximum personalisation and flexible scheduling." },
];

const TestPreparation = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page test-prep-page">
            <PageTitle
                title="Test Preparation"
                currentPage="Test Preparation"
                backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Score High, Study Anywhere</span>
                        <h2>Expert Test Preparation Coaching</h2>
                        <p>Standardised tests are often the first major hurdle in your study abroad journey. Our certified trainers provide personalised coaching - combining strategy, time management and intensive practice - to help you hit your target score on the first attempt.</p>
                        <button onClick={handleOpenModal} className="theme-btn">ENROL IN A COURSE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop"
                            alt="Test Preparation"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Tests We Cover */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Tests We Cover</span>
                        <h2>Examinations We Prepare You For</h2>
                    </div>
                    <div className="row g-4">
                        {tests.map((t, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="program-card">
                                    <div className="program-card-top">
                                        <div className="prog-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                                        <span className="prog-badge">{t.name}</span>
                                    </div>
                                    <h4>{t.full}</h4>
                                    <p>{t.desc}</p>
                                    <ul className="prog-highlights">
                                        <li><i className="fa-solid fa-arrow-right"></i><span>Target: {t.target}</span></li>
                                        <li><i className="fa-solid fa-arrow-right"></i><span>Duration: {t.duration}</span></li>
                                    </ul>
                                    <button onClick={handleOpenModal} className="prog-cta-btn">Enrol Now <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Train With Us */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Our Advantage</span>
                        <h2>Why Train With WanderPassage?</h2>
                    </div>
                    <div className="edu-stats-row">
                        {[
                            { icon: "fa-person-chalkboard", value: "Certified", label: "Expert Tutors" },
                            { icon: "fa-book-open", value: "Exclusive", label: "Study Materials" },
                            { icon: "fa-laptop", value: "Weekly", label: "Mock Tests" },
                            { icon: "fa-user-clock", value: "Flexible", label: "Batch Times" },
                        ].map((s, i) => (
                            <div key={i} className="edu-stat-pill">
                                <div className="pill-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                                <div className="pill-text">
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="custom-table-wrapper mt-4">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Programme</th><th>Duration</th><th>Format</th><th>Includes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>IELTS Intensive</td><td>8 Weeks</td><td>Group (max 8) or 1-to-1</td><td>Mock tests, speaking sessions, band prediction report</td></tr>
                                    <tr><td>TOEFL Complete</td><td>6 Weeks</td><td>Online or In-person</td><td>Section-by-section coaching, timed practice sets</td></tr>
                                    <tr><td>PTE Fast-Track</td><td>4 Weeks</td><td>Online</td><td>AI-scored mock tests, templates, PTE scoring logic</td></tr>
                                    <tr><td>GRE / GMAT Prep</td><td>10 Weeks</td><td>1-to-1</td><td>Quant strategy, verbal reasoning, official test packs</td></tr>
                                    <tr><td>Weekend Bootcamp</td><td>2 Weekends</td><td>Group</td><td>Crash revision for test-takers needing a final boost</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Got Questions?</span>
                        <h2>Test Prep FAQs</h2>
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
                            <h2>Average Score Improvement: <br /> +1.5 Bands in 8 Weeks</h2>
                            <p>Join our results-driven coaching programme and hit your target score on the first attempt. Enrol today and get a free diagnostic assessment worth ₦15,000.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">ENROL NOW</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1467&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestPreparation;
