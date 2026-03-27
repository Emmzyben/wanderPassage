import { serviceThreeData } from "@/db/serviceThreeData"
import ServiceCardTwo from "./serviceCardTwo"
import SectionTitle from "@/components/ui/sectionTitle"


const ServicesThree = () => {
    return (
        <section id="services" className="service-section-3 section-padding bg-cover fix" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")', position: 'relative', zIndex: '1' }}>
            <div className="container">
                <div className="section-title-area">
                    <SectionTitle>
                        <SectionTitle.SubTitle>What We Do</SectionTitle.SubTitle>
                        <SectionTitle.Title>Full-Service Immigration <br /> & Study Abroad Support</SectionTitle.Title>
                    </SectionTitle>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent('toggle-consultation-modal'))}
                        className="theme-btn"
                    >
                        Book Consultation
                        <i className="fa-solid fa-arrow-right-long" />
                    </button>
                </div>
                <p className="mt-3 mb-5 wow slideUp" data-delay=".5" style={{ maxWidth: '800px' }}>
                    From free personal counseling to university applications and visa processing, WanderPassage provides the expert guidance you need for every step of your international journey.
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