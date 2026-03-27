import { useState, useEffect } from 'react';
import { blogsApi, authApi, ApiUser } from "@/lib/api";

interface BlogCommentFromProps {
    blogId: number;
    onCommentAdded: () => void;
}

const BlogCommentFrom = ({ blogId, onCommentAdded }: BlogCommentFromProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const [user, setUser] = useState<ApiUser | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await authApi.me();
                if (res.status === 'success' && res.user) {
                    setUser(res.user);
                    setName(res.user.username);
                    setEmail(res.user.email);
                }
            } catch (err) {
                // Not logged in, that's fine
            }
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await blogsApi.addComment({
                blog_id: blogId,
                user_id: user?.id,
                name,
                email,
                comment
            });

            if (res.status === 'success') {
                setMessage({ type: 'success', text: 'Comment posted successfully!' });
                setComment('');
                onCommentAdded();
            } else {
                setMessage({ type: 'error', text: res.message || 'Failed to post comment.' });
            }
        } catch (err) {
            setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="comment-form-modern mt-5 pt-5 border-top">
            <h3 className="fw-extra-bold mb-4" style={{ color: '#1a1a1a', letterSpacing: '-0.02em' }}>Post a Conversation</h3>
            <p className="text-muted mb-4">Your email address will not be published. Required fields are marked *</p>
            
            {message && (
                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} border-0 rounded-4 mb-4`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="premium-form">
                <div className="row g-4">
                    {!user && (
                        <>
                            <div className="col-lg-6">
                                <div className="form-group-modern">
                                    <label className="fw-bold small text-uppercase mb-2 text-muted">Full Name *</label>
                                    <input 
                                        type="text" 
                                        className="form-control premium-input"
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        placeholder="e.g. John Doe" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group-modern">
                                    <label className="fw-bold small text-uppercase mb-2 text-muted">Email Address *</label>
                                    <input 
                                        type="email" 
                                        className="form-control premium-input"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="e.g. john@example.com" 
                                        required 
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {user && (
                        <div className="col-12">
                            <div className="d-flex align-items-center gap-2 p-3 rounded-4 bg-light mb-2">
                                <div className="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                                    {user.username[0].toUpperCase()}
                                </div>
                                <span className="small">Logged in as <strong>{user.username}</strong></span>
                            </div>
                        </div>
                    )}

                    <div className="col-lg-12">
                        <div className="form-group-modern">
                            <label className="fw-bold small text-uppercase mb-2 text-muted">Your Message *</label>
                            <textarea 
                                className="form-control premium-input"
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)} 
                                placeholder="What are your thoughts on this article?" 
                                required 
                                style={{ minHeight: '180px', paddingTop: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 text-end">
                        <button type="submit" className="theme-btn btn-lg px-5 py-3 rounded-pill fw-bold" disabled={loading} style={{ background: '#000', color: '#fff', border: 'none', transition: 'all 0.3s ease' }}>
                            {loading ? (
                                <>Publishing... <span className="spinner-border spinner-border-sm ms-2"></span></>
                            ) : (
                                <>Publish Comment <i className="fa-solid fa-paper-plane ms-2 small" /></>
                            )}
                        </button>
                    </div>
                </div>
            </form>

            <style>{`
                .premium-input {
                    padding: 15px 20px;
                    border-radius: 12px;
                    border: 1px solid #e0e0e0;
                    background: #fff;
                    font-size: 1rem;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }
                .premium-input:focus {
                    border-color: #000;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    outline: none;
                }
                .premium-input::placeholder {
                    color: #adb5bd;
                    font-size: 0.95rem;
                }
                .theme-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
                    opacity: 0.9;
                }
                .form-group-modern label {
                    display: block;
                    letter-spacing: 0.5px;
                }
            `}</style>
        </div>
    );
};

export default BlogCommentFrom;