import { useState } from 'react';
import { contactApi } from '@/lib/api';

const HomeContactOne = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
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
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
        <div className="contact-section-21 section-padding section-bg">
            <div className="contact-image-2">
                <img src="/img/contact-2.jpg" alt="img" />
            </div>
            <div className="contact-wrapper-21">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" />
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-content">
                                <div className="section-title">
                                    <span className="wow slideUp" style={{ visibility: 'visible' }}>Get in touch</span>
                                    <h2 className="wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>Start Your Journey with <br /> Wander Passage</h2>
                                </div>
                                {status && (
                                    <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'} mt-3`}>
                                        {status.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} id="contact-form" className="mt-4 mt-md-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <div className="form-clt">
                                                <input type="email" name="email" id="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Phone number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <div className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 wow slideUp" data-delay=".3" style={{ visibility: 'visible', animationDelay: '0.3s' }}>
                                            <div className="form-clt">
                                                <textarea name="message" id="message" placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow slideUp" data-delay=".5" style={{ visibility: 'visible', animationDelay: '0.5s' }}>
                                            <button type="submit" className="theme-btn" disabled={loading}>
                                                {loading ? 'Submitting...' : 'Submit Here'} <i className="far fa-long-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactOne