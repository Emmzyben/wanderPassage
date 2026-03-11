import PageTitle from "@/components/sections/pageTitle";

const Australia = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="australia-page">
            <PageTitle
                title="Study in Australia"
                currentPage="Australia"
                backgroundImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop"
            />

            {/* Overview Bar */}
            <div className="container">
                <div className="overview-bar">
                    {[
                        { label: "Currency", value: "AUD", icon: "fa-money-bill-transfer" },
                        { label: "Population", value: "26.8M", icon: "fa-users" },
                        { label: "Language", value: "English", icon: "fa-language" },
                        { label: "Continent", value: "Australia", icon: "fa-earth-oceania" },
                        { label: "Wage (Min)", value: "$24.10/hr", icon: "fa-wallet" },
                        { label: "States", value: "8", icon: "fa-landmark" },
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
                        <span className="sub-title">Your Future Starts Here</span>
                        <h2>Top Reasons to Study in Australia</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "World-Class Education", desc: "Home to 42 universities, many of which are consistently ranked in the global top 100." },
                            { id: "02", title: "Global Recognition", desc: "Degrees from Australian institutions are recognized and valued by employers worldwide." },
                            { id: "03", title: "Innovation & Research", desc: "Australia is a leader in global research, fostering innovation across multiple disciplines." },
                            { id: "04", title: "Post-Study Work", desc: "Generous post-study work visa options allow you to gain international experience." },
                            { id: "05", title: "Unbeatable Lifestyle", desc: "Experience some of the world's most livable cities with a perfect work-life balance." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>A Melting Pot of Cultures and Opportunities</h3>
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
                                    <h4>42</h4>
                                    <p>Total Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Public Research Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Sandstone Universities</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>TAFE & Private Colleges</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Feb, July, Nov</span></li>
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
                                                <td>Top 10 Unis</td>
                                                <td>ANU, Melbourne, Sydney, UNSW, Queensland, Monash, UWA, Adelaide, UTS, RMIT</td>
                                            </tr>
                                            <tr>
                                                <td>Group of 8</td>
                                                <td>ANU, Melbourne, Sydney, UNSW, Queensland, Monash, UWA, Adelaide</td>
                                            </tr>
                                            <tr>
                                                <td>Engineering</td>
                                                <td>UTS, RMIT, UNSW, Sydney, Monash</td>
                                            </tr>
                                            <tr>
                                                <td>Affordability</td>
                                                <td>Queensland University</td>
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
                        <span className="sub-title">Where to Live</span>
                        <h2>Geography & Demography</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table className="geography-table">
                                <thead>
                                    <tr>
                                        <th>City</th>
                                        <th>Min/Max Temp</th>
                                        <th>Avg Living Cost (AUD)</th>
                                        <th>Min Wages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Canberra (Capital)</td>
                                        <td>16°C / 41.6°C</td>
                                        <td>33,000 / Yr</td>
                                        <td>$24.10 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Sydney (Economic)</td>
                                        <td>9°C / 40°C</td>
                                        <td>29,710 / Yr</td>
                                        <td>$24.10 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Melbourne</td>
                                        <td>6°C / 30°C</td>
                                        <td>3,000 - 4,000 / mo</td>
                                        <td>$23.23 / hr</td>
                                    </tr>
                                    <tr>
                                        <td>Brisbane</td>
                                        <td>10°C / 30°C</td>
                                        <td>2,500 - 3,500 / mo</td>
                                        <td>$23.23 / hr</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                    { label: "Accommodation", value: "$165 - 440 /mo", icon: "fa-house" },
                                    { label: "Food", value: "$120 /mo", icon: "fa-utensils" },
                                    { label: "Internet", value: "$85 /mo", icon: "fa-wifi" },
                                    { label: "Transport", value: "$3 - 5 / 10km", icon: "fa-bus" },
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
                                <h3 className="mb-0 mt-2 text-white">AUD 2,200 - 2,500 / mo</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Australia</span>
                                <h2 className="text-white">Visa Benefits</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    <li className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-shield-halved"></i>
                                        <span><strong>Visa Fees:</strong> AUD $1,600</span>
                                    </li>
                                    <li className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-clock-rotate-left"></i>
                                        <span><strong>Decision:</strong> 12 Hours to 25 Days</span>
                                    </li>
                                    <li className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-heart-pulse"></i>
                                        <span><strong>Health:</strong> OHSC - Min AUD 478 / Yr</span>
                                    </li>
                                    <li className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-briefcase"></i>
                                        <span><strong>Post-Study:</strong> 2 to 6 Years Permit</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Begin?</h4>
                                <p>Get a free personalized strategy session with our experts.</p>
                                <button onClick={handleOpenModal} className="theme-btn w-100">BOOK A CONSULTATION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Your Australian Dream <br /> Starts Today</h2>
                            <p>Unlock access to top-tier universities and a world-class lifestyle. Let our experts guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Australia;
