import { Link } from "react-router-dom"

const ContactAddress = () => {
    return (
        <div className="contact-left-items card shadow-sm border-0 p-4 h-100">
            <div className="contact-info-area-2">
                <div className="contact-info-items mb-4">
                    <div className="icon">
                        <i className="fa-solid fa-phone-volume" style={{ color: 'white' }}></i>
                    </div>
                    <div className="content">
                        <p>Call Us 7/24</p>
                        <div>
                            <h3><Link to="tel:+2349135000681">+234 913 500 0681</Link></h3>
                            <h3><Link to="tel:+2349135000687">+234 913 500 0687</Link></h3>
                            <h3><Link to="tel:+2349042602215">+234 904 260 2215</Link></h3>
                        </div>
                    </div>
                </div>
                <div className="contact-info-items mb-4">
                    <div className="icon">
                        <i className="fa-solid fa-envelope" style={{ color: 'white' }}></i>
                    </div>
                    <div className="content">
                        <p>Email Us</p>
                        <h3>
                            <Link to="mailto:info@wanderpassage.com">info@wanderpassage.com</Link>
                        </h3>
                    </div>
                </div>
                <div className="contact-info-items mb-4">
                    <div className="icon">
                        <i className="fa-solid fa-location-dot" style={{ color: 'white' }}></i>
                    </div>
                    <div className="content">
                        <p>Head Office</p>
                        <h3>
                            Plot 64 Extension 2, Arab Road, <br />
                            Opposite Kubwa Relocation Market, Abuja.
                        </h3>
                    </div>
                </div>
                <div className="contact-info-items border-none">
                    <div className="icon">
                        <i className="fa-solid fa-building" style={{ color: 'white' }}></i>
                    </div>
                    <div className="content">
                        <p>Branch Office</p>
                        <h3>
                            Steplight Hotels Limited, <br />
                            Off Ph Road, Owerri, Imo State.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAddress