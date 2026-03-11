import { serviceOneData } from "@/db/serviceOneData"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const ServicesOne = () => {
  return (
    <section id="services" className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}>
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>
              Global Immigration & Visa<br /> Specialist Services
            </SectionTitle.Title>
          </SectionTitle>
          <div className="array-button">
            <button className="array-prev"><i className="fa-solid fa-arrow-left" /></button>
            <button className="array-next"><i className="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
        <div className="service-wrapper">
          <Swiper
            spaceBetween={30}
            speed={1500}
            loop
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}

            breakpoints={{
              1199: { slidesPerView: 4 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            modules={[Navigation]}
          >
            {serviceOneData.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="service-text wow slideUp" data-delay=".4">
            <h6>
              Start your visa assessment today. <Link to="/contact">Book Consultation</Link>
            </h6>
          </div>
        </div>
      </div >
    </section >

  )
}

export default ServicesOne