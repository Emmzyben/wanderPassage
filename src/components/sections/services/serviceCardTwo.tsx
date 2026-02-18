import { ServiceDataType } from "@/db/serviceOneData"
import { Link } from "react-router-dom"

const ServiceCardTwo = ({ service }: { service: ServiceDataType }) => {
    return (
        <div className="service-card-items">
            <div className="service-image">
                <img src={service.image} alt="service-img" />
            </div>
            <div className="icon-2">
                {service.lucideIcon ? <service.lucideIcon size={40} strokeWidth={1.5} /> : <img src={service.icon} alt="img" />}
            </div>
            <div className="service-content">
                <div className="icon">
                    {service.lucideIcon ? <service.lucideIcon size={32} strokeWidth={1.5} color="white" /> : <img src={service.icon} alt="img" />}
                </div>
                <h4>
                    <Link to={service.link}>{service.title}</Link>
                </h4>
                <p>{service.description}</p>
                <Link to="/contact" className="theme-btn-2 mt-3">
                    Book Consultation
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCardTwo