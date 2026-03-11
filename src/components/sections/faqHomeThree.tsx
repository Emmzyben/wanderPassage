import { faqData } from "@/db/faqData";
import SectionTitle from "../ui/sectionTitle";

const FaqHomeThree = () => {
    return (
        <section className="faq-section fix section-padding bg-cover section-bg-2" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449156003053-c3d8c0f71ac4?q=80&w=1470&auto=format&fit=crop")', backgroundAttachment: 'fixed', position: 'relative' }}>
            <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 58, 134, 0.9)', zIndex: 0 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="faq-wrapper">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle className="text-white">Questions & Answers</SectionTitle.SubTitle>
                                    <SectionTitle.Title className="text-white">Frequently Asked <br /> Questions</SectionTitle.Title>
                                </SectionTitle>
                                <div className="faq-accordion mt-4">
                                    <div className="accordion" id="accordion">
                                        {faqData.map((faq) => (
                                            <div className="accordion-item mb-3 wow slideUp" data-delay={faq.delay} key={faq.id}>
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${faq.isOpen ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.id}`}
                                                        aria-expanded={faq.isOpen}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div id={faq.id} className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`} data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-image-3">
                                <img
                                    src="/img/visa.jpg"
                                    alt="Student with books"
                                    className="img-fluid rounded-20"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                                <div className="overlay-content text-center">
                                    <h3>24/7</h3>
                                    <span>Support available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqHomeThree;
