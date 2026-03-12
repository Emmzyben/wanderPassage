import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Italy = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Rome", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "59 Million", icon: "fa-users" },
        { label: "Language", value: "Italian", icon: "fa-language" },
        { label: "Min Wage", value: "€7 - €10 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€50 (National)", icon: "fa-passport" },
    ];

    return (
        <div className="italy-page">
            <PageTitle
                title="Study in Italy"
                currentPage="Italy"
                backgroundImage="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Art, Culture & World-Class Academia</span>
                        <h2>Top 5 Reasons to Study in Italy</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Experience Italian Culture", desc: "Immerse yourself in one of the world's oldest and richest cultures — art, architecture, music, and history at every corner." },
                            { id: "02", title: "High-Quality Education", desc: "Italy is home to some of the world's oldest universities, offering globally recognized degrees across all disciplines." },
                            { id: "03", title: "Diverse Programme Choices", desc: "From Design and Business to Technology and Medicine, Italy offers an enormous variety of programmes for every passion." },
                            { id: "04", title: "Authentic Italian Cuisine", desc: "Enjoy world-famous food — pizza, pasta, gelato — as part of a lifestyle that nourishes both body and mind." },
                            { id: "05", title: "Beautiful Landscapes", desc: "From the Amalfi Coast to the Dolomites and Tuscan hills, Italy offers stunning natural beauty beyond the classroom." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Study Where History, Art & Innovation Meet</h3>
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
                                    <h4>90+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Technical & Art Schools</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Jan, Sep, Oct</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Design, Business, Technology</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Italian Institutions</span>
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
                                                <td>Sapienza (Rome), Padua, Bologna, Pisa, Milan, Turin, Politecnico di Torino, Polytechnic Milan, Bicocca Milan</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Padua, University of Bologna, University of Salerno, University of Trento</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Padua (€2,642), Istituto Marangoni (€13,700), IED (€14,100), LUISS Guido Carli (€12,000)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Padua, LUISS Guido Carli, IED, Istituto Marangoni</td>
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
                                        <td>Rome (Capital)</td>
                                        <td>-30°C – 48.8°C</td>
                                        <td>€700 – €1,200</td>
                                        <td>€1,150</td>
                                    </tr>
                                    <tr>
                                        <td>Milan (Economic Hub)</td>
                                        <td>Cold Winters / Hot Summers</td>
                                        <td>€900 – €1,500</td>
                                        <td>€1,150</td>
                                    </tr>
                                    <tr>
                                        <td>Florence</td>
                                        <td>Mild / Warm</td>
                                        <td>€700 – €1,100</td>
                                        <td>€1,150</td>
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
                                        <td>€2,642</td>
                                        <td>€20,600</td>
                                        <td>€12,000 – €13,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€2,642</td>
                                        <td>€32,450</td>
                                        <td>€12,000 – €15,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€19,000</td>
                                        <td>€70,000</td>
                                        <td>€19,000 – €30,000</td>
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
                                        <td>Bocconi Scholarships</td>
                                        <td>January</td>
                                        <td>€11,500</td>
                                    </tr>
                                    <tr>
                                        <td>UNIPV International Scholarships for Developing Countries</td>
                                        <td>June</td>
                                        <td>€8,000</td>
                                    </tr>
                                    <tr>
                                        <td>University of Bologna Study Grants for International Students</td>
                                        <td>March</td>
                                        <td>€11,059</td>
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
                                    { label: "Accommodation", value: "€200 – €600 / mo", icon: "fa-house" },
                                    { label: "Food", value: "€200 – €400 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "€20 – €40 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "€2.50 – €3.00 / ride", icon: "fa-bus" },
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
                                <h3 className="mb-0 mt-2 text-white">€3,800 – €5,500 / year</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "8 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "1 Year Permit", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Yes (after study)", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Italy</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "INR 8,270" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "15 Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Mandatory" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Required" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "INR 50,000 – 60,000" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Living Expenses + Bank Statement" },
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
                                <h4>Ready to Apply to Italy?</h4>
                                <p>Book your FREE 30 mins consultation session with our Italy experts.</p>
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
                            <h2>La Dolce Vita Awaits — <br /> Start Your Italian Journey</h2>
                            <p>Study at one of Europe's most historic universities, surrounded by art, culture, and cuisine. Our experts will guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Italy;
