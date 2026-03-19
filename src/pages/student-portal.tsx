import { useState } from "react"
import { Link } from "react-router-dom"
import PageTitle from "@/components/sections/pageTitle"

type DocStatus = "pending" | "uploaded" | "verified" | "rejected"

interface Document {
    id: string
    label: string
    description: string
    icon: string
    required: boolean
    status: DocStatus
    fileName?: string
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
    const [documents, setDocuments] = useState<Document[]>(initialDocuments)
    const [activeSection, setActiveSection] = useState<"overview" | "documents" | "status">("overview")
    const [draggingId, setDraggingId] = useState<string | null>(null)
    const [uploadSuccess, setUploadSuccess] = useState<string | null>(null)

    const uploaded = documents.filter(d => d.status !== "pending").length
    const verified = documents.filter(d => d.status === "verified").length
    const total = documents.length
    const progress = Math.round((uploaded / total) * 100)

    const handleFileChange = (docId: string, file: File | null) => {
        if (!file) return
        setDocuments(prev =>
            prev.map(d =>
                d.id === docId ? { ...d, status: "uploaded", fileName: file.name } : d
            )
        )
        setUploadSuccess(`"${file.name}" uploaded successfully!`)
        setTimeout(() => setUploadSuccess(null), 4000)
    }

    const handleDrop = (e: React.DragEvent, docId: string) => {
        e.preventDefault()
        setDraggingId(null)
        const file = e.dataTransfer.files[0]
        if (file) handleFileChange(docId, file)
    }

