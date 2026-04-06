import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const RegistrationSuccess = () => {
    return (
        <section className="student-auth-section">
            <motion.div 
                className="apply-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
            >
                <div className="apply-card text-center" style={{ padding: '60px 40px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <i className="fa-solid fa-paper-plane" style={{ 
                            width: '80px', 
                            height: '80px', 
                            fontSize: '32px', 
                            background: 'rgba(34, 197, 94, 0.1)', 
                            color: '#22c55e',
                            borderRadius: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} />
                    </div>

                    <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1e293b', marginBottom: '15px' }}>Application Submitted</h1>
                    <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '40px', lineHeight: '1.6' }}>
                        Your application for enrollment has been successfully received. 
                        Please check your email to verify your account and activate your dashboard.
                    </p>

                    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <div className="d-grid gap-3">
                            <Link to="/student-login" className="apply-btn-primary" style={{ textDecoration: 'none' }}>
                                Back to Login
                            </Link>
                            <Link to="/" className="apply-btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa-solid fa-house" /> Go Home
                            </Link>
                        </div>
                    </div>

                    <div className="apply-security" style={{ marginTop: '40px' }}>
                        <i className="fa-solid fa-shield-halved" />
                        <span>Secure Verification Process</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default RegistrationSuccess
