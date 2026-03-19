import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const StudentAccommodation = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Student Accommodation"
                currentPage="Student Accommodation"
                backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Where You'll Call Home</span>
                        <h2>Student Accommodation Assistance</h2>
                        <p>Finding the right accommodation abroad is one of the most important steps in your study journey. Wander Passage guides you through every option so you can settle comfortably and focus on your studies.</p>
                        <button onClick={handleOpenModal} className="theme-btn">GET ACCOMMODATION HELP</button>
                    </div>
                    <div className="immig-intro-stats">
                        {[
                            { value: "20+", label: "Countries Covered" },
                            { value: "6", label: "Housing Types" },
                            { value: "Free", label: "Consultation" },
                            { value: "24/7", label: "Support" },
                        ].map((s, i) => (
                            <div key={i} className="intro-stat-item">
                                <h3>{s.value}</h3>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Options */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Housing Options</span>
                        <h2>Types of Student Accommodation</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "University / On-Campus Housing", desc: "Most universities offer on-campus halls of residence for first-year students. They are safe, convenient, and usually the most affordable option - with meals often included." },
                            { id: "02", title: "Private Student Halls", desc: "Purpose-built student accommodation (PBSA) operated by companies like Unite Students, iQ, and Nido. Modern facilities - en-suite rooms, gyms, study rooms and social areas." },
                            { id: "03", title: "Shared Private Rental (HMO)", desc: "Sharing a privately rented house or flat with other students. Typically cheaper per person and allows more independence. You'll need to arrange utilities and bills yourself." },
                            { id: "04", title: "Homestay", desc: "Live with a local host family - ideal for cultural immersion and language practice. Meals and utilities are often included, making budgeting straightforward." },
                            { id: "05", title: "Studio Apartments", desc: "Self-contained studios for students who prefer full privacy and independence. Generally the most expensive option, but ideal for postgraduate students." },
                            { id: "06", title: "Temporary Housing on Arrival", desc: "Need a place to stay for your first few weeks? We help arrange short-term serviced apartments or hostels while you search for permanent accommodation." },
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
                        <span className="sub-title">Average Monthly Rents</span>
                        <h2>Cost by Country</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Country</th><th>On-Campus / Halls</th><th>Shared Rental</th><th>Studio Apartment</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>United Kingdom</td><td>£400 – £700 / mo</td><td>£450 – £600 / mo</td><td>£800 – £1,500 / mo</td></tr>
                                    <tr><td>Australia</td><td>AUD 200 – 400 / wk</td><td>AUD 150 – 300 / wk</td><td>AUD 300 – 500 / wk</td></tr>
                                    <tr><td>Canada</td><td>CAD 600 – 1,200 / mo</td><td>CAD 500 – 900 / mo</td><td>CAD 1,000 – 2,000 / mo</td></tr>
                                    <tr><td>Germany</td><td>€250 – €400 / mo</td><td>€350 – €600 / mo</td><td>€600 – €1,200 / mo</td></tr>
                                    <tr><td>Ireland</td><td>€600 – €1,000 / mo</td><td>€600 – €900 / mo</td><td>€1,200 – €2,000 / mo</td></tr>
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
                            <h2>Find Your Perfect <br /> Student Home</h2>
                            <p>Our accommodation advisors will match you to the best housing option in your destination city - at the right price and closest to your campus. Book a free session today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">GET ACCOMMODATION HELP</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1469&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentAccommodation;
