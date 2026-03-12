import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Sweden = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Stockholm", icon: "fa-city" },
        { label: "Currency", value: "Krona (SEK)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "10.5 Million", icon: "fa-users" },
        { label: "Language", value: "Swedish", icon: "fa-language" },
        { label: "Min Wage", value: "Varies (Trade)", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Aug & Jan", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "SEK 1,500", icon: "fa-passport" },
    ];

    return (
        <div className="sweden-page">
            <PageTitle
                title="Study in Sweden"
                currentPage="Sweden"
                backgroundImage="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Innovation, Sustainability & Excellence</span>
                        <h2>Top 5 Reasons to Study in Sweden</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "High-Quality Education", desc: "Sweden is globally renowned for its innovative, research-driven academic programmes offering real-world relevance and academic rigour." },
                            { id: "02", title: "English Proficiency", desc: "A vast number of courses are delivered in English, making Swedish universities highly accessible to international students worldwide." },
                            { id: "03", title: "Cultural Diversity", desc: "A welcoming, inclusive environment with a vibrant multicultural scene that enriches student life beyond the classroom." },
                            { id: "04", title: "Strong Economy", desc: "Sweden's robust economy is home to global giants like IKEA, Spotify, and Volvo — creating outstanding internship and career opportunities." },
                            { id: "05", title: "Sustainability Focus", desc: "A deep national commitment to sustainability and environmental responsibility runs through education, industry, and everyday life." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1374&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Nordic Ingenuity Meets World-Class Learning</h3>
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
                                    <h4>38</h4>
                                    <p>State Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Research Institutes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: August & January</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Bachelor's, Master's, PhD & Short Courses</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Swedish Institutions</span>
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
                                                <td>Karolinska Institutet, Chalmers University of Technology, SLU, Lund University, KTH Royal Institute of Technology, Jönköping, Uppsala, University of Gothenburg, Stockholm University, Linköping University</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Uppsala University, Lund University, KTH Royal Institute of Technology, Chalmers University of Technology</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Gothenburg, Lund University, Uppsala University, Linköping University</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>Karolinska Institutet, Lund University, Uppsala University, Stockholm University</td>
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
                                        <td>Stockholm (Capital & Economic Hub)</td>
                                        <td>-15°C – 30°C</td>
                                        <td>SEK 10,000 – 15,000</td>
                                        <td>SEK 20,000 – 25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Gothenburg</td>
                                        <td>-15°C – 30°C</td>
                                        <td>SEK 12,000 – 16,000</td>
                                        <td>SEK 20,000 – 25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Malmö</td>
                                        <td>-15°C – 30°C</td>
                                        <td>SEK 10,000 – 12,000</td>
                                        <td>SEK 30,000 – 35,000</td>
                                    </tr>
                                    <tr>
                                        <td>Uppsala</td>
                                        <td>-15°C – 30°C</td>
                                        <td>SEK 10,000 – 12,000</td>
                                        <td>SEK 30,000 – 35,000</td>
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
                                        <td>€7,500</td>
                                        <td>€20,000</td>
                                        <td>€12,000 – €15,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€8,000</td>
                                        <td>€25,000</td>
                                        <td>€12,000 – €18,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€15,000</td>
                                        <td>€35,000</td>
                                        <td>€20,000 – €25,000</td>
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
                                        <td>University-Specific Scholarships</td>
                                        <td>As per University</td>
                                        <td>€12,000 – €25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Swedish Institute Study Scholarships (SISS)</td>
                                        <td>As per University</td>
                                        <td>€12,000 – €25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Swedish Institute Scholarships for Global Professionals (SISGP)</td>
                                        <td>As per University</td>
                                        <td>€12,000 – €25,000</td>
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
                                    { label: "Accommodation", value: "SEK 10,000 – 20,000 / mo", icon: "fa-house" },
                                    { label: "Food", value: "€400 – €600 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "€25 – €60 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "€10 – €20 / mo", icon: "fa-bus" },
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
                                <h3 className="mb-0 mt-2 text-white">SEK 8,370/mo (~€800) · SEK 100,440/yr (~€9,600)</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "40 hrs / week", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "Up to 12 Months", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Yes (after residency)", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Sweden</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "~SEK 1,500 (€140 / $150)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "2 – 4 Months" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "€50 – €150/mo (SEK 500–1,500)" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "€50 – €150/mo (SEK 500–1,500)" },
                                        { icon: "fa-ticket", label: "Flight Cost", value: "€600 – €1,200 (~$650–$1,300)" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "SEK 8,370/mo min — Bank statements, scholarship/sponsor letter" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport, National ID Card, Birth Certificate" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Sweden?</h4>
                                <p>Book your FREE 30 mins consultation with our Sweden experts today.</p>
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
                            <h2>Your Nordic Future <br /> Starts in Sweden</h2>
                            <p>Study in a country that leads the world in innovation, sustainability, and quality of life. Our experts will help you navigate every step — from application to arrival.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sweden;
