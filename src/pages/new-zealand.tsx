import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const NewZealand = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Wellington", icon: "fa-city" },
        { label: "Currency", value: "NZD ($)", icon: "fa-money-bill-transfer" },
        { label: "Population", value: "5.1 Million", icon: "fa-users" },
        { label: "Language", value: "English", icon: "fa-language" },
        { label: "Min Wage", value: "$23.15 / hr", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Feb & July", icon: "fa-calendar-check" },
        { label: "Post-Study", value: "1 - 3 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "NZ$375 (avg)", icon: "fa-passport" },
    ];

    return (
        <div className="new-zealand-page">
            <PageTitle
                title="Study in New Zealand"
                currentPage="New Zealand"
                backgroundImage="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Study Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">The Pacific Gateway to Education</span>
                        <h2>Top 5 Reasons to Study in New Zealand</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Quality Learning Experience", desc: "New Zealand universities are globally recognized for high academic standards, innovative teaching methods, and world-class research." },
                            { id: "02", title: "Globally Accepted Qualifications", desc: "Degrees from NZ institutions are recognized worldwide, opening doors to global career opportunities in top industries." },
                            { id: "03", title: "Easy Entry Requirements", desc: "Compared to other English-speaking destinations, New Zealand has more accessible entry criteria for international students." },
                            { id: "04", title: "Affordable Cost of Living & Studying", desc: "Lower living costs compared to the UK or Australia, with competitive tuition fees across diverse programmes." },
                            { id: "05", title: "Ample Job Opportunities", desc: "Strong employment rates and a welcoming immigration pathway make New Zealand an ideal post-study destination." },
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
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Nature Meets World-Class Education</h3>
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
                                    <h4>8</h4>
                                    <p>State Universities</p>
                                </div>
                                <div className="list-card">
                                    <h4>Education System</h4>
                                    <ul className="premium-list">
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Universities & Polytechnics</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Intakes: Feb/Mar & Jul/Aug</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>Engineering, Tech & Business</span></li>
                                        <li><i className="fa-solid fa-circle-check"></i> <span>SOP, LOR & MOI Accepted</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>University Categories</h4>
                                    <span className="badge-style">NZ Institutions</span>
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
                                                <td>University of Auckland, University of Otago, Auckland University of Technology, Lincoln University, University of Waikato, Victoria University of Wellington</td>
                                            </tr>
                                            <tr>
                                                <td>Top Engineering</td>
                                                <td>University of Auckland, University of Canterbury, Auckland University of Technology, University of Otago</td>
                                            </tr>
                                            <tr>
                                                <td>Accepts MOI</td>
                                                <td>University of Canterbury, University of Auckland, Lincoln University, University of Otago</td>
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
                                        <th>Min Wages / hr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Wellington (Capital)</td>
                                        <td>-10°C / 42.4°C</td>
                                        <td>NZ$4,000 – NZ$5,000</td>
                                        <td>NZ$23.15</td>
                                    </tr>
                                    <tr>
                                        <td>Auckland (Economic Hub)</td>
                                        <td>Mild / Warm</td>
                                        <td>NZ$3,500 – NZ$5,000</td>
                                        <td>NZ$23.15</td>
                                    </tr>
                                    <tr>
                                        <td>Hamilton City</td>
                                        <td>Mild / Warm</td>
                                        <td>NZ$2,500 – NZ$3,500</td>
                                        <td>NZ$23.15</td>
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
                                        <td>NZ$16,960</td>
                                        <td>NZ$111,479</td>
                                        <td>$30,000 – $45,000</td>
                                    </tr>
                                    <tr>
                                        <td>Master's Degree</td>
                                        <td>$21,200</td>
                                        <td>$50,133</td>
                                        <td>$25,000 – $35,000</td>
                                    </tr>
                                    <tr>
                                        <td>MBA</td>
                                        <td>$14,000</td>
                                        <td>$30,366</td>
                                        <td>$20,000 – $22,000</td>
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
                                        <td>NZ Science and Technology Scholarships</td>
                                        <td>June</td>
                                        <td>NZ$200,000</td>
                                    </tr>
                                    <tr>
                                        <td>New Zealand Excellence Awards</td>
                                        <td>May</td>
                                        <td>NZ$320,000</td>
                                    </tr>
                                    <tr>
                                        <td>NZ International Undergraduate Fees Scholarships (NZIUFS)</td>
                                        <td>August</td>
                                        <td>Varies</td>
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
                                    { label: "Accommodation", value: "NZ$100 – $700 / week", icon: "fa-house" },
                                    { label: "Food", value: "NZ$600 – $800 / mo", icon: "fa-utensils" },
                                    { label: "Internet", value: "NZ$80 – $100 / mo", icon: "fa-wifi" },
                                    { label: "Transport", value: "NZ$80 – $100 / mo", icon: "fa-bus" },
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
                                <h3 className="mb-0 mt-2 text-white">NZD 1,700 – NZD 2,500+ / month</h3>
                            </div>
                            <div className="row g-3 mt-2">
                                {[
                                    { label: "Working Hours", value: "8 Hours / day", icon: "fa-clock" },
                                    { label: "Post-Study Work", value: "PR Access Post-Study", icon: "fa-briefcase" },
                                    { label: "PR Possibilities", value: "After 2 Yrs Residency", icon: "fa-id-card" },
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
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to New Zealand</span>
                                <h2 className="text-white">Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-shield-halved", label: "Visa Fees", value: "NZ$246 online / INR 13,000 + VFS fees offline" },
                                        { icon: "fa-clock-rotate-left", label: "Decision Duration", value: "8 – 10 Weeks" },
                                        { icon: "fa-plane", label: "Travel Insurance", value: "Not Mandatory for Indians" },
                                        { icon: "fa-heart-pulse", label: "Health Insurance", value: "Varies – ₹1,500 to ₹5,000+" },
                                        { icon: "fa-ticket", label: "Flight Cost (from India)", value: "~₹62,553" },
                                        { icon: "fa-piggy-bank", label: "Proof of Funds", value: "3+ months bank transaction history" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span><strong>{item.label}:</strong> {item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Apply to New Zealand?</h4>
                                <p>Book your FREE 30 mins consultation session with our NZ experts.</p>
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
                            <h2>Your New Zealand Journey <br /> Starts Now</h2>
                            <p>Discover globally recognised qualifications, a welcoming culture, and an unmatched natural environment. Our experts will guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewZealand;
