import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";
import { useState } from "react";

interface FAQ {
    q: string;
    a: string;
}

interface Program {
    icon: string;
    name: string;
    badge: string;
    desc: string;
    highlights: string[];
}

const faqs: FAQ[] = [
    { q: "Which is the popular program for PR visa?", a: "Express Entry is the most popular pathway for Canadian PR. It manages applications for the Federal Skilled Worker (FSW), Federal Skilled Trades (FST), and Canadian Experience Class (CEC) programs, using the Comprehensive Ranking System (CRS) to rank candidates." },
    { q: "How long does the Express Entry process take?", a: "Most Express Entry applications are processed within 6 months of receiving an Invitation to Apply (ITA). In many cases, processing can be completed in as little as 60–90 days from the date of submission." },
    { q: "Can I include my family in my PR application?", a: "Yes. You can include your spouse or common-law partner and dependent children in your PR application. Their details are included in your profile and they will receive PR status along with you if your application is approved." },
    { q: "What is the Provincial Nominee Program (PNP)?", a: "The PNP allows Canadian provinces and territories to nominate candidates who meet their specific labour market needs. A provincial nomination adds 600 CRS points to your Express Entry profile, virtually guaranteeing an ITA." },
    { q: "What is the minimum CRS score required for PR?", a: "There is no fixed minimum CRS score. The cutoff varies with each draw. Recent draws have ranged from approximately 470 to 540+ points. Scores depend on draw category, demand, and applicant pool composition." },
    { q: "Can I apply for PR without work experience?", a: "Some streams allow applications without Canadian work experience — for example, the Federal Skilled Worker Program requires at least 1 year of skilled work experience (Canadian or foreign). However, Canadian experience significantly boosts your CRS score." },
    { q: "How much funds do I require for Canada PR Visa?", a: "Settlement funds required depend on family size: for 1 person CAD $13,757; for 2 people CAD $17,127; for 3 people CAD $21,055; for 4 people CAD $25,564 and so on. Funds are not required if you have a valid Canadian job offer." },
    { q: "Is proof of funds mandatory for a Canada PR visa, or are there exemptions?", a: "Proof of funds is mandatory for most Express Entry streams. However, if you currently hold a valid job offer in Canada or are currently working in Canada and eligible under the Canadian Experience Class (CEC), the proof of funds requirement may be waived." },
];

const programs: Program[] = [
    {
        icon: "fa-rocket",
        name: "Express Entry Program",
        badge: "Most Popular",
        desc: "A fast-track pathway for skilled workers to gain permanent residency in Canada, focusing on education, work experience, and language skills. Draws are conducted regularly — often every 2 weeks.",
        highlights: ["Federal Skilled Worker (FSW)", "Federal Skilled Trades (FST)", "Canadian Experience Class (CEC)"],
    },
    {
        icon: "fa-map-location-dot",
        name: "Provincial Nominee Program (PNP)",
        badge: "Province-Specific",
        desc: "Provinces nominate candidates based on their specific labour market needs, offering a tailored immigration pathway for skilled workers. A provincial nomination adds 600 CRS points.",
        highlights: ["Ontario Immigrant Nominee Program", "BC PNP", "Alberta Advantage Immigration"],
    },
    {
        icon: "fa-water",
        name: "Atlantic Immigration Program (AIP)",
        badge: "Atlantic Canada",
        desc: "Designed to attract skilled workers and graduates to Canada's Atlantic provinces — Nova Scotia, New Brunswick, PEI, and Newfoundland — to promote regional economic growth.",
        highlights: ["Atlantic High-Skilled Program", "Atlantic International Graduate Program", "Atlantic Intermediate-Skilled Program"],
    },
    {
        icon: "fa-wheat-awn",
        name: "SINP Program",
        badge: "Saskatchewan",
        desc: "The Saskatchewan Immigrant Nominee Program (SINP) offers pathways for skilled workers and entrepreneurs to gain Canadian permanent residency by settling in Saskatchewan.",
        highlights: ["International Skilled Worker", "Entrepreneur", "Farm Owners & Farm Managers"],
    },
    {
        icon: "fa-snowflake",
        name: "Quebec Skilled Worker Program (QSWP)",
        badge: "Quebec",
        desc: "A unique immigration program managed by Quebec, targeting skilled workers who plan to settle and contribute to the province's economy. Quebec manages its own immigration system.",
        highlights: ["Arrima Expression of Interest", "Quebec Experience Program (PEQ)", "Quebec Business Programs"],
    },
    {
        icon: "fa-calculator",
        name: "CRS Point Calculator",
        badge: "Tool",
        desc: "The Saskatchewan International Skilled Worker Program targets skilled workers with in-demand occupations, providing a pathway to settle in the province of Saskatchewan.",
        highlights: ["Age, Education, Language Points", "Spouse / Partner Points", "Skills Transferability Factors"],
    },
];

