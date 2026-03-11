import PageTitle from "@/components/sections/pageTitle";

const Singapore = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="singapore-page">
            <PageTitle
                title="Study in Singapore"
                currentPage="Singapore"
                backgroundImage="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1452&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "SGD", icon: "fa-money-bill-transfer" },
                        { label: "Population", value: "6.04 Million", icon: "fa-users" },
                        { label: "Language", value: "English", icon: "fa-language" },
                        { label: "Continent", value: "SE Asia", icon: "fa-earth-asia" },
                        { label: "Wage (Min)", value: "SGD 1,600/mo", icon: "fa-wallet" },
                        { label: "Regions", value: "5", icon: "fa-landmark" },
                    ].map((item, idx) => (
                        <div key={idx} className="overview-item">
                            <i className={`fa-solid ${item.icon}`}></i>
                            <div className="details">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Asia's Education Powerhouse</span>
                        <h2>Top 5 Reasons to Study in Singapore</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "High-Quality Education", desc: "Singapore's institutions are globally recognized for academic excellence and innovation, consistently ranking among the world's best." },
                            { id: "02", title: "Strategic Location", desc: "Positioned at the heart of Asia, Singapore offers unrivalled access to major economic hubs across the continent." },
                            { id: "03", title: "Safe & Clean City", desc: "Known for its low crime rates and pristine environment, Singapore ensures a secure and comfortable lifestyle for students." },
                            { id: "04", title: "Abundant Career Opportunities", desc: "With its thriving economy, Singapore provides excellent internship and job opportunities for graduates globally." },
                            { id: "05", title: "Multicultural Environment", desc: "The country's diverse culture offers a welcoming and inclusive atmosphere, making every international student feel at home." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>The Lion City — Where Ambition Meets Opportunity</h3>
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
                                    <h4>40+</h4>
                                    <p>Accredited Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Colleges</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Aug/Sep, Jan/Feb, Apr</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Business, CS & more</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
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
                                                <td>Top Universities</td>
                                                <td>National University of Singapore (NUS), James Cook University, Nanyang Technological University (NTU), Singapore University of Technology & Design (SUTD)</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>Nanyang Technological University, National University of Singapore, Singapore University of Technology & Design</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>Singapore Management University, National College of Singapore, Nanyang Technological University</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>NUS (S$30,000–S$37,500/yr), NTU (S$30,000–S$35,000/yr), SMU (S$41,000–S$47,000/yr)</td>
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
                                        <th>Area</th>
                                        <th>Temp Range</th>
                                        <th>Avg Living Cost / mo</th>
                                        <th>Avg Salary / mo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Singapore (Capital & Economic Hub)</td>
                                        <td>21°C – 37°C</td>
                                        <td>SGD 2,800 – 3,800</td>
                                        <td>SGD 4,500 – 6,000</td>
                                    </tr>
                                    <tr>
                                        <td>Jurong East</td>
                                        <td>24°C – 32°C</td>
                                        <td>SGD 2,300 – 2,800</td>
                                        <td>SGD 4,200 – 5,800</td>
                                    </tr>
                                    <tr>
                                        <td>Orchard Road</td>
                                        <td>24°C – 32°C</td>
                                        <td>SGD 2,800 – 3,800</td>
                                        <td>SGD 4,800 – 6,500</td>
                                    </tr>
                                    <tr>
                                        <td>Bedok</td>
                                        <td>24°C – 32°C</td>
                                        <td>SGD 2,300 – 2,800</td>
                                        <td>SGD 4,000 – 5,500</td>
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
                                        <td>SGD 10,000</td>
                                        <td>SGD 50,000</td>
                                        <td>SGD 30,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>SGD 35,000</td>
                                        <td>SGD 45,000</td>
                                        <td>SGD 40,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>SGD 40,000</td>
                                        <td>SGD 120,000</td>
                                        <td>SGD 45,000</td>
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
                                        <td>Goh Keng Swee Scholarship</td>
                                        <td>March</td>
                                        <td>SGD 6,500</td>
                                    </tr>
                                    <tr>
                                        <td>INSEAD-Syngenta MBA Scholarships</td>
                                        <td>September</td>
                                        <td>Up to €22,500</td>
                                    </tr>
                                    <tr>
                                        <td>SIM GE India Scholarship</td>
                                        <td>February</td>
                                        <td>SGD 15,000</td>
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

            {/* Cost & Visa Section */}
            <section className="cost-visa-section section-padding bg-dark text-white" style={{ borderRadius: '40px 40px 0 0' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Financial Planning</span>
                                <h2 className="text-white">Living Costs</h2>
                            </div>
                            <div className="row g-3">
                                {[
                                    { label: "Accommodation", value: "SGD 150 – 800 / mo", icon: "fa-house" },
                                    { label: "Food", value: "SGD 400 – 800 / mo", icon: "fa-utensils" },
                                    { label: "Internet", value: "SGD 50 – 80 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "SGD 100 – 150 / mo", icon: "fa-bus" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="visa-benefit-card bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                            <div className="icon-box" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <h5>{item.label}</h5>
                                            <p className="text-white-50">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="total-highlight mt-4 p-4 text-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <span className="text-white-50">Total Estimated Average:</span>
                                <h3 className="mb-0 mt-2 text-white">SGD 1,935 – SGD 3,785 / month</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "16 hrs/week + full-time holidays", icon: "fa-clock" },
                                    { label: "Post-Study Permit", value: "LTVP – 1 Year", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Yes", icon: "fa-id-card" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-4">
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', marginBottom: '10px', display: 'block', color: 'var(--theme)' }}></i>
                                            <strong style={{ fontSize: '13px', display: 'block' }}>{item.label}</strong>
                                            <p style={{ fontSize: '14px', margin: 0, opacity: 0.7 }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Singapore</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "SGD 120" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "3 – 5 Working Days" },
                                        { icon: "fa-plane", label: "Travel Insurance", value: "Not Mandatory, but Recommended" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Not Compulsory" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "INR 7,000 – INR 17,000" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Student/Education Loan from Bank" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport Required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "Admission Letter from University" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to Singapore?</h4>
                                <p>Book your FREE 30 mins consultation session with our Singapore experts.</p>
                                <button onClick={handleOpenModal} className="theme-btn w-100">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Singapore Story <br /> Begins Here</h2>
                            <p>Study at one of Asia's finest institutions in the world's most connected city. Our experts will guide you from application to arrival.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1452&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Singapore;
