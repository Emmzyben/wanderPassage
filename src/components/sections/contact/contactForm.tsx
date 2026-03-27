import { useState } from 'react';
import { contactApi } from '@/lib/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<{ type: string; message: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const res = await contactApi.send(formData);
            if (res.status === 'success') {
                setStatus({ type: 'success', message: res.message || 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: res.message || 'Failed to send message.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-content card shadow-sm border-0 p-4 h-100">
            <h2 className="mb-3">Get in Touch with Our Experts</h2>
            <p className="mb-4">
                Whether you're planning to study abroad or seeking migration assistance, our team is here to guide you every step of the way. Reach out to us today for personalized support.
            </p>
            {status && (
                <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} mb-4`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} id="contact-form" className="contact-form-items">
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Your name*</span>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} name="name" id="name" placeholder="Your Name" required />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Your Email*</span>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".6">
                        <div className="form-clt">
                            <span>Subject</span>
                            <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} name="subject" id="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} id="message" placeholder="Write Message" required />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm