import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const StudentLogin = () => {
    const { login, register } = useAuth()
    const [activeTab, setActiveTab] = useState<"login" | "register">("login")
    const navigate = useNavigate()

    // --- Login state ---
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const [showLoginPass, setShowLoginPass] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    // --- Register state ---
    const [regFirstName, setRegFirstName] = useState("")
    const [regLastName, setRegLastName] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regPhone, setRegPhone] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [regConfirm, setRegConfirm] = useState("")
    const [regError, setRegError] = useState("")
    const [showRegPass, setShowRegPass] = useState(false)
    const [isRegistering, setIsRegistering] = useState(false)
    const [agreed, setAgreed] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoginError("")
        if (!loginEmail || !loginPassword) {
            setLoginError("Please fill in all fields.")
            return
        }

        setIsLoggingIn(true)
        try {
            const result = await login(loginEmail, loginPassword)
            if (result.status === "success") {
                if (result.user?.role === 'admin') {
                    navigate("/admin-portal")
                } else {
                    navigate("/student-portal")
                }
            } else {
                setLoginError(result.message || "Invalid email or password. Please try again.")
            }
        } catch (error) {
            setLoginError("Failed to connect to authentication server.")
            console.error(error)
        } finally {
            setIsLoggingIn(false)
        }
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setRegError("")
        if (!regFirstName || !regLastName || !regEmail || !regPhone || !regPassword || !regConfirm) {
            setRegError("Please fill in all required fields.")
            return
        }
        if (regPassword !== regConfirm) {
            setRegError("Passwords do not match.")
            return
        }
        if (!agreed) {
            setRegError("You must agree to the terms and conditions.")
            return
        }

        setIsRegistering(true)
        try {
            const username = `${regFirstName} ${regLastName}`
            const result = await register(username, regEmail, regPassword)
            if (result.status === "success") {
                if (result.user?.role === 'admin') {
                    navigate("/admin-portal")
                } else {
                    navigate("/student-portal")
                }
            } else {
                setRegError(result.message || "Registration failed. Please try again.")
            }
        } catch (error) {
            setRegError("Failed to connect to authentication server.")
            console.error(error)
        } finally {
            setIsRegistering(false)
        }
    }

    return (
        <>


            <section className="student-auth-section">
                <div className="container">
                    {/* Floating shapes for visual interest */}
                    <div className="auth-bg-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>

                    <div className="student-auth-layout">
                        {/* ── Left Panel: Visual/Info ── */}
                        <div className="auth-info-panel">
                            <div className="auth-info-image">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Student studying" />
                            </div>
                        </div>

                        {/* ── Right Panel: Form ── */}
                        <div className="auth-form-panel">
                            <div className="auth-form-inner">
                                {/* Tabs */}
                                <div className="auth-tabs">
                                    <button
                                        id="tab-login"
                                        className={`auth-tab-btn ${activeTab === "login" ? "active" : ""}`}
                                        onClick={() => setActiveTab("login")}
                                    >
                                        <i className="fa-solid fa-right-to-bracket" /> Sign In
                                    </button>
                                    <button
                                        id="tab-register"
                                        className={`auth-tab-btn ${activeTab === "register" ? "active" : ""}`}
                                        onClick={() => setActiveTab("register")}
                                    >
                                        <i className="fa-solid fa-user-plus" /> Create Account
                                    </button>
                                </div>

                                {/* ── LOGIN FORM ── */}
                                {activeTab === "login" && (
                                    <div className="auth-form-container">
                                        <div className="form-welcome">
                                            <h3>Welcome Back!</h3>
                                            <p>Sign in to access your application dashboard</p>
                                        </div>
                                        <form id="student-login-form" onSubmit={handleLogin} noValidate>
                                            <div className="form-group-auth">
                                                <label htmlFor="login-email">
                                                    <i className="fa-regular fa-envelope" /> Email Address
                                                </label>
                                                <input
                                                    id="login-email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={loginEmail}
                                                    onChange={e => setLoginEmail(e.target.value)}
                                                    autoComplete="email"
                                                />
                                            </div>

                                            <div className="form-group-auth">
                                                <label htmlFor="login-password">
                                                    <i className="fa-solid fa-lock" /> Password
                                                </label>
                                                <div className="input-with-toggle">
                                                    <input
                                                        id="login-password"
                                                        type={showLoginPass ? "text" : "password"}
                                                        placeholder="Enter your password"
                                                        value={loginPassword}
                                                        onChange={e => setLoginPassword(e.target.value)}
                                                        autoComplete="current-password"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="toggle-pass"
                                                        aria-label="Toggle password visibility"
                                                        onClick={() => setShowLoginPass(p => !p)}
                                                    >
                                                        <i className={`fa-regular ${showLoginPass ? "fa-eye-slash" : "fa-eye"}`} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="form-row-auth">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" id="remember-me" /> Remember me
                                                </label>
                                                <Link to="#" className="forgot-link">Forgot Password?</Link>
                                            </div>

                                            {loginError && (
                                                <div className="auth-error">
                                                    <i className="fa-solid fa-circle-exclamation" /> {loginError}
                                                </div>
                                            )}

                                            <button 
                                                id="login-submit-btn" 
                                                type="submit" 
                                                className="auth-submit-btn"
                                                disabled={isLoggingIn}
                                            >
                                                {isLoggingIn ? (
                                                    <>
                                                        <i className="fa-solid fa-spinner fa-spin" /> Signing In...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa-solid fa-right-to-bracket" /> Sign In to Portal
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        <div className="auth-divider"><span>or</span></div>
                                        <p className="auth-switch-text">
                                            Don't have an account?{" "}
                                            <button className="auth-switch-link" onClick={() => setActiveTab("register")}>
                                                Create one now
                                            </button>
                                        </p>
                                    </div>
                                )}

                                {/* ── REGISTER FORM ── */}
                                {activeTab === "register" && (
                                    <div className="auth-form-container">
                                        <div className="form-welcome">
                                            <h3>Create Your Account</h3>
                                            <p>Start your study abroad application today</p>
                                        </div>
                                        <form id="student-register-form" onSubmit={handleRegister} noValidate>
                                            <div className="form-row-two-cols">
                                                <div className="form-group-auth">
                                                    <label htmlFor="reg-firstname">
                                                        <i className="fa-regular fa-user" /> First Name
                                                    </label>
                                                    <input
                                                        id="reg-firstname"
                                                        type="text"
                                                        placeholder="First name"
                                                        value={regFirstName}
                                                        onChange={e => setRegFirstName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group-auth">
                                                    <label htmlFor="reg-lastname">
                                                        <i className="fa-regular fa-user" /> Last Name
                                                    </label>
                                                    <input
                                                        id="reg-lastname"
                                                        type="text"
                                                        placeholder="Last name"
                                                        value={regLastName}
                                                        onChange={e => setRegLastName(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group-auth">
                                                <label htmlFor="reg-email">
                                                    <i className="fa-regular fa-envelope" /> Email Address
                                                </label>
                                                <input
                                                    id="reg-email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={regEmail}
                                                    onChange={e => setRegEmail(e.target.value)}
                                                    autoComplete="email"
                                                />
                                            </div>

                                            <div className="form-group-auth">
                                                <label htmlFor="reg-phone">
                                                    <i className="fa-solid fa-phone" /> Phone Number
                                                </label>
                                                <input
                                                    id="reg-phone"
                                                    type="tel"
                                                    placeholder="+234 800 000 0000"
                                                    value={regPhone}
                                                    onChange={e => setRegPhone(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-row-two-cols">
                                                <div className="form-group-auth">
                                                    <label htmlFor="reg-password">
                                                        <i className="fa-solid fa-lock" /> Password
                                                    </label>
                                                    <div className="input-with-toggle">
                                                        <input
                                                            id="reg-password"
                                                            type={showRegPass ? "text" : "password"}
                                                            placeholder="Create password"
                                                            value={regPassword}
                                                            onChange={e => setRegPassword(e.target.value)}
                                                            autoComplete="new-password"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="toggle-pass"
                                                            aria-label="Toggle password visibility"
                                                            onClick={() => setShowRegPass(p => !p)}
                                                        >
                                                            <i className={`fa-regular ${showRegPass ? "fa-eye-slash" : "fa-eye"}`} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group-auth">
                                                    <label htmlFor="reg-confirm">
                                                        <i className="fa-solid fa-lock" /> Confirm Password
                                                    </label>
                                                    <input
                                                        id="reg-confirm"
                                                        type="password"
                                                        placeholder="Repeat password"
                                                        value={regConfirm}
                                                        onChange={e => setRegConfirm(e.target.value)}
                                                        autoComplete="new-password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pass-strength-hint">
                                                <i className="fa-solid fa-shield-halved" /> Use at least 8 characters with a mix of letters, numbers &amp; symbols.
                                            </div>

                                            <label className="checkbox-label terms-check">
                                                <input
                                                    type="checkbox"
                                                    id="terms-agree"
                                                    checked={agreed}
                                                    onChange={e => setAgreed(e.target.checked)}
                                                />
                                                I agree to the{" "}
                                                <Link to="/terms-of-service" className="forgot-link">Terms of Service</Link>{" "}
                                                and{" "}
                                                <Link to="/privacy-policy" className="forgot-link">Privacy Policy</Link>
                                            </label>

                                            {regError && (
                                                <div className="auth-error">
                                                    <i className="fa-solid fa-circle-exclamation" /> {regError}
                                                </div>
                                            )}

                                            <button 
                                                id="register-submit-btn" 
                                                type="submit" 
                                                className="auth-submit-btn"
                                                disabled={isRegistering}
                                            >
                                                {isRegistering ? (
                                                    <>
                                                        <i className="fa-solid fa-spinner fa-spin" /> Creating Account...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fa-solid fa-user-plus" /> Create My Account
                                                    </>
                                                )}
                                            </button>
                                        </form>

                                        <div className="auth-divider"><span>or</span></div>
                                        <p className="auth-switch-text">
                                            Already have an account?{" "}
                                            <button className="auth-switch-link" onClick={() => setActiveTab("login")}>
                                                Sign in here
                                            </button>
                                        </p>
                                    </div>
                                )}

                                {/* Security badge */}
                                <div className="auth-security-badge">
                                    <i className="fa-solid fa-shield-halved" />
                                    <span>Your data is encrypted and protected with 256-bit SSL security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentLogin
