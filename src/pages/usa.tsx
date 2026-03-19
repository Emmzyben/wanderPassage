import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";
import { Link } from "react-router-dom";

const Usa = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Washington, D.C.", icon: "fa-city" },
        { label: "Currency", value: "USD ($)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "333 Million", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Min Wage", value: "$7.25 - $17.50/hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Fall, Spring, Summer", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "1 - 3 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "$185 (F1 Visa)", icon: "fa-passport" },
    ];

    return (
        <div className="usa-page">
            <PageTitle
                title="Study in the USA"
                currentPage="USA"
                backgroundImage="https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1510&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">The Land of Opportunity</span>
                        <h2>Top 5 Reasons to Study in USA</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Renowned Universities", desc: "Home to many of the world’s top institutions like Harvard, MIT, and Stanford, known for rigorous academics." },
                            { id: "02", title: "Diverse Academic Programs", desc: "American universities offer a wide range of programs allowing students to tailor education to career goals." },
                            { id: "03", title: "Innovative Research", desc: "A leader in research and development, students have access to cutting-edge facilities and experts." },
                            { id: "04", title: "Cultural Diversity", desc: "study in a rich cultural mosaic interacting with peers from various backgrounds enhancing global perspective." },
                            { id: "05", title: "Career Prospects", desc: "Benefit from strong career services, networking, and internships leading to successful job placements." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Achieve Your Academic Dreams in America</h3>
                    </div>
                </div>
            </div>

            {/* Education & Institutions */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="info-grid-section">
                                <div className="stat-card-premium mb-4">
                                    <h4>5300+</h4>
                                    <p>Total Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public & Private Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Technical & Community Colleges</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Fall, Spring, Summer</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP & LOR Required</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Prestigious Institutions</span>
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
                                                <td>Top 10 Unis</td>
                                                <td>Harvard, Columbia, Princeton, Stanford, UCLA, Cornell, MIT, Yale, UCB, UPenn</td>
                                            </tr>
                                            <tr>
                                                <td>Engineering</td>
                                                <td>MIT, UC Berkeley, Stanford, Caltech</td>
                                            </tr>
                                            <tr>
                                                <td>Affordability</td>
                                                <td>University of Wyoming ($16,500), Purdue ($28,794)</td>
                                            </tr>
                                            <tr>
                                                <td>Accept on MOI</td>
                                                <td>Chicago, Columbia, USC, Boston University</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geography Table */}
            <section className="geography-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Study</span>
                        <h2>Geography & Demography</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Winter/Summer Temp</th>
                                        <th>Avg Living Cost</th>
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Washington, D.C. (Capital)</td>
                                        <td>-4°C / 31°C</td>
                                        <td>$4,000 / mo</td>
                                        <td>$17.50 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>New York (Economic)</td>
                                        <td>-13°C / 36°C</td>
                                        <td>$4,130 / mo</td>
                                        <td>$15.00 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Chicago</td>
                                        <td>-4°C / 41°C</td>
                                        <td>$3,911 / mo</td>
                                        <td>$16.20 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Los Angeles</td>
                                        <td>-6°C / 30°C</td>
                                        <td>$3,437 / mo</td>
                                        <td>$17.27 / hr</td>
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
                                    <p>$1,000 - 1,500 /mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>$150 - 200 /mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                    <h5>Internet</h5>
                                    <p>$30 - 40 /mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport</h5>
                                    <p>$45 - 100 /mo</p>
                                </div>
                            </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>PR Possibilities:</span>
                        <strong>After 5 Years on Work Permit</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to USA</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>$185 (F1 Visa)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Decision</h5>
                                    <p>Typically 8 Days</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Insurance</h5>
                                    <p>Health Optional (Not Required)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-briefcase`}></i>
                                    <h5>Post-Study</h5>
                                    <p>2 Years Work Permit</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins session with our experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your American Dream <br /> Starts Here</h2>
                            <p>Unlock access to top-tier universities and a global career. Let our country experts guide you through every step.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Usa;
