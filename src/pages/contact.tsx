import ContactAddress from "@/components/sections/contact/contactAddress"
import ContactForm from "@/components/sections/contact/contactForm"
import ContactMap from "@/components/sections/contact/contactMap"
import PageTitle from "@/components/sections/pageTitle"

const Contact = () => {
    return (
        <>
            <PageTitle
                currentPage="Contact Us"
                title="Contact Us"
                backgroundImage="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1920"
            />
            <section className="contact-section fix section-padding ">
                <div className="container">
                    <div className="contact-wrapper-2">
                        <div className="row g-4 align-items-stretch">
                            <div className="col-lg-6">
                                <ContactAddress />
                            </div>
                            <div className="col-lg-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMap />
        </>
    )
}

export default Contact