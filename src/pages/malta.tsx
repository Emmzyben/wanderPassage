import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Malta = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Valletta", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "5.3 Lakhs", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Min Wage", value: "€777.10 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Feb & Oct", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "$72 (Schengen)", icon: "fa-passport" },
    ];

    return (
        <div className="malta-page">
            <PageTitle
                title="Study in Malta"
                currentPage="Malta"
                backgroundImage="https://images.unsplash.com/photo-1602541648578-ad8b27fb97fd?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">The Mediterranean's Best-Kept Secret</span>
                        <h2>Top 5 Reasons to Study in Malta</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "IELTS is Not Mandatory", desc: "Malta is one of the few English-speaking EU countries where IELTS is not required for admission — making entry simpler for many students." },
                            { id: "02", title: "Educational Gap is Acceptable", desc: "Maltese institutions have a flexible approach to academic gaps, giving more students the opportunity to pursue higher education." },
                            { id: "03", title: "Scholarships Available", desc: "The Malta Government Scholarship Scheme and other awards make studying in Malta financially accessible for international students." },
                            { id: "04", title: "Affordable Living", desc: "Malta offers one of the lowest costs of living in the EU, making it an excellent choice for budget-conscious students." },
                            { id: "05", title: "Free Healthcare for Indian Students", desc: "Indian students in Malta benefit from access to public healthcare services, providing peace of mind throughout their studies." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1464&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Sun, Sea & World-Class Education in the Mediterranean</h3>
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
                                    <h4>8</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Private Schools</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: February & October</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Tourism, Hospitality, Culinary</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Maltese Institutions</span>
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
                                                <td>University of Malta, MCAST, Global College Malta, Martin's Institute of Higher Education, Middlesex University Malta</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Malta, Advenio eAcademy, Queen Mary University</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>American University of Malta (USD 17,290), Global College of Malta (€10,000)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>Global College of Malta (GCM), American University of Malta, Malta College of Arts, Science & Technology (MCAST)</td>
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
                                        <td>Valletta (Capital & Economic Hub)</td>
                                        <td>4.4°C – 34°C</td>
                                        <td>$867.80 (€780.40)</td>
                                        <td>€777.10</td>
                                    </tr>
                                    <tr>
                                        <td>Sliema</td>
                                        <td>Mild / Warm Mediterranean</td>
                                        <td>€900 – €1,200</td>
                                        <td>€777.10</td>
                                    </tr>
                                    <tr>
                                        <td>Mdina & Rabat</td>
                                        <td>Mild / Warm Mediterranean</td>
                                        <td>€700 – €1,000</td>
                                        <td>€777.10</td>
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
                                        <th>Average Fees</th>
                                        <th>Maximum Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bachelor's Degree</td>
                                        <td>€7,000 – €12,000</td>
                                        <td>€7,000 – €15,000</td>
                                        <td>€24,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€10,000</td>
                                        <td>€9,000 – €27,000</td>
                                        <td>€31,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€8,000 – €10,000</td>
                                        <td>€2,000 – €31,000</td>
                                        <td>€31,000</td>
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
                                        <td>Malta Government Scholarship Scheme</td>
                                        <td>June</td>
                                        <td>€465.87 / year</td>
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
                                    { label: "Accommodation", value: "€925 – €1,150 / mo", icon: "fa-house" },
                                    { label: "Food", value: "€200 – €300 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "€20 – €50 / mo", icon: "fa-wifi" },
                                    { label: "Haircut", value: "€10 – €22", icon: "fa-scissors" },
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
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "8 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "1 Year Permit", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Yes (Investment Route)", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Malta</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "US$72 (Schengen)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "3 Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Mandatory (Full Schengen Coverage)" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Required — must cover all medical emergencies" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "From ₹43,492" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Min €854/mo of stay — Bank statements (3 months)" },
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
                                <h4>Ready to Apply to Malta?</h4>
                                <p>Book your FREE 30 mins consultation with our Malta experts today.</p>
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
                            <h2>Your Mediterranean <br /> Education Awaits</h2>
                            <p>Study in English in a beautiful EU country — no IELTS required. Let our Malta experts guide you from application all the way to arrival.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1602541648578-ad8b27fb97fd?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Malta;
