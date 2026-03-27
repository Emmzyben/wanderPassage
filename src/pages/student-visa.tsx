import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const StudentVisa = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page">
            <PageTitle
                title="Student Visa"
                currentPage="Student Visa"
                backgroundImage="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Your Entry to Global Education</span>
                        <h2>Student Visa - Expert Guidance for Every Country</h2>
                        <p>A student visa is your legal permission to study abroad. Each destination has its own process, fees, and requirements. Our expert consultants walk you through every step - from documentation to approval.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1470&auto=format&fit=crop"
                            alt="Student Visa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    </div>
                </div>
            </div>

            {/* By Country */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Choose Your Destination</span>
                        <h2>Student Visa by Country</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { id: "01", title: "UK Student Visa", desc: "Apply for a Student Visa (formerly Tier 4) via UKVI online. Requires a CAS number from your university, IELTS 5.5–7.0, and proof of funds (£1,334/mo for London)." },
                            { id: "02", title: "Australia Student Visa (Subclass 500)", desc: "Apply online via ImmiAccount. Requires CoE from your institution, IELTS 5.5–6.5, and Genuine Student (GS) statement. GTE requirement applies." },
                            { id: "03", title: "Canada Study Permit", desc: "Apply via IRCC online. Requires a letter of acceptance, proof of funds (CAD $10,000+), IELTS, and a SOP. Biometrics required for most nationalities." },
                            { id: "04", title: "USA F-1 Student Visa", desc: "Requires I-20 from your SEVP-approved school, SEVIS fee payment, DS-160 application, and visa interview at the US Embassy/Consulate." },
                            { id: "05", title: "Germany Student Visa", desc: "Apply at the German Embassy with admission letter, proof of funding (blocked account: €11,208/year), APS assessment, and language/IELTS documents." },
                            { id: "06", title: "Ireland Student Visa", desc: "Apply via the Irish Naturalisation and Immigration Service (INIS). Requires admission letter, proof of funds (€7,000+), and private medical insurance." },
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
                        <span className="sub-title">Quick Comparison</span>
                        <h2>Student Visa at a Glance</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Country</th><th>Visa Name</th><th>Fee</th><th>Processing Time</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>UK</td><td>Student Visa</td><td>£363</td><td>3 weeks</td></tr>
                                    <tr><td>Australia</td><td>Subclass 500</td><td>AUD 710</td><td>4 – 6 weeks</td></tr>
                                    <tr><td>Canada</td><td>Study Permit</td><td>CAD 150</td><td>8 – 12 weeks</td></tr>
                                    <tr><td>USA</td><td>F-1 Visa</td><td>USD 185</td><td>2 – 8 weeks</td></tr>
                                    <tr><td>Germany</td><td>National Visa (D)</td><td>€75</td><td>6 – 12 weeks</td></tr>
                                    <tr><td>Ireland</td><td>Student Visa</td><td>€60</td><td>4 – 8 weeks</td></tr>
                                    <tr><td>Belgium</td><td>Type D Visa</td><td>€180</td><td>4 – 8 weeks</td></tr>
                                    <tr><td>France</td><td>Long-Stay Student Visa</td><td>€50</td><td>2 – 4 weeks</td></tr>
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
                            <h2>Get Your Student Visa <br /> Approved First Time</h2>
                            <p>Our consultants have a proven track record of student visa approvals across all major destinations. Let us handle your application from start to finish. Book a free 30-minute session today.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentVisa;
