import PageTitle from "@/components/sections/pageTitle";

const Finland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="finland-page">
            <PageTitle
                title="Study in Finland"
                currentPage="Finland"
                backgroundImage="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
                        { label: "Population", value: "55.6 Lakhs", icon: "fa-users" },
                        { label: "Languages", value: "Finnish & Swedish", icon: "fa-language" },
                        { label: "Continent", value: "Europe", icon: "fa-earth-europe" },
                        { label: "Min Wage", value: "No Minimum", icon: "fa-wallet" },
                        { label: "Regions", value: "19 + 70 Sub", icon: "fa-landmark" },
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
                        { label: "Per Capita Income 2023", value: "$45,939.29", icon: "fa-chart-line" },
                        { label: "Employment Rate 2024", value: "78.20%", icon: "fa-briefcase" },
                        { label: "Land Area", value: "338,485 km²", icon: "fa-map" },
                        { label: "Neighbouring Countries", value: "Norway, Sweden, Russia", icon: "fa-globe" },
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
                        <span className="sub-title">The Nordic Education Revolution</span>
                        <h2>Top 5 Reasons to Study in Finland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education System", desc: "Finland's education system is internationally acclaimed — consistently ranked among the world's best for innovation, quality, and student outcomes." },
                            { id: "02", title: "Affordable Tuition Fees", desc: "Public universities in Finland charge relatively low tuition for international students, with generous scholarships to reduce costs further." },
                            { id: "03", title: "Equality and Freedom", desc: "Finland is a global leader in equality, academic freedom, and student wellbeing — a society that genuinely values every individual." },
                            { id: "04", title: "High Standard of Living", desc: "Ranked among the happiest countries on Earth, Finland offers safety, clean air, excellent public services, and an outstanding quality of life." },
                            { id: "05", title: "Otherworldly Travel Destinations", desc: "From the Northern Lights in Lapland to thousands of pristine lakes and forests — Finland's natural beauty is unlike anywhere else in the world." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1374&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Land of the Midnight Sun — Where Education Meets Wonder</h3>
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
                                    <h4>13</h4>
                                    <p>Universities + Applied Sciences Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Applied Sciences (UAS)</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intake: September – December</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, CS, Healthcare</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Duration: 2 – 4 Years</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Finnish Institutions</span>
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
                                                <td>Aalto University, University of Helsinki, Tampere University, University of Eastern Finland, University of Oulu, University of Jyväskylä, Åbo Akademi, Hanken School of Economics</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Aalto University, University of Helsinki, LUT University (Lappeenranta-Lahti)</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>Arcada University (€5,000–€8,500/yr), Tampere University (€6,000–€12,000/yr), University of Vaasa (€10,000–€12,000/yr), University of Eastern Finland (€8,000–€15,000/yr)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Helsinki, Aalto University, University of Turku, University of Eastern Finland</td>
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
                                        <td>Helsinki (Capital & Economic Hub)</td>
                                        <td>-25°C – 37.2°C</td>
                                        <td>~$3,837.30</td>
                                        <td>No statutory minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Turku</td>
                                        <td>Cold winters / Mild summers</td>
                                        <td>~€1,200 – €1,800</td>
                                        <td>No statutory minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Tampere</td>
                                        <td>Cold winters / Mild summers</td>
                                        <td>~€1,100 – €1,600</td>
                                        <td>No statutory minimum</td>
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
                                        <td>€4,000</td>
                                        <td>€25,000</td>
                                        <td>€10,000 – €18,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€6,000</td>
                                        <td>€20,000</td>
                                        <td>€8,000 – €15,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€12,000</td>
                                        <td>€30,000</td>
                                        <td>€15,000 – €25,000</td>
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
                                        <td>University of Eastern Finland Scholarship</td>
                                        <td>January</td>
                                        <td>€5,000</td>
                                    </tr>
                                    <tr>
                                        <td>Fulbright – University of Helsinki Graduate Award</td>
                                        <td>October</td>
                                        <td>€1,000/month (9 months)</td>
                                    </tr>
                                    <tr>
                                        <td>COLFUTURO Loan-Scholarships</td>
                                        <td>February</td>
                                        <td>$50,000</td>
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
                                    { label: "Accommodation", value: "€250 – €600 / mo", icon: "fa-house" },
                                    { label: "Food", value: "From €2.24 per meal", icon: "fa-utensils" },
                                    { label: "Gas & Electricity", value: "~€100 / mo", icon: "fa-bolt" },
                                    { label: "Transport", value: "€60 – €2,700 / yr (zone-based)", icon: "fa-bus" },
                                    { label: "Haircut", value: "~€30", icon: "fa-scissors" },
                                    { label: "Proof of Funds", value: "Min €6,720 in bank", icon: "fa-piggy-bank" },
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
                                    { label: "Post-Study Work", value: "2 Years", icon: "fa-briefcase" },
                                    { label: "PR After", value: "4 Years Continuous Residence (A-Permit)", icon: "fa-id-card" },
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
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Finland</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "€350" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "2 – 3 Months (apply early)" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Minimum €30,000 coverage required" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Min €30,000 medical + €100,000 cover required" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "From ₹48,887" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank statement showing min €6,720 balance" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "University Admission Letter required" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Finland?</h4>
                                <p>Book your FREE 30 mins consultation with our Finland experts today.</p>
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
                            <h2>Chase the Northern Lights <br /> & Your Degree in Finland</h2>
                            <p>Study in the world's happiest country — where education is world-class, nature is extraordinary, and your future is limitless. Our experts are ready to make it happen for you.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Finland;
