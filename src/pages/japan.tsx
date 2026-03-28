import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Japan = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Tokyo", icon: "fa-city" },
        { label: "Currency", value: "Japanese Yen (¥)", icon: "fa-yen-sign" },
        { label: "Population", value: "125 Million", icon: "fa-users" },
        { label: "Language", value: "Japanese", icon: "fa-language" },
        { label: "Min Wage", value: "¥1,000 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "April & Oct", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 - 2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "¥3,000 - ¥6,000", icon: "fa-passport" },
    ];

    return (
        <div className="japan-page">
            <PageTitle
                title="Study in Japan"
                currentPage="Japan"
                backgroundImage="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1453&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />



            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where Tradition Meets Technological Innovation</span>
                        <h2>Top 5 Reasons to Study in Japan</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "High-Quality Education", desc: "Japan's globally ranked universities are renowned for excellence in science, technology, engineering, medicine, business, and cutting-edge research." },
                            { id: "02", title: "Government Support for International Students", desc: "The Japanese government actively promotes international education through scholarships (MEXT), student support services, and career guidance programmes." },
                            { id: "03", title: "English-Taught Programmes Available", desc: "Many leading universities offer degree programmes taught entirely in English, especially at bachelor's and master's levels, making it highly accessible." },
                            { id: "04", title: "Safe & Advanced Country", desc: "Japan is one of the world's safest countries with clean cities, ultra-efficient public transport, advanced infrastructure, and an outstanding quality of life." },
                            { id: "05", title: "Career & Research Opportunities", desc: "Japan offers outstanding career prospects in technology, robotics, engineering, IT, manufacturing, and world-class research institutions." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Cherry Blossoms, Robotics & World-Class Research - Welcome to Japan</h3>
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
                                    <h4>42+</h4>
                                    <p>Top-Ranked Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>National, Public, Private, Junior Colleges & Vocational</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: April (Main), Sep/Oct (Major), Jan (Limited)</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Science, Engineering, Medicine, Business, Arts, Research</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP & LOR Required; JLPT or English scores preferred</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Bachelor's 4 yrs · Master's 2 yrs · Diploma 1–3 yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities in Japan</h4>
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
                                                { rank: "01", name: "The University of Tokyo", known: "Science, Engineering, Law, Medicine" },
                                                { rank: "02", name: "Kyoto University", known: "Research, Science, Humanities" },
                                                { rank: "03", name: "Osaka University", known: "Medicine, Engineering, Science" },
                                                { rank: "04", name: "Tohoku University", known: "Materials Science, Engineering, Research" },
                                                { rank: "05", name: "Hokkaido University", known: "Agriculture, Veterinary, Science" },
                                                { rank: "06", name: "Tokyo Institute of Technology", known: "Technology, Engineering, Computing" },
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
                                        <td>Tokyo (Capital)</td>
                                        <td>1°C – 31°C</td>
                                        <td>JPY 150,000 – 200,000</td>
                                        <td>JPY 1,113</td>
                                    </tr>
                                    <tr>
                                        <td>Osaka (Economic Hub)</td>
                                        <td>3°C – 33°C</td>
                                        <td>JPY 120,000 – 180,000</td>
                                        <td>JPY 1,064</td>
                                    </tr>
                                    <tr>
                                        <td>Yokohama</td>
                                        <td>2°C – 31°C</td>
                                        <td>JPY 130,000 – 180,000</td>
                                        <td>JPY 1,112</td>
                                    </tr>
                                    <tr>
                                        <td>Nagoya</td>
                                        <td>0°C – 34°C</td>
                                        <td>JPY 110,000 – 160,000</td>
                                        <td>JPY 1,027</td>
                                    </tr>
                                    <tr>
                                        <td>Sapporo</td>
                                        <td>-8°C – 26°C</td>
                                        <td>JPY 100,000 – 150,000</td>
                                        <td>JPY 960</td>
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
                                        <td>JPY 500,000</td>
                                        <td>JPY 1,200,000</td>
                                        <td>JPY 800,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>JPY 600,000</td>
                                        <td>JPY 1,500,000</td>
                                        <td>JPY 1,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>JPY 900,000</td>
                                        <td>JPY 2,000,000</td>
                                        <td>JPY 1,400,000</td>
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
                                        <td>MEXT (Japanese Government Scholarship)</td>
                                        <td>December – January (varies by country)</td>
                                        <td>Full tuition, monthly stipend, and roundtrip airfare</td>
                                    </tr>
                                    <tr>
                                        <td>JASSO – Monbukagakusho Honors Scholarship</td>
                                        <td>April & October</td>
                                        <td>Monthly stipend up to JPY 48,000</td>
                                    </tr>
                                    <tr>
                                        <td>Japan Foundation for International Students</td>
                                        <td>April</td>
                                        <td>Up to JPY 500,000 per year</td>
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
                                    <p>JPY 30,000 – 80,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>~JPY 30,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Internet & Mobile</h5>
                                    <p>JPY 4,000 – 6,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport (Public)</h5>
                                    <p>JPY 200 – 400 per 10 km</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                    <h5>Gas & Electricity</h5>
                                    <p>JPY 10,000 – 12,000 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-scissors`}></i></div>
                                    <h5>Haircut</h5>
                                    <p>JPY 2,000 – 4,000</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                    <h5>Working Hours</h5>
                                    <p>28 hrs / week (international students)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                    <h5>Post-Study Work</h5>
                                    <p>1 – 3 Years (job + sponsor based)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                    <h5>PR Possibilities</h5>
                                    <p>Long-term residency via work exp.</p>
                                </div>
                            </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Average Total Living Cost</span>
                        <strong>JPY 100,000 – 150,000 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Japan</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>JPY 3,000 – 6,000 (varies by type & nationality)</p>
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
                                    <p>Not mandatory, but recommended</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Health Insurance</h5>
                                    <p>NHI mandatory - JPY 20,000–30,000 / year</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-ticket`}></i>
                                    <h5>Flight (from India)</h5>
                                    <p>INR 25,000 – 45,000 (one-way)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-piggy-bank`}></i>
                                    <h5>Proof of Funds</h5>
                                    <p>Min JPY 1,000,000 – 2,000,000 (tuition + living)</p>
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
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our Japan experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>From Cherry Blossoms to <br /> a Brilliant Career in Japan</h2>
                            <p>Study in one of Asia's most respected academic destinations - a nation that fuses deep tradition with futuristic innovation. MEXT scholarships, world-class research labs, and career opportunities await. Our experts will guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1453&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Japan;
