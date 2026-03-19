import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Spain = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Madrid", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "48 Million", icon: "fa-users" },
        { label: "Language", value: "Spanish", icon: "fa-language" },
        { label: "Min Wage", value: "€1,134 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 Year", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€60 - €150", icon: "fa-passport" },
    ];

    return (
        <div className="spain-page">
            <PageTitle
                title="Study in Spain"
                currentPage="Spain"
                backgroundImage="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=1471&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Passion, Culture & Academic Excellence</span>
                        <h2>Top 5 Reasons to Study in Spain</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality Education", desc: "Spain is home to many prestigious universities with high academic standards and internationally recognized qualifications." },
                            { id: "02", title: "Cultural Richness", desc: "Experience a vibrant culture, rich history, stunning architecture, and centuries-old traditions that bring education to life." },
                            { id: "03", title: "Language Opportunities", desc: "Improve your Spanish in a native environment - one of the world's most spoken languages - boosting your global employability." },
                            { id: "04", title: "Affordability", desc: "Competitive tuition fees and a relatively low cost of living compared to other Western European countries make Spain a smart choice." },
                            { id: "05", title: "International Community", desc: "Join a welcoming, diverse student community with excellent opportunities for networking and global connections." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Passion, Culture & Knowledge Converge</h3>
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
                                    <h4>80+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Vocational & Tech Institutes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: September & February</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Bachelor's, Master's & Doctoral</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Spanish Institutions</span>
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
                                                <td>University of Barcelona, Autonomous University of Barcelona, Technical University of Madrid, Pompeu Fabra, Complutense Madrid, Carlos III Madrid, Autonomous University of Madrid, University of Granada</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Polytechnic University of Catalonia (UPC), University of Seville, UPM Madrid, University of Granada, Carlos III (UC3M), UPV Valencia, Universitat Jaume I</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Valencia, University of Granada, University of Salamanca, Instituto de Educación Secundaria (IES)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Barcelona, IE University, Complutense Madrid, IE Business School, University of Valencia, ESADE, University of Granada, ESIC</td>
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
                                        <td>Madrid (Capital & Economic Hub)</td>
                                        <td>2°C – 34°C</td>
                                        <td>€1,000 – €1,500</td>
                                        <td>€1,260</td>
                                    </tr>
                                    <tr>
                                        <td>Barcelona</td>
                                        <td>6°C – 30°C</td>
                                        <td>€1,000 – €1,600</td>
                                        <td>€1,260</td>
                                    </tr>
                                    <tr>
                                        <td>Valencia</td>
                                        <td>5°C – 33°C</td>
                                        <td>€800 – €1,200</td>
                                        <td>€1,260</td>
                                    </tr>
                                    <tr>
                                        <td>Seville</td>
                                        <td>5°C – 36°C</td>
                                        <td>€700 – €1,100</td>
                                        <td>€1,260</td>
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
                                        <td>~€6,000</td>
                                        <td>€20,000+</td>
                                        <td>€10,000 – €15,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>~€6,000</td>
                                        <td>€30,000+</td>
                                        <td>€10,000 – €20,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>~€15,000</td>
                                        <td>€40,000+</td>
                                        <td>€25,000 – €35,000</td>
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
                                        <td>CHARM-EU Grant</td>
                                        <td>As per university</td>
                                        <td>Up to €16,000</td>
                                    </tr>
                                    <tr>
                                        <td>UB Fellowships & Erasmus+</td>
                                        <td>As per university</td>
                                        <td>Up to €1,400 / month</td>
                                    </tr>
                                    <tr>
                                        <td>Santander Scholarships & Erasmus+</td>
                                        <td>As per university</td>
                                        <td>Up to €1,400 / month</td>
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
                                    <p>€1,000 – €1,500 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>€200 – €300 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Internet & Mobile</h5>
                                    <p>€30 – €50 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport (Public)</h5>
                                    <p>€50 – €70 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                    <h5>Working Hours</h5>
                                    <p>35 – 40 hrs / week</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                    <h5>Post-Study Work</h5>
                                    <p>1 Year (initial)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                    <h5>PR After</h5>
                                    <p>5 Years Legal Residency</p>
                                </div>
                            </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Proof of Funds Required:</span>
                        <strong>~€8,400 / year (12 × €700)</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Spain</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>€60 – €150</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Decision Duration</h5>
                                    <p>1 – 3 Months</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-umbrella`}></i>
                                    <h5>Travel Insurance</h5>
                                    <p>€70 – €150+ (mandatory)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Health Insurance</h5>
                                    <p>€100 – €300 / month (comprehensive)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-ticket`}></i>
                                    <h5>Flight Cost</h5>
                                    <p>€400 – €1,000</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-piggy-bank`}></i>
                                    <h5>Proof of Funds</h5>
                                    <p>~€8,400 for 1-year study - bank statements required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-passport`}></i>
                                    <h5>Identity Proof</h5>
                                    <p>Valid Passport + additional ID for long-term visa</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our Spain experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>¡Bienvenido! - Your <br /> Spanish Chapter Awaits</h2>
                            <p>Study in a country where passion meets purpose - world-class universities, an unbeatable lifestyle, and a global language at your fingertips. Our experts are ready to guide you.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Spain;