const CanadaImmigration = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const overviewItems = [
        { label: "Currency", value: "Canadian Dollar (CAD)", icon: "fa-dollar-sign" },
        { label: "Population", value: "41.3 Million", icon: "fa-users" },
        { label: "Languages", value: "English & French", icon: "fa-language" },
        { label: "Continent", value: "North America", icon: "fa-earth-americas" },
        { label: "Wage (Min)", value: "$17.30 CAD/hr", icon: "fa-wallet" },
        { label: "GDP Per Capita", value: "$45,288 CAD", icon: "fa-chart-line" },
        { label: "Employment Rate", value: "62.40%", icon: "fa-briefcase" },
        { label: "Land Area", value: "9.985 million km²", icon: "fa-map" },
    ];

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

            {/* Consultant Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Trusted Experts Since Day One</span>
                        <h2>Best Canada Immigration Consultants</h2>
                        <p>Our certified immigration professionals have helped thousands of families build their Canadian dream. From Express Entry to PNP — we guide you through every step of the journey with precision and care.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "10,000+", label: "Successful Applications" },
                            { value: "95%", label: "Approval Rate" },
                            { value: "15+", label: "Years of Experience" },
                            { value: "50+", label: "Expert Consultants" },
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
                        <span className="sub-title">Why Choose Canada</span>
                        <h2>10 Reasons to Migrate to Canada</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", icon: "fa-heart", title: "High Quality of Life", desc: "Excellent healthcare, education, and overall well-being with a clean, safe environment that consistently ranks among the world's best." },
                            { id: "02", icon: "fa-id-card", title: "Pathway to PR and Citizenship", desc: "Clear, structured pathways to Permanent Residency and Canadian Citizenship — one of the most respected passports in the world." },
                            { id: "03", icon: "fa-hospital", title: "Universal Healthcare", desc: "Access to free, publicly funded healthcare for all permanent residents and citizens — one of Canada's most celebrated social achievements." },
                            { id: "04", icon: "fa-shield-halved", title: "Safe & Stable Environment", desc: "Low crime rates and a peaceful, politically stable country with a strong democratic tradition and robust rule of law." },
                            { id: "05", icon: "fa-briefcase", title: "Strong Economy & Job Market", desc: "A stable economy with abundant job prospects across technology, healthcare, engineering, finance, trades, and diverse industries." },
                            { id: "06", icon: "fa-mountain-sun", title: "Natural Beauty & Outdoor Life", desc: "From the Rockies to Niagara Falls — stunning landscapes and access to a wide range of outdoor activities year-round." },
                            { id: "07", icon: "fa-graduation-cap", title: "High Standard of Education", desc: "World-class schools and universities with affordable tuition, making it one of the best destinations for family education." },
                            { id: "08", icon: "fa-clock", title: "Excellent Work-Life Balance", desc: "Flexible work hours, paid vacations, parental leave, and a deeply ingrained culture that values a healthy work-life environment." },
                            { id: "09", icon: "fa-earth-americas", title: "Cultural Diversity & Inclusion", desc: "A proudly multicultural society that embraces diversity — over 200 languages are spoken across Canada's welcoming communities." },
                            { id: "10", icon: "fa-hand-holding-heart", title: "Social Benefits & Welfare", desc: "Comprehensive social safety nets including Employment Insurance (EI), Canada Pension Plan (CPP), housing assistance and more." },
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
                        <p className="text-white-50" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>The Comprehensive Ranking System (CRS) scores candidates across four key factor groups. The higher your score, the better your chances of receiving an Invitation to Apply (ITA).</p>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                num: "01",
                                title: "Core Human Capital Factors",
                                icon: "fa-person",
                                points: ["Age", "Education Level", "Language Proficiency (IELTS/CELPIP/TEF)", "Canadian Work Experience"],
                                max: "Up to 500 CRS Points"
                            },
                            {
                                num: "02",
                                title: "Spouse / Common-Law Partner Factors",
                                icon: "fa-people-arrows",
                                points: ["Spouse's Education Level", "Spouse's Language Proficiency", "Spouse's Canadian Work Experience"],
                                max: "Up to 40 CRS Points"
                            },
                            {
                                num: "03",
                                title: "Skills Transferability Factors",
                                icon: "fa-arrows-rotate",
                                points: ["Education + Language Score", "Education + Canadian Work Exp.", "Foreign Work Exp. + Language", "Canadian Trade Certificate + Language"],
                                max: "Up to 100 CRS Points"
                            },
                            {
                                num: "04",
                                title: "Additional Points",
                                icon: "fa-star",
                                points: ["French Language Proficiency", "Siblings in Canada", "Canadian Study Experience", "LMIA Job Offer from Canada", "Provincial Nomination (+600 pts!)"],
                                max: "Up to 600 CRS Points"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6">
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

            {/* Major Programs */}
            <section className="programs-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Your Immigration Pathway</span>
                        <h2>Major Immigration Programs</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 50px', color: '#666' }}>Canada offers several well-structured immigration pathways. Our experts will assess your profile and recommend the one that maximises your chances of success.</p>
                    </div>
                    <div className="row g-4">
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
                                    <button onClick={handleOpenModal} className="prog-cta-btn">Learn More <i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Interstitial */}
            <div className="container">
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1511&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Your Canadian Dream — We Make It Reality, Step by Step</h3>
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
                            <h2>Start Your Canadian Journey <br /> With Confidence</h2>
                            <p>Let our certified immigration consultants handle your Express Entry, PNP, or any pathway to Canadian PR. Book a free 30-minute session and take your first step toward your new life in Canada.</p>
                            <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CanadaImmigration;
