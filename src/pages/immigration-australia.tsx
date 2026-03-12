import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";
import { useState } from "react";

interface Program {
    icon: string;
    name: string;
    badge: string;
    desc: string;
    highlights: string[];
}

interface PointsFactor {
    factor: string;
    max: number;
}

interface FAQ {
    q: string;
    a: string;
}

const programs: Program[] = [
    {
        icon: "fa-star",
        name: "Skilled Independent Visa (Subclass 189)",
        badge: "No Sponsor Needed",
        desc: "A popular choice for skilled workers who do not have sponsorship from an employer, territory, or state government. This visa is based on a points system and allows you to live and work permanently anywhere in Australia.",
        highlights: ["Points-tested stream", "No employer/state sponsor required", "Live & work anywhere in Australia", "Pathway to Australian citizenship"],
    },
    {
        icon: "fa-map-location-dot",
        name: "Skilled Nominated Visa (Subclass 190)",
        badge: "State Nominated",
        desc: "Designed for skilled workers who are nominated by an Australian state or territory government. This visa allows individuals to live and work in a specific state or territory, with a state nomination adding 5 points to your score.",
        highlights: ["Nominated by Australian state/territory", "Live & work in nominated state", "+5 points for state nomination", "Permanent residence pathway"],
    },
    {
        icon: "fa-tree-city",
        name: "Skilled Regional Visa (Subclass 491)",
        badge: "Regional Focus",
        desc: "Designed to encourage skilled workers to live and work in regional areas of Australia. This visa allows individuals to live and work in a designated regional area for up to five years, with a pathway to permanent residence.",
        highlights: ["Regional & remote areas of Australia", "Up to 5 years validity", "+15 points for regional sponsorship", "PR pathway via Subclass 191"],
    },
];

const pointsGrid: PointsFactor[] = [
    { factor: "Age", max: 30 },
    { factor: "Education", max: 20 },
    { factor: "Australian Work Experience", max: 20 },
    { factor: "English Language Proficiency", max: 20 },
    { factor: "Overseas Work Experience", max: 15 },
    { factor: "Relative or Regional Sponsorship (Subclass 491)", max: 15 },
    { factor: "If Single / Unmarried", max: 10 },
    { factor: "Studied in Australia", max: 10 },
    { factor: "Spouse Skill Assessment (with English + Education)", max: 10 },
    { factor: "State Sponsorship (Subclass 190)", max: 5 },
    { factor: "Studied in Regional Australia", max: 5 },
    { factor: "If Spouse is Australian Citizen or PR Holder", max: 5 },
    { factor: "Spouse Skill Assessment", max: 5 },
    { factor: "Credentialed Community Language Test (CCL)", max: 5 },
];

const AustraliaImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs: FAQ[] = [
        { q: "What is the minimum points score required for Australian PR?", a: "You need a minimum of 65 points to be eligible to submit an Expression of Interest (EOI) through SkillSelect. However, higher-scoring candidates are invited first, and recent invitation rounds have typically required 80–100+ points depending on the occupation." },
        { q: "How long does the Australian PR process take?", a: "Processing times vary by visa subclass. Subclass 189 and 190 applications are typically processed within 6–12 months from the date the visa application is lodged (after receiving an invitation to apply)." },
        { q: "Can I include my family in my PR application?", a: "Yes. You can include your spouse or de facto partner and dependent children in your PR application. All family members included will also receive permanent residency." },
        { q: "What is SkillSelect?", a: "SkillSelect is Australia's online immigration management system where skilled migrants submit an Expression of Interest (EOI) and are invited to apply for a visa based on their points score. Invitation rounds are held regularly." },
        { q: "Do I need a job offer for Subclass 189?", a: "No. The Skilled Independent Visa (Subclass 189) does not require a job offer, employer sponsorship, or state nomination. It is purely points-based." },
        { q: "What English test do I need?", a: "IELTS (Academic or General), TOEFL iBT, PTE Academic, Cambridge C1 Advanced, or OET are all accepted. A score equivalent to 'Competent English' or above is required, with higher scores earning additional points." },
    ];

    const overviewItems = [
        { label: "Currency", value: "Australian Dollar (AUD)", icon: "fa-dollar-sign" },
        { label: "Population", value: "~9.76 Lakh (metro avg)", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Continent", value: "Australia / Oceania", icon: "fa-earth-oceania" },
        { label: "Wage (Min)", value: "AUD 24.10/hr", icon: "fa-wallet" },
        { label: "GDP Per Capita", value: "AUD 61,340", icon: "fa-chart-line" },
        { label: "Employment Rate", value: "64.40%", icon: "fa-briefcase" },
        { label: "Land Area", value: "7,692,020 km²", icon: "fa-map" },
    ];

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

            {/* Consultant Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Certified & Trusted Experts</span>
                        <h2>Australia Immigration Consultants</h2>
                        <p>Our MARA-registered and certified immigration professionals have helped thousands of families achieve their Australian PR dream. From Subclass 189 to regional pathways — we guide you through every step with precision and care.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "8,000+", label: "Successful Visas" },
                            { value: "97%", label: "Approval Rate" },
                            { value: "12+", label: "Years of Experience" },
                            { value: "65+", label: "Points Minimum" },
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

            {/* 10 Reasons to Migrate */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Why Choose Australia</span>
                        <h2>10 Reasons to Migrate to Australia</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", icon: "fa-heart", title: "High Quality of Life", desc: "Australia offers a top-tier quality of life with excellent healthcare, clean environment, and services that consistently rank among the world's best." },
                            { id: "02", icon: "fa-id-card", title: "Pathway to PR & Citizenship", desc: "Clear and accessible routes to permanent residency for skilled migrants, with a pathway to becoming an Australian citizen after just 4 years." },
                            { id: "03", icon: "fa-hospital", title: "Universal Healthcare (Medicare)", desc: "One of the best healthcare systems globally with subsidised medical services via Medicare, providing affordable healthcare for all residents." },
                            { id: "04", icon: "fa-shield-halved", title: "Safe & Stable Environment", desc: "Low crime rates and political stability create a secure living environment, making Australia one of the safest countries in the world." },
                            { id: "05", icon: "fa-briefcase", title: "Strong Economy & Job Market", desc: "A stable economy with ample job opportunities across industries — from mining and construction to tech, healthcare, and finance." },
                            { id: "06", icon: "fa-mountain-sun", title: "Natural Beauty & Outdoor Life", desc: "Stunning landscapes from the Great Barrier Reef to the Outback — outdoor experiences, diverse wildlife, and beautiful year-round scenery." },
                            { id: "07", icon: "fa-graduation-cap", title: "World-Class Education", desc: "Australia is home to 7 of the world's top 100 universities, with consistently high academic standards and globally valued degrees." },
                            { id: "08", icon: "fa-sun", title: "Excellent Climate", desc: "Enjoy a pleasant, sunny climate year-round in many parts of Australia — ideal for outdoor living, sports, and a healthy lifestyle." },
                            { id: "09", icon: "fa-earth-oceania", title: "Cultural Diversity & Inclusion", desc: "A proudly multicultural nation that welcomes people from over 200 countries, celebrating diversity and promoting social inclusion." },
                            { id: "10", icon: "fa-user-tie", title: "High Skilled Worker Demand", desc: "Australia faces ongoing demand for skilled professionals across healthcare, engineering, IT, construction, trades, and education sectors." },
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

            {/* Eligibility Criteria */}
            <section className="eligibility-section section-padding bg-dark" style={{ borderRadius: '40px 40px 0 0' }}>
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title" style={{ color: '#aaa' }}>Do You Qualify?</span>
                        <h2 className="text-white">Eligibility Criteria</h2>
                        <p className="text-white-50" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>Australia uses a points-based system to assess skilled migrant applications. You need at least 65 points to submit an EOI — higher scores get priority invitations.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                num: "01",
                                title: "Basic Eligibility Factors",
                                icon: "fa-person",
                                points: ["Age (max 30 points)", "Education Level (max 20 points)", "English Language Proficiency (max 20 points)", "Skilled Employment Experience"],
                                max: "Core Assessment Factors"
                            },
                            {
                                num: "02",
                                title: "Spouse / Partner Factors",
                                icon: "fa-people-arrows",
                                points: ["Spouse's Education Assessment", "Spouse's Language Proficiency", "Spouse's Work Experience", "If Single / Unmarried (+10 pts)"],
                                max: "Up to 10 Points"
                            },
                            {
                                num: "03",
                                title: "Additional Bonus Points",
                                icon: "fa-star",
                                points: ["Australian Study Experience (+10 pts)", "Regional Study / Work (+5–15 pts)", "State Nomination / Sponsorship (+5–15 pts)", "Community Language Proficiency (+5 pts)"],
                                max: "Up to 25 Bonus Points"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="eligibility-card">
                                    <div className="elig-header">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                        <span className="elig-num">{item.num}</span>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <ul>
                                        {item.points.map((p, pi) => (
                                            <li key={pi}><i className="fa-solid fa-circle-check"></i><span>{p}</span></li>
                                        ))}
                                    </ul>
                                    <div className="elig-max">{item.max}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleOpenModal} className="theme-btn">CHECK YOUR ELIGIBILITY</button>
                    </div>
                </div>
            </section>

            {/* Points Grid — Standalone Section */}
            <section className="points-grid-section section-padding" style={{ borderRadius: '0 0 40px 40px', background: '#f8faff' }}>
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Score Breakdown</span>
                        <h2>Full Points Grid</h2>
                        <p style={{ maxWidth: '580px', margin: '0 auto 50px', color: '#666' }}>The Australian points test is scored across multiple factors. A minimum of 65 points is required to lodge an EOI — the higher your score, the sooner you'll receive an invitation.</p>
                    </div>
                    <div className="points-grid-wrapper">
                        <div className="row g-3">
                            {pointsGrid.map((row, idx) => {
                                const pct = Math.round((row.max / 30) * 100);
                                const tier = row.max >= 20 ? 'high' : row.max >= 10 ? 'mid' : 'low';
                                return (
                                    <div key={idx} className="col-lg-6">
                                        <div className={`points-row-card tier-${tier}`}>
                                            <div className="points-row-info">
                                                <span className="points-factor">{row.factor}</span>
                                                <span className={`points-badge tier-${tier}`}>{row.max} pts</span>
                                            </div>
                                            <div className="points-bar-track">
                                                <div className="points-bar-fill" style={{ width: `${pct}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="points-legend">
                            <span className="legend-item high"><span className="dot"></span> High Impact (20–30 pts)</span>
                            <span className="legend-item mid"><span className="dot"></span> Medium Impact (10–15 pts)</span>
                            <span className="legend-item low"><span className="dot"></span> Bonus Points (5 pts)</span>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={handleOpenModal} className="theme-btn">CALCULATE MY POINTS SCORE</button>
                    </div>
                </div>
            </section>


            {/* Major Programs */}
            <section className="programs-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Your Immigration Pathway</span>
                        <h2>Major Visa Programs</h2>
                        <p style={{ maxWidth: '620px', margin: '0 auto 50px', color: '#666' }}>Australia's skilled migration program offers three primary pathways. Our experts will assess your profile and identify which visa subclass maximises your chances of approval.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {programs.map((prog, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="program-card">
                                    <div className="program-card-top">
                                        <div className="prog-icon">
                                            <i className={`fa-solid ${prog.icon}`}></i>
                                        </div>
                                        <span className="prog-badge">{prog.badge}</span>
                                    </div>
                                    <h4>{prog.name}</h4>
                                    <p>{prog.desc}</p>
                                    <ul className="prog-highlights">
                                        {prog.highlights.map((h, hi) => (
                                            <li key={hi}><i className="fa-solid fa-arrow-right"></i><span>{h}</span></li>
                                        ))}
                                    </ul>
                                    <button onClick={handleOpenModal} className="prog-cta-btn">
                                        Learn More <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Interstitial */}
            <div className="container">
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Your Australian PR Dream — We Make It Reality, Step by Step</h3>
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
                            <h2>Start Your Australian Journey <br /> With Confidence</h2>
                            <p>Let our certified immigration consultants calculate your points score and identify your ideal visa pathway. Book a free 30-minute session and take your first step toward your new life Down Under.</p>
                            <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AustraliaImmigration;
