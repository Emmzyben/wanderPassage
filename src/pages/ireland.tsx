import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Ireland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Dublin", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "5.1 Million", icon: "fa-users" },
        { label: "Language", value: "English / Irish", icon: "fa-language" },
        { label: "Min Wage", value: "€1,656 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept, Jan", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€60 (Student)", icon: "fa-passport" },
    ];

    return (
        <div className="ireland-page">
            <PageTitle
                title="Study in Ireland"
                currentPage="Ireland"
                backgroundImage="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1530&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Why Choose Ireland</span>
                        <h2>Top Reasons to Study in Ireland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Academic Excellence", desc: "Top-ranking universities with degrees recognised by employers worldwide, offering cutting-edge programmes across all disciplines." },
                            { id: "02", title: "Tech & Innovation Hub", desc: "Home to European HQs of Google, Apple, Meta and Pfizer - giving students unmatched industry access and internship opportunities." },
                            { id: "03", title: "English-Speaking Nation", desc: "Ireland is Europe's only native English-speaking country post-Brexit, making it the ideal destination for international students." },
                            { id: "04", title: "Gateway to Europe", desc: "An Irish degree opens doors across the EU and globally, with a Graduate Route allowing 24 months of post-study work." },
                            { id: "05", title: "High Employment Rate", desc: "74% graduate employment rate with strong enterprise connections, especially in the booming tech and pharma sectors." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548681528-6a5c45b66063?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Ancient Tradition Meets Modern Innovation</h3>
                    </div>
                </div>
            </div>

            {/* Education & Institutions */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="info-grid-section">
                                <div className="stat-card-premium mb-4">
                                    <h4>35,000+</h4>
                                    <p>International Students</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & IoTs</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Sept & Jan</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>UG via CAO / PG Direct</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>IELTS / TOEFL Required</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities in Ireland</h4>
                                    <span className="badge-style">World-Ranked Institutions</span>
                                </div>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>University</th>
                                                <th>Strength</th>
                                                <th>Ranking</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Trinity College Dublin (TCD)</td>
                                                <td>Humanities, Computer Science, Engineering</td>
                                                <td>Top 100 Global</td>
                                            </tr>
                                            <tr>
                                                <td>University College Dublin (UCD)</td>
                                                <td>Business, Engineering, Agriculture</td>
                                                <td>Top 1% Worldwide</td>
                                            </tr>
                                            <tr>
                                                <td>University College Cork (UCC)</td>
                                                <td>Pharmacy, Food Science, Environment</td>
                                                <td>Top 300 Global</td>
                                            </tr>
                                            <tr>
                                                <td>University of Galway</td>
                                                <td>Clinical, Marine & Data Science</td>
                                                <td>Top 300 Global</td>
                                            </tr>
                                            <tr>
                                                <td>Dublin City University (DCU)</td>
                                                <td>Business, Communications, STEM</td>
                                                <td>Top Young University</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geography / Cities Table */}
            <section className="geography-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Study</span>
                        <h2>Top Cities for International Students</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Key Highlight</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Key University</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dublin (Capital)</td>
                                        <td>Tech & Finance Hub</td>
                                        <td>€1,000 – €1,500</td>
                                        <td>TCD, UCD, DCU</td>
                                    </tr>
                                    <tr>
                                        <td>Cork</td>
                                        <td>Lower Cost of Living</td>
                                        <td>€800 – €1,100</td>
                                        <td>UCC</td>
                                    </tr>
                                    <tr>
                                        <td>Galway</td>
                                        <td>Arts & Culture</td>
                                        <td>€750 – €1,000</td>
                                        <td>University of Galway</td>
                                    </tr>
                                    <tr>
                                        <td>Limerick</td>
                                        <td>Affordable & Modern</td>
                                        <td>€700 – €950</td>
                                        <td>University of Limerick</td>
                                    </tr>
                                    <tr>
                                        <td>Maynooth</td>
                                        <td>Quiet & Historic</td>
                                        <td>€650 – €900</td>
                                        <td>Maynooth University</td>
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
                            { label: "Accommodation", value: "€400 – €1,000 / mo", icon: "fa-house" },
                            { label: "Food & Groceries", value: "€200 – €300 / mo", icon: "fa-utensils" },
                            { label: "Transportation", value: "€50 – €100 / mo", icon: "fa-bus" },
                            { label: "Mobile & Internet", value: "€20 – €40 / mo", icon: "fa-wifi" },
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
                        <span>Total Annual Cost (Tuition + Living)</span>
                        <strong>€16,000 – €32,000 / year</strong>
                    </div>
                    <div className="row g-3 mt-3">
                        {[
                            { label: "Working Hours", value: "20 hrs/wk (term) · 40 hrs (vacation)", icon: "fa-clock" },
                            { label: "Part-time Pay", value: "€10.50 – €13 / hr", icon: "fa-coins" },
                            { label: "PR Eligibility", value: "After 5 years lawful residence", icon: "fa-id-card" },
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                                    <h5>{item.label}</h5>
                                    <p>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Ireland</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        {[
                            { icon: "fa-passport", label: "Valid Passport", value: "Required" },
                            { icon: "fa-envelope-open-text", label: "Offer Letter", value: "Irish University" },
                            { icon: "fa-money-bill-wave", label: "Proof of Funds", value: "€10,000 min" },
                            { icon: "fa-receipt", label: "Tuition Payment", value: "Proof Required" },
                            { icon: "fa-heart-pulse", label: "Health Insurance", value: "Mandatory" },
                            { icon: "fa-language", label: "English Test", value: "IELTS / TOEFL" },
                            { icon: "fa-file-pen", label: "SOP", value: "Statement of Purpose" },
                            { icon: "fa-clock", label: "Apply Early", value: "8 – 12 Wks Before" },
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
                        <p className="visa-cta-text">Ready to start your Irish journey? Get expert guidance today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK A FREE CONSULTATION</button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Irish Dream <br /> Starts Today</h2>
                            <p>Unlock access to world-class universities, an English-speaking European lifestyle, and a thriving post-study career pathway. Let our experts guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564959130747-897fb406b9af?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ireland;
