import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Switzerland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Bern", icon: "fa-city" },
        { label: "Currency", value: "Swiss Franc (CHF)", icon: "fa-coins" },
        { label: "Population", value: "8.9 Million", icon: "fa-users" },
        { label: "Languages", value: "DE, FR, IT", icon: "fa-language" },
        { label: "Min Wage", value: "CHF 24 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "6 Months", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "CHF 88", icon: "fa-passport" },
        { label: "GDP Per Capita", value: "$92,980+", icon: "fa-chart-line" },
        { label: "Employment Rate", value: "67.70%", icon: "fa-briefcase" },
        { label: "Land Area", value: "41,285 km²", icon: "fa-map" },
    ];

    return (
        <div className="switzerland-page">
            <PageTitle
                title="Study in Switzerland"
                currentPage="Switzerland"
                backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Precision, Excellence & Alpine Prestige</span>
                        <h2>Top 5 Reasons to Study in Switzerland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality Education", desc: "Switzerland hosts some of the world's top-ranked universities — ETH Zurich, EPFL, and others — known for cutting-edge research and academic excellence." },
                            { id: "02", title: "Cultural Diversity", desc: "With four national languages and a rich multicultural society, Switzerland offers a uniquely diverse and inclusive environment for international students." },
                            { id: "03", title: "High Living Standard", desc: "Among the highest quality of life globally — clean cities, efficient public services, safety, and excellent healthcare make student life comfortable." },
                            { id: "04", title: "The Rest of Europe at Your Doorstep", desc: "Ideally located at the heart of Europe, surrounded by France, Germany, Austria, and Italy — weekend travels have never been easier." },
                            { id: "05", title: "A Safe Place to Live", desc: "Switzerland is consistently ranked among the safest countries in the world, giving students and their families complete peace of mind." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Study at the Heart of Europe — Where Alps Meet Academia</h3>
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
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="info-grid-section">
                                <div className="stat-card-premium mb-4">
                                    <h4>12</h4>
                                    <p>Federal & Cantonal Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Colleges & Schools</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: September & February</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, Hospitality, Environment</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Durations: 1.5–2 yrs / 3 yrs / 4–5 yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Swiss Institutions</span>
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
                                                <td>Top Universities</td>
                                                <td>University of Zurich, University of Bern, University of Geneva, University of Lausanne, University of Fribourg, ETH Zurich</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Zurich, University of Basel, University of Geneva, University of St. Gallen</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Geneva (CHF 500/semester), University of Neuchâtel (CHF 515/semester), University of Lausanne (CHF 800/semester)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Geneva, University of Bern, University of Lausanne</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
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
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bern (Capital)</td>
                                        <td>18°C – 41.5°C</td>
                                        <td>CHF 4,000 – CHF 8,000</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Zurich (Economic Capital)</td>
                                        <td>Cold winters / Warm summers</td>
                                        <td>CHF 4,500 – CHF 8,500</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Geneva</td>
                                        <td>Cold winters / Warm summers</td>
                                        <td>CHF 4,200 – CHF 7,500</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Lausanne</td>
                                        <td>Mild / Warm</td>
                                        <td>CHF 3,800 – CHF 6,500</td>
                                        <td>CHF 24.32 / hr</td>
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
                                        <td>€15,000</td>
                                        <td>€40,000</td>
                                        <td>€25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€16,400</td>
                                        <td>€27,300</td>
                                        <td>€16,400</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>CHF 20,000</td>
                                        <td>CHF 35,000</td>
                                        <td>CHF 70,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarships */}
            <section className="scholarships-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Fund Your Education</span>
                        <h2>Scholarships Available</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Scholarship</th>
                                        <th>Deadline</th>
                                        <th>Max Award</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>EPFL Excellence Fellowships</td>
                                        <td>January 31 / April 30</td>
                                        <td>CHF 24,000</td>
                                    </tr>
                                    <tr>
                                        <td>ETH Zurich Excellence Scholarships</td>
                                        <td>November 30</td>
                                        <td>Up to CHF 12,000</td>
                                    </tr>
                                    <tr>
                                        <td>The Graduate Institute Geneva (IHEID)</td>
                                        <td>January 15</td>
                                        <td>CHF 20,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleOpenModal} className="theme-btn">GET PERSONALISED EXPENSE ESTIMATE</button>
                    </div>
                </div>
            </section>

            {/* Cost & Visa Section */}
            <section className="cost-visa-section section-padding bg-dark text-white" style={{ borderRadius: '40px 40px 0 0' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Financial Planning</span>
                                <h2 className="text-white">Living Costs</h2>
                            </div>
                            <div className="row g-3">
                                {[
                                    { label: "Accommodation", value: "€370 – €740 / mo", icon: "fa-house" },
                                    { label: "Food", value: "CHF 300 – 500 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "€50 – €100 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "CHF 90 – 200 / mo", icon: "fa-bus" },
                                    { label: "Gas & Electricity", value: "€30 – €60 / mo", icon: "fa-bolt" },
                                    { label: "Haircut", value: "~€43", icon: "fa-scissors" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="visa-benefit-card bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <div className="icon-box" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <h5>{item.label}</h5>
                                            <p className="text-white-50">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row g-3 mt-3">
                                {[
                                    { label: "Working Hours", value: "8 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "6 Months", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Yes (multiple routes)", icon: "fa-id-card" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-4">
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', marginBottom: '10px', display: 'block', color: 'var(--theme)' }}></i>
                                            <strong style={{ fontSize: '13px', display: 'block' }}>{item.label}</strong>
                                            <p style={{ fontSize: '14px', margin: 0, opacity: 0.7 }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <h6 className="text-white mb-2" style={{ fontSize: '13px', opacity: 0.7 }}>PR Pathways</h6>
                                <div className="row g-2">
                                    {["Long-term Residency", "Family Reunification", "Highly Skilled Workers", "Self-Employment", "Swiss Naturalisation", "Investment Route"].map((path, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', fontSize: '12px', flexShrink: 0 }}></i>
                                                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{path}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Switzerland</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "₹7,000" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "15 Working Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Required" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Required" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "~₹61,424" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank Statement required" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "Required (University Letter)" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Switzerland?</h4>
                                <p>Book your FREE 30 mins consultation with our Switzerland experts today.</p>
                                <button onClick={handleOpenModal} className="theme-btn w-100">BOOK NOW</button>
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
                            <h2>Where the Alps Meet <br /> Academic Excellence</h2>
                            <p>Study in one of the world's most prestigious destinations — a multilingual country at the heart of Europe with globally ranked universities and an unmatched quality of life. Our experts will guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Switzerland;
