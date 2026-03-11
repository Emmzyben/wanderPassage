import PageTitle from "@/components/sections/pageTitle";

const France = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="france-page">
            <PageTitle
                title="Study in France"
                currentPage="France"
                backgroundImage="https://images.unsplash.com/photo-1499856374678-4b5e10687e07?q=80&w=1471&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
                        { label: "Population", value: "6.8 Crores", icon: "fa-users" },
                        { label: "Language", value: "French", icon: "fa-language" },
                        { label: "Continent", value: "Europe", icon: "fa-earth-europe" },
                        { label: "Wage (Min)", value: "€1,539.42/mo", icon: "fa-wallet" },
                        { label: "Regions", value: "18", icon: "fa-landmark" },
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
                        <span className="sub-title">Liberté, Égalité, Excellence</span>
                        <h2>Top 5 Reasons to Study in France</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Government-Funded Programmes", desc: "Many programmes are funded and certified by the French government, ensuring top-tier quality standards and international recognition." },
                            { id: "02", title: "Premier Higher Education System", desc: "France's elite Grandes Écoles and universities are globally respected, producing leaders in business, science, and the arts." },
                            { id: "03", title: "World-Class Research Enterprise", desc: "A sophisticated research ecosystem with cutting-edge laboratories and strong collaborations with global institutions." },
                            { id: "04", title: "Advanced Industries & Multinationals", desc: "France is home to industry-leading companies in aerospace, fashion, pharmaceuticals, and technology — creating excellent career opportunities." },
                            { id: "05", title: "Innovation-Friendly Environment", desc: "France actively nurtures young entrepreneurs and innovators with dedicated incubators, funding, and a startup-friendly culture." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>The City of Light — Where Dreams Become Degrees</h3>
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
                                    <h4>3,500+</h4>
                                    <p>Higher Education Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Grandes Écoles</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: January & September</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, Fashion, Medicine</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top French Institutions</span>
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
                                                <td>Sorbonne, Paris-Saclay, Grenoble Alpes, ENS Lyon, Paris 1 Panthéon-Sorbonne, Montpellier, Sciences Po, Aix-Marseille, École des Ponts ParisTech</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>École des Mines de Douai, Esiee Paris, IMT Atlantique, École Centrale de Lyon</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Strasbourg (€184–€610/yr), University of Burgundy (€170–€601/yr), University of Orléans (€11,967)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>American Business School Paris, EBS Paris, EPITA Graduate School, ESC Rennes School of Business</td>
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
                                        <td>Paris (Capital & Economic Hub)</td>
                                        <td>3°C – 46°C</td>
                                        <td>~€550+</td>
                                        <td>€1,539.42</td>
                                    </tr>
                                    <tr>
                                        <td>Marseille</td>
                                        <td>Mild / Warm Mediterranean</td>
                                        <td>~€450 – €700</td>
                                        <td>€1,539.42</td>
                                    </tr>
                                    <tr>
                                        <td>Lyon</td>
                                        <td>Cold Winters / Warm Summers</td>
                                        <td>~€500 – €750</td>
                                        <td>€1,539.42</td>
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
                                        <td>€2,850</td>
                                        <td>€18,000</td>
                                        <td>€3,879</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€1,500</td>
                                        <td>€35,000</td>
                                        <td>€1,500 – €35,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€4,500</td>
                                        <td>€98,500</td>
                                        <td>€20,000 – €90,000</td>
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
                                        <td>French Excellence Charpak Scholarship</td>
                                        <td>April 1</td>
                                        <td>€700 – €860 / month</td>
                                    </tr>
                                    <tr>
                                        <td>Eiffel Excellence Scholarship</td>
                                        <td>January 8</td>
                                        <td>€1,181 – €1,700 / month</td>
                                    </tr>
                                    <tr>
                                        <td>Raman Charpak Fellowship</td>
                                        <td>September</td>
                                        <td>€1,500 / month</td>
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
                                    { label: "Accommodation", value: "~€200 / mo (student housing)", icon: "fa-house" },
                                    { label: "Food", value: "From €3 per meal", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "~€30 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "€7 – €10 / ride", icon: "fa-bus" },
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
                                    { label: "Post-Study Work", value: "2 Year Permit", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Based on length of stay", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to France</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "₹7,199" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "15 Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Required" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Required" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "~₹42,213" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank statements (3 months), pay slips, card statements" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport Required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "University Admission Letter" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to France?</h4>
                                <p>Book your FREE 30 mins consultation with our France experts today.</p>
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
                            <h2>Votre Avenir Commence <br /> à Paris</h2>
                            <p>Study in one of the world's most celebrated countries — a global hub of art, science, fashion, and innovation. Our experts will guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499856374678-4b5e10687e07?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default France;
