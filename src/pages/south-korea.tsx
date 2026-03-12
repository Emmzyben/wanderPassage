import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const SouthKorea = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Seoul", icon: "fa-city" },
        { label: "Currency", value: "South Korean Won (₩)", icon: "fa-coins" },
        { label: "Population", value: "51 Million", icon: "fa-users" },
        { label: "Language", value: "Korean", icon: "fa-language" },
        { label: "Min Wage", value: "₩9,860 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "March & Sept", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 - 2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "₩50k - ₩90k", icon: "fa-passport" },
    ];

    return (
        <div className="south-korea-page">
            <PageTitle
                title="Study in South Korea"
                currentPage="South Korea"
                backgroundImage="https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />



            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Asia's Technology & Culture Powerhouse</span>
                        <h2>Top 5 Reasons to Study in South Korea</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education", desc: "South Korea's universities are globally ranked for academic excellence, cutting-edge research, and innovation in technology, science, and business." },
                            { id: "02", title: "Wide Range of Courses", desc: "Choose from diverse programmes in technology, engineering, business, arts, science, Korean language courses, and professional vocational training." },
                            { id: "03", title: "Generous Government Scholarships", desc: "The Global Korea Scholarship (GKS) covers full tuition fees, monthly living allowance, roundtrip airfare, and mandatory health insurance." },
                            { id: "04", title: "Safe & Student-Friendly Country", desc: "South Korea is consistently ranked among the world's safest countries, with modern facilities, fast internet, and an outstanding quality of student life." },
                            { id: "05", title: "Career & Work Opportunities", desc: "Work up to 20 hrs/week during studies and explore post-graduation career pathways in Samsung, LG, Hyundai and other global Korean companies." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Seoul's Skyline Awaits — Innovation, Culture & Academic Excellence</h3>
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
                                    <h4>300+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>National, Public, Private, Vocational Institutions</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: March (Main) & September (Secondary)</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Technology, Business, Engineering, Arts, Research</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP & LOR Required; IELTS/TOEFL or TOPIK preferred</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Bachelor's 4 yrs · Master's 2 yrs · Diploma 1–3 yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities in South Korea</h4>
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
                                                { rank: "01", name: "Seoul National University (SNU)", known: "Research, Science, Business, Law" },
                                                { rank: "02", name: "KAIST – Korea Adv. Institute of Science & Tech.", known: "Engineering, Science, Technology" },
                                                { rank: "03", name: "Yonsei University", known: "Business, Medicine, Liberal Arts" },
                                                { rank: "04", name: "Korea University", known: "Law, Economics, Engineering" },
                                                { rank: "05", name: "Sungkyunkwan University (SKKU)", known: "IT, Samsung-affiliated, Business" },
                                                { rank: "06", name: "Pohang University of Science & Tech (POSTECH)", known: "Science, Engineering, Research" },
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
                                        <td>Seoul (Capital)</td>
                                        <td>-5°C – 30°C</td>
                                        <td>KRW 1,200,000 – 1,800,000</td>
                                        <td>KRW 9,860</td>
                                    </tr>
                                    <tr>
                                        <td>Busan (Port & Tourism Hub)</td>
                                        <td>0°C – 32°C</td>
                                        <td>KRW 1,000,000 – 1,500,000</td>
                                        <td>KRW 9,860</td>
                                    </tr>
                                    <tr>
                                        <td>Incheon</td>
                                        <td>-4°C – 29°C</td>
                                        <td>KRW 1,000,000 – 1,400,000</td>
                                        <td>KRW 9,860</td>
                                    </tr>
                                    <tr>
                                        <td>Daegu</td>
                                        <td>-3°C – 33°C</td>
                                        <td>KRW 900,000 – 1,300,000</td>
                                        <td>KRW 9,860</td>
                                    </tr>
                                    <tr>
                                        <td>Daejeon</td>
                                        <td>-6°C – 31°C</td>
                                        <td>KRW 900,000 – 1,200,000</td>
                                        <td>KRW 9,860</td>
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
                                        <td>KRW 4,000,000</td>
                                        <td>KRW 10,000,000</td>
                                        <td>KRW 6,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>KRW 5,000,000</td>
                                        <td>KRW 12,000,000</td>
                                        <td>KRW 8,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>KRW 10,000,000</td>
                                        <td>KRW 25,000,000</td>
                                        <td>KRW 15,000,000</td>
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
                                        <td>GKS – Global Korea Scholarship (Korean Government)</td>
                                        <td>Feb–Mar / Sep (varies by program)</td>
                                        <td>Full tuition, monthly stipend, roundtrip airfare, medical insurance</td>
                                    </tr>
                                    <tr>
                                        <td>Korean Government Support Program for Self-Financed Students</td>
                                        <td>Varies by university</td>
                                        <td>Partial tuition support</td>
                                    </tr>
                                    <tr>
                                        <td>University-Specific Scholarships (Merit / Need-Based)</td>
                                        <td>Depends on university intake</td>
                                        <td>30% – 100% tuition fee waiver</td>
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
                                    { label: "Accommodation", value: "KRW 300,000 – 800,000 / mo", icon: "fa-house" },
                                    { label: "Food", value: "~KRW 300,000 / mo", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "KRW 40,000 – 60,000 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "KRW 1,300 – 2,000 / trip", icon: "fa-bus" },
                                    { label: "Gas & Electricity", value: "KRW 70,000 – 90,000 / mo", icon: "fa-bolt" },
                                    { label: "Haircut", value: "KRW 15,000 – 30,000", icon: "fa-scissors" },
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
                                <h3 className="mb-0 mt-2 text-white">KRW 900,000 – 1,300,000 / month</h3>
                            </div>
                            <div className="row g-3 mt-3">
                                {[
                                    { label: "Working Hours", value: "20 hrs/wk (semester) · Full-time (vacations)", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "1 – 3 Years (visa + employer-based)", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Long-term/PR via work exp. & points", icon: "fa-id-card" },
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
                                <h6 className="text-white mb-2" style={{ fontSize: '13px', opacity: 0.7 }}>Key Employment Sectors in South Korea</h6>
                                <div className="row g-2">
                                    {["IT & Electronics", "Engineering & Manufacturing", "Business & Finance", "Research & Academia", "Hospitality & Tourism", "Design & Language Teaching"].map((sector, i) => (
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to South Korea</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "KRW 50,000 – 90,000 (varies by type & nationality)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "2 – 8 Weeks" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Not mandatory, but strongly recommended" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "NHIS mandatory — KRW 60,000–80,000 / mo" },
                                        { icon: "fa-ticket", label: "Flight (from India)", value: "INR 30,000 – 55,000 (one-way)" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Min KRW 10,000,000 – 20,000,000 (tuition + living)" },
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
                                <h4>Ready to Apply to South Korea?</h4>
                                <p>Book your FREE 30 mins consultation with our South Korea experts today.</p>
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
                            <h2>From K-Culture to <br /> K-Excellence in Education</h2>
                            <p>Study in the land of Samsung, BTS, and academic brilliance. South Korea blends technological innovation with centuries of rich culture — and top-ranked universities to match. Our experts will guide you to your dream Korean university.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SouthKorea;
