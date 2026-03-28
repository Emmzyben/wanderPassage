import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { adminApi, blogsApi, dashboardApi, UserSummary, Message, ConsultationRequest, ApiUser, UserDocument, Blog, BlogComment, BACKEND_URL, Notification } from '../lib/api';

const AdminPortal: React.FC = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<'students' | 'messages' | 'consultations' | 'admins' | 'profile' | 'blogs'>('students');
    const [loading, setLoading] = useState(true);

    // Data states
    const [students, setStudents] = useState<UserSummary[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
    const [admins, setAdmins] = useState<ApiUser[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [selectedBlogComments, setSelectedBlogComments] = useState<BlogComment[]>([]);
    const [showCommentsModal, setShowCommentsModal] = useState(false);
    const [viewingCommentsFor, setViewingCommentsFor] = useState<Blog | null>(null);

    // Profile state
    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [passMsg, setPassMsg] = useState({ type: '', text: '' });
    const [passLoading, setPassLoading] = useState(false);

    // Modal state
    const [selectedStudent, setSelectedStudent] = useState<ApiUser | null>(null);
    const [studentDocs, setStudentDocs] = useState<UserDocument[]>([]);
    const [showStaffModal, setShowStaffModal] = useState(false);
    const [newStaff, setNewStaff] = useState({ username: '', email: '', password: '' });
    const [staffLoading, setStaffLoading] = useState(false);

    // Blog states
    const [showBlogModal, setShowBlogModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
    const [blogLoading, setBlogLoading] = useState(false);

    // Toast state
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });

    // Notification state
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [showNotifs, setShowNotifs] = useState(false);
    const notifRef = useRef<HTMLDivElement>(null);

    // View message state
    const [viewMessageModal, setViewMessageModal] = useState<{
        title: string;
        msgData?: Message;
        consultation?: ConsultationRequest
    } | null>(null);

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast({ message: '', type: null }), 3000);
    };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    useEffect(() => {
        const fetchNotifs = async () => {
            const res = await dashboardApi.getNotifications();
            if (res.status === 'success') setNotifications(res.notifications || []);
        };
        fetchNotifs();
        const timer = setInterval(fetchNotifs, 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
                setShowNotifs(false);
            }
        };
        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const unreadCount = notifications.filter(n => n.is_read === 0).length;

    const handleMarkRead = async (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_read: 1 } : n));
        await dashboardApi.markNotificationRead(id);
    };

    const handleMarkAllRead = async () => {
        setNotifications(prev => prev.map(n => ({ ...n, is_read: 1 })));
        await dashboardApi.markNotificationRead();
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const [
                studentsRes,
                messagesRes,
                consultationsRes,
                adminsRes,
                blogsRes
            ] = await Promise.all([
                adminApi.listStudents().catch(() => ({ status: 'error', users: [] })),
                adminApi.listMessages().catch(() => ({ status: 'error', messages: [] })),
                adminApi.listConsultations().catch(() => ({ status: 'error', consultations: [] })),
                adminApi.listAdmins().catch(() => ({ status: 'error', admins: [] })),
                adminApi.listBlogs().catch(() => ({ status: 'error', blogs: [] }))
            ]);

            if (studentsRes && studentsRes.status === 'success') setStudents(studentsRes.users || []);
            if (messagesRes && messagesRes.status === 'success') setMessages(messagesRes.messages || []);
            if (consultationsRes && consultationsRes.status === 'success') setConsultations(consultationsRes.consultations || []);
            if (adminsRes && adminsRes.status === 'success') setAdmins(adminsRes.admins || []);
            if (blogsRes && blogsRes.status === 'success') setBlogs(blogsRes.blogs || []);
        } catch (err) {
            console.error("Failed to fetch admin data", err);
        } finally {
            setLoading(false);
        }
    };

    const handleViewStudent = async (studentId: number) => {
        try {
            const res = await adminApi.getStudentDetails(studentId);
            if (res.status === 'success') {
                setSelectedStudent(res.student || null);
                setStudentDocs(res.documents || []);
            }
        } catch (err) {
            alert("Failed to load student details");
        }
    };

    const handleUpdateDoc = async (docId: number, status: string) => {
        try {
            const res = await adminApi.updateDocStatus(docId, status);
            if (res.status === 'success') {
                showToast(`Document marked as ${status}`);
                if (selectedStudent) handleViewStudent(selectedStudent.id);
            } else {
                showToast(res.message || "Status update failed", 'error');
            }
        } catch (err) {
            showToast("Connection error", 'error');
        }
    };

    const handleUpdateApplicationStatus = async (id: number, status: string) => {
        try {
            const res = await adminApi.updateApplicationStatus(id, status);
            if (res.status === 'success') {
                showToast(`Application status updated to ${status}`);
                if (selectedStudent) {
                    setSelectedStudent({ ...selectedStudent, application_status: status });
                }
                fetchData();
            } else {
                showToast(res.message || "Status update failed", 'error');
            }
        } catch (err) {
            showToast("Connection error", 'error');
        }
    };

    const handleUpdateConsultationStatus = async (id: number, status: string) => {
        try {
            const res = await adminApi.updateConsultationStatus(id, status);
            if (res.status === 'success') {
                showToast(`Status updated to ${status}`);
                fetchData();
            } else {
                showToast(res.message || "Failed to update", 'error');
            }
        } catch (err) {
            showToast("Request failed", 'error');
        }
    };

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const res = await adminApi.updateAvatar(formData);
            if (res.status === 'success') {
                showToast("Profile picture updated!");
                setTimeout(() => window.location.reload(), 1000);
            } else {
                showToast(res.message || "Upload failed", 'error');
            }
        } catch (err) {
            showToast("Upload failed", 'error');
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setPassMsg({ type: '', text: '' });
        if (passwords.new !== passwords.confirm) {
            setPassMsg({ type: 'error', text: 'Passwords do not match' });
            return;
        }

        setPassLoading(true);
        try {
            const { authApi } = await import("../lib/api");
            const res = await authApi.updatePassword(passwords.current, passwords.new);
            if (res.status === 'success') {
                setPassMsg({ type: 'success', text: 'Password updated successfully!' });
                setPasswords({ current: '', new: '', confirm: '' });
            } else {
                setPassMsg({ type: 'error', text: res.message || 'Update failed' });
            }
        } catch (err) {
            setPassMsg({ type: 'error', text: 'Connection error' });
        } finally {
            setPassLoading(false);
        }
    };

    const handleAddStaff = async (e: React.FormEvent) => {
        e.preventDefault();
        setStaffLoading(true);
        try {
            const res = await adminApi.createAdmin(newStaff);
            if (res.status === 'success') {
                showToast("Staff account created successfully!");
                setShowStaffModal(false);
                setNewStaff({ username: '', email: '', password: '' });
                fetchData();
            } else {
                showToast(res.message || "Failed to create staff", 'error');
            }
        } catch (err) {
            showToast("Request failed", 'error');
        } finally {
            setStaffLoading(false);
        }
    };

    const handleSaveBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingBlog) return;

        setBlogLoading(true);
        const formData = new FormData();
        if (editingBlog.id) formData.append('id', String(editingBlog.id));
        formData.append('title', editingBlog.title || '');
        formData.append('slug', editingBlog.slug || '');
        formData.append('excerpt', editingBlog.excerpt || '');
        formData.append('content', editingBlog.content || '');
        formData.append('status', editingBlog.status || 'draft');

        const fileInput = document.getElementById('blog-image-input') as HTMLInputElement;
        if (fileInput?.files?.[0]) {
            formData.append('image', fileInput.files[0]);
        }

        try {
            const res = editingBlog.id
                ? await adminApi.updateBlog(formData)
                : await adminApi.createBlog(formData);

            if (res.status === 'success') {
                showToast(editingBlog.id ? "Blog updated!" : "Blog created!");
                setShowBlogModal(false);
                setEditingBlog(null);
                fetchData();
            } else {
                showToast(res.message || "Save failed", 'error');
            }
        } catch (err) {
            showToast("Error saving blog", 'error');
        } finally {
            setBlogLoading(false);
        }
    };

    const handleDeleteBlog = async (id: number) => {
        if (!confirm("Are you sure you want to delete this blog post?")) return;
        try {
            const res = await adminApi.deleteBlog(id);
            if (res.status === 'success') {
                showToast("Blog deleted!");
                fetchData();
            }
        } catch (err) {
            showToast("Delete failed", 'error');
        }
    };

    const handleDeleteComment = async (id: number) => {
        if (!confirm("Delete this comment permanently?")) return;
        try {
            const res = await adminApi.deleteComment(id);
            if (res.status === 'success') {
                showToast("Comment deleted!");
                // Refresh modal data if open
                if (viewingCommentsFor) handleViewComments(viewingCommentsFor);
                fetchData();
            }
        } catch (err) {
            showToast("Delete failed", 'error');
        }
    };

    const handleViewComments = async (blog: Blog) => {
        setViewingCommentsFor(blog);
        try {
            const res = await blogsApi.listComments(blog.id);
            if (res.status === 'success') {
                setSelectedBlogComments(res.comments || []);
                setShowCommentsModal(true);
            }
        } catch (err) {
            showToast("Failed to fetch comments", 'error');
        }
    };

    return (
        <section className="admin-portal-section">
            <div className="admin-container">

                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <div className="admin-logo">
                        <h4>Admin Hub</h4>
                    </div>

                    <nav className="admin-nav">
                        <button
                            className={`admin-nav-item ${activeTab === 'students' ? 'active' : ''}`}
                            onClick={() => setActiveTab('students')}
                        >
                            <i className="fa-solid fa-user-graduate"></i> Students
                        </button>
                        <button
                            className={`admin-nav-item ${activeTab === 'messages' ? 'active' : ''}`}
                            onClick={() => setActiveTab('messages')}
                        >
                            <i className="fa-solid fa-envelope"></i> Messages
                        </button>
                        <button
                            className={`admin-nav-item ${activeTab === 'consultations' ? 'active' : ''}`}
                            onClick={() => setActiveTab('consultations')}
                        >
                            <i className="fa-solid fa-calendar-check"></i> Consultations
                        </button>
                        <button
                            className={`admin-nav-item ${activeTab === 'admins' ? 'active' : ''}`}
                            onClick={() => setActiveTab('admins')}
                        >
                            <i className="fa-solid fa-user-shield"></i> Admins
                        </button>
                        <button
                            className={`admin-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('blogs')}
                        >
                            <i className="fa-solid fa-pen-nib"></i> Blogs
                        </button>
                        <button
                            className={`admin-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <i className="fa-solid fa-gear"></i> Settings
                        </button>
                    </nav>

                    <div className="admin-sidebar-footer">
                        <div className="admin-logout" onClick={() => logout()}>
                            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="admin-main">
                    <header className="admin-header">
                        <h2>
                            {activeTab === 'students' && "Student Management"}
                            {activeTab === 'messages' && "Customer Inquiries"}
                            {activeTab === 'consultations' && "Consultation Requests"}
                            {activeTab === 'admins' && "System Administrators"}
                            {activeTab === 'blogs' && "Blog CMS"}
                            {activeTab === 'profile' && "Account Settings"}
                        </h2>
                        <div className="admin-user-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            {/* Notification bell */}
                            <div className="notifications-wrapper" ref={notifRef}>
                                <button className="action-btn notifications" onClick={() => setShowNotifs(!showNotifs)}>
                                    <i className="fa-regular fa-bell"></i>
                                    {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
                                </button>
                                {showNotifs && (
                                    <div className="notif-dropdown animate-fade-in">
                                        <div className="notif-header">
                                            <h6>Notifications</h6>
                                            {unreadCount > 0 && (
                                                <button
                                                    className="mark-all-read-btn"
                                                    onClick={handleMarkAllRead}
                                                >
                                                    Mark all read
                                                </button>
                                            )}
                                        </div>
                                        <div className="notif-body">
                                            {notifications.length === 0 ? (
                                                <div className="no-notifs">
                                                    <i className="fa-regular fa-bell-slash"></i>
                                                    No notifications yet.
                                                </div>
                                            ) : notifications.map(n => (
                                                <div
                                                    key={n.id}
                                                    className={`notif-item ${n.is_read === 0 ? 'unread' : ''}`}
                                                    onClick={() => n.is_read === 0 && handleMarkRead(n.id)}
                                                    style={{ cursor: n.is_read === 0 ? 'pointer' : 'default' }}
                                                >
                                                    <div className={`notif-icon ${n.type}`}>
                                                        <i className={`fa-solid ${
                                                            n.type === 'success' ? 'fa-circle-check' :
                                                            n.type === 'danger'  ? 'fa-circle-xmark' :
                                                            n.type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info'
                                                        }`}></i>
                                                    </div>
                                                    <div className="notif-content">
                                                        <div className="notif-title">{n.title}</div>
                                                        <div className="notif-text">{n.message}</div>
                                                        <div className="notif-time">{new Date(n.created_at).toLocaleString()}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#e2e8f0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {user?.avatar ? (
                                    <img src={`${BACKEND_URL}/${user.avatar}`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <i className="fa-solid fa-user-shield" style={{ color: '#64748b', fontSize: '1.2rem' }}></i>
                                )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
                                <span style={{ fontWeight: '600', color: '#1e293b' }}>{user?.username}</span>
                                <span style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'capitalize' }}>{user?.role}</span>
                            </div>
                        </div>
                    </header>

                    {/* Stats Overview */}
                    <div className="admin-stats-overview">
                        <div className="admin-stat-card clickable" onClick={() => setActiveTab('students')}>
                            <div className="stat-icon-wrap blue"><i className="fa-solid fa-users"></i></div>
                            <div className="stat-data"><h4>{students.length}</h4><p>Total Students</p></div>
                        </div>
                        <div className="admin-stat-card clickable" onClick={() => setActiveTab('blogs')}>
                            <div className="stat-icon-wrap orange"><i className="fa-solid fa-newspaper"></i></div>
                            <div className="stat-data"><h4>{blogs.length}</h4><p>Total Blogs</p></div>
                        </div>
                        <div className="admin-stat-card clickable" onClick={() => setActiveTab('consultations')}>
                            <div className="stat-icon-wrap purple"><i className="fa-solid fa-handshake"></i></div>
                            <div className="stat-data"><h4>{consultations.length}</h4><p>Total Consultations</p></div>
                        </div>
                        <div className="admin-stat-card clickable" onClick={() => setActiveTab('messages')}>
                            <div className="stat-icon-wrap green"><i className="fa-solid fa-message"></i></div>
                            <div className="stat-data"><h4>{messages.length}</h4><p>New Inquiries</p></div>
                        </div>
                    </div>

                    {/* Content Area */}
                    {(activeTab !== 'profile') && (
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <h3>
                                    {activeTab === 'students' ? "All Registered Students" :
                                        activeTab === 'messages' ? "Contact Messages" :
                                            activeTab === 'admins' ? "Team Members" :
                                                activeTab === 'blogs' ? "Manage Content" : "Consultation Bookings"}
                                </h3>
                                {activeTab === 'admins' && (
                                    <button className="save-btn" style={{ width: 'auto', padding: '10px 20px', margin: 0 }} onClick={() => setShowStaffModal(true)}>
                                        <i className="fa-solid fa-plus me-2"></i> Add Staff
                                    </button>
                                )}
                                {activeTab === 'blogs' && (
                                    <button className="save-btn" style={{ width: 'auto', padding: '10px 20px', margin: 0 }} onClick={() => { setEditingBlog({ title: '', status: 'draft', content: '' }); setShowBlogModal(true); }}>
                                        <i className="fa-solid fa-plus me-2"></i> Create Post
                                    </button>
                                )}
                            </div>

                            <div className="admin-table-wrapper">
                                {loading ? (
                                    <div className="py-5 text-center">
                                        <div className="spinner-border text-primary" role="status"></div>
                                    </div>
                                ) : (
                                    <table className="admin-table">
                                        <thead>
                                            {activeTab === 'students' ? (
                                                <tr>
                                                    <th>Student Name</th>
                                                    <th>Email</th>
                                                    <th>Documents</th>
                                                    <th>Joined Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            ) : activeTab === 'admins' ? (
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Joined</th>
                                                    <th>Status</th>
                                                </tr>
                                            ) : activeTab === 'blogs' ? (
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Author</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                    <th>Comments</th>
                                                    <th>Actions</th>
                                                </tr>
                                            ) : activeTab === 'messages' ? (
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Message</th>
                                                    <th>Subject</th>
                                                    <th>Date</th>
                                                    <th>Actions</th>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <th>Full Name</th>
                                                    <th>Service</th>
                                                    <th>Date/Time</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            )}
                                        </thead>
                                        <tbody>
                                            {activeTab === 'students' && students.map(s => (
                                                <tr key={s.id}>
                                                    <td>
                                                        <div className="user-name-cell">
                                                            <div className="avatar-circle">{s.username[0].toUpperCase()}</div>
                                                            {s.username}
                                                        </div>
                                                    </td>
                                                    <td>{s.email}</td>
                                                    <td>
                                                        <span className={`doc-count-badge ${s.verified_count >= 4 ? 'complete' : ''}`}>
                                                            <i className="fa-solid fa-file"></i> {s.verified_count} / {s.doc_count} Verified
                                                        </span>
                                                    </td>
                                                    <td>{new Date(s.created_at || '').toLocaleDateString()}</td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button className="action-btn btn-view" onClick={() => handleViewStudent(s.id)}>Docs</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}

                                            {activeTab === 'admins' && admins.map(a => (
                                                <tr key={a.id}>
                                                    <td>
                                                        <div className="user-name-cell">
                                                            <div className="avatar-circle" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                {a.avatar ? <img src={`${BACKEND_URL}/${a.avatar}`} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : a.username[0].toUpperCase()}
                                                            </div>
                                                            {a.username}
                                                        </div>
                                                    </td>
                                                    <td>{a.email}</td>
                                                    <td>{new Date(a.created_at || '').toLocaleDateString()}</td>
                                                    <td><span className="badge badge-resolved">Super Admin</span></td>
                                                </tr>
                                            ))}

                                            {activeTab === 'blogs' && blogs.map(b => (
                                                <tr key={b.id}>
                                                    <td>
                                                        <div className="fw-bold">{b.title}</div>
                                                        <div className="small text-muted">/{b.slug}</div>
                                                    </td>
                                                    <td>{b.author_name}</td>
                                                    <td>
                                                        <span className={`badge badge-${b.status === 'published' ? 'resolved' : 'new'}`}>
                                                            {b.status}
                                                        </span>
                                                    </td>
                                                    <td>{new Date(b.created_at).toLocaleDateString()}</td>
                                                    <td>
                                                        <button
                                                            className="action-btn btn-view"
                                                            style={{ background: '#e0f2fe', color: '#0369a1' }}
                                                            onClick={() => handleViewComments(b)}
                                                        >
                                                            Manage ({selectedBlogComments.find(sc => sc.blog_id === b.id) ? '...' : 'View'})
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <button
                                                                className="action-btn btn-view"
                                                                onClick={() => window.open(`/news-details/${b.slug}`, '_blank')}
                                                                title="Preview live"
                                                            >
                                                                <i className="fa-solid fa-eye"></i>
                                                            </button>
                                                            <button className="action-btn btn-view" onClick={() => { setEditingBlog(b); setShowBlogModal(true); }}>Edit</button>
                                                            <button className="action-btn btn-delete" onClick={() => handleDeleteBlog(b.id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}

                                            {activeTab === 'messages' && messages.map(m => (
                                                <tr key={m.id}>
                                                    <td>
                                                        <div className="fw-bold">{m.name}</div>
                                                        <div className="small text-muted">{m.email}</div>
                                                    </td>
                                                    <td style={{ maxWidth: '300px' }}><div className="text-truncate">{m.message}</div></td>
                                                    <td>{m.subject || "No Subject"}</td>
                                                    <td>{new Date(m.created_at).toLocaleDateString()}</td>
                                                    <td><button className="action-btn btn-view" onClick={() => setViewMessageModal({ title: `Message from ${m.name}`, msgData: m })}>Read Full</button></td>
                                                </tr>
                                            ))}

                                            {activeTab === 'consultations' && consultations.map(c => (
                                                <tr key={c.id}>
                                                    <td>
                                                        <div className="fw-bold">{c.full_name}</div>
                                                        <div className="small text-muted">{c.phone}</div>
                                                    </td>
                                                    <td><span className="badge badge-new">{c.service.replace('-', ' ')}</span></td>
                                                    <td>{c.preferred_date} at {c.preferred_time}</td>
                                                    <td>
                                                        <select
                                                            className="table-select"
                                                            value={c.status}
                                                            onChange={(e) => handleUpdateConsultationStatus(c.id, e.target.value)}
                                                        >
                                                            <option value="new">New</option>
                                                            <option value="contacted">Contacted</option>
                                                            <option value="resolved">Resolved</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="action-btn btn-view"
                                                            onClick={() => setViewMessageModal({
                                                                title: `Consultation details for ${c.full_name}`,
                                                                consultation: c
                                                            })}
                                                        >
                                                            View Details
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Profile Section */}
                    {activeTab === 'profile' && (
                        <div className="admin-profile-container">
                            <div className="admin-profile-card">
                                <div className="profile-photo-section">
                                    <div className="profile-avatar-large">
                                        {user?.avatar ? (
                                            <img src={`${BACKEND_URL}/${user.avatar}`} alt="Profile" />
                                        ) : (
                                            <i className="fa-solid fa-user-shield"></i>
                                        )}
                                    </div>
                                    <label className="upload-label">
                                        <i className="fa-solid fa-camera me-2"></i> Change Photo
                                        <input type="file" hidden accept="image/*" onChange={handleAvatarUpload} />
                                    </label>
                                </div>

                                <h4 className="fw-bold mb-4">Security Settings</h4>
                                <form onSubmit={handleUpdatePassword}>
                                    <div className="form-group mb-3">
                                        <label>Current Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            required
                                            value={passwords.current}
                                            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>New Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    required
                                                    value={passwords.new}
                                                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label>Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    required
                                                    value={passwords.confirm}
                                                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {passMsg.text && (
                                        <div className={`alert alert-${passMsg.type === 'success' ? 'success' : 'danger'} py-2 mb-3`}>
                                            {passMsg.text}
                                        </div>
                                    )}

                                    <button type="submit" className="save-btn" disabled={passLoading}>
                                        {passLoading ? 'Saving...' : 'Update Password'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Student Detail Modal */}
            {selectedStudent && (
                <div className="student-detail-overlay">
                    <div className="student-detail-modal">
                        <div className="modal-header">
                            <div className="student-info-top">
                                <h3>{selectedStudent.username}'s Application</h3>
                                <p>{selectedStudent.email}</p>
                                <div className="mt-3">
                                    <label className="fw-bold me-2">Application Status:</label>
                                    <select
                                        className="form-select form-select-sm d-inline-block w-auto"
                                        value={selectedStudent.application_status || 'document_submission'}
                                        onChange={(e) => handleUpdateApplicationStatus(selectedStudent.id, e.target.value)}
                                    >
                                        <option value="document_submission">Document Submission</option>
                                        <option value="academic_review">Academic Review</option>
                                        <option value="embassy_filing">Embassy Filing</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                            <button className="close-btn" onClick={() => setSelectedStudent(null)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="mb-4 fw-bold">Submitted Documents</h5>
                            <div className="docs-review-grid">
                                {studentDocs.length === 0 ? (
                                    <p className="text-muted py-4 text-center">No documents uploaded yet.</p>
                                ) : (
                                    studentDocs.map(d => (
                                        <div className="admin-doc-item" key={(d as any).id}>
                                            <div className="doc-info">
                                                <div className="doc-icon-box"><i className="fa-solid fa-file-pdf"></i></div>
                                                <div className="doc-text">
                                                    <h6>{d.doc_key.replace('-', ' ').toUpperCase()}</h6>
                                                    <a href={`${BACKEND_URL}/${d.file_path}`} target="_blank" rel="noopener noreferrer" className="file-link">
                                                        <i className="fa-solid fa-download me-1"></i> View File
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="doc-actions">
                                                <select
                                                    defaultValue={d.status}
                                                    onChange={(e) => (d as any).newStatus = e.target.value}
                                                >
                                                    <option value="uploaded">Uploaded</option>
                                                    <option value="verified">Verified</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                                <button
                                                    className="update-btn"
                                                    onClick={(e) => {
                                                        const parent = e.currentTarget.parentElement;
                                                        const select = parent?.querySelector('select') as HTMLSelectElement;
                                                        if (select) {
                                                            handleUpdateDoc((d as any).id, select.value);
                                                        }
                                                    }}
                                                >Update</button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Staff Modal */}
            {showStaffModal && (
                <div className="student-detail-overlay">
                    <div className="student-detail-modal" style={{ maxWidth: '500px' }}>
                        <div className="modal-header">
                            <h3>Add New Staff Member</h3>
                            <button className="close-btn" onClick={() => setShowStaffModal(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleAddStaff}>
                                <div className="form-group mb-3">
                                    <label>Staff Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        placeholder="Enter staff name"
                                        value={newStaff.username}
                                        onChange={(e) => setNewStaff({ ...newStaff, username: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Professional Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="form-control"
                                        placeholder="staff@wanderpassage.com"
                                        value={newStaff.email}
                                        onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Initial Password</label>
                                    <input
                                        type="password"
                                        required
                                        className="form-control"
                                        placeholder="Set a secure password"
                                        value={newStaff.password}
                                        onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="save-btn w-100" disabled={staffLoading}>
                                    {staffLoading ? "Creating..." : "Generate Staff Account"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* View Message Modal */}
            {viewMessageModal && (
                <div className="student-detail-overlay">
                    <div className="student-detail-modal" style={{ maxWidth: viewMessageModal.consultation ? '600px' : '500px' }}>
                        <div className="modal-header">
                            <h3>{viewMessageModal.title}</h3>
                            <button className="close-btn" onClick={() => setViewMessageModal(null)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            {viewMessageModal.consultation ? (
                                <div className="consultation-detail-grid">
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-user"></i></div>
                                        <div className="detail-info">
                                            <label>Full Name</label>
                                            <p>{viewMessageModal.consultation.full_name}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-phone"></i></div>
                                        <div className="detail-info">
                                            <label>Phone Number</label>
                                            <p>{viewMessageModal.consultation.phone}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-envelope"></i></div>
                                        <div className="detail-info">
                                            <label>Email Address</label>
                                            <p>{viewMessageModal.consultation.email}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-briefcase"></i></div>
                                        <div className="detail-info">
                                            <label>Service of Interest</label>
                                            <p className="text-capitalize">{viewMessageModal.consultation.service.replace('-', ' ')}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-calendar-days"></i></div>
                                        <div className="detail-info">
                                            <label>Preferred Date</label>
                                            <p>{viewMessageModal.consultation.preferred_date}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-clock"></i></div>
                                        <div className="detail-info">
                                            <label>Preferred Time</label>
                                            <p>{viewMessageModal.consultation.preferred_time}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern w-100 mt-3 border-top pt-3">
                                        <div className="icon-wrap"><i className="fa-solid fa-comment-dots"></i></div>
                                        <div className="detail-info">
                                            <label>Message (Optional)</label>
                                            <p className="message-content" style={{ whiteSpace: 'pre-wrap' }}>
                                                {viewMessageModal.consultation.message || "No additional message provided."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : viewMessageModal.msgData ? (
                                <div className="consultation-detail-grid">
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-user-pen"></i></div>
                                        <div className="detail-info">
                                            <label>Sender Name</label>
                                            <p>{viewMessageModal.msgData.name}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-envelope-open-text"></i></div>
                                        <div className="detail-info">
                                            <label>Email Address</label>
                                            <p>{viewMessageModal.msgData.email}</p>
                                        </div>
                                    </div>
                                    {viewMessageModal.msgData.phone && (
                                        <div className="detail-item-modern">
                                            <div className="icon-wrap"><i className="fa-solid fa-mobile-screen-button"></i></div>
                                            <div className="detail-info">
                                                <label>Phone Number</label>
                                                <p>{viewMessageModal.msgData.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="detail-item-modern">
                                        <div className="icon-wrap"><i className="fa-solid fa-circle-info"></i></div>
                                        <div className="detail-info">
                                            <label>Subject</label>
                                            <p>{viewMessageModal.msgData.subject || "No Subject"}</p>
                                        </div>
                                    </div>
                                    <div className="detail-item-modern w-100 mt-3 border-top pt-3">
                                        <div className="icon-wrap"><i className="fa-solid fa-message"></i></div>
                                        <div className="detail-info">
                                            <label>Message Content</label>
                                            <p className="message-content" style={{ whiteSpace: 'pre-wrap' }}>
                                                {viewMessageModal.msgData.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>No message content available.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Editor Modal */}
            {showBlogModal && editingBlog && (
                <div className="student-detail-overlay">
                    <div className="student-detail-modal" style={{ maxWidth: '800px' }}>
                        <div className="modal-header">
                            <h3>{editingBlog.id ? "Edit Blog Post" : "Create New Post"}</h3>
                            <button className="close-btn" onClick={() => setShowBlogModal(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSaveBlog}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group mb-3">
                                            <label>Post Title</label>
                                            <input
                                                type="text"
                                                required
                                                className="form-control"
                                                value={editingBlog.title}
                                                onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label>Status</label>
                                            <select
                                                className="form-control"
                                                value={editingBlog.status}
                                                onChange={(e) => setEditingBlog({ ...editingBlog, status: e.target.value as any })}
                                            >
                                                <option value="draft">Draft</option>
                                                <option value="published">Published</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Slug (URL Handle - auto-generated if empty)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="my-awesome-post"
                                        value={editingBlog.slug}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Featured Image</label>
                                    <input
                                        type="file"
                                        id="blog-image-input"
                                        className="form-control"
                                        accept="image/*"
                                    />
                                    {editingBlog.image_path && <p className="small text-muted mt-1">Current: {editingBlog.image_path}</p>}
                                </div>

                                <div className="form-group mb-3">
                                    <label>Excerpt (Short Summary)</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        value={editingBlog.excerpt}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="form-group mb-4">
                                    <label>Content (Full Article)</label>
                                    <textarea
                                        className="form-control"
                                        rows={10}
                                        required
                                        value={editingBlog.content}
                                        onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="d-flex gap-3 mt-4">
                                    <button type="button" className="btn btn-light flex-grow-1" onClick={() => setShowBlogModal(false)}>Cancel</button>
                                    <button type="submit" className="save-btn flex-grow-1" style={{ margin: 0 }} disabled={blogLoading}>
                                        {blogLoading ? "Saving..." : "Save Post"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notifications */}
            <AnimatePresence>
                {toast.type && (
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className={`admin-toast ${toast.type}`}
                    >
                        <i className={`fa-solid ${toast.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                        <span>{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Comments Modal */}
            <AnimatePresence>
                {showCommentsModal && (
                    <div className="student-detail-overlay">
                        <motion.div
                            className="student-detail-modal"
                            style={{ maxWidth: '800px' }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            <div className="modal-header">
                                <h3>Comments Management: {viewingCommentsFor?.title}</h3>
                                <button className="close-btn" onClick={() => setShowCommentsModal(false)}>&times;</button>
                            </div>
                            <div className="comments-modal-list mt-4" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                {selectedBlogComments.length === 0 ? (
                                    <div className="text-center py-5">
                                        <i className="fa-solid fa-comments opacity-25 h1 mb-3 d-block"></i>
                                        <p className="text-muted">No conversations for this article yet.</p>
                                    </div>
                                ) : (
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>Author</th>
                                                <th>Comment</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedBlogComments.map(c => (
                                                <tr key={c.id}>
                                                    <td>
                                                        <div className="fw-bold">{c.name}</div>
                                                        <div className="small text-muted">{c.email}</div>
                                                    </td>
                                                    <td style={{ maxWidth: '300px' }}>
                                                        <div className="small" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{c.comment}</div>
                                                    </td>
                                                    <td>{new Date(c.created_at).toLocaleDateString()}</td>
                                                    <td>
                                                        <button
                                                            className="action-btn btn-delete"
                                                            onClick={() => handleDeleteComment(c.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AdminPortal;
