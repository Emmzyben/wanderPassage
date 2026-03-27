import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const MigrationCanadaWork = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Canada Work Permit"
                currentPage="Canada Work Permit"
                backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Work in Canada</span>
                        <h2>Canada Work Permit - Live and Work in Canada</h2>
                        <p>A Canada Work Permit allows foreign nationals to legally work in Canada for a specified employer and period. It is often the first step toward Canadian Permanent Residency.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop"
                            alt="Canada Work Permit"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Pathways */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Types of Work Permits</span>
                        <h2>Canada Work Permit Pathways</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "LMIA-Based Work Permit", desc: "Employer obtains a Labour Market Impact Assessment (LMIA) proving no Canadian worker is available. Most common route for employer-sponsored workers." },
                            { id: "02", title: "LMIA-Exempt Work Permit", desc: "Certain categories are exempt - intra-company transfers, international agreement holders (CUSMA/CETA), and significant benefit workers." },
                            { id: "03", title: "Open Work Permit", desc: "Allows you to work for any employer in Canada. Available for PR applicants, spouses of workers/students, and certain other categories." },
                            { id: "04", title: "International Mobility Program", desc: "Covers LMIA-exempt categories including reciprocal employment, significant benefit to Canada, and charitable/religious workers." },
                            { id: "05", title: "Post-Graduate Work Permit (PGWP)", desc: "Available to international students who graduated from a Canadian DLI. Valid for up to 3 years depending on study duration." },
                            { id: "06", title: "Spousal Open Work Permit", desc: "Spouses and common-law partners of eligible foreign workers and international students can apply for an Open Work Permit." },
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

            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">What You Need</span>
                        <h2>Key Requirements</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Requirement</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Job Offer</td><td>Valid offer from a Canadian employer (LMIA-based or exempt)</td></tr>
                                    <tr><td>Valid Passport</td><td>Must be valid for the duration of the permit</td></tr>
                                    <tr><td>Medical Exam</td><td>Required for certain occupations and countries</td></tr>
                                    <tr><td>Police Clearance</td><td>Criminal background check may be required</td></tr>
                                    <tr><td>Proof of Funds</td><td>Evidence you can support yourself and family</td></tr>
                                    <tr><td>Language</td><td>IELTS/CELPIP may be required based on NOC category</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Get Your Canada Work <br /> Permit Approved</h2>
                            <p>Our immigration experts will identify the right work permit category for your profile and manage the entire application process. Book a free consultation today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationCanadaWork;
