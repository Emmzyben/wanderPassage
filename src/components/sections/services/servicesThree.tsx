import { serviceThreeData } from "@/db/serviceThreeData"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")', position: 'relative', zIndex: '1' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>Expert Assistance</SectionTitle.SubTitle>
                        <SectionTitle.Title>Comprehensive Study <br /> Abroad Services</SectionTitle.Title>
                    </SectionTitle>
                    <Link to="/contact" className="theme-btn">
                        Book Consultation
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                </div>
                <p className="mt-3 mb-5 wow slideUp" data-delay=".5" style={{ maxWidth: '800px' }}>
                    Our expert overseas education consultants in Nigeria provide end-to-end study abroad services, including university selection, visa assistance, and test preparation, ensuring a smooth transition to your global education journey.
                </p>
                <div className="row g-4">
                    {serviceThreeData.map((service) => (
                        <div key={service.id} className="col-xl-3 col-lg-4 col-md-6 wow slideUp" data-delay={service.delay}>
                            <ServiceCardTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ServicesThree