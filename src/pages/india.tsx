import PageTitle from "@/components/sections/pageTitle";

const India = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="india-page">
            <PageTitle
                title="Study in India"
                currentPage="India"
                backgroundImage="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1471&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "Indian Rupee (₹)", icon: "fa-indian-rupee-sign" },
                        { label: "Population", value: "141.72 Crores", icon: "fa-users" },
                        { label: "Languages", value: "Hindi & English", icon: "fa-language" },
                        { label: "Continent", value: "Southern Asia", icon: "fa-earth-asia" },
                        { label: "Wage (Min)", value: "₹178/day", icon: "fa-wallet" },
                        { label: "States", value: "28 States", icon: "fa-landmark" },
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

            {/* Key Stats Strip */}
            <div className="container">
                <div className="row g-3 mb-5">
                    {[
                        { label: "Per Capita Income 2023", value: "$2,485", icon: "fa-chart-line" },
                        { label: "Employment Rate 2024", value: "56.00%", icon: "fa-briefcase" },
                        { label: "Land Area", value: "3,287,263 km²", icon: "fa-map" },
                        { label: "Total Universities", value: "1,113+", icon: "fa-school" },
                    ].map((item, idx) => (
                        <div key={idx} className="col-lg-3 col-md-6">
                            <div className="stat-strip-card">
                                <i className={`fa-solid ${item.icon}`}></i>
                                <div>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">The World's Largest Democracy & Fastest Growing Economy</span>
                        <h2>Top 5 Reasons to Study in India</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Comfortable Campus Life", desc: "Indian universities offer vibrant campus experiences with hostels, sports, cultural events, and student clubs that make learning a complete lifestyle." },
                            { id: "02", title: "World's 2nd Largest Higher Ed System", desc: "India has over 1,100 universities and 45,000+ colleges — the second-largest higher education system on Earth, offering an extraordinary breadth of options." },
                            { id: "03", title: "Ample Job Opportunities", desc: "With one of the world's fastest growing economies, India's booming sectors — IT, pharma, finance, and manufacturing — offer outstanding career prospects." },
                            { id: "04", title: "Quality Education", desc: "IITs and IIMs consistently rank among the world's top institutions, with rigorous academic standards and globally respected degrees." },
                            { id: "05", title: "International Exposure", desc: "Students from across the globe study in India, bringing a truly international learning experience enriched by India's diverse culture and heritage." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Ancient Wisdom Meets Modern Innovation — Study in Incredible India</h3>
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
                                    <h4>1,113+</h4>
                                    <p>Universities Across India</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public, Deemed, IITs, IIMs & AICTE</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Jan, Feb, July, August</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Arts, Commerce, Science</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Duration: 1 – 4 Years</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">Top Indian Institutions</span>
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
                                                <td>IIT Bombay, IIT Delhi, IIT Madras, IISc, IIT Kharagpur, IIT Kanpur, University of Delhi</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>IIT Madras, IIT Hyderabad, Thapar Institute of Engineering & Technology, IIT Ropar</td>
                                            </tr>
                                            <tr>
                                                <td>Affordable Fees</td>
                                                <td>IEC University (₹1.12L/yr), Osmania University (₹47,700/yr), Nirma University (₹1.38L/yr)</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>Most public universities, IITs, IIMs and Deemed Universities accept Medium of Instruction certificates</td>
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
                        <h2>Major Cities at a Glance</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Role</th>
                                        <th>Climate</th>
                                        <th>Min Wages / day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Delhi</td>
                                        <td>National Capital</td>
                                        <td>Extreme winters / Hot summers</td>
                                        <td>₹178</td>
                                    </tr>
                                    <tr>
                                        <td>Mumbai</td>
                                        <td>Economic Capital</td>
                                        <td>Tropical / Humid</td>
                                        <td>₹178</td>
                                    </tr>
                                    <tr>
                                        <td>Bangalore</td>
                                        <td>IT & Startup Hub</td>
                                        <td>Pleasant year-round</td>
                                        <td>₹178</td>
                                    </tr>
                                    <tr>
                                        <td>Pune</td>
                                        <td>Education & Tech City</td>
                                        <td>Moderate / Pleasant</td>
                                        <td>₹178</td>
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
                                        <td>₹3,000 – ₹10,000</td>
                                        <td>₹20,000 – ₹60,000</td>
                                        <td>₹20,000 – ₹50,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>₹5,000 – ₹1 Lakh</td>
                                        <td>₹3,00,000</td>
                                        <td>₹1,40,000 – ₹1,90,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>₹50,000 – ₹60,000</td>
                                        <td>₹2 Lakhs</td>
                                        <td>Up to ₹20 Lakhs (premium)</td>
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
                                        <td>Fulbright-Nehru Doctoral Research Fellowship</td>
                                        <td>July</td>
                                        <td>Varies (Full Fellowship)</td>
                                    </tr>
                                    <tr>
                                        <td>National Overseas Scholarship</td>
                                        <td>February – March</td>
                                        <td>USD 15,400</td>
                                    </tr>
                                    <tr>
                                        <td>Commonwealth Scholarship</td>
                                        <td>December</td>
                                        <td>£1,000 / month</td>
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
                                    { label: "Accommodation", value: "~₹20,000 / mo (~$245)", icon: "fa-house" },
                                    { label: "Food", value: "₹60 – ₹80 / meal (~$1 per meal)", icon: "fa-utensils" },
                                    { label: "Internet & Mobile", value: "₹399 / mo", icon: "fa-wifi" },
                                    { label: "Transport (Public)", value: "₹30 – ₹50 / day", icon: "fa-bus" },
                                    { label: "Gas & Electricity", value: "₹800 per 15 kg (gas)", icon: "fa-bolt" },
                                    { label: "Haircut", value: "~₹100", icon: "fa-scissors" },
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
                            <div className="row g-3 mt-3">
                                {[
                                    { label: "Working Hours", value: "8 hrs / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "2 Years", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "Consult an Expert", icon: "fa-id-card" },
                                ].map((item, idx) => (
                                    <div key={idx} className="col-sm-4">
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', textAlign: 'center', color: '#fff' }}>
                                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '24px', marginBottom: '10px', display: 'block', color: 'var(--theme)' }}></i>
                                            <strong style={{ fontSize: '12px', display: 'block' }}>{item.label}</strong>
                                            <p style={{ fontSize: '13px', margin: 0, opacity: 0.7 }}>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-4" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <h6 className="text-white mb-2" style={{ fontSize: '13px', opacity: 0.7 }}>Why India Stands Out</h6>
                                <div className="row g-2">
                                    {[
                                        "2nd Largest Education System",
                                        "1,113+ Universities",
                                        "IITs Ranked World-Class",
                                        "Extremely Affordable Living",
                                        "Booming IT & Startup Ecosystem",
                                        "Rich Cultural Experience",
                                    ].map((point, i) => (
                                        <div key={i} className="col-sm-6">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', fontSize: '12px', flexShrink: 0 }}></i>
                                                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{point}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to India</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "$100 (Student Visa)" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "10 – 14 Days" },
                                        { icon: "fa-umbrella", label: "Travel Insurance", value: "Not required for India" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Not required for India" },
                                        { icon: "fa-ticket", label: "Flight Cost", value: "Varies by country of origin" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "Bank statements for last 3 months" },
                                        { icon: "fa-passport", label: "Identity Proof", value: "Valid Passport required" },
                                        { icon: "fa-file-lines", label: "Invitation Letter", value: "University Admission Letter required" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to India?</h4>
                                <p>Book your FREE 30 mins consultation with our India experts today.</p>
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
                            <h2>Experience the Spirit of <br /> Incredible India</h2>
                            <p>From the IITs of Chennai to the campuses of Delhi — India offers world-class education at unmatched affordability. Diverse, vibrant, and full of opportunity. Our experts are here to guide you.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default India;
