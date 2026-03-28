import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Belgium = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Brussels", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "11.6 Million", icon: "fa-users" },
        { label: "Language", value: "Dutch / French / German", icon: "fa-language" },
        { label: "Min Wage", value: "€1,955 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€180 (Type D)", icon: "fa-passport" },
    ];

    return (
        <div className="belgium-page">
            <PageTitle
                title="Study in Belgium"
                currentPage="Belgium"
                backgroundImage="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Heart of Europe</span>
                        <h2>Top 5 Reasons to Study in Belgium</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Heart of the EU", desc: "Brussels is the de facto capital of the European Union - home to NATO, the European Commission and hundreds of international institutions, giving students unrivalled access to global organisations." },
                            { id: "02", title: "World-Class Research Universities", desc: "Belgium hosts globally renowned universities like KU Leuven (ranked Top 50 worldwide), Ghent University and ULB, producing Nobel laureates and world-leading research across disciplines." },
                            { id: "03", title: "Multilingual Environment", desc: "Study in Dutch, French, or English - Belgium's trilingual culture gives graduates a deeply valued edge in international job markets and global organisations." },
                            { id: "04", title: "Affordable Tuition", desc: "Public university tuition fees are among the lowest in Western Europe, starting at just €890/year for EU/non-EU students - with generous scholarship opportunities available." },
                            { id: "05", title: "Central European Location", desc: "Perfectly located at the crossroads of Europe, Belgium offers easy access to France, the Netherlands, Germany and the UK - ideal for travel, internships and networking." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Medieval History Meets Modern Innovation</h3>
                    </div>
                </div>
            </div>

            {/* Education & Institutions */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Education System</span>
                        <h2>Institutions & Universities</h2>
                    </div>

                    <div className="edu-stats-row">
                        {[
                            { icon: "fa-building-columns", value: "13+", label: "Universities" },
                            { icon: "fa-calendar-check", value: "Sept & Feb", label: "Main Intakes" },
                            { icon: "fa-briefcase", value: "1 Year", label: "Post-Study Work" },
                            { icon: "fa-trophy", value: "Top 50", label: "KU Leuven Global Rank" },
                        ].map((s, idx) => (
                            <div key={idx} className="edu-stat-pill">
                                <div className="pill-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                                <div className="pill-text">
                                    <strong>{s.value}</strong>
                                    <span>{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="edu-facts-row">
                        {["Public Universities & Colleges", "Intakes: Sept & Feb", "English, French & Dutch Programmes", "SOP & LOR Required", "MOI Accepted by Many Institutions"].map((fact, i) => (
                            <span key={i} className="edu-fact-chip">
                                <i className="fa-solid fa-circle-check"></i> {fact}
                            </span>
                        ))}
                    </div>

                    <div className="custom-table-wrapper">
                        <div className="table-header">
                            <h4>Top Universities in Belgium</h4>
                            <span className="badge-style">World-Ranked Institutions</span>
                        </div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>University</th>
                                        <th>Strength</th>
                                        <th>Language</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>KU Leuven</td>
                                        <td>Engineering, Life Sciences, Business</td>
                                        <td>Dutch / English</td>
                                    </tr>
                                    <tr>
                                        <td>Ghent University</td>
                                        <td>Bioscience, Agriculture, Medicine</td>
                                        <td>Dutch / English</td>
                                    </tr>
                                    <tr>
                                        <td>Université Libre de Bruxelles (ULB)</td>
                                        <td>Law, Social Sciences, Physics</td>
                                        <td>French / English</td>
                                    </tr>
                                    <tr>
                                        <td>Vrije Universiteit Brussel (VUB)</td>
                                        <td>Engineering, Artificial Intelligence</td>
                                        <td>Dutch / English</td>
                                    </tr>
                                    <tr>
                                        <td>Université de Liège</td>
                                        <td>Aerospace, Architecture, Medicine</td>
                                        <td>French / English</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH A COUNTRY EXPERT</button>
                    </div>
                </div>
            </section>

            {/* Geography Table */}
            <section className="geography-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Live</span>
                        <h2>Geography & Demography</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Temp Range</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Key University</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Brussels (Capital)</td>
                                        <td>2°C – 23°C</td>
                                        <td>€900 – €1,400</td>
                                        <td>ULB, VUB</td>
                                    </tr>
                                    <tr>
                                        <td>Leuven</td>
                                        <td>1°C – 22°C</td>
                                        <td>€700 – €1,000</td>
                                        <td>KU Leuven</td>
                                    </tr>
                                    <tr>
                                        <td>Ghent</td>
                                        <td>2°C – 22°C</td>
                                        <td>€700 – €950</td>
                                        <td>Ghent University</td>
                                    </tr>
                                    <tr>
                                        <td>Liège</td>
                                        <td>3°C – 23°C</td>
                                        <td>€600 – €850</td>
                                        <td>Université de Liège</td>
                                    </tr>
                                    <tr>
                                        <td>Antwerp</td>
                                        <td>2°C – 22°C</td>
                                        <td>€650 – €900</td>
                                        <td>University of Antwerp</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees Table */}
            <section className="fees-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Financial Planning</span>
                        <h2>Fees Per Year</h2>
                    </div>
                    <div className="custom-table-wrapper">
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
                                        <td>€890</td>
                                        <td>€8,000</td>
                                        <td>€1,000 – €4,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€890</td>
                                        <td>€12,000</td>
                                        <td>€1,200 – €6,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€10,000</td>
                                        <td>€45,000</td>
                                        <td>€15,000 – €30,000</td>
                                    </tr>
                                    <tr>
                                        <td>PhD</td>
                                        <td>€500</td>
                                        <td>€3,000</td>
                                        <td>Mostly Funded</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                        {[
                            { label: "Accommodation", value: "€300 – €700 / mo", icon: "fa-house" },
                            { label: "Food & Groceries", value: "€150 – €300 / mo", icon: "fa-utensils" },
                            { label: "Transport (Public)", value: "€50 – €100 / mo", icon: "fa-bus" },
                            { label: "Internet & Mobile", value: "€20 – €40 / mo", icon: "fa-wifi" },
                            { label: "Working Hours", value: "20 hrs / week", icon: "fa-clock" },
                            { label: "Post-Study Work", value: "1 Year Permit", icon: "fa-briefcase" },
                            { label: "PR Possibilities", value: "After 5 Years", icon: "fa-id-card" },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                                    <h5>{item.label}</h5>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cost-total-bar">
                        <span>Total Estimated Average</span>
                        <strong>€700 – €1,200 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Belgium</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        {[
                            { icon: "fa-shield-halved", label: "Visa Fees", value: "€180 (Type D)" },
                            { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "4 – 8 Weeks" },
                            { icon: "fa-umbrella", label: "Travel Insurance", value: "Required" },
                            { icon: "fa-heart-pulse", label: "Health Insurance", value: "Mandatory" },
                            { icon: "fa-ticket", label: "Flight Cost (India)", value: "₹40,000 – ₹60,000" },
                            { icon: "fa-piggy-bank", label: "Proof of Funds", value: "€620 / month min" },
                            { icon: "fa-passport", label: "Valid Passport", value: "Required" },
                            { icon: "fa-file-lines", label: "Admission Letter", value: "University Offer Letter" },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    <h5>{item.label}</h5>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Ready to start your Belgian journey? Book your FREE 30-minute session today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK A FREE CONSULTATION</button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your European Dream <br /> Starts in Belgium</h2>
                            <p>Study at the heart of Europe - home to elite universities, the EU capital, and a thriving international community. Our experts will guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Belgium;
