import PageTitle from "@/components/sections/pageTitle";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";

const TravelAssistance = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="service-details-page-custom travel-assistance-page">
            <PageTitle title="Travel & Accommodation Assistance" currentPage="Travel Assistance" backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop" />

            <section className="service-details-section section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 order-2 order-lg-1">
                            <ServiceSidebar />

                            <div className="travel-tips-card mt-4">
                                <i className="fa-solid fa-plane-up"></i>
                                <h4>International Travel?</h4>
                                <p>Get our exclusive pre-departure checklist to ensure you don't miss a thing.</p>
                                <button className="theme-btn-transparent w-100 mt-2">DOWNLOAD CHECKLIST</button>
                            </div>
                        </div>

                        <div className="col-lg-8 order-1 order-lg-2">
                            <div className="service-details-content">
                                <div className="main-image mb-4">
                                    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop" alt="Travel Assistance" className="rounded-4" />
                                </div>

                                <h3 className="mb-3">Seamless Travel & Comfortable Living</h3>
                                <p>Landing in a new country is an exhilarating experience, but the logistics can be stressful. WanderPassage provides end-to-end travel and accommodation assistance, ensuring your transition is smooth, safe, and welcoming. From booking your initial flights to finding a place you can call home, we are with you every mile of the way.</p>

                                <div className="row g-4 mt-4">
                                    {[
                                        { title: "Flight Bookings", icon: "fa-ticket", desc: "Access to student discounts and flexible booking options for international travel." },
                                        { title: "Safe Accommodation", icon: "fa-house-chimney", desc: "Verified options for student dorms, private apartments, and shared living." },
                                        { title: "Airport Pickup", icon: "fa-car", desc: "Reliable airport transfers to take you directly to your new residence upon arrival." },
                                        { title: "Foreign Exchange", icon: "fa-money-bill-transfer", desc: "Assistance with currency exchange and setting up your local bank account." }
                                    ].map((s, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="travel-service-box">
                                                <div className="icon"><i className={`fa-solid ${s.icon}`}></i></div>
                                                <div className="text">
                                                    <h5>{s.title}</h5>
                                                    <p>{s.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="accommodation-focus mt-5">
                                    <h3 className="mb-4">Finding Your Home Abroad</h3>
                                    <div className="row align-items-center bg-light rounded-4 overflow-hidden g-0">
                                        <div className="col-md-5">
                                            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop" alt="Accommodation" className="img-fluid" />
                                        </div>
                                        <div className="col-md-7 p-4 p-lg-5">
                                            <ul className="accommodation-list">
                                                <li><i className="fa-solid fa-check"></i> On-Campus Dormitory Assistance</li>
                                                <li><i className="fa-solid fa-check"></i> Private Student Housing (Purpose-Built)</li>
                                                <li><i className="fa-solid fa-check"></i> Short-term Guest House Bookings</li>
                                                <li><i className="fa-solid fa-check"></i> Legal Rental Agreement Reviews</li>
                                                <li><i className="fa-solid fa-check"></i> Neighborhood Safety Assessments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="pre-departure-briefing mt-5 p-5 bg-dark text-white rounded-4">
                                    <h3>Pre-Departure Briefing</h3>
                                    <p className="text-white-50">Before you fly, we conduct a comprehensive briefing session covering everything you need to know about your new city, from local transit apps to winter clothing essentials.</p>
                                    <div className="row g-3 mt-3">
                                        <div className="col-sm-6"><div className="brief-item"><i className="fa-solid fa-cloud-sun"></i> Weather & Clothing</div></div>
                                        <div className="col-sm-6"><div className="brief-item"><i className="fa-solid fa-train"></i> Local Transport</div></div>
                                        <div className="col-sm-6"><div className="brief-item"><i className="fa-solid fa-utensils"></i> Food & Culture</div></div>
                                        <div className="col-sm-6"><div className="brief-item"><i className="fa-solid fa-phone"></i> SIM Card & Comm.</div></div>
                                    </div>
                                </div>

                                <div className="cta-action text-center mt-5">
                                    <h3>Travel with Peace of Mind</h3>
                                    <button onClick={handleOpenModal} className="theme-btn mt-3">TALK TO A TRAVEL EXPERT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TravelAssistance;
