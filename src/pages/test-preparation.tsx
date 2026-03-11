import PageTitle from "@/components/sections/pageTitle";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";

const TestPreparation = () => {
    const handleOpenModal = () => {
        window.dispatchEvent(new CustomEvent('toggle-consultation-modal'));
    };

    const tests = [
        { name: "IELTS", full: "International English Language Testing System", desc: "The world's most popular English language proficiency test for higher education and global migration." },
        { name: "TOEFL", full: "Test of English as a Foreign Language", desc: "Measures your ability to use and understand English at the university level, primarily in the USA and Canada." },
        { name: "PTE", full: "Pearson Test of English", desc: "A computer-based English language test focused on real-life English used in academic surroundings." },
        { name: "GRE / GMAT", full: "Graduate Records / Management Admission Test", desc: "Essential for admission to top graduate and business schools worldwide." }
    ];

    return (
        <div className="service-details-page-custom test-prep-page">
            <PageTitle title="Test Preparation" currentPage="Test Prep" backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop" />

            <section className="service-details-section section-padding">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 order-2 order-lg-1">
                            <ServiceSidebar />

                            <div className="test-score-calculator mt-4 bg-light p-4 rounded-4">
                                <h4 className="mb-3">What's your score?</h4>
                                <p className="small mb-4">Try our free 15-minute diagnostic test to see where you stand.</p>
                                <button className="theme-btn w-100">START FREE TEST</button>
                            </div>
                        </div>

                        <div className="col-lg-8 order-1 order-lg-2">
                            <div className="service-details-content">
                                <div className="main-image mb-4">
                                    <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1467&auto=format&fit=crop" alt="Test Preparation" className="rounded-4" />
                                </div>

                                <h3 className="mb-3">Score High with Expert Coaching</h3>
                                <p>Standardized tests are often the first major hurdle in your study abroad journey. Achieving a top score requires more than just language skills; it requires strategy, time management, and deep familiarity with the test format. At WanderPassage, our certified trainers provide personalized coaching to help you unlock your full potential and secure your place in globally ranked institutions.</p>

                                <div className="test-grid mt-5">
                                    <div className="row g-4">
                                        {tests.map((t, i) => (
                                            <div key={i} className="col-md-6">
                                                <div className="test-card">
                                                    <div className="badge">{t.name}</div>
                                                    <h5>{t.full}</h5>
                                                    <p>{t.desc}</p>
                                                    <button className="learn-more">Course Details <i className="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="coaching-features mt-5">
                                    <h3 className="mb-4">Why Train With Us?</h3>
                                    <div className="row g-4">
                                        {[
                                            { icon: "fa-person-chalkboard", title: "Expert Tutors", desc: "Our trainers are certified professionals with years of experience in test delivery." },
                                            { icon: "fa-book-open", title: "Proprietary Material", desc: "Access exclusive study guides and practice banks updated for latest test formats." },
                                            { icon: "fa-laptop", title: "Mock Tests", desc: "Regular computer-based mock tests in real exam environments with detailed feedback." },
                                            { icon: "fa-user-clock", title: "Flexible Batches", desc: "Morning, evening, and weekend batches available to suit your schedule." }
                                        ].map((f, i) => (
                                            <div key={i} className="col-sm-6">
                                                <div className="feature-small">
                                                    <i className={`fa-solid ${f.icon}`}></i>
                                                    <div>
                                                        <h6>{f.title}</h6>
                                                        <p>{f.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="success-banner mt-5 p-5 rounded-4 text-center">
                                    <h2>Average Score Improvement: +1.5 Bands in 8 Weeks</h2>
                                    <p className="mt-2">Join our results-driven coaching program and hit your target score in the first attempt.</p>
                                    <button onClick={handleOpenModal} className="theme-btn mt-3">ENROLL NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestPreparation;
