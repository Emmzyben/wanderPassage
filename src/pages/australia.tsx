import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Australia = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Canberra", icon: "fa-city" },
        { label: "Currency", value: "AUD ($)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "26.8 Million", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Min Wage", value: "$24.10 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Feb, July, Nov", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "2 - 6 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "AUD $1,600", icon: "fa-passport" },
    ];

    return (
        <div className="australia-page">
            <PageTitle
                title="Study in Australia"
                currentPage="Australia"
                backgroundImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Your Future Starts Here</span>
                        <h2>Top Reasons to Study in Australia</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education", desc: "Home to 42 universities, many of which are consistently ranked in the global top 100." },
                            { id: "02", title: "Global Recognition", desc: "Degrees from Australian institutions are recognized and valued by employers worldwide." },
                            { id: "03", title: "Innovation & Research", desc: "Australia is a leader in global research, fostering innovation across multiple disciplines." },
                            { id: "04", title: "Post-Study Work", desc: "Generous post-study work visa options allow you to gain international experience." },
                            { id: "05", title: "Unbeatable Lifestyle", desc: "Experience some of the world's most livable cities with a perfect work-life balance." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>A Melting Pot of Cultures and Opportunities</h3>
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

                    {/* Stat pills */}
                    <div className="edu-stats-row">
                        {[
                            { icon: "fa-building-columns", value: "42", label: "Universities" },
                            { icon: "fa-calendar-check", value: "Feb · Jul · Nov", label: "Main Intakes" },
                            { icon: "fa-briefcase", value: "2 – 6 Yrs", label: "Post-Study Work" },
                            { icon: "fa-trophy", value: "Group of 8", label: "Elite Research Unis" },
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

                    {/* Education facts chips */}
                    <div className="edu-facts-row">
                        {["Public Research Universities", "Sandstone Universities", "TAFE & Private Colleges", "SOP & LOR Required", "MOI Acceptance: Yes"].map((fact, i) => (
                            <span key={i} className="edu-fact-chip">
                                <i className="fa-solid fa-circle-check"></i> {fact}
                            </span>
                        ))}
                    </div>

                    {/* Full-width university table */}
                    <div className="custom-table-wrapper">
                        <div className="table-header">
                            <h4>University Categories</h4>
                            <span className="badge-style">Top Ranking Institutions</span>
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
                                        <td>Top 10 Unis</td>
                                        <td>ANU, Melbourne, Sydney, UNSW, Queensland, Monash, UWA, Adelaide, UTS, RMIT</td>
                                    </tr>
                                    <tr>
                                        <td>Group of 8</td>
                                        <td>ANU, Melbourne, Sydney, UNSW, Queensland, Monash, UWA, Adelaide</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering</td>
                                        <td>UTS, RMIT, UNSW, Sydney, Monash</td>
                                    </tr>
                                    <tr>
                                        <td>Affordability</td>
                                        <td>Queensland University of Technology, Federation University, Charles Darwin University</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Min/Max Temp</th>
                                        <th>Avg Living Cost (AUD)</th>
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Canberra (Capital)</td>
                                        <td>16°C / 41.6°C</td>
                                        <td>33,000 / Yr</td>
                                        <td>$24.10 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Sydney (Economic)</td>
                                        <td>9°C / 40°C</td>
                                        <td>29,710 / Yr</td>
                                        <td>$24.10 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Melbourne</td>
                                        <td>6°C / 30°C</td>
                                        <td>3,000 - 4,000 / mo</td>
                                        <td>$23.23 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Brisbane</td>
                                        <td>10°C / 30°C</td>
                                        <td>2,500 - 3,500 / mo</td>
                                        <td>$23.23 / hr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Living Costs Section */}
            <section className="living-cost-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Financial Planning</span>
                        <h2>Living Costs</h2>
                    </div>
                    <div className="row g-3 justify-content-center mb-4">
                        {[
                            { label: "Accommodation", value: "$165 - 440 /mo", icon: "fa-house" },
                            { label: "Food", value: "$120 /mo", icon: "fa-utensils" },
                            { label: "Internet", value: "$85 /mo", icon: "fa-wifi" },
                            { label: "Transport", value: "$3 - 5 / 10km", icon: "fa-bus" },
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
                        <strong>AUD 2,200 – 2,500 / mo</strong>
                    </div>
                </div>
            </section>

            {/* Visa Benefits Section */}
            <section className="visa-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Australia</span>
                        <h2>Visa Benefits</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        {[
                            { icon: "fa-shield-halved", label: "Visa Fees", value: "AUD $1,600" },
                            { icon: "fa-clock-rotate-left", label: "Decision Time", value: "12 Hours to 25 Days" },
                            { icon: "fa-heart-pulse", label: "Health Cover", value: "OHSC – Min AUD $478 / Yr" },
                            { icon: "fa-briefcase", label: "Post-Study Work", value: "2 to 6 Years Permit" },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    <h5>{item.label}</h5>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Ready to start your Australian journey?</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK A FREE CONSULTATION</button>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Australian Dream <br /> Starts Today</h2>
                            <p>Unlock access to top-tier universities and a world-class lifestyle. Let our experts guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Australia;
