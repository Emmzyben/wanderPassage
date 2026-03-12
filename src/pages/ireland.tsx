import PageTitle from "@/components/sections/pageTitle";
import OverviewBar from "@/components/sections/country/OverviewBar";

const Ireland = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const overviewItems = [
        { label: "Capital", value: "Dublin", icon: "fa-city" },
        { label: "Currency", value: "Euro (€)", icon: "fa-euro-sign" },
        { label: "Population", value: "5.1 Million", icon: "fa-users" },
        { label: "Language", value: "English / Irish", icon: "fa-language" },
        { label: "Min Wage", value: "€1,656 / mo", icon: "fa-wallet" },
        { label: "Main Intakes", value: "Sept, Jan", icon: "fa-calendar-check" },
        { label: "Post-Study Work", value: "2 Years", icon: "fa-briefcase" },
        { label: "Visa Fee", value: "€60 (Student)", icon: "fa-passport" },
    ];

    return (
        <div className="ireland-page">
            <PageTitle
                title="Study in Ireland"
                currentPage="Ireland"
                backgroundImage="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1530&auto=format&fit=crop"
            />

            <OverviewBar items={overviewItems} />

            {/* Why Ireland Section */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <div className="section-title-area">
                                <span className="sub-title">Why Choose Ireland</span>
                                <h2>World-Class Education in the Heart of Europe</h2>
                            </div>
                            <p className="ireland-intro-text">
                                Studying in Ireland is an increasingly popular choice among international students, thanks to its world-class education system, vibrant culture, and safe English-speaking environment. Irish universities offer globally recognised degrees, innovative research opportunities, and strong enterprise connections — especially in the booming tech sector.
                            </p>
                            <p className="ireland-intro-text">
                                Over <strong>35,000 international students</strong> choose Ireland every year, attracted by high-quality training and vibrant campus life. Ireland is known for academic excellence, affordable education, and a warm, welcoming atmosphere.
                            </p>
                            <div className="ireland-stat-pills">
                                {[
                                    { value: "24 Months", label: "Post-Study Work" },
                                    { value: "8 hrs/day", label: "Working Hours" },
                                    { value: "5 Years", label: "PR Eligibility" },
                                    { value: "74%", label: "Employment Rate" },
                                ].map((pill, idx) => (
                                    <div key={idx} className="stat-pill">
                                        <strong>{pill.value}</strong>
                                        <span>{pill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                {[
                                    { icon: "fa-trophy", title: "Academic Excellence", desc: "Top-ranking universities with degrees recognised by employers worldwide, offering cutting-edge programs across all disciplines." },
                                    { icon: "fa-microchip", title: "Tech & Innovation Hub", desc: "Home to European HQs of Google, Apple, Meta and Pfizer — giving students unmatched industry access and internship opportunities." },
                                    { icon: "fa-comments", title: "English-Speaking Nation", desc: "Ireland is Europe's only native English-speaking country post-Brexit, making it the ideal destination for international students." },
                                    { icon: "fa-earth-europe", title: "Gateway to Europe", desc: "An Irish degree opens doors across the EU and globally, with a Graduate Route that allows 24 months of post-study work." },
                                ].map((card, idx) => (
                                    <div key={idx} className="col-sm-6">
                                        <div className="ireland-benefit-card">
                                            <div className="ireland-benefit-icon">
                                                <i className={`fa-solid ${card.icon}`}></i>
                                            </div>
                                            <h5>{card.title}</h5>
                                            <p>{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interstitial Image */}
            <div className="container">
                <div className="visual-interstitial" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548681528-6a5c45b66063?q=80&w=1470&auto=format&fit=crop")' }}>
                    <div className="content">
                        <h3>Where Ancient Tradition Meets Modern Innovation</h3>
                    </div>
                </div>
            </div>

            {/* Top Universities */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">World-Ranked Institutions</span>
                        <h2>Top Universities in Ireland</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            {
                                name: "Trinity College Dublin (TCD)",
                                rank: "Top 100 Global",
                                strength: "Humanities, Computer Science, Engineering",
                                desc: "Ireland's most prestigious university with a strong research culture and deep historical academic legacy.",
                                icon: "fa-building-columns",
                            },
                            {
                                name: "University College Dublin (UCD)",
                                rank: "Top 1% Worldwide",
                                strength: "Business, Engineering, Agriculture",
                                desc: "Features extensive research output and global enterprise partnerships, especially in technology and health sciences.",
                                icon: "fa-flask",
                            },
                            {
                                name: "University College Cork (UCC)",
                                rank: "Top 300 Global",
                                strength: "Pharmacy, Food Science, Environmental Studies",
                                desc: "Internationally recognised for sustainability-focused and interdisciplinary programs.",
                                icon: "fa-leaf",
                            },
                            {
                                name: "University of Galway",
                                rank: "Top 300 Global",
                                strength: "Clinical, Marine & Data Science Research",
                                desc: "A leading centre for scientific and marine research, highlighting innovation and organisation teamwork.",
                                icon: "fa-water",
                            },
                            {
                                name: "Dublin City University (DCU)",
                                rank: "Top Young University",
                                strength: "Business, Communications, STEM",
                                desc: "Highly active in implementing research and industry-linked projects with strong graduate employability.",
                                icon: "fa-city",
                            },
                            {
                                name: "University of Limerick (UL)",
                                rank: "Renowned for Co-op",
                                strength: "Engineering, Robotics, Sports Science",
                                desc: "Renowned for cooperative education programs linking students to practical work with top organisations.",
                                icon: "fa-gear",
                            },
                            {
                                name: "Maynooth University",
                                rank: "Top 100 Under 50 Yrs",
                                strength: "Arts, Social Sciences, Theoretical Physics",
                                desc: "One of Ireland's fastest-growing universities, known for impactful research and student-centric learning.",
                                icon: "fa-atom",
                            },
                        ].map((uni, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="university-card">
                                    <div className="uni-header">
                                        <div className="uni-icon">
                                            <i className={`fa-solid ${uni.icon}`}></i>
                                        </div>
                                        <span className="uni-rank-badge">{uni.rank}</span>
                                    </div>
                                    <h5>{uni.name}</h5>
                                    <span className="uni-strength">{uni.strength}</span>
                                    <p>{uni.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Costs Section */}
            <section className="ireland-costs-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Tuition & Living</span>
                        <h2>Cost of Study in Ireland</h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Tuition Fee Ranges</h4>
                                    <span className="badge-style">Per Year</span>
                                </div>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Program</th>
                                                <th>Min</th>
                                                <th>Max</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Undergraduate</td>
                                                <td>€9,000</td>
                                                <td>€15,000</td>
                                            </tr>
                                            <tr>
                                                <td>Postgraduate</td>
                                                <td>€10,000</td>
                                                <td>€20,000</td>
                                            </tr>
                                            <tr>
                                                <td>PhD</td>
                                                <td>€6,000</td>
                                                <td>€15,000</td>
                                            </tr>
                                            <tr>
                                                <td>Medicine</td>
                                                <td>€25,000</td>
                                                <td>€55,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="total-highlight mt-4 p-3 text-center" style={{ background: '#f0f7ff', borderRadius: '14px' }}>
                                    <span style={{ color: '#666', fontSize: '13px', fontWeight: '600' }}>Total Annual Cost (Tuition + Living):</span>
                                    <h4 className="mb-0 mt-1" style={{ color: 'var(--header)' }}>€16,000 – €32,000 / year</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="custom-table-wrapper h-100">
                                <div className="table-header">
                                    <h4>Monthly Living Costs</h4>
                                    <span className="badge-style">Avg per Month</span>
                                </div>
                                <div className="row g-3">
                                    {[
                                        { label: "Accommodation", value: "€400 – €1,000 / mo", icon: "fa-house" },
                                        { label: "Food & Groceries", value: "€200 – €300 / mo", icon: "fa-utensils" },
                                        { label: "Transportation", value: "€50 – €100 / mo", icon: "fa-bus" },
                                        { label: "Utilities", value: "€100 – €150 / mo", icon: "fa-bolt" },
                                        { label: "Mobile & Internet", value: "€20 – €40 / mo", icon: "fa-wifi" },
                                        { label: "Personal Expenses", value: "€80 – €150 / mo", icon: "fa-shirt" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="col-6">
                                            <div className="living-cost-item">
                                                <i className={`fa-solid ${item.icon}`}></i>
                                                <div>
                                                    <span>{item.label}</span>
                                                    <strong>{item.value}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="total-highlight mt-4 p-3 text-center" style={{ background: '#f0f7ff', borderRadius: '14px' }}>
                                    <span style={{ color: '#666', fontSize: '13px', fontWeight: '600' }}>Average Monthly Living Cost:</span>
                                    <h4 className="mb-0 mt-1" style={{ color: 'var(--header)' }}>€1,000 – €1,300 / month</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarships Section */}
            <section className="scholarships-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Fund Your Education</span>
                        <h2>Scholarships for International Students in Ireland</h2>
                    </div>
                    <div className="row g-4 mb-5">
                        {[
                            {
                                name: "Ireland Government International Education Scholarship",
                                deadline: "March",
                                amount: "Full tuition + €10,000 stipend",
                                icon: "fa-flag",
                                color: "#006837",
                            },
                            {
                                name: "UCD Global Scholarships",
                                deadline: "Rolling",
                                amount: "Partial to full tuition for UG/PG students",
                                icon: "fa-graduation-cap",
                                color: "#003087",
                            },
                            {
                                name: "Trinity College Dublin Scholarships",
                                deadline: "February",
                                amount: "Global Excellence & subject-specific awards",
                                icon: "fa-crown",
                                color: "#1a1a6b",
                            },
                            {
                                name: "University of Galway Scholarships",
                                deadline: "April",
                                amount: "Range of awards for UG and Master's applications",
                                icon: "fa-water",
                                color: "#115e59",
                            },
                            {
                                name: "The Walsh Fellowship",
                                deadline: "June",
                                amount: "Research-focused postgraduate funding",
                                icon: "fa-flask",
                                color: "#6b2737",
                            },
                            {
                                name: "Irish Research Council Scholarships",
                                deadline: "October",
                                amount: "Postgraduate research funding for top applicants",
                                icon: "fa-award",
                                color: "#7e3800",
                            },
                        ].map((s, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="scholarship-card ireland-scholarship-card">
                                    <div className="scholarship-icon" style={{ background: s.color }}>
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <h5>{s.name}</h5>
                                    <div className="scholarship-meta">
                                        <span className="meta-item">
                                            <i className="fa-regular fa-calendar"></i>
                                            Deadline: {s.deadline}
                                        </span>
                                        <span className="meta-item amount">
                                            <i className="fa-solid fa-euro-sign"></i>
                                            {s.amount}
                                        </span>
                                    </div>
                                    <button onClick={handleOpenModal} className="theme-btn scholarship-btn">Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scholarship Eligibility Table */}
                    <div className="custom-table-wrapper">
                        <div className="table-header">
                            <h4>Scholarship Eligibility at a Glance</h4>
                            <span className="badge-style">Quick Reference</span>
                        </div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Eligibility</th>
                                        <th>Benefits</th>
                                        <th>How to Apply</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Indian passport holder</td>
                                        <td>Full / partial tuition fee waivers</td>
                                        <td>Via college portals or Higher Education Authority</td>
                                    </tr>
                                    <tr>
                                        <td>70%+ academic record</td>
                                        <td>Up to €10,000 stipend</td>
                                        <td>Submit transcripts, SOP, references</td>
                                    </tr>
                                    <tr>
                                        <td>Full-time UG / PG / PhD in Ireland</td>
                                        <td>Boosts career profile</td>
                                        <td>Leadership / community work (optional)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="process-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Step by Step</span>
                        <h2>Application Process for Ireland Universities</h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { step: "01", icon: "fa-magnifying-glass", title: "Research Courses & Universities", desc: "Discover courses and universities that suit your goals. Shortlist based on course, ranking and location." },
                            { step: "02", icon: "fa-paper-plane", title: "Apply via CAO (UG) or Directly (PG)", desc: "Undergraduates apply via CAO (deadline: 1 February). Postgraduate and PhD applications go directly to universities." },
                            { step: "03", icon: "fa-folder-open", title: "Prepare Required Documents", desc: "Academic transcripts, passport, IELTS/TOEFL scores, Statement of Purpose (SOP), and recommendation letters." },
                            { step: "04", icon: "fa-envelope-open-text", title: "Receive Offer Letter", desc: "Once accepted, you'll receive an official offer letter, which is required to apply for your student visa." },
                            { step: "05", icon: "fa-id-card", title: "Apply for Student Visa", desc: "Apply at least 8–12 weeks before your course starts. Ensure proof of finances (€10,000 minimum) is ready." },
                            { step: "06", icon: "fa-plane-departure", title: "Prepare for Departure", desc: "Arrange accommodation, arrange health insurance, and register with the Irish Naturalisation Service (GNIB) on arrival." },
                        ].map((step, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="process-card ireland-process-card">
                                    <div className="process-step">{step.step}</div>
                                    <div className="process-icon">
                                        <i className={`fa-solid ${step.icon}`}></i>
                                    </div>
                                    <h5>{step.title}</h5>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Cities */}
            <section className="cities-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Where to Study</span>
                        <h2>Top Cities for International Students</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { city: "Dublin", icon: "fa-city", color: "#003087", desc: "Home to Trinity College and UCD. A dynamic tech hub with rich cultural experiences — the most rewarding city in Ireland.", highlight: "Tech & Finance Hub" },
                            { city: "Cork", icon: "fa-leaf", color: "#006837", desc: "University College Cork (UCC) blends academic excellence with a laid-back lifestyle and relatively lower living costs.", highlight: "Lower Cost of Living" },
                            { city: "Galway", icon: "fa-water", color: "#0d7680", desc: "A student-friendly city hosting the University of Galway, famous for its arts, festivals and scenic natural beauty.", highlight: "Arts & Culture" },
                            { city: "Limerick", icon: "fa-gear", color: "#6b2737", desc: "Features the University of Limerick with modern campuses, affordable living, and excellent career opportunities.", highlight: "Affordable & Modern" },
                            { city: "Maynooth", icon: "fa-book", color: "#5c4b00", desc: "A quiet, historic town with Maynooth University — ideal for focused academic study in a peaceful environment.", highlight: "Quiet & Historic" },
                        ].map((c, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div className="city-card">
                                    <div className="city-icon" style={{ background: c.color }}>
                                        <i className={`fa-solid ${c.icon}`}></i>
                                    </div>
                                    <div className="city-body">
                                        <div className="city-title-row">
                                            <h5>{c.city}</h5>
                                            <span className="city-highlight">{c.highlight}</span>
                                        </div>
                                        <p>{c.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa & Benefits Dark Section */}
            <section className="cost-visa-section section-padding bg-dark text-white" style={{ borderRadius: '40px 40px 0 0' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Gateway to Ireland</span>
                                <h2 className="text-white">Student Visa Requirements</h2>
                            </div>
                            <div className="list-card h-auto bg-transparent text-white" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                <ul className="premium-list text-white">
                                    {[
                                        { icon: "fa-passport", label: "Valid Passport" },
                                        { icon: "fa-envelope-open-text", label: "Offer Letter from an Irish University" },
                                        { icon: "fa-money-bill-wave", label: "Proof of Finances — €10,000 minimum" },
                                        { icon: "fa-receipt", label: "Proof of Tuition Fee Payment" },
                                        { icon: "fa-heart-pulse", label: "Medical / Health Insurance" },
                                        { icon: "fa-language", label: "IELTS / TOEFL Scores" },
                                        { icon: "fa-file-pen", label: "Statement of Purpose (SOP)" },
                                    ].map((item, idx) => (
                                        <li key={idx} className="text-white" style={{ borderBottomColor: 'rgba(255,255,255,0.05)' }}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="total-highlight mt-4 p-4 text-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                <span className="text-white-50">Apply at least:</span>
                                <h3 className="mb-0 mt-2 text-white">8 – 12 Weeks Before Course Start</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-area">
                                <span className="sub-title" style={{ color: '#aaa' }}>Life After Graduation</span>
                                <h2 className="text-white">Post-Study Work &amp; PR</h2>
                            </div>
                            <div className="row g-3">
                                {[
                                    { label: "Post-Study Work", value: "24 months (PG) / 12 months (UG)", icon: "fa-briefcase" },
                                    { label: "Working Hours (Study)", value: "20 hrs/week (term), 40 hrs (vacation)", icon: "fa-clock" },
                                    { label: "Average Part-time Pay", value: "€10.50 – €13 per hour", icon: "fa-coins" },
                                    { label: "PR Eligibility", value: "After 5 years lawful residence + work permit", icon: "fa-star" },
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
                            <div className="booking-card bg-white text-dark mt-4">
                                <h4>Ready to Begin?</h4>
                                <p>Book your FREE 30-minute session with our Ireland experts today.</p>
                                <button onClick={handleOpenModal} className="theme-btn w-100">BOOK NOW</button>
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
                            <h2>Your Irish Dream <br /> Starts Today</h2>
                            <p>Unlock access to world-class universities, an English-speaking European lifestyle, and a thriving post-study career pathway. Let our experts guide you every step of the way.</p>
                            <button onClick={handleOpenModal} className="theme-btn">CONNECT WITH AN EXPERT</button>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564959130747-897fb406b9af?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ireland;
