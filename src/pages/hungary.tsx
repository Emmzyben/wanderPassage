import PageTitle from "@/components/sections/pageTitle";

const Hungary = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="hungary-page">
            <PageTitle
                title="Study in Hungary"
                currentPage="Hungary"
                backgroundImage="https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Forint (HUF)", icon: "fa-coins" },
                        { label: "Population", value: "96.4 Lakhs", icon: "fa-users" },
                        { label: "Language", value: "Hungarian", icon: "fa-language" },
                        { label: "Continent", value: "Central Europe", icon: "fa-earth-europe" },
                        { label: "Wage (Min)", value: "€487.10/mo", icon: "fa-wallet" },
                        { label: "Counties", value: "19", icon: "fa-landmark" },
                    ].map((item, idx) => (
                        <div key={idx} className="overview-item">
                            <i className={`fa-solid ${item.icon}`}></i>
                            <div className="details">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Stats Strip */}
            <div className="container">
                <div className="row g-3 mb-5">
                    {[
                        { label: "Per Capita Income 2023", value: "$16,286.76", icon: "fa-chart-line" },
                        { label: "Employment Rate 2024", value: "64.80%", icon: "fa-briefcase" },
                        { label: "Land Area", value: "93,030 km²", icon: "fa-map" },
                        { label: "Neighbouring Country", value: "Slovakia & more", icon: "fa-globe" },
                    ].map((item, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div className="stat-strip-card">
                                <i className={`fa-solid ${item.icon}`}></i>
                                <div>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Central Europe's Academic Gem</span>
                        <h2>Top 5 Reasons to Study in Hungary</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Amazing Academic Reputation", desc: "Hungary's universities have a long and distinguished history, consistently ranking among the best in Central and Eastern Europe." },
                            { id: "02", title: "Hungarian Diploma Has Prestige", desc: "Degrees from Hungarian institutions are globally recognised and respected, opening doors to careers across Europe and the world." },
                            { id: "03", title: "Broad Choice of Degrees", desc: "From medicine and engineering to business and humanities, Hungary offers an extensive range of programmes across all disciplines." },
                            { id: "04", title: "English Language Education", desc: "Many programmes are fully delivered in English, with straightforward admission requirements making it accessible worldwide." },
                            { id: "05", title: "Straightforward Admission", desc: "Hungary's universities offer clear and accessible admission processes, making it easier for international students to apply and get accepted." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520175023058-9b8c4e3a35b7?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Budapest — The Pearl of the Danube & Your Academic Home</h3>
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
                                    <h4>64</h4>
                                    <p>Accredited Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Colleges & Schools</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Sep, Jan, May, June</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Business, Medicine, Humanities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Duration: 1 – 4 Years</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Hungarian Institutions</span>
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
                                                <td>Eötvös Loránd University, University of Szeged, University of Debrecen, University of Budapest, Budapest University of Technology and Economics, Semmelweis University, Hungarian University of Agriculture and Life Sciences, Corvinus University, Miskolci Egyetem</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Szeged, Budapest University of Technology and Economics, University of Debrecen, University of Pécs</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of West Hungary, Central European University, Szent István University</td>
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
                                        <th>Role</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Min Wages / mo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Budapest</td>
                                        <td>Capital & Economic Hub</td>
                                        <td>€800 – €1,200</td>
                                        <td>€487.10</td>
                                    </tr>
                                    <tr>
                                        <td>Heves</td>
                                        <td>Major City</td>
                                        <td>€600 – €900</td>
                                        <td>€487.10</td>
                                    </tr>
                                    <tr>
                                        <td>Solt</td>
                                        <td>Major City</td>
                                        <td>€550 – €800</td>
                                        <td>€487.10</td>
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
                                        <td>€5,600</td>
                                        <td>€35,000</td>
                                        <td>€12,000 – €16,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€5,500</td>
                                        <td>€12,800</td>
                                        <td>€7,000 – €9,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€12,800</td>
                                        <td>€12,800</td>
                                        <td>€12,800</td>
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
                                        <td>K.C. Mahindra Scholarships for Post-Graduate Studies Abroad</td>
                                        <td>March</td>
                                        <td>€10,967</td>
                                    </tr>
                                    <tr>
                                        <td>JN Tata Endowment Loan Scholarship</td>
                                        <td>March</td>
                                        <td>€10,000</td>
                                    </tr>
                                    <tr>
                                        <td>Robert S. McNamara Fellowships Program</td>
                                        <td>February</td>
                                        <td>€41,000</td>
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
                                    { label: "Accommodation", value: "~€624 / mo", icon: "fa-house" },
                                    { label: "Food", value: "€115 – €150 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "€15 – €25 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "€10 – €11 / mo", icon: "fa-bus" },
                                    { label: "Gas & Electricity", value: "€28.5 per 100 kWh", icon: "fa-bolt" },
                                    { label: "Haircut", value: "~€12", icon: "fa-scissors" },
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
                                    { label: "Working Hours", value: "24 hrs/wk (term) · 90 days/yr (off-term)", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "Study-to-Work Permit", icon: "fa-briefcase" },
                                    { label: "PR After", value: "3 Years Temp Residency", icon: "fa-id-card" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-4">
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', marginBottom: '10px', display: 'block', color: 'var(--theme)' }}></i>
                                            <strong style={{ fontSize: '12px', display: 'block' }}>{item.label}</strong>
                                            <p style={{ fontSize: '13px', margin: 0, opacity: 0.7 }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <h6 className="text-white mb-2" style={{ fontSize: '13px', opacity: 0.7 }}>PR Pathways Available</h6>
                                <div className="row g-2">
                                    {[
                                        "Temporary Residency (3 yrs → PR)",
                                        "Employee of Hungarian Company",
                                        "Entrepreneur / Self-Employment",
                                        "Digital Nomad Visa",
                                        "Hungary Golden Visa (€250K+)",
                                        "Family Reunification",
                                    ].map((path, i) => (
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Hungary</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "€60 (Schengen student visa)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "~1 month (up to 60 days — apply early)" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Mandatory for Schengen short-stay — €0.99/day" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "GHIC or EHIC required" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "~₹73,850" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank statements (last 3 months), min. ending balance $1,000 USD" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport required" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Hungary?</h4>
                                <p>Book your FREE 30 mins consultation with our Hungary experts today.</p>
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
                            <h2>Budapest Beckons — <br /> Begin Your Hungarian Journey</h2>
                            <p>Study in the Pearl of the Danube — a city where centuries of history meet world-class academia. Our experts will guide you every step of the way, from application to arrival.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hungary;
