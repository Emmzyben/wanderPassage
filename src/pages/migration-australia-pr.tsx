import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const MigrationAustraliaPR = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="australia-immigration-page">
            <PageTitle
                title="Australia PR Visa"
                currentPage="Australia PR Visa"
                backgroundImage="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Permanent Residency</span>
                        <h2>Australia PR Visa - Settle Down Under</h2>
                        <p>Australia offers multiple pathways to Permanent Residency through its SkillSelect points-based system. Our experts help you identify the best visa subclass and build a competitive application.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "4,500+", label: "PR Approvals" },
                            { value: "96%", label: "Success Rate" },
                            { value: "10+", label: "Years Experience" },
                            { value: "6", label: "Visa Subclasses" },
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
                        <span className="sub-title">Choose Your Visa</span>
                        <h2>Australia PR Visa Pathways</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Skilled Independent Visa (Subclass 189)", desc: "Points-tested visa for skilled workers not sponsored by an employer or state. Apply through SkillSelect - no employer or state nomination required." },
                            { id: "02", title: "Skilled Nominated Visa (Subclass 190)", desc: "State or territory nominated visa. A nomination adds 5 points to your score and requires commitment to live and work in the nominating state for at least 2 years." },
                            { id: "03", title: "Skilled Work Regional (Subclass 491)", desc: "Provisional visa for skilled workers nominated by a state or territory to live and work in designated regional areas of Australia for 5 years." },
                            { id: "04", title: "Employer Nomination Scheme (Subclass 186)", desc: "For skilled workers nominated by an approved Australian employer through the Direct Entry or Temporary Residence Transition streams." },
                            { id: "05", title: "Temporary Skill Shortage (Subclass 482)", desc: "Allows employers to address genuine skill shortages by bringing in skilled overseas workers for up to 4 years - a pathway to PR." },
                            { id: "06", title: "Global Talent Visa (Subclass 858)", desc: "For highly distinguished individuals with outstanding achievements in a target sector including IT, Fintech, Energy, Agritech, and more." },
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
                        <span className="sub-title">Points Test</span>
                        <h2>Key Requirements & Points</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Factor</th><th>Points Available</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Age (25–32 = highest points)</td><td>Up to 30 points</td></tr>
                                    <tr><td>English Proficiency (Superior)</td><td>Up to 20 points</td></tr>
                                    <tr><td>Skilled Employment (overseas)</td><td>Up to 15 points</td></tr>
                                    <tr><td>Skilled Employment (in Australia)</td><td>Up to 20 points</td></tr>
                                    <tr><td>Australian Study Requirement</td><td>5 points</td></tr>
                                    <tr><td>Educational Qualification</td><td>Up to 20 points</td></tr>
                                    <tr><td>State / Territory Nomination</td><td>5 or 15 points</td></tr>
                                    <tr><td>Minimum Pass Mark</td><td>65 points</td></tr>
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
                            <h2>Your Australian Dream <br /> Starts Here</h2>
                            <p>Our registered migration agents will assess your points, identify the right visa subclass, and manage your application from EOI to grant. Book a free consultation now.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationAustraliaPR;
