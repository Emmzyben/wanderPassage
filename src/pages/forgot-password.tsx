import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { authApi } from "../lib/api"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [isSubmittingEmail, setIsSubmittingEmail] = useState(false)

    const handleRequestReset = async (e: React.FormEvent) => {
        e.preventDefault()
        setEmailError("")

        if (!email) {
            setEmailError("Please enter your email.")
            return
        }

        setIsSubmittingEmail(true)
        try {
            const result = await authApi.forgotPassword(email)
            if (result.status === "success") {
                setEmailSent(true)
            } else {
                setEmailError(result.message || "Failed to send reset link.")
            }
        } catch (error) {
            setEmailError("Server error. Please try again.")
            console.error(error)
        } finally {
            setIsSubmittingEmail(false)
        }
    }

    return (
        <section className="student-auth-section">
            <motion.div 
                className="student-auth-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="auth-form-inner" style={{ maxWidth: '450px', margin: '0 auto' }}>
                    <AnimatePresence mode="wait">
                        {!emailSent ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="auth-form-header">
                                    <Link to="/"><img src="/img/logo/logo.jpeg" alt="Logo" className="auth-logo-img" /></Link>
                                    <h3>Reset Password</h3>
                                    <p>Enter your email and we'll send you a link to reset your password.</p>
                                </div>

                                <form onSubmit={handleRequestReset}>
                                    <div className="apply-field" style={{ marginBottom: '25px' }}>
                                        <label>Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="your@email.com" 
                                            value={email} 
                                            onChange={e => setEmail(e.target.value)} 
                                        />
                                    </div>

                                    {emailError && (
                                        <div className="apply-error" style={{ background: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fecaca' }}>
                                            <i className="fa-solid fa-triangle-exclamation" /> {emailError}
                                        </div>
                                    )}

                                    <button 
                                        type="submit" 
                                        className="auth-submit-btn" 
                                        disabled={isSubmittingEmail}
                                    >
                                        {isSubmittingEmail ? "Sending..." : "Send Reset Link"}
                                    </button>
                                </form>

                                <div className="auth-footer-link" style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Link to="/student-login" style={{ color: '#3a3086', fontWeight: 600 }}>
                                        <i className="fa-solid fa-arrow-left" /> Back to Login
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ marginBottom: '20px' }}>
                                    <i className="fa-solid fa-circle-check" style={{ fontSize: '60px', color: '#22c55e' }} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px' }}>Check Your Email</h3>
                                <p style={{ color: '#64748b', marginBottom: '30px' }}>
                                    We've sent a recovery link to <strong>{email}</strong>. 
                                    Please check your inbox (and spam folder).
                                </p>
                                <button 
                                    onClick={() => setEmailSent(false)} 
                                    className="apply-btn-secondary"
                                    style={{ width: '100%' }}
                                >
                                    Resend Email
                                </button>
                                <div style={{ marginTop: '20px' }}>
                                    <Link to="/student-login" style={{ color: '#3a3086', fontWeight: 600 }}>Back to Sign In</Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    )
}

export default ForgotPassword
