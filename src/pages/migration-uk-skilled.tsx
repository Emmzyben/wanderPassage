import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const MigrationUkSkilled = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="uk-immigration-page">
            <PageTitle
                title="UK Skilled Worker Visa"
                currentPage="UK Skilled Worker Visa"
                backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1530&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Work in the UK</span>
                        <h2>UK Skilled Worker Visa</h2>
                        <p>The UK Skilled Worker Visa allows eligible workers to live and work in the UK for an approved employer - with a clear route to Indefinite Leave to Remain (ILR) and British Citizenship.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1530&auto=format&fit=crop"
                            alt="UK Skilled Worker Visa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Key Info */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">What You Need to Know</span>
                        <h2>How the Skilled Worker Visa Works</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Job Offer from a UK Sponsor", desc: "You must have a confirmed job offer from a UK employer holding a valid sponsor licence. The role must be at the required skill level (RQF3+) and meet the salary threshold." },
                            { id: "02", title: "Salary Requirements", desc: "General threshold is £26,200/year or the going rate for the occupation - whichever is higher. Some shortage occupation roles qualify at 80% of the going rate." },
                            { id: "03", title: "English Language Requirement", desc: "Must demonstrate English at B1 level or above - through IELTS, academic qualifications taught in English, or nationality from a majority English-speaking country." },
                            { id: "04", title: "Points-Based System", desc: "The visa operates on a points-based system: 50 mandatory points (job offer + approval + salary) + 10 tradeable points (salary, PhD, shortage occupation)." },
                            { id: "05", title: "Health Surcharge & NHS", desc: "You must pay the Immigration Health Surcharge (IHS) - £1,035/year - which grants full access to NHS services during your stay." },
                            { id: "06", title: "Path to ILR & British Citizenship", desc: "After 5 years on a Skilled Worker Visa, you can apply for Indefinite Leave to Remain (ILR). One year later, you can apply for British Citizenship." },
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
                        <span className="sub-title">Documents Required</span>
                        <h2>Application Requirements</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Requirement</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Certificate of Sponsorship (CoS)</td><td>Issued by your UK employer - contains a unique reference number</td></tr>
                                    <tr><td>Valid Passport</td><td>Must be valid for the duration of your stay</td></tr>
                                    <tr><td>English Language Evidence</td><td>IELTS (B1+), GCSE, or equivalent proof</td></tr>
                                    <tr><td>Proof of Maintenance Funds</td><td>£1,270 in your bank account for 28+ consecutive days</td></tr>
                                    <tr><td>Criminal Record Certificate</td><td>Required for certain care / teaching occupations</td></tr>
                                    <tr><td>Tuberculosis (TB) Test</td><td>Required for applicants from certain countries</td></tr>
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
                            <h2>Start Your UK Career <br /> Journey Today</h2>
                            <p>Our UK immigration specialists will review your job offer, sponsor details and documentation to ensure a smooth, successful Skilled Worker Visa application. Book a free session now.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1471&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationUkSkilled;
