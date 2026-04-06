import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { applyApi } from "../lib/api"

// ── Data ────────────────────────────────────────────────────────────────────

const COUNTRIES = [
    "Australia", "Austria", "Belgium", "Canada", "China", "Cyprus",
    "Czech Republic", "Denmark", "Finland", "France", "Germany", "Greece",
    "Hungary", "India", "Ireland", "Italy", "Japan", "Malta", "Netherlands",
    "New Zealand", "Norway", "Poland", "Portugal", "Singapore", "South Korea",
    "Spain", "Sweden", "Switzerland", "United Kingdom", "United States",
]

const SERVICES = [
    "Study Visa",
    "Visit / Tourism",
    "Admission",
    "Flight Booking",
    "Admission / Visa Consultation",
]

const PROGRAMS = [
    "Undergraduate",
    "Masters Degree",
    "PhD",
]

const DOCUMENTS = [
    { key: "degree_certificate", label: "Degree Certificate",         icon: "fa-graduation-cap" },
    { key: "degree_transcript",  label: "Degree Transcript",           icon: "fa-file-lines" },
    { key: "cv",                 label: "Curriculum Vitae (CV)",        icon: "fa-id-card" },
    { key: "reference_letter",   label: "Reference Letter",             icon: "fa-envelope-open-text" },
    { key: "waec_neco",          label: "WAEC or NECO Certificate",     icon: "fa-certificate" },
    { key: "intl_passport",      label: "International Passport",       icon: "fa-passport" },
    { key: "english_test",       label: "English Test Certificate",     icon: "fa-language" },
]

// ── Component ────────────────────────────────────────────────────────────────

type FileMap = Record<string, File | null>

