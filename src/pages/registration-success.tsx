import { Link } from "react-router-dom";

const RegistrationSuccess = () => {
    return (
        <section className="registration-success-section section-padding py-5 min-vh-100 d-flex align-items-center bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="success-card shadow-lg p-5 bg-white rounded-4 border-0">
                            <div className="icon-wrapper mb-4">
                                <div className="success-icon-bg d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '100px', height: '100px', background: 'rgba(21, 128, 61, 0.1)' }}>
                                    <i className="fa-solid fa-envelope-open-text fa-4x" style={{ color: '#15803d' }}></i>
                                </div>
                            </div>
                            <h2 className="fw-bold mb-3" style={{ color: '#1a365d' }}>Verify Your Email</h2>
                            <p className="text-muted fs-5 mb-4">
                                We've sent a verification link to your email inbox. 
                                Please click the link in the email to activate your account and access your dashboard.
                            </p>
                            <div className="alert alert-info border-0 rounded-3 mb-4 py-3" style={{ background: '#eff6ff', color: '#1e40af' }}>
                                <i className="fa-solid fa-circle-info me-2"></i>
                                Can't find the email? Check your <strong>Spam</strong> or <strong>Junk</strong> folder.
                            </div>
                            <div className="d-grid gap-3">
                                <Link to="/student-login" className="theme-btn btn-lg py-3 rounded-pill text-decoration-none">
                                    <i className="fa-solid fa-arrow-left me-2"></i> Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSuccess;
