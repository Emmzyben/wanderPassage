import PageTitle from "@/components/sections/pageTitle";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";
import { useState } from "react";

const faq = [
    {
        question: "How long does the visa processing take?",
        answer: "Processing times vary significantly by country and visa type. Student visas typically take 3-8 weeks, while PR and work visas can take 6-12 months. We provide real-time updates based on current embassy timelines.",
        expanded: true
    },
    {
        question: "What documents are required for a student visa?",
        answer: "Core documents include a valid passport, Letter of Acceptance (LOA) from the institution, proof of funds (bank statements/scholarships), academic transcripts, and English proficiency scores. Specifics depend on the destination country.",
    },
    {
        question: "Do you assist with visa interviews?",
        answer: "Absolutely! We conduct mock interview sessions to build your confidence and help you prepare clear, honest, and effective responses to potential questions from immigration officers.",
    },
    {
        question: "What happens if my visa is rejected?",
        answer: "In the rare event of a rejection, we analyze the refusal letter, identify the gaps, and help you re-apply with a stronger case or file an appeal where applicable.",
    }
];

const VisaProcessing = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    return (
        <div className="service-details-page-custom visa-processing-page">
            <PageTitle title="Visa Processing & Guidance" currentPage="Visa Processing" backgroundImage="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1470&auto=format&fit=crop" />

            <section className="service-details-section section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 order-2 order-lg-1">
                            <ServiceSidebar />

                            <div className="service-cta-card mt-4">
                                <h3>Need urgent visa help?</h3>
                                <p>Speak with our senior visa specialists for a priority assessment.</p>
                                <button onClick={handleOpenModal} className="theme-btn w-100">BOOK APPOINTMENT</button>
                            </div>
                        </div>

                        <div className="col-lg-8 order-1 order-lg-2">
                            <div className="service-details-content">
                                <div className="main-image mb-4">
                                    <img src="https://images.unsplash.com/photo-1569050359897-39327599cb48?q=80&w=1470&auto=format&fit=crop" alt="Visa Processing" className="rounded-4" />
                                </div>

                                <h3 className="mb-3">Expert Visa Processing & Guidance</h3>
                                <p>Navigating the complex landscape of international visas can be daunting. At WanderPassage, we simplify the process with expert guidance tailored to your specific destination and goals. Whether you're heading abroad for study, work, or permanent residency, our certified consultants ensure your documentation is flawless and your application has the highest chance of success.</p>

                                <div className="features-grid mt-5 mb-5">
                                    <div className="row g-4">
                                        {[
                                            { icon: "fa-certificate", title: "Document Verification", desc: "Meticulous review of all your academic and financial records to ensure they meet embassy standards." },
                                            { icon: "fa-file-signature", title: "SOP & LOR Assistance", desc: "Expert guidance in drafting powerful Statements of Purpose and securing effective Letters of Recommendation." },
                                            { icon: "fa-comments", title: "Interview Coaching", desc: "One-on-one mock interview sessions to prepare you for the toughest questions from immigration officers." },
                                            { icon: "fa-clock-rotate-left", title: "Tracking & Updates", desc: "Proactive tracking of your application status with real-time updates until your visa is granted." }
                                        ].map((f, i) => (
                                            <div key={i} className="col-md-6">
                                                <div className="feature-item-card">
                                                    <div className="icon"><i className={`fa-solid ${f.icon}`}></i></div>
                                                    <h5>{f.title}</h5>
                                                    <p>{f.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="mb-4">Our Methodology</h3>
                                <div className="methodology-steps">
                                    {[
                                        { num: "01", title: "Initial Assessment", desc: "We evaluate your profile and advise you on the most suitable visa category." },
                                        { num: "02", title: "Checklist Generation", desc: "A customized list of required documents is provided to you immediately." },
                                        { num: "03", title: "Dossier Preparation", desc: "We compile and verify your entire application file for submission." },
                                        { num: "04", title: "Embassy Lodgement", desc: "Managing the appointment and submission process seamlessly." }
                                    ].map((s, i) => (
                                        <div key={i} className="method-step">
                                            <div className="step-num">{s.num}</div>
                                            <div className="step-content">
                                                <h5>{s.title}</h5>
                                                <p>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cta-box-inline mt-5 mb-5">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h4>Ready to start your visa application?</h4>
                                            <p>Our success rate is over 98% across all major study destinations.</p>
                                        </div>
                                        <div className="col-md-4 text-md-end">
                                            <button onClick={handleOpenModal} className="theme-btn">START NOW</button>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mb-4">Common Questions</h3>
                                <div className="faq-accordion-custom">
                                    <div className="accordion" id="visaFaq">
                                        {faq.map((item, index) => (
                                            <div className="accordion-item" key={index}>
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
                                                        {item.question}
                                                    </button>
                                                </h5>
                                                <div id={`faq${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#visaFaq">
                                                    <div className="accordion-body">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaProcessing;
