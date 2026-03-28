import SectionTitle from "@/components/ui/sectionTitle";
import { Link } from "react-router-dom";

const migrationServices = [
    "Free Consultation",
    "Profile Evaluation",
    "CV Formatting",
    "Job Assistance"
];

const MigrationCategory = () => {
    return (
        <section className="migration-category-section section-padding fix bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop")', backgroundAttachment: 'fixed' }}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="migration-content text-white">
                            <SectionTitle>
                                <SectionTitle.SubTitle className="text-white">Migration Category</SectionTitle.SubTitle>
                                <SectionTitle.Title className="text-white">Navigate your immigration journey with expert guidance</SectionTitle.Title>
                            </SectionTitle>
                            <p className="mt-3 mb-4 text-white">
                                Navigate your immigration journey with expert guidance from the best immigration consultant, ensuring a smooth transition to your desired country.
                            </p>

                            <div className="visa-types mb-4">
                                <div className="visa-item d-flex align-items-center mb-3">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-passport"></i>
                                    </div>
                                    <div className="text">
                                        <h5>Permanent Resident Visa</h5>
                                    </div>
                                </div>
                                <div className="visa-item d-flex align-items-center mb-3">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-user-gear"></i>
                                    </div>
                                    <div className="text">
                                        <h5>Skilled Worker Visa</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="our-services p-4 bg-white-opacity">
                                <h4 className="mb-3">Our Migration Services</h4>
                                <ul className="service-list">
                                    {migrationServices.map((service, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-check-circle me-2"></i> {service}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="theme-btn mt-4">
                                    Learn More <i className="fa-solid fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="migration-image-area position-relative">
                            <div className="main-img wow zoomIn" data-wow-delay=".3s">
                                <img src="/img/skilledworkers.jpg" alt="migration" className="img-fluid rounded-10" />
                            </div>
                            <div className="overlay-badge wow rotateIn" data-wow-delay=".5s">
                                <div className="badge-content">
                                    <h3>15+</h3>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MigrationCategory;