const Apply = () => {
    const navigate = useNavigate()

    // Personal Details
    const [fullName,  setFullName]  = useState("")
    const [email,     setEmail]     = useState("")
    const [phone,     setPhone]     = useState("")
    const [password,  setPassword]  = useState("")
    const [confirm,   setConfirm]   = useState("")
    const [address,   setAddress]   = useState("")
    const [showPass,  setShowPass]  = useState(false)
    const [showConf,  setShowConf]  = useState(false)

    // Application Details
    const [country,  setCountry]  = useState("")
    const [service,  setService]  = useState("")
    const [program,  setProgram]  = useState("")

    // Documents
    const [files, setFiles] = useState<FileMap>(() =>
        Object.fromEntries(DOCUMENTS.map(d => [d.key, null]))
    )

    // UI State
    const [step,        setStep]        = useState<1 | 2 | 3>(1)
    const [error,       setError]       = useState("")
    const [submitting,  setSubmitting]  = useState(false)
    const [agreed,      setAgreed]      = useState(false)
    const fileRefs = useRef<Record<string, HTMLInputElement | null>>({})

    // ── Validation ────────────────────────────────────────────────────────

    const validateStep1 = () => {
        if (!fullName.trim())              return "Full name is required."
        if (!email.trim())                 return "Email is required."
        if (!/\S+@\S+\.\S+/.test(email))  return "Invalid email address."
        if (!phone.trim())                 return "Phone number is required."
        if (!address.trim())              return "Address is required."
        if (password.length < 6)           return "Password must be at least 6 characters."
        if (password !== confirm)          return "Passwords do not match."
        return ""
    }

    const validateStep2 = () => {
        if (!country) return "Select a country."
        if (!service) return "Select a service."
        if (!program) return "Select a program."
        return ""
    }

    const validateStep3 = () => {
        for (const doc of DOCUMENTS) {
            if (!files[doc.key]) return `${doc.label} is required.`
        }
        if (!agreed) return "You must agree to the terms."
        return ""
    }

    // ── Step navigation ───────────────────────────────────────────────────

    const handleNext = () => {
        setError("")
        let err = ""
        if (step === 1) err = validateStep1()
        if (step === 2) err = validateStep2()
        if (err) { setError(err); return }
        setStep(prev => (prev + 1) as 1 | 2 | 3)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleBack = () => {
        setError("")
        setStep(prev => (prev - 1) as 1 | 2 | 3)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // ── File change ───────────────────────────────────────────────────────

    const handleFileChange = (key: string, file: File | null) => {
        setFiles(prev => ({ ...prev, [key]: file }))
    }

    // ── Submit ────────────────────────────────────────────────────────────

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        const err = validateStep3()
        if (err) { setError(err); return }

        setSubmitting(true)
        try {
            const fd = new FormData()
            fd.append("full_name",    fullName)
            fd.append("email",        email)
            fd.append("phone",        phone)
            fd.append("password",     password)
            fd.append("address",      address)
            fd.append("country",      country)
            fd.append("service_type", service)
            fd.append("program_choice", program)

            for (const doc of DOCUMENTS) {
                const f = files[doc.key]
                if (f) fd.append(doc.key, f)
            }

            const res = await applyApi.submit(fd)
            if (res.status === "success") {
                navigate("/registration-success")
            } else {
                setError(res.message || "Application failed.")
            }
        } catch (err) {
            console.error(err)
            setError("Server error. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    const stepLabels = ["Personal Details", "Application", "Documents"]

    return (
        <section className="apply-section">
            <div className="apply-container">
                {/* ── Header ── */}
                <div className="apply-header">
                    <Link to="/"><img src="/img/logo/logo.jpeg" alt="Logo" className="apply-logo" /></Link>
                    <h1>Enroll Now</h1>
                    <p>Complete the steps below to submit your study abroad application.</p>
                </div>

                {/* ── Stepper ── */}
                <div className="apply-stepper">
                    {stepLabels.map((label, i) => {
                        const num = i + 1
                        const state = num < step ? "done" : num === step ? "active" : "future"
                        return (
                            <div key={num} className={`stepper-step ${state}`}>
                                <div className="step-circle">
                                    {state === "done" ? <i className="fa-solid fa-check" /> : num}
                                </div>
                                <span className="step-label">{label}</span>
                            </div>
                        )
                    })}
                </div>

                {/* ── Card ── */}
                <div className="apply-card">
                    {error && (
                        <div className="apply-error" style={{ background: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fecaca' }}>
                            <i className="fa-solid fa-triangle-exclamation" /> {error}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="apply-step-container"
                            >
                                <div className="apply-step-title">
                                    <h2>Personal Information</h2>
                                    <p>Enter your contact and identity details.</p>
                                </div>

                                <div className="apply-grid-2">
                                    <div className="apply-field">
                                        <label htmlFor="ap-fullname">Full Name</label>
                                        <input id="ap-fullname" type="text" placeholder="Full legal name" value={fullName} onChange={e => setFullName(e.target.value)} />
                                    </div>
                                    <div className="apply-field">
                                        <label htmlFor="ap-email">Email Address</label>
                                        <input id="ap-email" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="apply-field">
                                        <label htmlFor="ap-phone">Phone Number</label>
                                        <input id="ap-phone" type="tel" placeholder="+234 800 000 0000" value={phone} onChange={e => setPhone(e.target.value)} />
                                    </div>
                                    <div className="apply-field">
                                        <label htmlFor="ap-address">Address</label>
                                        <input id="ap-address" type="text" placeholder="Residential address" value={address} onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <div className="apply-field">
                                        <label htmlFor="ap-password">Create Password</label>
                                        <div className="apply-input-toggle">
                                            <input id="ap-password" type={showPass ? "text" : "password"} placeholder="Min 6 characters" value={password} onChange={e => setPassword(e.target.value)} />
                                            <button type="button" onClick={() => setShowPass(p => !p)}><i className={`fa-regular ${showPass ? "fa-eye-slash" : "fa-eye"}`} /></button>
                                        </div>
                                    </div>
                                    <div className="apply-field">
                                        <label htmlFor="ap-confirm">Confirm Password</label>
                                        <div className="apply-input-toggle">
                                            <input id="ap-confirm" type={showConf ? "text" : "password"} placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} />
                                            <button type="button" onClick={() => setShowConf(p => !p)}><i className={`fa-regular ${showConf ? "fa-eye-slash" : "fa-eye"}`} /></button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="apply-step-container"
                            >
                                <div className="apply-step-title">
                                    <h2>Application Details</h2>
                                    <p>Select your intended destination and program level.</p>
                                </div>

                                <div className="apply-field">
                                    <label htmlFor="ap-country">Country of Choice</label>
                                    <select id="ap-country" value={country} onChange={e => setCountry(e.target.value)}>
                                        <option value="">— Select Country —</option>
                                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div className="apply-field">
                                    <label htmlFor="ap-service">Type of Service</label>
                                    <select id="ap-service" value={service} onChange={e => setService(e.target.value)}>
                                        <option value="">— Select Service —</option>
                                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div className="apply-field">
                                    <label htmlFor="ap-program">Program of Choice</label>
                                    <select id="ap-program" value={program} onChange={e => setProgram(e.target.value)}>
                                        <option value="">— Select Program —</option>
                                        {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="apply-step-container"
                            >
                                <div className="apply-step-title">
                                    <h2>Required Documents</h2>
                                    <p>Upload all required documents to finalize your application.</p>
                                </div>

                                <form id="apply-form" onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="apply-docs-grid">
                                        {DOCUMENTS.map((doc) => {
                                            const f = files[doc.key]
                                            return (
                                                <div
                                                    key={doc.key}
                                                    className={`apply-doc-card ${f ? "has-file" : ""}`}
                                                    onClick={() => fileRefs.current[doc.key]?.click()}
                                                >
                                                    <div className="doc-card-icon"><i className={`fa-solid ${doc.icon}`} /></div>
                                                    <div className="doc-card-info">
                                                        <h4>{doc.label}</h4>
                                                        <span className="doc-placeholder">{f ? f.name : "Choose file"}</span>
                                                    </div>
                                                    <input ref={el => { fileRefs.current[doc.key] = el }} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: "none" }} onChange={e => handleFileChange(doc.key, e.target.files?.[0] ?? null)} />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <label className="apply-checkbox-label">
                                        <input type="checkbox" id="apply-agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
                                        <span>I confirm that all information provided is true and I agree to the <Link to="/terms-of-service" className="apply-link">Terms and Policy</Link>.</span>
                                    </label>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Actions ── */}
                    <div className="apply-step-actions">
                        {step > 1 && (
                            <button type="button" className="apply-btn-secondary" onClick={handleBack} disabled={submitting}>
                                Back
                            </button>
                        )}

                        {step < 3 ? (
                            <button type="button" className="apply-btn-primary" onClick={handleNext} style={{ marginLeft: step === 1 ? 'auto' : '0' }}>
                                Next Step
                            </button>
                        ) : (
                            <button type="submit" form="apply-form" className="apply-btn-primary" disabled={submitting}>
                                {submitting ? "Submitting..." : "Submit Application"}
                            </button>
                        )}
                    </div>

                    <div className="apply-footer-link">Already applied? <Link to="/student-login">Sign in here</Link></div>
                </div>
            </div>
        </section>
    )
}

export default Apply
