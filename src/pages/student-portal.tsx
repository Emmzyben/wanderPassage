import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "../context/AuthContext"
import { dashboardApi } from "../lib/api"
import PortalHeader from "../components/headers/portalHeader"

type DocStatus = "pending" | "uploaded" | "verified" | "rejected"

interface Document {
    id: string
    label: string
    description: string
    icon: string
    required: boolean
    status: DocStatus
    fileName?: string
    filePath?: string
}

const initialDocuments: Document[] = [
    {
        id: "passport",
        label: "Passport",
        description: "International passport (bio-data page). Must be valid for at least 6 months.",
        icon: "fa-passport",
        required: true,
        status: "pending",
    },
    {
        id: "transcripts",
        label: "Academic Transcripts",
        description: "Official transcripts from all attended institutions.",
        icon: "fa-file-lines",
        required: true,
        status: "pending",
    },
    {
        id: "cv",
        label: "Curriculum Vitae (CV)",
        description: "Updated CV detailing your academic and professional background.",
        icon: "fa-id-card",
        required: true,
        status: "pending",
    },
    {
        id: "sop",
        label: "Statement of Purpose (SOP)",
        description: "A detailed statement explaining your purpose and goals for study abroad.",
        icon: "fa-pen-to-square",
        required: true,
        status: "pending",
    },
    {
        id: "waec",
        label: "WAEC / NECO Certificate",
        description: "West African Examinations Council or National Examinations Council results.",
        icon: "fa-certificate",
        required: true,
        status: "pending",
    },
    {
        id: "recommendation",
        label: "Recommendation Letters",
        description: "At least two academic or professional recommendation letters.",
        icon: "fa-envelope-open-text",
        required: true,
        status: "pending",
    },
    {
        id: "research",
        label: "Research Proposal",
        description: "Required for postgraduate applicants. Outline your research intent and methodology.",
        icon: "fa-microscope",
        required: false,
        status: "pending",
    },
]

const statusConfig: Record<DocStatus, { label: string; className: string; icon: string }> = {
    pending: { label: "Pending Upload", className: "status-pending", icon: "fa-clock" },
    uploaded: { label: "Uploaded", className: "status-uploaded", icon: "fa-cloud-arrow-up" },
    verified: { label: "Verified", className: "status-verified", icon: "fa-circle-check" },
    rejected: { label: "Rejected", className: "status-rejected", icon: "fa-circle-xmark" },
}

