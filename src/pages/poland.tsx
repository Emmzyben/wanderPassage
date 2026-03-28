import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Poland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Warsaw", icon: "fa-city" },
        { label: "Currency", value: "Złoty (PLN)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "38 Million", icon: "fa-users" },
        { label: "Language", value: "Polish", icon: "fa-language" },
        { label: "Min Wage", value: "€611 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Feb", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 - 3 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "INR 8,272 (avg)", icon: "fa-passport" },
    ];

    return (
        <div className="poland-page">
            <PageTitle
                title="Study in Poland"
                currentPage="Poland"
                backgroundImage="https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1469&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Europe's Hidden Gem for Students</span>
                        <h2>Top 5 Reasons to Study in Poland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Advanced Quality of Education", desc: "Polish universities offer a high standard of education, with many programmes internationally recognized and accredited." },
                            { id: "02", title: "Affordable Tuition Costs", desc: "Tuition fees in Poland are significantly lower than Western Europe, making it one of the most cost-effective study destinations." },
                            { id: "03", title: "Vibrant Culture", desc: "Poland has a rich history, vibrant arts scene, and is home to some of Europe's most beautiful medieval cities." },
                            { id: "04", title: "Economic Living Costs", desc: "The cost of living in Poland is among the lowest in the EU, allowing students to enjoy a high quality of life on a budget." },
                            { id: "05", title: "Exciting Student Life", desc: "With over 450 universities and a large student population, Poland offers a dynamic and energetic campus experience." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Discover Europe's Most Affordable Study Destination</h3>
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
                                    <h4>450+</h4>
                                    <p>Total Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public & Private Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: September & March</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Arts, Commerce & MBA</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Polish Institutions</span>
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
                                                <td>University of Warsaw, Jagiellonian University, Adam Mickiewicz University, University of Wrocław, Nicolaus Copernicus University</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Gdansk University of Technology, AGH University of Krakow, Silesian University of Technology</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>University of Wroclaw (€3,000), Adam Mickiewicz University (€2,000–€4,000), University of Silesia in Katowice (€2,500)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Warsaw, Adam Mickiewicz University (Poznan), University of Silesia in Katowice</td>
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
                                        <td>Warsaw (Capital & Economic Hub)</td>
                                        <td>2°C – 40.2°C</td>
                                        <td>$753.60</td>
                                        <td>€610.79</td>
                                    </tr>
                                    <tr>
                                        <td>Kraków</td>
                                        <td>Mild / Warm Summers</td>
                                        <td>~$600 – $750</td>
                                        <td>€610.79</td>
                                    </tr>
                                    <tr>
                                        <td>Łódź</td>
                                        <td>Mild / Warm Summers</td>
                                        <td>~$500 – $650</td>
                                        <td>€610.79</td>
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
                                        <td>€1,500 – €2,000</td>
                                        <td>€2,000 – €4,000</td>
                                        <td>€2,000 – €4,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€3,500 – €4,000</td>
                                        <td>€8,000</td>
                                        <td>€2,500 – €3,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€8,000</td>
                                        <td>€12,000</td>
                                        <td>€8,000 – €12,000</td>
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
                                <p>~$500 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                <h5>Food</h5>
                                <p>$4 – $8 per meal</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                <h5>Internet & Mobile</h5>
                                <p>40 zł / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                <h5>Transport (Public)</h5>
                                <p>PLN 1.5 – 3 per ride</p>
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
                                <p>1 – 3 Years</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                <h5>PR After</h5>
                                <p>5 Years Continuous</p>
                            </div>
                        </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Total Estimated Average:</span>
                        <strong>€330 – €430 / month (1,500 – 2,000 PLN)</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Poland</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-shield-halved`}></i>
                                <h5>Visa Fees</h5>
                                <p>INR 8,272 (Adults)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-clock-rotate-left`}></i>
                                <h5>Decision Duration</h5>
                                <p>Within 15 Days</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-umbrella`}></i>
                                <h5>Travel Insurance</h5>
                                <p>Mandatory for Poland Visa</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-heart-pulse`}></i>
                                <h5>Health Insurance</h5>
                                <p>Mandatory Requirement</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-ticket`}></i>
                                <h5>Flight Cost (from Mumbai)</h5>
                                <p>~₹54,202</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-piggy-bank`}></i>
                                <h5>Proof of Funds</h5>
                                <p>Bank Certificate, Traveler's Cheque</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-passport`}></i>
                                <h5>Identity Proof</h5>
                                <p>Valid Passport Required</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-file-lines`}></i>
                                <h5>Invitation Letter</h5>
                                <p>Admission Letter Required</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins consultation session with our Poland experts.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Polish Adventure <br /> Begins Here</h2>
                            <p>World-class education at a fraction of the cost. Study in the heart of Europe and open doors to opportunities across the EU.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1469&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Poland;
