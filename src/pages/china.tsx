import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const China = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Beijing", icon: "fa-city" },
        { label: "Currency", value: "CNY (¥)", icon: "fa-yen-sign" },
        { label: "Population", value: "1.4 Billion", icon: "fa-users" },
        { label: "Language", value: "Mandarin", icon: "fa-language" },
        { label: "Min Wage", value: "CNY 22 - 27 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "March & Sept", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 - 2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "₹4,000 - ₹8,000", icon: "fa-passport" },
    ];

    return (
        <div className="china-page">
            <PageTitle
                title="Study in China"
                currentPage="China"
                backgroundImage="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

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
                            { id: "04", title: "Modern Cities with Rich Culture", desc: "From the ancient hutongs of Beijing to the futuristic skyline of Shanghai - China offers an incomparable blend of old and new." },
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
                        <h3>From the Great Wall to Great Learning - Experience China</h3>
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
                                <p>CNY 800 – 2,500 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                <h5>Food</h5>
                                <p>CNY 1,000 – 1,500 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                <h5>Internet & Mobile</h5>
                                <p>CNY 100 – 200 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                <h5>Transport (Public)</h5>
                                <p>CNY 2 – 5 per trip</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                <h5>Gas & Electricity</h5>
                                <p>CNY 250 – 400 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-scissors`}></i></div>
                                <h5>Haircut</h5>
                                <p>CNY 30 – 60</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                <h5>Working Hours</h5>
                                <p>Up to 20 hrs / wk (during study)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                <h5>Post-Study Work</h5>
                                <p>Job offer + employer sponsorship</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                <h5>PR Possibilities</h5>
                                <p>Long-term residence (work exp. required)</p>
                            </div>
                        </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Average Total Living Cost</span>
                        <strong>CNY 2,500 – 4,000 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to China</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-shield-halved`}></i>
                                <h5>Visa Fees</h5>
                                <p>INR 4,000 – 8,000 (varies by visa type)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-clock-rotate-left`}></i>
                                <h5>Decision Duration</h5>
                                <p>1 – 3 Weeks</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-umbrella`}></i>
                                <h5>Travel Insurance</h5>
                                <p>Recommended for international students</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-heart-pulse`}></i>
                                <h5>Health Insurance</h5>
                                <p>Mandatory - CNY 600 – 1,000 per year</p>
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
                                <p>Min CNY 30,000 – 50,000 (tuition + living)</p>
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
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our China experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>From the Great Wall to <br /> Great Opportunities in China</h2>
                            <p>Study at some of Asia's most prestigious institutions in a country that blends ancient culture with cutting-edge innovation. Affordable, ambitious, and globally connected - China is your next chapter. Our experts will guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default China;
