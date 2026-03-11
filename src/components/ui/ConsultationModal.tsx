import React, { useEffect, useState } from 'react';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => setIsAnimating(false), 300);
        }
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    return (
        <div className={`consultation-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`consultation-modal-content ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="modal-header-banner">
                    <div className="modal-title-wrap">
                        <h3>Book a Consultation</h3>
                        <p>Speak with our experts and start your journey today.</p>
                    </div>
                </div>

                <div className="modal-body-content">
                    <form onSubmit={(e) => { e.preventDefault(); alert('Booking request sent! We will contact you soon.'); onClose(); }}>
                        <div className="form-group-row">
                            <div className="input-field-wrap">
                                <label>First Name</label>
                                <input type="text" placeholder="John" required />
                            </div>
                            <div className="input-field-wrap">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="input-field-wrap">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="input-field-wrap">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" required />
                        </div>

                        <div className="input-field-wrap">
                            <label>Consultation Type</label>
                            <select required>
                                <option value="">Select Service</option>
                                <option value="study-abroad">Study Abroad</option>
                                <option value="visa-assistance">Visa Assistance</option>
                                <option value="career-counseling">Career Counseling</option>
                                <option value="travel-booking">Flight & Travel Booking</option>
                            </select>
                        </div>

                        <div className="input-field-wrap">
                            <label>Preferred Date & Time</label>
                            <input type="datetime-local" required />
                        </div>

                        <button type="submit" className="submit-btn">
                            <span>Confirm Booking</span>
                            <i className="fa-solid fa-calendar-check"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;
