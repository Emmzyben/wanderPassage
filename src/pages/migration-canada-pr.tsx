import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const MigrationCanadaPR = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Canada PR Visa"
                currentPage="Canada PR Visa"
                backgroundImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Permanent Residency</span>
                        <h2>Canada PR Visa - Your Path to Permanent Residency</h2>
                        <p>Canada's Permanent Residency program offers one of the world's most respected immigration pathways. Our certified experts guide you through every stage - from profile assessment to landing.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "5,000+", label: "PR Approvals" },
                            { value: "98%", label: "Success Rate" },
                            { value: "10+", label: "Years Experience" },
                            { value: "6", label: "PR Pathways" },
                        ].map((s, i) => (
                            <div key={i} className="intro-stat-item">
                                <h3>{s.value}</h3>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pathways */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Choose Your Route</span>
                        <h2>PR Pathways to Canada</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Express Entry (FSW / CEC / FST)", desc: "The fastest PR pathway for skilled workers. Candidates are ranked via the Comprehensive Ranking System (CRS) and invited to apply in regular draws." },
                            { id: "02", title: "Provincial Nominee Program (PNP)", desc: "Provinces nominate skilled workers based on regional labour needs. A provincial nomination adds 600 CRS points - virtually guaranteeing an ITA." },
                            { id: "03", title: "Family Sponsorship", desc: "Canadian citizens and PRs can sponsor immediate family members - spouses, children, parents, and grandparents - for Permanent Residency." },
                            { id: "04", title: "Quebec Skilled Worker (QSWP)", desc: "Quebec manages its own immigration system through the Arrima platform. Points are based on Education, Language, Work Experience and Adaptability." },
                            { id: "05", title: "Atlantic Immigration Program", desc: "Designed for the Atlantic region - Nova Scotia, New Brunswick, PEI and Newfoundland - with dedicated streams for skilled workers and graduates." },
                            { id: "06", title: "Rural & Northern Immigration", desc: "Community-based pilot programs that promote economic development in smaller Canadian communities by attracting and retaining skilled immigrants." },
                        ].map((r, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="reason-card-modern">
                                    <div className="count">{r.id}</div>
                                    <h5>{r.title}</h5>
                                    <p>{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Requirements */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Eligibility</span>
                        <h2>Key Requirements</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Criteria</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Age</td><td>18–45 years (younger = more CRS points)</td></tr>
                                    <tr><td>Education</td><td>Minimum Bachelor's Degree (ECA required for foreign credentials)</td></tr>
                                    <tr><td>Language</td><td>IELTS / CELPIP (CLB 7+) or TEF Canada (French)</td></tr>
                                    <tr><td>Work Experience</td><td>At least 1 year of skilled work in NOC TEER 0, 1, 2 or 3</td></tr>
                                    <tr><td>Settlement Funds</td><td>CAD $13,757 for single / varies by family size</td></tr>
                                    <tr><td>Medical & Police Clearance</td><td>Required at application stage</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Start Your Canada PR <br /> Journey Today</h2>
                            <p>Our certified immigration consultants will assess your profile and recommend the fastest pathway to Canadian Permanent Residency. Book a free consultation now.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1511&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationCanadaPR;
