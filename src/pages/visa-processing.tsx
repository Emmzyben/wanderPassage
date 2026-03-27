import PageTitle from "@/components/sections/pageTitle";
import { Link } from "react-router-dom";

const faq = [
    { q: "How long does visa processing take?", a: "Processing times vary by country and visa type. Student visas typically take 3–8 weeks, while PR and work visas can take 6–12 months. We provide real-time updates based on current embassy timelines." },
    { q: "What documents are required for a student visa?", a: "Core documents include a valid passport, Letter of Acceptance (LOA), proof of funds, academic transcripts, and IELTS/TOEFL scores. Exact requirements depend on the destination country." },
    { q: "Do you assist with visa interviews?", a: "Yes. We conduct mock interview sessions to build confidence and prepare you for questions from immigration officers with clear, honest and effective responses." },
    { q: "What if my visa is rejected?", a: "We analyse the refusal letter, identify the gaps, and help you re-apply with a stronger case or file an appeal where applicable. Our 98% success rate speaks for itself." },
];

const VisaProcessing = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="canada-immigration-page visa-processing-page">
            <PageTitle
                title="Visa Processing & Guidance"
                currentPage="Visa Processing"
                backgroundImage="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1470&auto=format&fit=crop"
            />

            {/* Intro Banner */}
            <div className="container">
                <div className="immig-intro-banner">
                    <div className="immig-intro-content">
                        <span className="sub-title">Expert Visa Services</span>
                        <h2>Visa Processing & Guidance</h2>
                        <p>Navigating complex international visa requirements is stressful. Our certified consultants simplify the entire process - from document preparation to embassy submission - ensuring your application is flawless and has the highest possible chance of approval.</p>
                        <button onClick={handleOpenModal} className="theme-btn">BOOK A FREE ASSESSMENT</button>
                    </div>
                    <div className="immig-intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1470&auto=format&fit=crop"
                            alt="Visa Processing"
                        />
                    </div>
                </div>
            </div>

            {/* What We Do */}
            <section className="why-study-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Our Capabilities</span>
                        <h2>What We Handle For You</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: "fa-certificate", title: "Document Verification", desc: "Meticulous review of all academic and financial records to ensure they fully meet embassy and consulate standards before submission." },
                            { icon: "fa-file-signature", title: "SOP & LOR Assistance", desc: "Expert guidance in crafting powerful Statements of Purpose and securing effective Letters of Recommendation tailored to each institution." },
                            { icon: "fa-comments", title: "Interview Coaching", desc: "One-on-one mock interview sessions to build confidence and prepare you for the toughest questions from immigration officers." },
                            { icon: "fa-clock-rotate-left", title: "Real-Time Tracking", desc: "Proactive monitoring of your application status with real-time embassy updates until your visa is officially granted." },
                            { icon: "fa-magnifying-glass-chart", title: "Profile Assessment", desc: "A comprehensive evaluation of your academic, financial and personal profile to recommend the most suitable visa type and route." },
                            { icon: "fa-shield-halved", title: "Rejection Protection", desc: "In rare cases of rejection, we analyse the refusal, strengthen your case and manage the re-application or appeal process for you." },
                        ].map((f, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="reason-card-modern">
                                    <div className="reason-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                                    <h5>{f.title}</h5>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="institutions-section section-padding bg-light">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Step by Step</span>
                        <h2>Our Visa Process</h2>
                    </div>
                    <div className="custom-table-wrapper">
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr><th>Step</th><th>Stage</th><th>What Happens</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>01</strong></td><td>Initial Assessment</td><td>We evaluate your profile and advise on the most suitable visa category for your goals</td></tr>
                                    <tr><td><strong>02</strong></td><td>Document Checklist</td><td>A personalised list of required documents is generated and shared with you immediately</td></tr>
                                    <tr><td><strong>03</strong></td><td>SOP & Application Build</td><td>We draft your Statement of Purpose, compile and verify your entire application file</td></tr>
                                    <tr><td><strong>04</strong></td><td>Embassy Lodgement</td><td>We manage the biometrics appointment, submission, and embassy communication</td></tr>
                                    <tr><td><strong>05</strong></td><td>Tracking & Grant</td><td>Real-time updates until your visa is granted - with full support for any queries raised</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding">
                <div className="container">
                    <div className="section-title-area text-center">
                        <span className="sub-title">Common Questions</span>
                        <h2>Visa FAQs</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="immig-faq-list">
                                {faq.map((item, idx) => (
                                    <div key={idx} className="immig-faq-item open">
                                        <div className="faq-question">
                                            <span>{item.q}</span>
                                        </div>
                                        <div className="faq-answer">
                                            <p>{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner-modern">
                        <div className="cta-content">
                            <h2>Ready to Start Your <br /> Visa Application?</h2>
                            <p>Our 98% approval rate across all major destinations speaks for itself. Let our certified consultants handle everything - from documents to the visa stamp. Book your free session now.</p>
                            <div className="d-flex gap-3 flex-wrap mt-4">
                                <button onClick={handleOpenModal} className="theme-btn">BOOK FREE CONSULTATION</button>
                                <Link to="/student-login" className="theme-btn hover-white">APPLY NOW</Link>
                            </div>
                        </div>
                        <div className="cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569050359897-39327599cb48?q=80&w=1470&auto=format&fit=crop")' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaProcessing;
