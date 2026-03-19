import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Switzerland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Bern", icon: "fa-city" },
        { label: "Currency", value: "Swiss Franc (CHF)", icon: "fa-coins" },
        { label: "Population", value: "8.9 Million", icon: "fa-users" },
        { label: "Languages", value: "DE, FR, IT", icon: "fa-language" },
        { label: "Min Wage", value: "CHF 24 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "6 Months", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "CHF 88", icon: "fa-passport" },
        { label: "GDP Per Capita", value: "$92,980+", icon: "fa-chart-line" },
        { label: "Employment Rate", value: "67.70%", icon: "fa-briefcase" },
        { label: "Land Area", value: "41,285 km²", icon: "fa-map" },
    ];

    return (
        <div className="switzerland-page">
            <PageTitle
                title="Study in Switzerland"
                currentPage="Switzerland"
                backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Precision, Excellence & Alpine Prestige</span>
                        <h2>Top 5 Reasons to Study in Switzerland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality Education", desc: "Switzerland hosts some of the world's top-ranked universities - ETH Zurich, EPFL, and others - known for cutting-edge research and academic excellence." },
                            { id: "02", title: "Cultural Diversity", desc: "With four national languages and a rich multicultural society, Switzerland offers a uniquely diverse and inclusive environment for international students." },
                            { id: "03", title: "High Living Standard", desc: "Among the highest quality of life globally - clean cities, efficient public services, safety, and excellent healthcare make student life comfortable." },
                            { id: "04", title: "The Rest of Europe at Your Doorstep", desc: "Ideally located at the heart of Europe, surrounded by France, Germany, Austria, and Italy - weekend travels have never been easier." },
                            { id: "05", title: "A Safe Place to Live", desc: "Switzerland is consistently ranked among the safest countries in the world, giving students and their families complete peace of mind." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Study at the Heart of Europe - Where Alps Meet Academia</h3>
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
                                    <h4>12</h4>
                                    <p>Federal & Cantonal Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities, Colleges & Schools</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: September & February</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, Hospitality, Environment</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Durations: 1.5–2 yrs / 3 yrs / 4–5 yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Swiss Institutions</span>
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
                                                <td>University of Zurich, University of Bern, University of Geneva, University of Lausanne, University of Fribourg, ETH Zurich</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Zurich, University of Basel, University of Geneva, University of St. Gallen</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Geneva (CHF 500/semester), University of Neuchâtel (CHF 515/semester), University of Lausanne (CHF 800/semester)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Geneva, University of Bern, University of Lausanne</td>
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
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bern (Capital)</td>
                                        <td>18°C – 41.5°C</td>
                                        <td>CHF 4,000 – CHF 8,000</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Zurich (Economic Capital)</td>
                                        <td>Cold winters / Warm summers</td>
                                        <td>CHF 4,500 – CHF 8,500</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Geneva</td>
                                        <td>Cold winters / Warm summers</td>
                                        <td>CHF 4,200 – CHF 7,500</td>
                                        <td>CHF 24.32 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Lausanne</td>
                                        <td>Mild / Warm</td>
                                        <td>CHF 3,800 – CHF 6,500</td>
                                        <td>CHF 24.32 / hr</td>
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
                                        <td>€15,000</td>
                                        <td>€40,000</td>
                                        <td>€25,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€16,400</td>
                                        <td>€27,300</td>
                                        <td>€16,400</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>CHF 20,000</td>
                                        <td>CHF 35,000</td>
                                        <td>CHF 70,000</td>
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
                                        <td>EPFL Excellence Fellowships</td>
                                        <td>January 31 / April 30</td>
                                        <td>CHF 24,000</td>
                                    </tr>
                                    <tr>
                                        <td>ETH Zurich Excellence Scholarships</td>
                                        <td>November 30</td>
                                        <td>Up to CHF 12,000</td>
                                    </tr>
                                    <tr>
                                        <td>The Graduate Institute Geneva (IHEID)</td>
                                        <td>January 15</td>
                                        <td>CHF 20,000</td>
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
                                    <p>€370 – €740 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>CHF 300 – 500 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Internet & Mobile</h5>
                                    <p>€50 – €100 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport (Public)</h5>
                                    <p>CHF 90 – 200 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                    <h5>Gas & Electricity</h5>
                                    <p>€30 – €60 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-scissors`}></i></div>
                                    <h5>Haircut</h5>
                                    <p>~€43</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                    <h5>Working Hours</h5>
                                    <p>8 hrs / day</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                    <h5>Post-Study Work</h5>
                                    <p>6 Months</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                    <h5>PR Possibilities</h5>
                                    <p>Yes (multiple routes)</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Switzerland</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>₹7,000</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Decision Duration</h5>
                                    <p>15 Working Days</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-umbrella`}></i>
                                    <h5>Travel Insurance</h5>
                                    <p>Required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Health Insurance</h5>
                                    <p>Required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-ticket`}></i>
                                    <h5>Flight Cost (from India)</h5>
                                    <p>~₹61,424</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-piggy-bank`}></i>
                                    <h5>Proof of Funds</h5>
                                    <p>Bank Statement required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-passport`}></i>
                                    <h5>Identity Proof</h5>
                                    <p>Valid Passport required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-file-lines`}></i>
                                    <h5>Invitation Letter</h5>
                                    <p>Required (University Letter)</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our Switzerland experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Where the Alps Meet <br /> Academic Excellence</h2>
                            <p>Study in one of the world's most prestigious destinations - a multilingual country at the heart of Europe with globally ranked universities and an unmatched quality of life. Our experts will guide you every step of the way.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Switzerland;
