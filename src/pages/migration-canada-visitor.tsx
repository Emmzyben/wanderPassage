import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const MigrationCanadaVisitor = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Canada Visitor Visa"
                currentPage="Canada Visitor Visa"
                backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Temporary Resident Visa</span>
                        <h2>Canada Visitor Visa (TRV)</h2>
                        <p>The Canada Visitor Visa allows foreign nationals to visit Canada for tourism, family visits, or business for up to 6 months. Our team ensures a smooth, well-documented application.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO AN EXPERT FOR FREE</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop"
                            alt="Canada Visitor Visa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Visit Types */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Why Visit Canada?</span>
                        <h2>Types of Canada Visits</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "Tourism & Leisure", desc: "Visit Canada's iconic destinations - from Niagara Falls and Banff National Park to Vancouver, Montreal and Toronto. Experience world-class sights and culture." },
                            { id: "02", title: "Family Visits", desc: "Visit spouses, children, siblings or parents living in Canada as permanent residents or citizens. A visitor visa allows stays of up to 6 months." },
                            { id: "03", title: "Business Visits", desc: "Attend meetings, conferences, trade shows and business negotiations in Canada without taking up employment." },
                            { id: "04", title: "Super Visa (Parents & Grandparents)", desc: "Allows parents and grandparents of Canadian PRs/citizens to stay for up to 5 years per entry, with multiple entries over 10 years." },
                            { id: "05", title: "Medical Visits", desc: "Travel to Canada for medical treatment or to accompany a patient receiving medical care at a Canadian institution." },
                            { id: "06", title: "Short-Term Studies (Under 6 Months)", desc: "Short courses under 6 months - language programs, workshops, or professional training - may be covered under a visitor visa." },
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
                        <span className="sub-title">Documents Needed</span>
                        <h2>Application Requirements</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Document</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Valid Passport</td><td>Must be valid for the entire visit duration</td></tr>
                                    <tr><td>Proof of Funds</td><td>Bank statements, salary slips, or sponsorship letter</td></tr>
                                    <tr><td>Travel History</td><td>Previous visa stamps or travel records strengthen the application</td></tr>
                                    <tr><td>Invitation Letter</td><td>If visiting family or attending a business event in Canada</td></tr>
                                    <tr><td>Return Ticket</td><td>Proof of intent to return after the visit</td></tr>
                                    <tr><td>Ties to Home Country</td><td>Employment letter, property deeds, family ties etc.</td></tr>
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
                            <h2>Plan Your Canada Visit <br /> With Confidence</h2>
                            <p>Let our experts prepare a strong visitor visa application that maximises your approval chances. Book a free 30-minute session today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MigrationCanadaVisitor;
