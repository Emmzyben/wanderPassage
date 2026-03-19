import React, { useEffect, useState } from 'react';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            setSubmitted(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => setIsAnimating(false), 300);
        }
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => onClose(), 2000);
    };

    return (
        <div className={`cm-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className={`cm-box ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="cm-header">
                    <div>
                        <h3>Book a Free Consultation</h3>
                        <p>Our experts will get back to you within 24 hours.</p>
                    </div>
                    <button className="cm-close" onClick={onClose} aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {/* Body */}
                <div className="cm-body">
                    {submitted ? (
                        <div className="cm-success">
                            <i className="fa-solid fa-circle-check"></i>
                            <h4>Request Sent!</h4>
                            <p>We'll reach out to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="cm-row">
                                <div className="cm-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="cm-field">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+234 800 000 0000" required />
                                </div>
                            </div>

                            <div className="cm-field">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>

                            <div className="cm-field">
                                <label>Service of Interest</label>
                                <select required>
                                    <option value="">Select a service</option>
                                    <option value="study-abroad">Study Abroad</option>
                                    <option value="visa">Visa Processing</option>
                                    <option value="immigration">Immigration (PR / Work Visa)</option>
                                    <option value="test-prep">Test Preparation</option>
                                    <option value="travel">Travel & Accommodation</option>
                                </select>
                            </div>

                            <div className="cm-row">
                                <div className="cm-field">
                                    <label>Preferred Date</label>
                                    <input
                                        type="date"
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
                                <div className="cm-field">
                                    <label>Preferred Time</label>
                                    <select required>
                                        <option value="">Select time</option>
                                        <option value="09:00">9:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="13:00">1:00 PM</option>
                                        <option value="14:00">2:00 PM</option>
                                        <option value="15:00">3:00 PM</option>
                                        <option value="16:00">4:00 PM</option>
                                        <option value="17:00">5:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cm-field">
                                <label>Message <span>(optional)</span></label>
                                <textarea placeholder="Tell us about your goals..." rows={2}></textarea>
                            </div>

                            <button type="submit" className="cm-submit">
                                Send Request <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;
