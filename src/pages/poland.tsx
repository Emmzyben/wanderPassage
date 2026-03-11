import PageTitle from "@/components/sections/pageTitle";

const Poland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="poland-page">
            <PageTitle
                title="Study in Poland"
                currentPage="Poland"
                backgroundImage="https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1469&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Polish Złoty", icon: "fa-money-bill-transfer" },
                        { label: "Population", value: "3.68 Crores", icon: "fa-users" },
                        { label: "Language", value: "Polish", icon: "fa-language" },
                        { label: "Continent", value: "Europe", icon: "fa-earth-europe" },
                        { label: "Wage (Min)", value: "€610.79/mo", icon: "fa-wallet" },
                        { label: "Provinces", value: "16", icon: "fa-landmark" },
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

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Europe's Hidden Gem for Students</span>
                        <h2>Top 5 Reasons to Study in Poland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Advanced Quality of Education", desc: "Polish universities offer a high standard of education, with many programmes internationally recognized and accredited." },
                            { id: "02", title: "Affordable Tuition Costs", desc: "Tuition fees in Poland are significantly lower than Western Europe, making it one of the most cost-effective study destinations." },
                            { id: "03", title: "Vibrant Culture", desc: "Poland has a rich history, vibrant arts scene, and is home to some of Europe's most beautiful medieval cities." },
                            { id: "04", title: "Economic Living Costs", desc: "The cost of living in Poland is among the lowest in the EU, allowing students to enjoy a high quality of life on a budget." },
                            { id: "05", title: "Exciting Student Life", desc: "With over 450 universities and a large student population, Poland offers a dynamic and energetic campus experience." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Discover Europe's Most Affordable Study Destination</h3>
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
                                    <h4>450+</h4>
                                    <p>Total Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public & Private Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: September & March</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Arts, Commerce & MBA</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Polish Institutions</span>
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
                                                <td>University of Warsaw, Jagiellonian University, Adam Mickiewicz University, University of Wrocław, Nicolaus Copernicus University</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Gdansk University of Technology, AGH University of Krakow, Silesian University of Technology</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Wroclaw (€3,000), Adam Mickiewicz University (€2,000–€4,000), University of Silesia in Katowice (€2,500)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Warsaw, Adam Mickiewicz University (Poznan), University of Silesia in Katowice</td>
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
                                        <th>Min Wages / mo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Warsaw (Capital & Economic Hub)</td>
                                        <td>2°C – 40.2°C</td>
                                        <td>$753.60</td>
                                        <td>€610.79</td>
                                    </tr>
                                    <tr>
                                        <td>Kraków</td>
                                        <td>Mild / Warm Summers</td>
                                        <td>~$600 – $750</td>
                                        <td>€610.79</td>
                                    </tr>
                                    <tr>
                                        <td>Łódź</td>
                                        <td>Mild / Warm Summers</td>
                                        <td>~$500 – $650</td>
                                        <td>€610.79</td>
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
                                        <td>€1,500 – €2,000</td>
                                        <td>€2,000 – €4,000</td>
                                        <td>€2,000 – €4,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€3,500 – €4,000</td>
                                        <td>€8,000</td>
                                        <td>€2,500 – €3,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€8,000</td>
                                        <td>€12,000</td>
                                        <td>€8,000 – €12,000</td>
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
                                        <td>Eastern Partnership & Post-Soviet Countries Scholarships</td>
                                        <td>March</td>
                                        <td>RUB 15,000 – 35,000</td>
                                    </tr>
                                    <tr>
                                        <td>Hani Zeini Scholarship</td>
                                        <td>March</td>
                                        <td>INR 73,736</td>
                                    </tr>
                                    <tr>
                                        <td>JN Tata Endowment Loan Scholarship</td>
                                        <td>September</td>
                                        <td>INR 1 Lakh – 10 Lakhs</td>
                                    </tr>
                                    <tr>
                                        <td>Young Women in Public Affairs Awards</td>
                                        <td>February</td>
                                        <td>INR 4,16,750</td>
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
                                    { label: "Accommodation", value: "~$500 / mo", icon: "fa-house" },
                                    { label: "Food", value: "$4 – $8 per meal", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "40 zł / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "PLN 1.5 – 3 per ride", icon: "fa-bus" },
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
                            <div className="total-highlight mt-4 p-4 text-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <span className="text-white-50">Total Estimated Average:</span>
                                <h3 className="mb-0 mt-2 text-white">€330 – €430 / month (1,500 – 2,000 PLN)</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "8 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "1 – 3 Years", icon: "fa-briefcase" },
                                    { label: "PR After", value: "5 Years Continuous", icon: "fa-id-card" },
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
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Poland</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "INR 8,272 (Adults)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "Within 15 Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Mandatory for Poland Visa" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Mandatory Requirement" },
                                        { icon: "fa-ticket", label: "Flight Cost (from Mumbai)", value: "~₹54,202" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank Certificate, Scholarship Letter, Traveler's Cheque" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport Required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "Admission Letter Required" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Poland?</h4>
                                <p>Book your FREE 30 mins consultation session with our Poland experts.</p>
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
                            <h2>Your Polish Adventure <br /> Begins Here</h2>
                            <p>World-class education at a fraction of the cost. Study in the heart of Europe and open doors to opportunities across the EU.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1469&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Poland;
