import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Germany = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Berlin", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "83.8 Million", icon: "fa-users" },
        { label: "Language", value: "German", icon: "fa-language" },
        { label: "Min Wage", value: "€12.41 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Winter & Summer", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "18 Months", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€75 (Student)", icon: "fa-passport" },
    ];

    return (
        <div className="germany-page">
            <PageTitle
                title="Study in Germany"
                currentPage="Germany"
                backgroundImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">World-Class & Affordable</span>
                        <h2>Top 5 Reasons to Study in Germany</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Affordable Tuition Fees", desc: "Study at top public universities with little to no tuition fees, making world-class education truly accessible." },
                            { id: "02", title: "World-Class Education", desc: "Globally recognized degrees with a strong focus on research and innovation across diverse disciplines." },
                            { id: "03", title: "Excellent Job Opportunities", desc: "High demand for skilled graduates with an 18-month post-study work visa to launch your career." },
                            { id: "04", title: "Pathway to PR & EU Access", desc: "Easy route to permanent residency in just 33 months and job opportunities across the entire EU." },
                            { id: "05", title: "Affordable Living & Work Rights", desc: "Low cost of living with part-time work options - up to 20 hours/week during semesters." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Engineering Excellence Meets European Culture</h3>
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
                                    <h4>400+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public & Technical Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities of Applied Sciences</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Winter (Oct) & Summer (Apr) Intakes</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP & LOR Required (Master's)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Ranking Institutions</span>
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
                                                <td>TU Munich, Humboldt Berlin, Charité Berlin, U Mannheim, LMU Munich, U Bonn, U Freiburg, Heidelberg, RWTH Aachen, U Göttingen</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>TU Munich, TU Berlin, RWTH Aachen, TU Darmstadt, KIT Karlsruhe, U Stuttgart</td>
                                            </tr>
                                            <tr>
                                                <td>Top 10 Private</td>
                                                <td>GISMA, SRH Berlin, Constructor U, Jacobs U, U of Europe, Munich Business School, BSBI, IU International U</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>U Stuttgart, U Leipzig, U Regensburg, U Potsdam, U Mannheim, U Bremen, U Kiel</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>U Siegen, U Giessen, TU Braunschweig, U Kaiserslautern, Free U Berlin, U Kiel</td>
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
                                        <th>Min / Max Temp</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Min Wages / mo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Berlin (Capital)</td>
                                        <td>0.6°C / 23.9°C</td>
                                        <td>€2,104</td>
                                        <td>€1,782.80</td>
                                    </tr>
                                    <tr>
                                        <td>Munich (Economic Hub)</td>
                                        <td>-1.7°C / 24.1°C</td>
                                        <td>€2,332</td>
                                        <td>€1,782.80</td>
                                    </tr>
                                    <tr>
                                        <td>Hamburg</td>
                                        <td>0°C / 22.2°C</td>
                                        <td>€2,022</td>
                                        <td>€1,782.80</td>
                                    </tr>
                                    <tr>
                                        <td>Frankfurt</td>
                                        <td>-1.1°C / 25°C</td>
                                        <td>€2,102</td>
                                        <td>€1,782.80</td>
                                    </tr>
                                    <tr>
                                        <td>Stuttgart</td>
                                        <td>-2.2°C / 24.4°C</td>
                                        <td>€2,063</td>
                                        <td>€1,782.80</td>
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
                                        <th>Public Universities (€)</th>
                                        <th>Private Universities (€)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bachelor's Degree</td>
                                        <td>€300 – €700</td>
                                        <td>€10,000 – €20,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>€300 – €1,500</td>
                                        <td>€10,000 – €20,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>€300 – €700</td>
                                        <td>€8,000 – €50,000</td>
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
                                <p>€300 – €600 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-utensils`}></i></div>
                                <h5>Food</h5>
                                <p>€150 – €300 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-wifi`}></i></div>
                                <h5>Internet</h5>
                                <p>€20 – €40 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-bus`}></i></div>
                                <h5>Transport</h5>
                                <p>€50 – €100 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-clock`}></i></div>
                                <h5>Working Hours</h5>
                                <p>20 hrs/week (semester)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-briefcase`}></i></div>
                                <h5>Post-Study Permit</h5>
                                <p>18 Months</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cost-item-card">
                                <div className="cost-icon"><i className={`fa-solid fa-id-card`}></i></div>
                                <h5>PR Possibilities</h5>
                                <p>33 months (Blue Card)</p>
                            </div>
                        </div>
                    </div>
                    <div className="cost-total-bar">
                        <span>Total Estimated Average:</span>
                        <strong>€800 – €1,200 / month</strong>
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section className="visa-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Gateway to Germany</span>
                        <h2>Visa Requirements</h2>
                    </div>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-shield-halved`}></i>
                                <h5>Visa Fees</h5>
                                <p>€75</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-clock-rotate-left`}></i>
                                <h5>Decision Duration</h5>
                                <p>4–12 Weeks</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-heart-pulse`}></i>
                                <h5>Health Insurance</h5>
                                <p>€130 – €150 / mo</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-plane`}></i>
                                <h5>Flight Cost (from India)</h5>
                                <p>~€600 – €700</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-piggy-bank`}></i>
                                <h5>Proof of Funds</h5>
                                <p>€11,904 (Blocked Account)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="visa-info-card">
                                <i className={`fa-solid fa-file-lines`}></i>
                                <h5>Key Documents</h5>
                                <p>Passport, Admission Letter, SOP, Transcripts</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="visa-cta-text">Book your FREE 30 mins session with our Germany experts today.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* Best Universities Deep Dive */}
            <section className="universities-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Study</span>
                        <h2>Best Universities in Germany</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>University</th>
                                        <th>Notable Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { uni: "Technical University of Munich (TUM)", feat: "Ranked among Europe's best; excels in engineering, technology & natural sciences with strong industry ties." },
                                        { uni: "Ludwig Maximilian University (LMU)", feat: "One of Germany's oldest; known for humanities, law & life sciences with a strong research focus." },
                                        { uni: "Heidelberg University", feat: "Famous for medicine & biosciences; world-class research centers and a vibrant international community." },
                                        { uni: "RWTH Aachen University", feat: "Leading technical university in mechanical & automotive engineering with close industry collaborations." },
                                        { uni: "Humboldt University Berlin", feat: "Known for arts, social sciences & natural sciences; excellent research in Germany's capital." },
                                    ].map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.uni}</td>
                                            <td>{row.feat}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intakes Table */}
            <section className="intakes-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Planning Your Application</span>
                        <h2>Intakes & Admission Timeline</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Intake</th>
                                        <th>Application Window</th>
                                        <th>Course Start</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Summer (April)</td>
                                        <td>November – January</td>
                                        <td>April</td>
                                    </tr>
                                    <tr>
                                        <td>Winter (October) - Primary</td>
                                        <td>May – July</td>
                                        <td>October</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your German Dream <br /> Starts Today</h2>
                            <p>Get free tuition at world-class universities. Let our Germany experts guide you through every step - from university selection to visa approval.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Germany;