    return (
        <>
            <PageTitle
                title="My Application Portal"
                currentPage="Student Portal"
                backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="student-portal-section section-padding">
                <div className="container-fluid portal-container">

                    {/* Upload success toast */}
                    {uploadSuccess && (
                        <div className="upload-toast">
                            <i className="fa-solid fa-circle-check" /> {uploadSuccess}
                        </div>
                    )}

                    <div className="portal-layout">
                        {/* ── Sidebar ── */}
                        <aside className="portal-sidebar">
                            <div className="portal-user-card">
                                <div className="portal-avatar">
                                    <i className="fa-solid fa-user-graduate" />
                                </div>
                                <h5>Student Applicant</h5>
                                <p>student@wanderpassage.com</p>
                                <span className="portal-badge">Active Application</span>
                            </div>

                            <nav className="portal-nav">
                                <button
                                    id="nav-overview"
                                    className={`portal-nav-item ${activeSection === "overview" ? "active" : ""}`}
                                    onClick={() => setActiveSection("overview")}
                                >
                                    <i className="fa-solid fa-gauge-high" /> Overview
                                </button>
                                <button
                                    id="nav-documents"
                                    className={`portal-nav-item ${activeSection === "documents" ? "active" : ""}`}
                                    onClick={() => setActiveSection("documents")}
                                >
                                    <i className="fa-solid fa-folder-open" /> Upload Documents
                                    {documents.filter(d => d.status === "pending").length > 0 && (
                                        <span className="nav-badge">
                                            {documents.filter(d => d.status === "pending").length}
                                        </span>
                                    )}
                                </button>
                                <button
                                    id="nav-status"
                                    className={`portal-nav-item ${activeSection === "status" ? "active" : ""}`}
                                    onClick={() => setActiveSection("status")}
                                >
                                    <i className="fa-solid fa-list-check" /> Application Status
                                </button>
                            </nav>

                            <div className="portal-sidebar-actions">
                                <Link to="/contact" className="sidebar-help-btn">
                                    <i className="fa-solid fa-headset" /> Get Support
                                </Link>
                                <Link to="/student-login" className="sidebar-logout-btn">
                                    <i className="fa-solid fa-right-from-bracket" /> Sign Out
                                </Link>
                            </div>
                        </aside>

                        {/* ── Main Content ── */}
                        <main className="portal-main">

                            {/* ── OVERVIEW ── */}
                            {activeSection === "overview" && (
                                <div className="portal-section">
                                    <div className="portal-section-header">
                                        <h3><i className="fa-solid fa-gauge-high" /> Application Overview</h3>
                                        <p>Track your student visa application progress at a glance.</p>
                                    </div>

                                    {/* Stats */}
                                    <div className="portal-stats-grid">
                                        <div className="portal-stat-card">
                                            <div className="stat-icon stat-blue">
                                                <i className="fa-solid fa-folder-open" />
                                            </div>
                                            <div className="stat-info">
                                                <h4>{uploaded}</h4>
                                                <p>Documents Uploaded</p>
                                            </div>
                                        </div>
                                        <div className="portal-stat-card">
                                            <div className="stat-icon stat-green">
                                                <i className="fa-solid fa-circle-check" />
                                            </div>
                                            <div className="stat-info">
                                                <h4>{verified}</h4>
                                                <p>Verified Documents</p>
                                            </div>
                                        </div>
                                        <div className="portal-stat-card">
                                            <div className="stat-icon stat-orange">
                                                <i className="fa-solid fa-clock" />
                                            </div>
                                            <div className="stat-info">
                                                <h4>{total - uploaded}</h4>
                                                <p>Pending Uploads</p>
                                            </div>
                                        </div>
                                        <div className="portal-stat-card">
                                            <div className="stat-icon stat-purple">
                                                <i className="fa-solid fa-percent" />
                                            </div>
                                            <div className="stat-info">
                                                <h4>{progress}%</h4>
                                                <p>Completion</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="portal-progress-card">
                                        <div className="progress-card-header">
                                            <span>Overall Application Progress</span>
                                            <span className="progress-pct">{progress}%</span>
                                        </div>
                                        <div className="portal-progress-bar">
                                            <div
                                                className="portal-progress-fill"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>
                                        <p className="progress-hint">
                                            {uploaded} of {total} required documents submitted
                                        </p>
                                    </div>

                                    {/* Quick actions */}
                                    <div className="portal-quick-actions">
                                        <h4>Quick Actions</h4>
                                        <div className="quick-actions-grid">
                                            <button
                                                id="quick-upload"
                                                className="quick-action-btn"
                                                onClick={() => setActiveSection("documents")}
                                            >
                                                <i className="fa-solid fa-cloud-arrow-up" />
                                                <span>Upload Documents</span>
                                            </button>
                                            <button
                                                id="quick-status"
                                                className="quick-action-btn"
                                                onClick={() => setActiveSection("status")}
                                            >
                                                <i className="fa-solid fa-list-check" />
                                                <span>Check Status</span>
                                            </button>
                                            <Link to="/contact" id="quick-support" className="quick-action-btn">
                                                <i className="fa-solid fa-headset" />
                                                <span>Contact Advisor</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Document checklist preview */}
                                    <div className="doc-checklist-preview">
                                        <h4>Document Checklist</h4>
                                        <div className="checklist-items">
                                            {documents.map(doc => (
                                                <div key={doc.id} className={`checklist-item ${doc.status !== "pending" ? "done" : ""}`}>
                                                    <i className={`fa-solid ${doc.status !== "pending" ? "fa-circle-check" : "fa-circle"}`} />
                                                    <span>{doc.label}</span>
                                                    {!doc.required && <span className="optional-tag">Optional</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ── DOCUMENTS ── */}
                            {activeSection === "documents" && (
                                <div className="portal-section">
                                    <div className="portal-section-header">
                                        <h3><i className="fa-solid fa-folder-open" /> Upload Documents</h3>
                                        <p>Upload all required documents for your student visa application. Accepted formats: PDF, JPG, PNG (max 10MB each).</p>
                                    </div>

                                    <div className="documents-grid">
                                        {documents.map(doc => {
                                            const st = statusConfig[doc.status]
                                            return (
                                                <div
                                                    key={doc.id}
                                                    id={`doc-card-${doc.id}`}
                                                    className={`doc-upload-card ${doc.status !== "pending" ? "doc-uploaded" : ""} ${draggingId === doc.id ? "drag-over" : ""}`}
                                                    onDragOver={e => { e.preventDefault(); setDraggingId(doc.id) }}
                                                    onDragLeave={() => setDraggingId(null)}
                                                    onDrop={e => handleDrop(e, doc.id)}
                                                >
                                                    <div className="doc-card-top">
                                                        <div className="doc-icon-wrap">
                                                            <i className={`fa-solid ${doc.icon}`} />
                                                        </div>
                                                        <div className="doc-card-meta">
                                                            <h5>
                                                                {doc.label}
                                                                {!doc.required && (
                                                                    <span className="optional-tag">Optional</span>
                                                                )}
                                                            </h5>
                                                            <p>{doc.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className={`doc-status-badge ${st.className}`}>
                                                        <i className={`fa-solid ${st.icon}`} /> {st.label}
                                                    </div>

                                                    {doc.fileName && (
                                                        <div className="doc-filename">
                                                            <i className="fa-regular fa-file" /> {doc.fileName}
                                                        </div>
                                                    )}

                                                    <div className="doc-drop-zone">
                                                        <i className="fa-solid fa-cloud-arrow-up" />
                                                        <p>Drag &amp; drop your file here or</p>
                                                        <label htmlFor={`file-${doc.id}`} className="doc-browse-btn">
                                                            Browse File
                                                        </label>
                                                        <input
                                                            id={`file-${doc.id}`}
                                                            type="file"
                                                            accept=".pdf,.jpg,.jpeg,.png"
                                                            style={{ display: "none" }}
                                                            onChange={e => handleFileChange(doc.id, e.target.files?.[0] ?? null)}
                                                        />
                                                        <small>PDF, JPG, PNG - max 10MB</small>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* ── STATUS ── */}
                            {activeSection === "status" && (
                                <div className="portal-section">
                                    <div className="portal-section-header">
                                        <h3><i className="fa-solid fa-list-check" /> Application Status</h3>
                                        <p>Review the current status of each document in your application.</p>
                                    </div>

                                    <div className="status-table-wrapper">
                                        <table className="status-table">
                                            <thead>
                                                <tr>
                                                    <th>Document</th>
                                                    <th>Required</th>
                                                    <th>File Name</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {documents.map(doc => {
                                                    const st = statusConfig[doc.status]
                                                    return (
                                                        <tr key={doc.id} id={`status-row-${doc.id}`}>
                                                            <td>
                                                                <div className="status-doc-name">
                                                                    <i className={`fa-solid ${doc.icon}`} />
                                                                    {doc.label}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {doc.required
                                                                    ? <span className="req-badge">Required</span>
                                                                    : <span className="opt-badge">Optional</span>}
                                                            </td>
                                                            <td className="file-name-cell">
                                                                {doc.fileName
                                                                    ? <><i className="fa-regular fa-file" /> {doc.fileName}</>
                                                                    : <span className="no-file">-</span>}
                                                            </td>
                                                            <td>
                                                                <span className={`doc-status-badge ${st.className}`}>
                                                                    <i className={`fa-solid ${st.icon}`} /> {st.label}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Application timeline */}
                                    <div className="app-timeline">
                                        <h4>Application Timeline</h4>
                                        <div className="timeline-items">
                                            <div className="timeline-item done">
                                                <div className="timeline-dot"><i className="fa-solid fa-check" /></div>
                                                <div className="timeline-content">
                                                    <h6>Account Created</h6>
                                                    <p>Your student portal account is active</p>
                                                </div>
                                            </div>
                                            <div className={`timeline-item ${uploaded > 0 ? "done" : ""}`}>
                                                <div className="timeline-dot"><i className={`fa-solid ${uploaded > 0 ? "fa-check" : "fa-clock"}`} /></div>
                                                <div className="timeline-content">
                                                    <h6>Document Submission</h6>
                                                    <p>{uploaded} of {total} documents uploaded</p>
                                                </div>
                                            </div>
                                            <div className={`timeline-item ${verified === total ? "done" : ""}`}>
                                                <div className="timeline-dot"><i className="fa-solid fa-magnifying-glass" /></div>
                                                <div className="timeline-content">
                                                    <h6>Document Review</h6>
                                                    <p>Our team verifies your submitted documents</p>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="timeline-dot"><i className="fa-solid fa-file-signature" /></div>
                                                <div className="timeline-content">
                                                    <h6>Visa Application Submission</h6>
                                                    <p>Application submitted to the relevant embassy</p>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="timeline-dot"><i className="fa-solid fa-passport" /></div>
                                                <div className="timeline-content">
                                                    <h6>Visa Decision</h6>
                                                    <p>Final decision from the embassy / consulate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentPortal
