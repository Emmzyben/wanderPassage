import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Uk = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "London", icon: "fa-city" },
        { label: "Currency", value: "GBP (£)", icon: "fa-sterling-sign" },
        { label: "Population", value: "69 Million", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Min Wage", value: "£8.60 - £13.15/hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept, Jan, May", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "£490 (Student)", icon: "fa-passport" },
    ];

    return (
        <div className="uk-page">
            <PageTitle
                title="Study in the UK"
                currentPage="UK"
                backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1530&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Why Choose the UK</span>
                        <h2>Top 5 Reasons to Study in the United Kingdom</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education", desc: "The UK is home to prestigious universities with globally recognized degrees - including 4 of the world's top 10 institutions." },
                            { id: "02", title: "Cultural Diversity", desc: "The UK offers a rich, multicultural experience, fostering global connections and broadening your personal and professional horizons." },
                            { id: "03", title: "Shorter Degree Programs", desc: "Undergraduate degrees typically last just three years, saving you valuable time and money compared to most other countries." },
                            { id: "04", title: "Post-Study Work Opportunities", desc: "The Graduate Route visa allows international graduates to live and work in the UK for up to two years after completing their degree." },
                            { id: "05", title: "Historic & Vibrant Cities", desc: "Students can explore the UK's rich history, culture, and world-famous city life - from London to Edinburgh and beyond." },
                        ].map((reason, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="reason-card-modern">
                                    <div className="count">{reason.id}</div>
                                    <h5>{reason.title}</h5>
                                    <p>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interstitial Image */}
            <div className="container">
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1465&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Heritage Meets World-Class Innovation</h3>
                    </div>
                </div>
            </div>

            {/* Geography & Demography Table */}
            <section className="geography-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Live</span>
                        <h2>Geography &amp; Demography</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Region</th>
                                        <th>Min / Max Temp</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Min Wages / hr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>London (Capital)</td>
                                        <td>England</td>
                                        <td>5.5°C / 30°C</td>
                                        <td>£1,200</td>
                                        <td>£8.60 – £13.15</td>
                                    </tr>
                                    <tr>
                                        <td>Birmingham</td>
                                        <td>England</td>
                                        <td>0.5°C / 20.5°C</td>
                                        <td>£1,000</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Liverpool</td>
                                        <td>England</td>
                                        <td>7.2°C / 13.2°C</td>
                                        <td>£850</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Manchester</td>
                                        <td>England</td>
                                        <td>4°C / 20°C</td>
                                        <td>£1,100</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Belfast</td>
                                        <td>Northern Ireland</td>
                                        <td>5.5°C / 15.5°C</td>
                                        <td>£1,100</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Edinburgh</td>
                                        <td>Scotland</td>
                                        <td>7°C / 19°C</td>
                                        <td>£1,000</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Glasgow</td>
                                        <td>Scotland</td>
                                        <td>8.38°C / 19°C</td>
                                        <td>£1,100</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                    <tr>
                                        <td>Cardiff</td>
                                        <td>Wales</td>
                                        <td>9.81°C / 21.02°C</td>
                                        <td>£1,000</td>
                                        <td>£8.60 – £11.44</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education System & Institutions */}
            <section className="institutions-section section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="info-grid-section">
                                <div className="stat-card-premium mb-4">
                                    <h4>165+</h4>
                                    <p>Higher Education Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Traditional, Metropolitan &amp; Specialist Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Sep, Jan &amp; May</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP &amp; LOR Required</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>MOI Acceptance: Yes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>UG: 3–4 Yrs | PG: 1–2 Yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities &amp; Colleges</h4>
                                    <span className="badge-style">World-Ranked Institutions</span>
                                </div>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Category</th>
                                                <th>Institutions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Top 10 Universities</td>
                                                <td>Oxford, Cambridge, Imperial, LSE, Sheffield, UCL, Edinburgh, King's College London, Manchester, Warwick</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Imperial, Cambridge, Oxford, Manchester, Sheffield, Edinburgh, Bristol, UCL, Southampton, Warwick</td>
                                            </tr>
                                            <tr>
                                                <td>Russell Group</td>
                                                <td>Birmingham, Bristol, Cambridge, Cardiff, KCL, Durham, Edinburgh, Exeter, Glasgow, Imperial, Liverpool, LSE, Manchester, Oxford, UCL, Sheffield, Warwick, York &amp; more</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Tuition</td>
                                                <td>University of Chester, Leeds Trinity, University of Cumbria, University of Sunderland, University of Bolton</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Courses Section */}
            <section className="top-courses-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Popular Disciplines</span>
                        <h2>Top Courses to Study in the UK</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-briefcase", title: "MBA", desc: "Ideal for future leaders with specializations in Finance, Marketing and International Business. Schools like LBS and Oxford offer strong global exposure." },
                            { icon: "fa-gear", title: "Engineering", desc: "Mechanical, Civil and Electrical Engineering are in high demand across UK industries and infrastructure projects." },
                            { icon: "fa-scale-balanced", title: "Law", desc: "The UK's legal system influences many nations, making it a top destination for LLB and LLM programs." },
                            { icon: "fa-robot", title: "Data Science & AI", desc: "With rising demand for tech professionals, UK universities offer modern curricula, cutting-edge research facilities and industry connections." },
                            { icon: "fa-heart-pulse", title: "Healthcare & Nursing", desc: "Strong practical training and excellent job opportunities in the NHS and private sector make this a top choice." },
                            { icon: "fa-building-columns", title: "Architecture & Design", desc: "UK universities excel in creative disciplines, with UCL and other leading institutions offering globally recognized programs." },
                        ].map((course, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="course-card">
                                    <div className="course-icon">
                                        <i className={`fa-solid ${course.icon}`}></i>
                                    </div>
                                    <h5>{course.title}</h5>
                                    <p>{course.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fees Section */}
            <section className="fees-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Tuition Planning</span>
                        <h2>Tuition Fee Ranges</h2>
                    </div>
                    <div className="custom-table-wrapper fees-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Degree</th>
                                        <th>Minimum Fees</th>
                                        <th>Maximum Fees</th>
                                        <th>Average Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bachelor's Degree</td>
                                        <td>£10,000 / yr</td>
                                        <td>£38,000 / yr</td>
                                        <td>£15,000 – £20,000 / yr</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>£11,000 / yr</td>
                                        <td>£32,000 / yr</td>
                                        <td>£15,000 – £22,000 / yr</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>£13,000 / yr</td>
                                        <td>£60,000 / yr</td>
                                        <td>£20,000 – £35,000 / yr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarships Section */}
            <section className="scholarships-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Fund Your Education</span>
                        <h2>UK Scholarships for International Students</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                name: "Chevening Scholarships",
                                eligibility: "Indian citizens with 2+ years work experience",
                                amount: "Full tuition, living expenses & airfare",
                                icon: "fa-crown",
                                color: "#1a3a6b",
                            },
                            {
                                name: "Commonwealth Scholarships",
                                eligibility: "Indian students applying for Master's / PhD with strong academics",
                                amount: "Tuition, airfare & stipend",
                                icon: "fa-globe",
                                color: "#145a32",
                            },
                            {
                                name: "Rhodes Scholarship",
                                eligibility: "Exceptional students with leadership &amp; academic distinction",
                                amount: "Full funding - one of the world's most prestigious awards",
                                icon: "fa-star",
                                color: "#7b241c",
                            },
                            {
                                name: "GREAT Scholarship",
                                eligibility: "Indian UG/PG students at partner UK universities",
                                amount: "£10,000 towards tuition fees",
                                icon: "fa-graduation-cap",
                                color: "#1a6bcc",
                            },
                            {
                                name: "Charles Wallace India Trust",
                                eligibility: "Indian citizens in arts, humanities &amp; social sciences",
                                amount: "Grants for short visits, fellowships &amp; residencies",
                                icon: "fa-palette",
                                color: "#6c3483",
                            },
                            {
                                name: "Inlaks Shivdasani Foundation",
                                eligibility: "Indian citizens below 30 with outstanding academics",
                                amount: "Up to USD 100,000",
                                icon: "fa-award",
                                color: "#935116",
                            },
                        ].map((s, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="scholarship-card uk-scholarship-card">
                                    <div className="scholarship-icon" style={{ background: s.color }}>
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <h5>{s.name}</h5>
                                    <div className="scholarship-meta">
                                        <span className="meta-item">
                                            <i className="fa-solid fa-user-check"></i>
                                            {s.eligibility}
                                        </span>
                                        <span className="meta-item amount">
                                            <i className="fa-solid fa-sterling-sign"></i>
                                            {s.amount}
                                        </span>
                                    </div>
                                    <button onClick={handleOpenModal} className="theme-btn scholarship-btn">Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="process-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Step by Step</span>
                        <h2>UK University Application Process</h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { step: "01", icon: "fa-magnifying-glass", title: "Research Courses & Universities", desc: "Start 12–18 months in advance. Shortlist universities based on course, ranking and location." },
                            { step: "02", icon: "fa-file-pen", title: "Take Required Tests", desc: "Prepare and sit for IELTS / TOEFL. Some courses may also need GMAT / GRE scores." },
                            { step: "03", icon: "fa-folder-open", title: "Prepare Documents", desc: "Draft a strong SOP, collect LORs, transcripts and ensure your passport is valid." },
                            { step: "04", icon: "fa-paper-plane", title: "Apply via UCAS (UG) or Directly (PG)", desc: "UCAS deadline: 31 January (most courses). October deadline for Oxbridge & Medicine." },
                            { step: "05", icon: "fa-envelope-open-text", title: "Receive & Accept Your Offer", desc: "Choose between a conditional or unconditional offer and confirm your place." },
                            { step: "06", icon: "fa-id-card", title: "Apply for Student Visa", desc: "After accepting your offer and securing your CAS from the university, apply for your Student Visa." },
                        ].map((step, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="process-card">
                                    <div className="process-step">{step.step}</div>
                                    <div className="process-icon">
                                        <i className={`fa-solid ${step.icon}`}></i>
                                    </div>
                                    <h5>{step.title}</h5>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Living Costs Section */}
            <section className="living-cost-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Financial Planning</span>
                        <h2>Living Costs</h2>
                    </div>
                    <div className="row g-3 justify-content-center mb-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-house`}></i></div>
                                <h5>Accommodation</h5>
                                <p>£400 – £1,200 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                <h5>Utilities</h5>
                                <p>£50 – £150 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                <h5>Food & Groceries</h5>
                                <p>£150 – £300 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                <h5>Transportation</h5>
                                <p>£30 – £100 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-book`}></i></div>
                                <h5>Study Materials</h5>
                                <p>£40 – £100 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-shirt`}></i></div>
                                <h5>Personal Expenses</h5>
                                <p>£100 – £300 / mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Average Living Cost:</span>
                        <strong>£1,000 – £1,300 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Visa Information</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-shield-halved`}></i>
                                <h5>Visa Fees</h5>
                                <p>~₹50,000 | Priority: +₹50,000</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-clock-rotate-left`}></i>
                                <h5>Standard Decision</h5>
                                <p>3 weeks | Priority: 10 days</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-heart-pulse`}></i>
                                <h5>NHS Surcharge</h5>
                                <p>₹46,000 / year (~£470)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-umbrella`}></i>
                                <h5>Travel Insurance</h5>
                                <p>₹2,000 – ₹4,500 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-plane`}></i>
                                <h5>Flight Ticket</h5>
                                <p>₹32,000 – ₹64,000</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-briefcase`}></i>
                                <h5>Post-Study Work</h5>
                                <p>2 Years (Graduate Route)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-clock`}></i>
                                <h5>Working Hours</h5>
                                <p>20 hrs / week</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-star`}></i>
                                <h5>PR Possibilities</h5>
                                <p>After 5 Years on Work Permit</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30-minute session with our UK experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* IELTS & Intakes Info Cards */}
            <section className="uk-info-section section-padding">
                <div className="container">
                    <div className="row g-5 align-items-stretch">
                        <div className="col-lg-6">
                            <div className="uk-info-card h-100">
                                <div className="uk-info-card-header">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <h4>UK Intakes Explained</h4>
                                </div>
                                <ul className="uk-info-list">
                                    <li>
                                        <span className="intake-badge intake-sep">September</span>
                                        <p>Primary intake - widest range of courses across all major universities including Oxford, Cambridge and UCL. Best for MBA, Engineering &amp; Law.</p>
                                    </li>
                                    <li>
                                        <span className="intake-badge intake-jan">January</span>
                                        <p>Ideal for students needing more preparation time; fewer courses available but popular for Business &amp; IT programs.</p>
                                    </li>
                                    <li>
                                        <span className="intake-badge intake-may">May</span>
                                        <p>Limited intake at select universities (Coventry, Northumbria, etc.), primarily for foundation or vocational programs.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="uk-info-card h-100">
                                <div className="uk-info-card-header">
                                    <i className="fa-solid fa-language"></i>
                                    <h4>IELTS &amp; Language Requirements</h4>
                                </div>
                                <ul className="uk-info-list">
                                    <li>
                                        <span className="intake-badge intake-sep">IELTS</span>
                                        <p>Minimum 6.0 – 7.0 overall (no band below 5.5). Most widely accepted test across all UK universities.</p>
                                    </li>
                                    <li>
                                        <span className="intake-badge intake-jan">TOEFL iBT</span>
                                        <p>Minimum score of 80–100 accepted by most universities as an alternative to IELTS.</p>
                                    </li>
                                    <li>
                                        <span className="intake-badge intake-may">PTE Academic</span>
                                        <p>Minimum 50–65 required. Language waivers possible if you studied in English for 3–4 years.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your British Dream <br /> Starts Today</h2>
                            <p>Unlock access to world-renowned universities, an internationally respected degree, and an unmatched cultural experience. Let our experts guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
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

export default Uk;
