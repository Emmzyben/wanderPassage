import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Portugal = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Lisbon", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "10.3 Million", icon: "fa-users" },
        { label: "Language", value: "Portuguese", icon: "fa-language" },
        { label: "Min Wage", value: "€820 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€90 (National)", icon: "fa-passport" },
    ];

    return (
        <div className="portugal-page">
            <PageTitle
                title="Study in Portugal"
                currentPage="Portugal"
                backgroundImage="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where the Atlantic Meets Academic Excellence</span>
                        <h2>Top 5 Reasons to Study in Portugal</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "IELTS is Not Mandatory", desc: "Many Portuguese universities accept alternative English proficiency proofs, making admission more accessible for international students." },
                            { id: "02", title: "Affordable Living Costs", desc: "Portugal offers some of the lowest living costs in Western Europe, so your budget stretches further without compromising quality of life." },
                            { id: "03", title: "High-Quality Education", desc: "Reputable universities with internationally recognized degrees across business, engineering, social sciences, and tourism." },
                            { id: "04", title: "Rich Culture & Stunning Scenery", desc: "From the golden beaches of the Algarve to the historic streets of Lisbon, Portugal offers an unmatched living experience." },
                            { id: "05", title: "Growing Job Market", desc: "Portugal's booming tech and tourism industries offer excellent opportunities for graduates looking to build their careers in Europe." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?q=80&w=1467&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Discover Europe's Sunniest Study Destination</h3>
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
                                    <h4>50+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Polytechnics & Private</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Sep/Oct & Feb/Mar</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, Tourism & more</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Portuguese Institutions</span>
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
                                                <td>University of Lisbon, University of Porto, University of Coimbra, Nova University of Lisbon, University of Aveiro, University of Minho, University of Évora, IST, Católica Lisbon, ISCTE</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Instituto Superior Técnico (IST), FEUP – University of Porto, University of Coimbra (FST), University of Minho (School of Engineering)</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Coimbra (€1,500–€3,000/yr), University of Porto (€1,500–€3,500/yr)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Lisbon, University of Porto, University of Coimbra, Nova University of Lisbon</td>
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
                                        <td>Lisbon (Capital & Economic Hub)</td>
                                        <td>8°C (Jan) – 28°C (Jul)</td>
                                        <td>€1,800</td>
                                        <td>€760</td>
                                    </tr>
                                    <tr>
                                        <td>Porto</td>
                                        <td>5°C (Jan) – 25°C (Jul)</td>
                                        <td>€1,200</td>
                                        <td>€760</td>
                                    </tr>
                                    <tr>
                                        <td>Coimbra</td>
                                        <td>6°C (Jan) – 27°C (Jul)</td>
                                        <td>€900</td>
                                        <td>€760</td>
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
                                        <td>€3,000</td>
                                        <td>€9,000</td>
                                        <td>€15,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€5,000</td>
                                        <td>€7,000</td>
                                        <td>€12,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€10,000</td>
                                        <td>€20,000</td>
                                        <td>€25,000</td>
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
                                        <td>Portuguese Institute for Development (Apoio ao Desenvolvimento)</td>
                                        <td>ASAP</td>
                                        <td>€2,000</td>
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
                                    { label: "Accommodation", value: "~€3,000 / year", icon: "fa-house" },
                                    { label: "Food", value: "~€400 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "~€38 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "~€60 / mo", icon: "fa-bus" },
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
                                <span className="text-white-50">Proof of Funds Required:</span>
                                <h3 className="mb-0 mt-2 text-white">€7,200 – €8,000 / year (living) + tuition</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "8 – 9 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "Yes", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Not directly", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Portugal</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "€90" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "2 – 3 Months" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Required — full duration of stay" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Not Compulsory" },
                                        { icon: "fa-ticket", label: "Flight Cost", value: "€600 – €1,200" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "€7,200–€8,000/yr — Bank statements, scholarship/sponsorship letters" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Passport, Student ID, Residence Permit or National ID" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Portugal?</h4>
                                <p>Book your FREE 30 mins consultation with our Portugal experts today.</p>
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
                            <h2>Bem-Vindo to Your <br /> Future in Portugal</h2>
                            <p>Study in one of Europe's most welcoming nations — where quality education meets an affordable lifestyle and Atlantic sunshine. Our experts are ready to guide you.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portugal;
