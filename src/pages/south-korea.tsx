import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
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
                        <h3>Seoul's Skyline Awaits - Innovation, Culture & Academic Excellence</h3>
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

                        {/* Living Costs Section */}
            <section className="living-cost-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Financial Planning</span>
                        <h2>Living Costs</h2>
                    </div>
                    <div className="row g-3 justify-content-center mb-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-house`}></i></div>
                                    <h5>Accommodation</h5>
                                    <p>KRW 300,000 – 800,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>~KRW 300,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Internet & Mobile</h5>
                                    <p>KRW 40,000 – 60,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport (Public)</h5>
                                    <p>KRW 1,300 – 2,000 / trip</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                    <h5>Gas & Electricity</h5>
                                    <p>KRW 70,000 – 90,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-scissors`}></i></div>
                                    <h5>Haircut</h5>
                                    <p>KRW 15,000 – 30,000</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                    <h5>Working Hours</h5>
                                    <p>20 hrs/wk (semester) · Full-time (vacations)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                    <h5>Post-Study Work</h5>
                                    <p>1 – 3 Years (visa + employer-based)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                    <h5>PR Possibilities</h5>
                                    <p>Long-term/PR via work exp. & points</p>
                                </div>
                            </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Average Total Living Cost</span>
                        <strong>KRW 900,000 – 1,300,000 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to South Korea</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>KRW 50,000 – 90,000 (varies by type & nationality)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Decision Duration</h5>
                                    <p>2 – 8 Weeks</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-umbrella`}></i>
                                    <h5>Travel Insurance</h5>
                                    <p>Not mandatory, but strongly recommended</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Health Insurance</h5>
                                    <p>NHIS mandatory - KRW 60,000–80,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-ticket`}></i>
                                    <h5>Flight (from India)</h5>
                                    <p>INR 30,000 – 55,000 (one-way)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-piggy-bank`}></i>
                                    <h5>Proof of Funds</h5>
                                    <p>Min KRW 10,000,000 – 20,000,000 (tuition + living)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-passport`}></i>
                                    <h5>Identity Proof</h5>
                                    <p>Valid Passport required</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our South Korea experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>From K-Culture to <br /> K-Excellence in Education</h2>
                            <p>Study in the land of Samsung, BTS, and academic brilliance. South Korea blends technological innovation with centuries of rich culture - and top-ranked universities to match. Our experts will guide you to your dream Korean university.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SouthKorea;
