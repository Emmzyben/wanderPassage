import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "../context/AuthContext"

const StudentLogin = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoginError("")
        if (!email || !password) {
            setLoginError("Email and password are required.")
            return
        }

        setIsLoggingIn(true)
        try {
            const result = await login(email, password)
            if (result.status === "success") {
                if (result.user?.role === "admin") {
                    navigate("/admin-portal")
                } else {
                    navigate("/student-portal")
                }
            } else {
                setLoginError(result.message || "Invalid email or password.")
            }
        } catch (error) {
            setLoginError("Server error. Please try again later.")
            console.error(error)
        } finally {
            setIsLoggingIn(false)
        }
    }

    return (
        <section className="student-auth-section">
            <motion.div
                className="student-auth-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="auth-form-inner">
                    <div className="auth-form-header">
                        <Link to="/"><img src="/img/logo/logo.jpeg" alt="Logo" className="auth-logo-img" /></Link>
                        <h3>Student Login</h3>
                        <p>Sign in to your dashboard to track your application.</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="apply-field">
                            <label>Email Address</label>
                            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="apply-field" style={{ marginBottom: '25px' }}>
                            <label>Password</label>
                            <div className="apply-input-toggle">
                                <input type={showPass ? "text" : "password"} placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                                <button type="button" onClick={() => setShowPass(p => !p)}><i className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`} /></button>
                            </div>
                        </div>

                        {loginError && (
                            <div className="apply-error" style={{ background: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fecaca' }}>
                                <i className="fa-solid fa-triangle-exclamation" /> {loginError}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="auth-submit-btn"
                            disabled={isLoggingIn}
                        >
                            {isLoggingIn ? "Signing In..." : "Sign In"}
                        </button>

                        <div style={{ textAlign: 'right', marginTop: '12px', fontSize: '14px' }}>
                            <Link to="/forgot-password" style={{ color: '#3a3086', fontWeight: 600 }}>Forgot Password?</Link>
                        </div>
                    </form>

                    <div className="auth-divider"><span>or</span></div>

                    <div className="auth-apply-cta">
                        <p>Haven't applied yet?</p>
                        <Link to="/apply" className="auth-apply-btn">
                            Apply Now
                        </Link>
                    </div>

                    <div className="apply-security" style={{ marginTop: '25px' }}>
                        <i className="fa-solid fa-lock" />
                        <span>Secure Session</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default StudentLogin