const StudentPortal = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [documents, setDocuments] = useState<Document[]>(initialDocuments)
    const [activeSection, setActiveSection] = useState<"overview" | "documents" | "status" | "profile">("overview")
    const [draggingId, setDraggingId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    // Toast state
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: '', type: null }), 4000);
    };

    // Password Update State
    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: ""
    })
    const [passMsg, setPassMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [passLoading, setPassLoading] = useState(false)

    // 1. Fetch documents from backend on mount
    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const res = await dashboardApi.getDocuments()
                if (res.status === 'success' && res.documents) {
                    setDocuments(prev => prev.map(d => {
                        const backendDoc = res.documents?.find(bd => bd.doc_key === d.id)
                        if (backendDoc) {
                            return {
                                ...d,
                                status: backendDoc.status,
                                fileName: backendDoc.file_name,
                                filePath: backendDoc.file_path
                            }
                        }
                        return d
                    }))
                }
            } catch (err) {
                console.error("Failed to fetch documents:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchDocs()
    }, [])

    // Auth guard is handled by <ProtectedRoute> in router.tsx

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault()
        logout()
        navigate("/student-login")
    }

    const uploaded = documents.filter(d => d.status !== "pending").length
    const verifiedUsers = documents.filter(d => d.status === "verified").length
    const total = documents.length
    const progress = Math.round((uploaded / total) * 100)

    const handleFileChange = async (docId: string, file: File | null) => {
        if (!file) return
        try {
            const res = await dashboardApi.uploadDocument(docId, file)
            if (res.status === 'success') {
                setDocuments(prev =>
                    prev.map(d =>
                        d.id === docId ? { ...d, status: "uploaded", fileName: res.fileName, filePath: res.filePath } : d
                    )
                )
                showToast(`"${file.name}" uploaded successfully!`)
            } else {
                showToast(res.message || "Upload failed", "error")
            }
        } catch (err) {
            console.error("Upload error:", err)
            showToast("An error occurred during upload", "error")
        }
    }

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        setPassMsg(null)

        if (passwords.new !== passwords.confirm) {
            setPassMsg({ type: 'error', text: "New passwords do not match" })
            return
        }

        if (passwords.new.length < 6) {
            setPassMsg({ type: 'error', text: "New password is too short" })
            return
        }

        setPassLoading(true)
        try {
            const { authApi } = await import("../lib/api")
            const res = await authApi.updatePassword(passwords.current, passwords.new)
            if (res.status === 'success') {
                setPassMsg({ type: 'success', text: "Password updated successfully!" })
                setPasswords({ current: "", new: "", confirm: "" })
            } else {
                setPassMsg({ type: 'error', text: res.message || "Failed to update password" })
            }
        } catch (err) {
            setPassMsg({ type: 'error', text: "An unexpected error occurred" })
        } finally {
            setPassLoading(false)
        }
    }

    const handleDrop = (e: React.DragEvent, docId: string) => {
        e.preventDefault()
        setDraggingId(null)
        const file = e.dataTransfer.files[0]
        if (file) handleFileChange(docId, file)
    }

    if (loading) {
        return (
            <div className="portal-loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="student-dashboard-layout">
            <aside className="portal-sidebar-new">
                <div className="sidebar-logo">
                    <img src="/img/logo/logo.jpeg" alt="Logo" />
                </div>

                <div className="sidebar-nav-container">
                    <nav className="portal-nav-v2">
                        <button
                            id="nav-overview"
                            className={`nav-item-v2 ${activeSection === "overview" ? "active" : ""}`}
                            onClick={() => setActiveSection("overview")}
                        >
                            <i className="fa-solid fa-gauge-high" />
                            <span>Overview</span>
                        </button>
                        <button
                            id="nav-documents"
                            className={`nav-item-v2 ${activeSection === "documents" ? "active" : ""}`}
                            onClick={() => setActiveSection("documents")}
                        >
                            <i className="fa-solid fa-file-arrow-up" />
                            <span>Documents</span>
                            {documents.filter(d => d.status === "pending").length > 0 && (
                                <span className="item-badge">
                                    {documents.filter(d => d.status === "pending").length}
                                </span>
                            )}
                        </button>
                        <button
                            id="nav-status"
                            className={`nav-item-v2 ${activeSection === "status" ? "active" : ""}`}
                            onClick={() => setActiveSection("status")}
                        >
                            <i className="fa-solid fa-clock-rotate-left" />
                            <span>Status</span>
                        </button>
                        <button
                            id="nav-profile"
                            className={`nav-item-v2 ${activeSection === "profile" ? "active" : ""}`}
                            onClick={() => setActiveSection("profile")}
                        >
                            <i className="fa-solid fa-user-gear" />
                            <span>Settings</span>
                        </button>
                    </nav>

                    <div className="sidebar-footer">
                        <Link to="/contact" className="support-link">
                            <i className="fa-solid fa-circle-question"></i>
                            <span>Need Help?</span>
                        </Link>
                        <button onClick={handleLogout} className="logout-btn-v2">
                            <i className="fa-solid fa-power-off"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            <main className="dashboard-main-content">
                <PortalHeader />

                <div className="portal-content-scroll">
                    <div className="portal-content-inner">
                        {activeSection === "overview" && (
                            <div className="portal-view-container fade-in">
                                <div className="portal-welcome-banner">
                                    <div className="banner-content">
                                        <h2 style={{ color: 'white' }}>Complete Your Application, {user?.username}!</h2>
                                        <p style={{ color: 'white' }}>You're almost there! Upload your remaining documents to speed up your visa process.</p>
                                        <button className="banner-btn" onClick={() => setActiveSection("documents")}>
                                            Upload Now <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="banner-icon">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                    </div>
                                </div>

                                <div className="portal-stats-grid-v2">
                                    <div className="portal-stat-card-v2">
                                        <div className="stat-header">
                                            <div className="icon uploaded"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                                            <span className="trend positive">Uploaded</span>
                                        </div>
                                        <div className="stat-body">
                                            <h4>{uploaded}</h4>
                                            <p>Total Documents</p>
                                        </div>
                                    </div>
                                    <div className="portal-stat-card-v2">
                                        <div className="stat-header">
                                            <div className="icon verified"><i className="fa-solid fa-circle-check"></i></div>
                                            <span className="trend positive">Verified</span>
                                        </div>
                                        <div className="stat-body">
                                            <h4>{verifiedUsers}</h4>
                                            <p>Approved Docs</p>
                                        </div>
                                    </div>
                                    <div className="portal-stat-card-v2">
                                        <div className="stat-header">
                                            <div className="icon pending"><i className="fa-solid fa-clock"></i></div>
                                            <span className="trend">Pending</span>
                                        </div>
                                        <div className="stat-body">
                                            <h4>{total - uploaded}</h4>
                                            <p>Required Uploads</p>
                                        </div>
                                    </div>
                                    <div className="portal-stat-card-v2">
                                        <div className="stat-header">
                                            <div className="icon progress-icon"><i className="fa-solid fa-percent"></i></div>
                                            <span className="trend positive">Success Rate</span>
                                        </div>
                                        <div className="stat-body">
                                            <h4>{progress}%</h4>
                                            <p>Application Progress</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="portal-dual-grid">
                                    <div className="portal-progress-panel">
                                        <div className="panel-header">
                                            <h3>Application Journey</h3>
                                            <span className="status-pill active">In Progress</span>
                                        </div>
                                        <div className="journey-progress">
                                            <div className="progress-info">
                                                <span>Overall Completion</span>
                                                <span>{progress}%</span>
                                            </div>
                                            <div className="progress-bar-v2">
                                                <div className="fill" style={{ width: `${progress}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="doc-quick-list">
                                            {documents.slice(0, 4).map(doc => (
                                                <div key={doc.id} className={`doc-item ${doc.status !== "pending" ? "done" : ""}`}>
                                                    <i className={`fa-solid ${doc.status !== "pending" ? "fa-circle-check" : "fa-circle-notch"}`}></i>
                                                    <span>{doc.label}</span>
                                                    <span className={`status-text ${doc.status}`}>{doc.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="portal-actions-panel">
                                        <h3>Quick Navigation</h3>
                                        <div className="actions-grid-v2">
                                            <button onClick={() => setActiveSection("documents")} className="action-card-v2">
                                                <i className="fa-solid fa-folder-plus"></i>
                                                <span>New Upload</span>
                                            </button>
                                            <button onClick={() => setActiveSection("status")} className="action-card-v2">
                                                <i className="fa-solid fa-clipboard-list"></i>
                                                <span>Track Visa</span>
                                            </button>
                                            <Link to="/contact" className="action-card-v2">
                                                <i className="fa-solid fa-comments"></i>
                                                <span>Advisor</span>
                                            </Link>
                                            <button onClick={() => setActiveSection("profile")} className="action-card-v2">
                                                <i className="fa-solid fa-id-card"></i>
                                                <span>Profile</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "documents" && (
                            <div className="portal-view-container fade-in">
                                <div className="section-header-v2">
                                    <h2>Document Management</h2>
                                    <p>Securely upload and manage your application documents.</p>
                                </div>

                                <div className="documents-grid-v2">
                                    {documents.map(doc => {
                                        const st = statusConfig[doc.status]
                                        return (
                                            <div
                                                key={doc.id}
                                                className={`doc-card-v2 ${doc.status !== "pending" ? "has-file" : ""} ${draggingId === doc.id ? "drag-active" : ""}`}
                                                onDragOver={e => { e.preventDefault(); setDraggingId(doc.id) }}
                                                onDragLeave={() => setDraggingId(null)}
                                                onDrop={e => handleDrop(e, doc.id)}
                                            >
                                                <div className="card-top">
                                                    <div className="doc-type-icon">
                                                        <i className={`fa-solid ${doc.icon}`} />
                                                    </div>
                                                    <div className={`status-dot ${doc.status}`}></div>
                                                </div>
                                                <div className="card-content">
                                                    <h4>{doc.label}</h4>
                                                    <p>{doc.description}</p>
                                                </div>

                                                {doc.fileName && (
                                                    <div className="file-info-v2">
                                                        <i className="fa-regular fa-file-pdf"></i>
                                                        <span>{doc.fileName}</span>
                                                    </div>
                                                )}

                                                <div className="card-footer-v2">
                                                    <label htmlFor={`file-${doc.id}`} className="upload-label-v2">
                                                        {doc.status === "pending" ? "Upload File" : "Replace File"}
                                                    </label>
                                                    <input
                                                        id={`file-${doc.id}`}
                                                        type="file"
                                                        accept=".pdf,.jpg,.jpeg,.png"
                                                        style={{ display: "none" }}
                                                        onChange={e => handleFileChange(doc.id, e.target.files?.[0] ?? null)}
                                                    />
                                                    <span className={`status-badge-v2 ${doc.status}`}>{st.label}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {activeSection === "status" && (
                            <div className="portal-view-container fade-in">
                                <div className="section-header-v2">
                                    <h2>Application Progress</h2>
                                    <p>Live tracking of your visa application steps.</p>
                                </div>

                                <div className="status-content-layout">
                                    <div className="timeline-card-v2">
                                        <div className="timeline-v2">
                                            <div className="timeline-item-v2 completed">
                                                <div className="marker"><i className="fa-solid fa-check"></i></div>
                                                <div className="content">
                                                    <h4>Account Registration</h4>
                                                    <p>Profile created successfully on {new Date().toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className={`timeline-item-v2 ${['academic_review', 'embassy_filing', 'completed'].includes(user?.application_status || '') ? 'completed' : uploaded > 0 ? 'completed' : 'current'}`}>
                                                <div className="marker"><i className={`fa-solid ${['academic_review', 'embassy_filing', 'completed'].includes(user?.application_status || '') || uploaded > 0 ? 'fa-check' : 'fa-spinner fa-spin'}`}></i></div>
                                                <div className="content">
                                                    <h4>Document Submission</h4>
                                                    <p>{uploaded} of {total} documents uploaded to the portal</p>
                                                </div>
                                            </div>
                                            <div className={`timeline-item-v2 ${['embassy_filing', 'completed'].includes(user?.application_status || '') ? 'completed' : user?.application_status === 'academic_review' ? 'current' : 'future'}`}>
                                                <div className="marker"><i className={`fa-solid ${['embassy_filing', 'completed'].includes(user?.application_status || '') ? 'fa-check' : user?.application_status === 'academic_review' ? 'fa-spinner fa-spin' : 'fa-magnifying-glass'}`}></i></div>
                                                <div className="content">
                                                    <h4>Academic Review</h4>
                                                    <p>Verification of submitted credentials by our compliance team</p>
                                                </div>
                                            </div>
                                            <div className={`timeline-item-v2 ${user?.application_status === 'completed' ? 'completed' : user?.application_status === 'embassy_filing' ? 'current' : 'future'}`}>
                                                <div className="marker"><i className={`fa-solid ${user?.application_status === 'completed' ? 'fa-check' : user?.application_status === 'embassy_filing' ? 'fa-spinner fa-spin' : 'fa-passport'}`}></i></div>
                                                <div className="content">
                                                    <h4>Embassy Filing</h4>
                                                    <p>Final submission to the destination country embassy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="summary-status-card">
                                        <h3>Document Summary</h3>
                                        <div className="summary-list">
                                            {documents.map(doc => (
                                                <div key={doc.id} className="summary-row">
                                                    <span className="row-label">{doc.label}</span>
                                                    <span className={`row-status ${doc.status}`}>{doc.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "profile" && (
                            <div className="portal-view-container fade-in">
                                <div className="section-header-v2">
                                    <h2>Account Settings</h2>
                                    <p>Manage your account security and preferences.</p>
                                </div>

                                <div className="settings-grid-v2">
                                    <div className="settings-card-v2">
                                        <div className="card-header">
                                            <i className="fa-solid fa-shield-halved"></i>
                                            <h3>Security</h3>
                                        </div>
                                        <form className="password-form-v2" onSubmit={handlePasswordUpdate}>
                                            {passMsg && (
                                                <div className={`form-alert ${passMsg.type}`}>
                                                    {passMsg.text}
                                                </div>
                                            )}
                                            <div className="form-input-group">
                                                <label>Current Password</label>
                                                <input
                                                    type="password"
                                                    value={passwords.current}
                                                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            <div className="form-input-group">
                                                <label>New Password</label>
                                                <input
                                                    type="password"
                                                    value={passwords.new}
                                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                                    placeholder="Min 6 characters"
                                                />
                                            </div>
                                            <div className="form-input-group">
                                                <label>Confirm Password</label>
                                                <input
                                                    type="password"
                                                    value={passwords.confirm}
                                                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                                    placeholder="Repeat new password"
                                                />
                                            </div>
                                            <button type="submit" className="save-btn" disabled={passLoading}>
                                                {passLoading ? 'Updating...' : 'Update Password'}
                                            </button>
                                        </form>
                                    </div>

                                    <div className="settings-card-v2">
                                        <div className="card-header">
                                            <i className="fa-solid fa-user-circle"></i>
                                            <h3>Portal Preferences</h3>
                                        </div>
                                        <div className="pref-list">
                                            <div className="pref-item">
                                                <div className="text">
                                                    <span>Email Notifications</span>
                                                    <p>Receive updates about your application via email</p>
                                                </div>
                                                <div className="toggle">
                                                    <input type="checkbox" defaultChecked />
                                                </div>
                                            </div>
                                            <div className="pref-item">
                                                <div className="text">
                                                    <span>Browser Notifications</span>
                                                    <p>Get real-time browser alerts</p>
                                                </div>
                                                <div className="toggle">
                                                    <input type="checkbox" defaultChecked />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Toast Notifications */}
            <AnimatePresence>
                {toast.type && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className={`portal-toast ${toast.type}`}
                    >
                        <i className={`fa-solid ${toast.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                        <span>{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default StudentPortal
