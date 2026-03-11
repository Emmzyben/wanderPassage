const WhatsAppButton = () => {
    const phoneNumber = "2349135000681"; // WanderPassage phone number
    const message = "Hello WanderPassage, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;
