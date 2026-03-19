import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Canada = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Ottawa", icon: "fa-city" },
        { label: "Currency", value: "CAD ($)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "41.3 Million", icon: "fa-users" },
        { label: "Language", value: "English & French", icon: "fa-language" },
        { label: "Min Wage", value: "$15.00 - $17.40/hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Fall, Winter, Summer", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "Up to 3 Years", icon: "fa-briefcase" },
        { label: "Work Hours", value: "24 hrs / week", icon: "fa-clock" },
    ];

    return (
        <div className="canada-page">
            <PageTitle
                title="Study in Canada"
                currentPage="Canada"
                backgroundImage="https://images.unsplash.com/photo-1519832979-6fa6e479498e?q=80&w=1530&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Your Future Starts Here</span>
                        <h2>Top 5 Reasons to Study in Canada</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality of Life", desc: "Canada consistently ranks among the world's most livable countries, with safe cities, clean environment, and excellent healthcare." },
                            { id: "02", title: "Renowned Education Quality", desc: "Home to world-class universities and colleges offering globally recognized degrees that open doors to career opportunities worldwide." },
                            { id: "03", title: "Flexible & High-Quality Education", desc: "Choose from diverse institution types - universities, colleges, and research institutes - with flexible intakes across Fall, Winter, and Summer." },
                            { id: "04", title: "Diverse & Inclusive Society", desc: "Feel welcome in a multicultural country that values diversity, making international students feel at home from day one." },
                            { id: "05", title: "Memorable Adventures", desc: "From the Rocky Mountains to vibrant cities like Toronto and Vancouver, Canada offers unforgettable experiences beyond the classroom." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>A Gateway to Global Opportunities &amp; Adventures</h3>
                    </div>
                </div>
            </div>

            {/* Geography & Demography Table */}
            <section className="geography-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Live</span>
                        <h2>Geography &amp; Demography</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Min / Max Temp</th>
                                        <th>Avg Living Cost (CAD/mo)</th>
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ottawa (Capital)</td>
                                        <td>-15°C / 27°C</td>
                                        <td>CAD 2,728</td>
                                        <td>CAD 17.30 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Toronto (Economic Capital)</td>
                                        <td>-6°C / 30°C</td>
                                        <td>CAD 3,750</td>
                                        <td>CAD 17.20 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Montreal</td>
                                        <td>-4°C / 37.6°C</td>
                                        <td>CAD 3,406</td>
                                        <td>CAD 15.75 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Vancouver</td>
                                        <td>-5°C / 30°C</td>
                                        <td>CAD 3,500</td>
                                        <td>CAD 17.40 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Calgary</td>
                                        <td>-4°C / 36.5°C</td>
                                        <td>CAD 3,200</td>
                                        <td>CAD 15.00 / hr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education System & Institutions */}
            <section className="institutions-section section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="info-grid-section">
                                <div className="stat-card-premium mb-4">
                                    <h4>100+</h4>
                                    <p>Total Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Colleges, Research Institutes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Fall, Winter, Summer</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP &amp; LOR Required</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>MOI Acceptance: Yes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Duration: 1 – 4 Years</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Top Universities &amp; Colleges</h4>
                                    <span className="badge-style">World-Ranked Institutions</span>
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
                                                <td>Top 10 Universities</td>
                                                <td>Toronto, UBC, McGill, McMaster, U de Montreal, Western, Waterloo, Calgary, Ottawa, Alberta</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Tuition</td>
                                                <td>Memorial University of Newfoundland, University of Regina, Royal Roads University, U of Saskatchewan</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Alberta, Concordia University, Université de Montréal</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>McGill, University of Waterloo, University of Saskatchewan, University of Manitoba</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tuition Fees Section */}
            <section className="fees-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Financial Planning</span>
                        <h2>Tuition Fee Ranges</h2>
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
                                        <td>CA$550 / yr</td>
                                        <td>CA$30,000 / yr</td>
                                        <td>CA$29,714 / yr</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>CA$1,075 / yr</td>
                                        <td>CA$65,000 / yr</td>
                                        <td>CA$10,000 – 80,000 / yr</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>CA$20,000 / yr</td>
                                        <td>CA$120,000 / yr</td>
                                        <td>CA$30,000 – 40,000 / yr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarships Section */}
            <section className="scholarships-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Fund Your Education</span>
                        <h2>Available Scholarships</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                name: "Vanier Canada Graduate Scholarships",
                                deadline: "7 August",
                                amount: "$50,000 / yr - for three years",
                                link: "#",
                                icon: "fa-graduation-cap",
                            },
                            {
                                name: "Banting Postdoctoral Fellowships",
                                deadline: "September",
                                amount: "$70,000 annually - for two years",
                                link: "#",
                                icon: "fa-flask",
                            },
                            {
                                name: "Ontario Graduate Scholarship",
                                deadline: "September",
                                amount: "$15,000 / yr - or $5,000 / term",
                                link: "#",
                                icon: "fa-award",
                            },
                        ].map((s, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="scholarship-card">
                                    <div className="scholarship-icon">
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <h5>{s.name}</h5>
                                    <div className="scholarship-meta">
                                        <span className="meta-item">
                                            <i className="fa-regular fa-calendar"></i>
                                            Deadline: {s.deadline}
                                        </span>
                                        <span className="meta-item amount">
                                            <i className="fa-solid fa-dollar-sign"></i>
                                            {s.amount}
                                        </span>
                                    </div>
                                    <a href={s.link} className="theme-btn scholarship-btn">Visit Portal</a>
                                </div>
                            </div>
                        ))}
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
                                    <p>CAD 4,333 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>CAD 324.66 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Mobile & Internet</h5>
                                    <p>CAD 45.46 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport (Public)</h5>
                                    <p>CAD 104.90 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-taxi`}></i></div>
                                    <h5>Transport (Cab)</h5>
                                    <p>CAD 82.50 – 156 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                    <h5>Gas & Electricity</h5>
                                    <p>19.2 cents / kWh</p>
                                </div>
                            </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Average Living Cost:</span>
                        <strong>CAD 2,500 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Visa Information</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>INR 4,700 (Online Payment)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Processing</h5>
                                    <p>4 – 6 weeks (avg)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Travel Insurance</h5>
                                    <p>Approx $206</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-plane`}></i>
                                    <h5>Flight Ticket</h5>
                                    <p>From ₹31,698 (one-way)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-briefcase`}></i>
                                    <h5>Post-Study Work</h5>
                                    <p>8 months – 3 years</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-star`}></i>
                                    <h5>PR Pathways</h5>
                                    <p>PNP, Express Entry, CEC</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock`}></i>
                                    <h5>Working Hours</h5>
                                    <p>24 hrs / week</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30-minute session with our Canada experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Canadian Dream <br /> Starts Today</h2>
                            <p>Unlock access to world-class universities, a multicultural lifestyle, and unparalleled career prospects. Let our experts guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578923812985-a0db0c1e8726?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Canada;
