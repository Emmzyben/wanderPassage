import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";
import { useState } from "react";

interface PointsFactor {
    factor: string;
    max: number;
}

interface FAQ {
    q: string;
    a: string;
}

const ukPointsGrid: PointsFactor[] = [
    { factor: "Job offer from an approved sponsor", max: 20 },
    { factor: "Job at an appropriate skill level (RQF Level 3+)", max: 20 },
    { factor: "Salary of at least £26,200 per year", max: 20 },
    { factor: "Job in a shortage occupation", max: 20 },
    { factor: "English language proficiency", max: 10 },
];

const UkImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs: FAQ[] = [
        { q: "What is the minimum salary for a UK Skilled Worker Visa?", a: "The minimum salary threshold is £26,200 per year or £10.75 per hour (whichever is higher). However, certain roles on the Shortage Occupation List may have a lower threshold of £20,960." },
        { q: "How long is the UK Skilled Worker Visa valid?", a: "The visa is granted for up to 5 years. After 5 continuous years in the UK on this visa, you may be eligible to apply for Indefinite Leave to Remain (ILR), also known as settled status." },
        { q: "Can I bring my family to the UK?", a: "Yes. You can bring your spouse or partner and children under 18 as dependants. They will be permitted to live, work, and study in the UK for the duration of your visa." },
        { q: "What is a Certificate of Sponsorship (CoS)?", a: "A CoS is a unique reference number assigned to you by your UK employer (who must hold a valid Sponsor Licence). It contains details about your job, salary, and start date, and is required as part of your visa application." },
        { q: "Do I need to take an English language test?", a: "Yes, in most cases. You must demonstrate English proficiency at B1 level or above on the CEFR scale. Accepted tests include IELTS, TOEFL, and others. Citizens of majority English-speaking countries or those with degrees taught in English may be exempt." },
        { q: "Can I change jobs on a Skilled Worker Visa?", a: "Yes, but you must get a new Certificate of Sponsorship from your new employer and in most cases update your visa. You can also take on additional jobs (with restrictions) or do voluntary work." },
    ];

    const overviewItems = [
        { label: "Currency", value: "£ Sterling Pound (GBP)", icon: "fa-sterling-sign" },
        { label: "Population", value: "69 Million", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Continent", value: "Europe", icon: "fa-earth-europe" },
        { label: "Wage (Min)", value: "£8.60 GBP/hr", icon: "fa-wallet" },
        { label: "GDP Per Capita", value: "£33,271 GBP", icon: "fa-chart-line" },
        { label: "Employment Rate", value: "74.50%", icon: "fa-briefcase" },
        { label: "Land Area", value: "244,376 km²", icon: "fa-map" },
    ];

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

            {/* Consultant Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">UK-Specialist Immigration Experts</span>
                        <h2>UK Skilled Worker Visa Consultants</h2>
                        <p>Our certified UK immigration consultants have successfully guided thousands of skilled professionals to work and settle in the United Kingdom. From securing a sponsor to submitting your application, we navigate every step for you.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "70", label: "Points Required" },
                            { value: "5 Yrs", label: "Pathway to ILR" },
                            { value: "8+", label: "Weeks Processing" },
                            { value: "£26.2K", label: "Min. Salary" },
                        ].map((s, i) => (
                            <div key={i} className="intro-stat-item">
                                <h3>{s.value}</h3>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <OverviewBar items={overviewItems} />

            {/* 8 Reasons Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Why Apply</span>
                        <h2>Reasons to Apply for a UK Skilled Worker Visa</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", icon: "fa-briefcase", title: "Work Flexibility", desc: "Work full-time, change jobs, and even take additional jobs (with proper permissions) — building a dynamic and flexible career in the UK." },
                            { id: "02", icon: "fa-id-card", title: "Pathway to PR & Citizenship", desc: "Apply for Indefinite Leave to Remain (settled status) after 5 years on the visa, with a clear route to British citizenship." },
                            { id: "03", icon: "fa-hospital", title: "Access to Healthcare & Education", desc: "Access the National Health Service (NHS) for you and your dependants, and enrol your children in UK schools for world-class education." },
                            { id: "04", icon: "fa-landmark", title: "Rich Cultural Experience", desc: "Immerse yourself in one of the world's most diverse and historically rich societies — a truly global, cosmopolitan lifestyle awaits." },
                            { id: "05", icon: "fa-shield-halved", title: "Job Security", desc: "Skilled professionals are in high demand across the UK — leading to excellent employment stability, competitive salaries, and career growth." },
                            { id: "06", icon: "fa-rocket", title: "Fast-Track Processing", desc: "The UK Skilled Worker Visa has a well-structured, efficient application process with priority services available for faster decisions." },
                            { id: "07", icon: "fa-chart-line", title: "Broaden Your Career", desc: "Working in the UK exposes you to international work culture, world-leading companies, and opportunities for accelerated career growth." },
                            { id: "08", icon: "fa-people-group", title: "Bring Your Family", desc: "Bring your spouse/partner and children to the UK as dependants — they can work, study, and build their own UK lives alongside you." },
                        ].map((reason, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6">
                                <div className="immig-reason-card">
                                    <div className="reason-icon">
                                        <i className={`fa-solid ${reason.icon}`}></i>
                                    </div>
                                    <div className="reason-num">{reason.id}</div>
                                    <h5>{reason.title}</h5>
                                    <p>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="application-process-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Step by Step</span>
                        <h2>Application Process</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 50px', color: '#666' }}>The UK Skilled Worker Visa follows a clear six-step process. Our experts handle the complexity, so you can focus on your new career.</p>
                    </div>
                    <div className="process-steps-wrapper">
                        {[
                            { num: "01", icon: "fa-clipboard-check", title: "Check Eligibility", desc: "Ensure you meet the eligibility criteria — job offer, skill level, salary threshold, English proficiency, and financial requirements." },
                            { num: "02", icon: "fa-handshake", title: "Secure a Job Offer", desc: "Obtain a confirmed job offer from a UK employer who holds a valid Sponsor Licence to hire overseas workers." },
                            { num: "03", icon: "fa-certificate", title: "Certificate of Sponsorship (CoS)", desc: "Your employer assigns you a unique CoS reference number confirming your role, salary, and employment start date." },
                            { num: "04", icon: "fa-laptop", title: "Online Application", desc: "Submit your visa application online through the UK Visas and Immigration (UKVI) portal with all required supporting documents." },
                            { num: "05", icon: "fa-fingerprint", title: "Biometric Appointment", desc: "Attend a biometric enrolment appointment at your nearest Visa Application Centre to provide fingerprints and a photo." },
                            { num: "06", icon: "fa-flag-checkered", title: "Visa Decision", desc: "Wait for a decision — typically 3 weeks within the UK or 8 weeks outside. Priority and super-priority services available." },
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

            {/* Eligibility Criteria */}
            <section className="eligibility-section section-padding bg-dark" style={{ borderRadius: '40px 40px 0 0' }}>
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title" style={{ color: '#aaa' }}>Do You Qualify?</span>
                        <h2 className="text-white">Eligibility Criteria</h2>
                        <p className="text-white-50" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>To be eligible for the UK Skilled Worker Visa, you must score at least 70 points across the mandatory and tradeable criteria. Here are the six core requirements:</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { num: "01", icon: "fa-handshake", title: "Job Offer", desc: "Secure a job offer from a UK employer with a valid Sponsor Licence — this is the foundation of your application." },
                            { num: "02", icon: "fa-sterling-sign", title: "Salary Requirement", desc: "The offered salary must meet at least £26,200 per year or £10.75/hr. Some shortage roles may have different thresholds." },
                            { num: "03", icon: "fa-certificate", title: "Certificate of Sponsorship", desc: "You need a valid CoS from your employer detailing your role, salary, and start date — obtained via UKVI's sponsorship system." },
                            { num: "04", icon: "fa-graduation-cap", title: "Skill Level (RQF 3+)", desc: "The job must be at RQF Level 3 or above — this is equivalent to A-Levels or higher. Most professional roles qualify." },
                            { num: "05", icon: "fa-comments", title: "English Proficiency", desc: "You must prove you can speak, read, write, and understand English to the required B1 CEFR level or above." },
                            { num: "06", icon: "fa-piggy-bank", title: "Financial Requirement", desc: "You must have at least £1,270 in your bank account (held for 28 days) unless your sponsor covers this requirement." },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="eligibility-card">
                                    <div className="elig-header">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                        <span className="elig-num">{item.num}</span>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.65' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleOpenModal} className="theme-btn">CHECK MY ELIGIBILITY</button>
                    </div>
                </div>
            </section>

            {/* Points System Section */}
            <section className="points-grid-section section-padding" style={{ borderRadius: '0 0 40px 40px', background: '#f8faff' }}>
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Points-Based System</span>
                        <h2>UK Skilled Worker Visa Points</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 50px', color: '#666' }}>The UK's points-based immigration system requires a total of <strong>70 points</strong> to qualify. Points are awarded across five key factors — all are mandatory to achieve the minimum threshold.</p>
                    </div>

                    {/* 70 Points Target Banner */}
                    <div className="uk-points-target-banner">
                        <div className="target-left">
                            <i className="fa-solid fa-bullseye"></i>
                            <div>
                                <strong>70 Points Required</strong>
                                <span>Minimum threshold to qualify for the UK Skilled Worker Visa</span>
                            </div>
                        </div>
                        <button onClick={handleOpenModal} className="theme-btn">CHECK MY SCORE</button>
                    </div>

                    <div className="points-grid-wrapper mt-4">
                        <div className="row g-3">
                            {ukPointsGrid.map((row, idx) => {
                                const pct = Math.round((row.max / 20) * 100);
                                return (
                                    <div key={idx} className="col-lg-6">
                                        <div className="points-row-card tier-high">
                                            <div className="points-row-info">
                                                <span className="points-factor">{row.factor}</span>
                                                <span className="points-badge tier-high">{row.max} pts</span>
                                            </div>
                                            <div className="points-bar-track">
                                                <div className="points-bar-fill" style={{ width: `${pct}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="uk-points-note">
                            <i className="fa-solid fa-circle-info"></i>
                            <span>All points above are <strong>mandatory</strong>. Shortage occupation roles and salary trade-offs may allow flexibility between certain criteria.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Interstitial */}
            <div className="container">
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=1338&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Your UK Career Dream — We Make It a Reality, Step by Step</h3>
                        <button onClick={handleOpenModal} className="theme-btn mt-4">GET FREE CONSULTATION</button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="faq-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Got Questions?</span>
                        <h2>Quick Answers to Common Queries</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
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
                                            <div className="faq-answer">
                                                <p>{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your UK Career Starts <br /> Right Here</h2>
                            <p>Let our certified UK immigration specialists handle your Skilled Worker Visa end-to-end — from finding the right sponsor to your visa approval. Book your FREE 30-minute session today.</p>
                            <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UkImmigration;
