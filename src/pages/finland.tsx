import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Finland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Helsinki", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "5.6 Million", icon: "fa-users" },
        { label: "Languages", value: "Finnine / Swedish", icon: "fa-language" },
        { label: "Min Wage", value: "Trade Specific", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept & Jan", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€350 (Student)", icon: "fa-passport" },
    ];

    return (
        <div className="finland-page">
            <PageTitle
                title="Study in Finland"
                currentPage="Finland"
                backgroundImage="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />



            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">The Nordic Education Revolution</span>
                        <h2>Top 5 Reasons to Study in Finland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education System", desc: "Finland's education system is internationally acclaimed - consistently ranked among the world's best for innovation, quality, and student outcomes." },
                            { id: "02", title: "Affordable Tuition Fees", desc: "Public universities in Finland charge relatively low tuition for international students, with generous scholarships to reduce costs further." },
                            { id: "03", title: "Equality and Freedom", desc: "Finland is a global leader in equality, academic freedom, and student wellbeing - a society that genuinely values every individual." },
                            { id: "04", title: "High Standard of Living", desc: "Ranked among the happiest countries on Earth, Finland offers safety, clean air, excellent public services, and an outstanding quality of life." },
                            { id: "05", title: "Otherworldly Travel Destinations", desc: "From the Northern Lights in Lapland to thousands of pristine lakes and forests - Finland's natural beauty is unlike anywhere else in the world." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1374&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Land of the Midnight Sun - Where Education Meets Wonder</h3>
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
                                    <h4>13</h4>
                                    <p>Universities + Applied Sciences Institutions</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Applied Sciences (UAS)</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intake: September – December</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Business, Engineering, CS, Healthcare</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Duration: 2 – 4 Years</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Finnish Institutions</span>
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
                                                <td>Aalto University, University of Helsinki, Tampere University, University of Eastern Finland, University of Oulu, University of Jyväskylä, Åbo Akademi, Hanken School of Economics</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Aalto University, University of Helsinki, LUT University (Lappeenranta-Lahti)</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>Arcada University (€5,000–€8,500/yr), Tampere University (€6,000–€12,000/yr), University of Vaasa (€10,000–€12,000/yr), University of Eastern Finland (€8,000–€15,000/yr)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Helsinki, Aalto University, University of Turku, University of Eastern Finland</td>
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
                                        <td>Helsinki (Capital & Economic Hub)</td>
                                        <td>-25°C – 37.2°C</td>
                                        <td>~$3,837.30</td>
                                        <td>No statutory minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Turku</td>
                                        <td>Cold winters / Mild summers</td>
                                        <td>~€1,200 – €1,800</td>
                                        <td>No statutory minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Tampere</td>
                                        <td>Cold winters / Mild summers</td>
                                        <td>~€1,100 – €1,600</td>
                                        <td>No statutory minimum</td>
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
                                        <td>€4,000</td>
                                        <td>€25,000</td>
                                        <td>€10,000 – €18,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€6,000</td>
                                        <td>€20,000</td>
                                        <td>€8,000 – €15,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€12,000</td>
                                        <td>€30,000</td>
                                        <td>€15,000 – €25,000</td>
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
                                        <td>University of Eastern Finland Scholarship</td>
                                        <td>January</td>
                                        <td>€5,000</td>
                                    </tr>
                                    <tr>
                                        <td>Fulbright – University of Helsinki Graduate Award</td>
                                        <td>October</td>
                                        <td>€1,000/month (9 months)</td>
                                    </tr>
                                    <tr>
                                        <td>COLFUTURO Loan-Scholarships</td>
                                        <td>February</td>
                                        <td>$50,000</td>
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
                                    <p>€250 – €600 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                    <h5>Food</h5>
                                    <p>From €2.24 per meal</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bolt`}></i></div>
                                    <h5>Gas & Electricity</h5>
                                    <p>~€100 / mo</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                    <h5>Transport</h5>
                                    <p>€60 – €2,700 / yr (zone-based)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-scissors`}></i></div>
                                    <h5>Haircut</h5>
                                    <p>~€30</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-piggy-bank`}></i></div>
                                    <h5>Proof of Funds</h5>
                                    <p>Min €6,720 in bank</p>
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
                                    <p>2 Years</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cost-item-card">
                                    <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                    <h5>PR After</h5>
                                    <p>4 Years Continuous Residence (A-Permit)</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Finland</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-shield-halved`}></i>
                                    <h5>Visa Fees</h5>
                                    <p>€350</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-clock-rotate-left`}></i>
                                    <h5>Decision Duration</h5>
                                    <p>2 – 3 Months (apply early)</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-umbrella`}></i>
                                    <h5>Travel Insurance</h5>
                                    <p>Minimum €30,000 coverage required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-heart-pulse`}></i>
                                    <h5>Health Insurance</h5>
                                    <p>Min €30,000 medical + €100,000 cover required</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-ticket`}></i>
                                    <h5>Flight Cost (from India)</h5>
                                    <p>From ₹48,887</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="visa-info-card">
                                    <i className={`fa-solid fa-piggy-bank`}></i>
                                    <h5>Proof of Funds</h5>
                                    <p>Bank statement showing min €6,720 balance</p>
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
                                    <p>University Admission Letter required</p>
                                </div>
                            </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins consultation with our Finland experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Chase the Northern Lights <br /> & Your Degree in Finland</h2>
                            <p>Study in the world's happiest country - where education is world-class, nature is extraordinary, and your future is limitless. Our experts are ready to make it happen for you.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Finland;
