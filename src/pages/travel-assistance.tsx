import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const TravelAssistance = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page travel-assistance-page">
            <PageTitle
                title="Travel & Accommodation Assistance"
                currentPage="Travel Assistance"
                backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Before & After You Land</span>
                        <h2>Travel & Accommodation Assistance</h2>
                        <p>Landing in a new country is exhilarating, but the logistics can be overwhelming. WanderPassage provides end-to-end travel and accommodation support - from your flight booking to finding a place you can call home abroad.</p>
                        <button onClick={handleOpenModal} className="theme-btn">TALK TO A TRAVEL EXPERT</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop"
                            alt="Travel Assistance"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">What We Provide</span>
                        <h2>Our Travel & Living Services</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-ticket", title: "Flight Bookings", desc: "Access to student discounts and flexible international booking options. We find the best fares and routes so you don't have to." },
                            { icon: "fa-house-chimney", title: "Safe Accommodation", desc: "Verified student dorms, private apartments, purpose-built student housing, and short-term stays upon arrival." },
                            { icon: "fa-car", title: "Airport Pickup", desc: "Reliable airport transfer service to take you directly from the airport to your accommodation on day one." },
                            { icon: "fa-money-bill-transfer", title: "Foreign Exchange", desc: "Guidance on currency exchange, opening a local bank account, and managing your finances in your new country." },
                            { icon: "fa-file-contract", title: "Tenancy Support", desc: "Legal rental agreement reviews, tenancy rights guidance, and assistance negotiating lease terms in your destination country." },
                            { icon: "fa-map-location-dot", title: "Area & Safety Briefing", desc: "City orientation sessions covering neighbourhood safety, local transport, healthcare, and emergency contacts." },
                        ].map((s, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="reason-card-modern">
                                    <div className="reason-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                                    <h5>{s.title}</h5>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accommodation Options Table */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Housing Options</span>
                        <h2>Accommodation Types We Assist With</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Type</th><th>Best For</th><th>Est. Cost / Month</th><th>Meals Included</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>On-Campus Dormitory</td><td>First-year students</td><td>£400 – £700</td><td>Often Yes</td></tr>
                                    <tr><td>Purpose-Built Student Halls</td><td>All years, premium comfort</td><td>£600 – £1,200</td><td>No (kitchen included)</td></tr>
                                    <tr><td>Shared Private Rental (HMO)</td><td>Budget-conscious students</td><td>£350 – £600</td><td>No</td></tr>
                                    <tr><td>Homestay (Host Family)</td><td>Language immersion</td><td>£500 – £800</td><td>Yes</td></tr>
                                    <tr><td>Short-Term Serviced Apartment</td><td>Arrival / transition period</td><td>£800 – £1,500</td><td>No</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pre-Departure Briefing */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Before You Fly</span>
                        <h2>Pre-Departure Briefing</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-cloud-sun", title: "Weather & Clothing", desc: "Season-by-season clothing guides for your destination city - so you're never caught off guard by a British winter or Canadian snowfall." },
                            { icon: "fa-train", title: "Local Transport", desc: "A full breakdown of public transport apps, cards, and passes - from the Oyster card in London to the Opus card in Montreal." },
                            { icon: "fa-utensils", title: "Food & Culture", desc: "Navigating local cuisine, halal/dietary options, local supermarkets, and cultural etiquette in your new home city." },
                            { icon: "fa-sim-card", title: "SIM & Connectivity", desc: "Which networks to choose, how to get a local SIM on arrival, and recommendations for affordable data plans in each country." },
                        ].map((b, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="immig-reason-card">
                                    <div className="reason-icon"><i className={`fa-solid ${b.icon}`}></i></div>
                                    <div className="reason-num">0{i + 1}</div>
                                    <h5>{b.title}</h5>
                                    <p>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Travel With <br /> Peace of Mind</h2>
                            <p>From your first flight booking to signing your rental agreement - our travel advisors are with you every mile of the way. Book your free 30-minute session today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">TALK TO A TRAVEL EXPERT</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TravelAssistance;
