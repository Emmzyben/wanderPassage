import PageTitle from "@/components/sections/pageTitle";

const China = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="china-page">
            <PageTitle
                title="Study in China"
                currentPage="China"
                backgroundImage="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Chinese Yuan (CNY)", icon: "fa-yen-sign" },
                        { label: "Population", value: "~1.4 Billion", icon: "fa-users" },
                        { label: "Language", value: "Mandarin Chinese", icon: "fa-language" },
                        { label: "Continent", value: "Asia", icon: "fa-earth-asia" },
                        { label: "Wage (Min)", value: "CNY 2,200–2,500/mo", icon: "fa-wallet" },
                        { label: "Provinces", value: "23 + 5 AR + 4 Mun", icon: "fa-landmark" },
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
                        { label: "Per Capita Income 2024", value: "~USD 14,000", icon: "fa-chart-line" },
                        { label: "Employment Rate 2024", value: "~66%", icon: "fa-briefcase" },
                        { label: "Land Area", value: "9,596,961 km²", icon: "fa-map" },
                        { label: "Avg Living Cost / mo", value: "CNY 2,500 – 4,000", icon: "fa-coins" },
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
                        <span className="sub-title">The World's Rising Academic Powerhouse</span>
                        <h2>Top 5 Reasons to Study in China</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality Education", desc: "China's world-ranked universities are globally recognised for excellence in engineering, medicine, science, business, and technology." },
                            { id: "02", title: "Wide Range of Courses", desc: "Choose from MBBS, engineering, business, IT, arts, Chinese language courses, and advanced research programmes across disciplines." },
                            { id: "03", title: "Scholarships for International Students", desc: "The Chinese Government (CSC) and universities offer scholarships covering tuition, accommodation, monthly stipend, and medical insurance." },
                            { id: "04", title: "Modern Cities with Rich Culture", desc: "From the ancient hutongs of Beijing to the futuristic skyline of Shanghai — China offers an incomparable blend of old and new." },
                            { id: "05", title: "Affordable Fees & Living Cost", desc: "Tuition and living costs in China are considerably lower than in Western countries, making it one of the most cost-effective study destinations globally." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>From the Great Wall to Great Learning — Experience China</h3>
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
                                    <p>Top-Ranked Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public, Private, National & Medical Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: March (Spring) & September (Main)</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>MBBS, Engineering, Business, IT, Arts, Research</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP Required; LOR & MOI accepted by some</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Bachelor's 4 yrs · Master's 2–3 yrs · Diploma 1–3 yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities in China</h4>
                                    <span className="badge-style">World-Ranked Institutions</span>
                                </div>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>University</th>
                                                <th>Known For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { rank: "01", name: "Tsinghua University", known: "Engineering, Science, Technology" },
                                                { rank: "02", name: "Peking University", known: "Law, Medicine, Humanities" },
                                                { rank: "03", name: "Fudan University", known: "Business, Life Sciences, Social Sciences" },
                                                { rank: "04", name: "Shanghai Jiao Tong University", known: "Engineering, Medicine, Management" },
                                                { rank: "05", name: "Zhejiang University", known: "Science, Engineering, Agriculture" },
                                                { rank: "06", name: "Nanjing University", known: "Physics, Chemistry, Earth Sciences" },
                                            ].map((u, i) => (
                                                <tr key={i}>
                                                    <td><span className="rank-badge">{u.rank}</span></td>
                                                    <td><strong>{u.name}</strong></td>
                                                    <td>{u.known}</td>
                                                </tr>
                                            ))}
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
                                        <th>Min Wage / hr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Beijing (Capital)</td>
                                        <td>-5°C – 30°C</td>
                                        <td>CNY 4,000 – 7,000</td>
                                        <td>CNY 25</td>
                                    </tr>
                                    <tr>
                                        <td>Shanghai (Economic Hub)</td>
                                        <td>3°C – 32°C</td>
                                        <td>CNY 5,000 – 8,000</td>
                                        <td>CNY 25</td>
                                    </tr>
                                    <tr>
                                        <td>Guangzhou</td>
                                        <td>10°C – 33°C</td>
                                        <td>CNY 3,500 – 6,500</td>
                                        <td>CNY 23</td>
                                    </tr>
                                    <tr>
                                        <td>Shenzhen</td>
                                        <td>12°C – 34°C</td>
                                        <td>CNY 4,000 – 7,500</td>
                                        <td>CNY 23</td>
                                    </tr>
                                    <tr>
                                        <td>Chengdu</td>
                                        <td>5°C – 30°C</td>
                                        <td>CNY 3,000 – 5,500</td>
                                        <td>CNY 20</td>
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
                                        <td>CNY 20,000</td>
                                        <td>CNY 40,000</td>
                                        <td>CNY 30,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>CNY 25,000</td>
                                        <td>CNY 50,000</td>
                                        <td>CNY 35,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>CNY 40,000</td>
                                        <td>CNY 80,000</td>
                                        <td>CNY 60,000</td>
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
                                        <th>What's Covered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chinese Government Scholarship (CSC)</td>
                                        <td>December – March (varies)</td>
                                        <td>Full / partial tuition, monthly stipend, accommodation, medical insurance</td>
                                    </tr>
                                    <tr>
                                        <td>Confucius Institute Scholarship</td>
                                        <td>March – May (varies)</td>
                                        <td>Tuition fees, accommodation, monthly allowance, insurance</td>
                                    </tr>
                                    <tr>
                                        <td>Provincial / University Scholarships</td>
                                        <td>February – June (varies)</td>
                                        <td>Partial or full tuition fee waiver (varies by institution)</td>
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
                                    { label: "Accommodation", value: "CNY 800 – 2,500 / mo", icon: "fa-house" },
                                    { label: "Food", value: "CNY 1,000 – 1,500 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "CNY 100 – 200 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "CNY 2 – 5 per trip", icon: "fa-bus" },
                                    { label: "Gas & Electricity", value: "CNY 250 – 400 / mo", icon: "fa-bolt" },
                                    { label: "Haircut", value: "CNY 30 – 60", icon: "fa-scissors" },
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
                                <span className="text-white-50">Average Total Living Cost</span>
                                <h3 className="mb-0 mt-2 text-white">CNY 2,500 – 4,000 / month</h3>
                            </div>
                            <div className="row g-3 mt-3">
                                {[
                                    { label: "Working Hours", value: "Up to 20 hrs / wk (during study)", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "Job offer + employer sponsorship", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Long-term residence (work exp. required)", icon: "fa-id-card" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-4">
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '22px', marginBottom: '10px', display: 'block', color: 'var(--theme)' }}></i>
                                            <strong style={{ fontSize: '12px', display: 'block' }}>{item.label}</strong>
                                            <p style={{ fontSize: '12px', margin: 0, opacity: 0.7 }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <h6 className="text-white mb-2" style={{ fontSize: '13px', opacity: 0.7 }}>Popular Work Sectors in China</h6>
                                <div className="row g-2">
                                    {["IT & Technology", "Engineering", "Business & Trade", "Manufacturing", "Teaching / Academia", "Research & Healthcare"].map((sector, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', fontSize: '12px', flexShrink: 0 }}></i>
                                                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{sector}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to China</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "INR 4,000 – 8,000 (varies by visa type)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "1 – 3 Weeks" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Recommended for international students" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Mandatory — CNY 600 – 1,000 per year" },
                                        { icon: "fa-ticket", label: "Flight (from India)", value: "INR 30,000 – 55,000 (one-way)" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Min CNY 30,000 – 50,000 (tuition + living)" },
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
                                <h4>Ready to Apply to China?</h4>
                                <p>Book your FREE 30 mins consultation with our China experts today.</p>
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
                            <h2>From the Great Wall to <br /> Great Opportunities in China</h2>
                            <p>Study at some of Asia's most prestigious institutions in a country that blends ancient culture with cutting-edge innovation. Affordable, ambitious, and globally connected — China is your next chapter. Our experts will guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default China;
