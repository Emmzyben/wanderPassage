import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { dashboardApi, Notification, BACKEND_URL } from "../../lib/api"

const PortalHeader = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [showNotifs, setShowNotifs] = useState(false)
    const notifRef = useRef<HTMLDivElement>(null)

    const handleLogout = () => {
        logout()
        navigate("/student-login")
    }

    useEffect(() => {
        const fetchNotifs = async () => {
            const res = await dashboardApi.getNotifications()
            if (res.status === 'success') {
                setNotifications(res.notifications || [])
            }
        }
        fetchNotifs()
        // Poll every 60 seconds
        const timer = setInterval(fetchNotifs, 60000)
        return () => clearInterval(timer)
    }, [])

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
                setShowNotifs(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const unreadCount = notifications.filter(n => n.is_read === 0).length

    const handleMarkRead = async (id: number) => {
        // Optimistically update local state first
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, is_read: 1 } : n))
        await dashboardApi.markNotificationRead(id)
    }

    const handleMarkAllRead = async () => {
        setNotifications(prev => prev.map(n => ({ ...n, is_read: 1 })))
        await dashboardApi.markNotificationRead()
    }

    return (
        <header className="portal-header">
            <div className="header-left">
                <div className="welcome-text">
                    <h1>{user?.role === 'admin' ? 'Admin Portal' : 'Student Portal'}</h1>
                    <p>Welcome back, <span>{user?.username || 'User'}</span>! 👋</p>
                </div>
            </div>

            <div className="header-right">
                <div className="header-actions">
                    <div className="notifications-wrapper" ref={notifRef}>
                        <button 
                            className="action-btn notifications"
                            onClick={() => setShowNotifs(!showNotifs)}
                        >
                            <i className="fa-regular fa-bell"></i>
                            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
                        </button>

                        {showNotifs && (
                            <div className="notif-dropdown shadow-lg animate-fade-in">
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
                                    ) : (
                                        notifications.map(n => (
                                            <div
                                                key={n.id}
                                                className={`notif-item ${n.is_read === 0 ? 'unread' : ''}`}
                                                onClick={() => n.is_read === 0 && handleMarkRead(n.id)}
                                                style={{ cursor: n.is_read === 0 ? 'pointer' : 'default' }}
                                            >
                                                <div className={`notif-icon ${n.type}`}>
                                                    <i className={`fa-solid ${
                                                        n.type === 'success' ? 'fa-circle-check' : 
                                                        n.type === 'danger' ? 'fa-circle-xmark' : 
                                                        n.type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info'
                                                    }`}></i>
                                                </div>
                                                <div className="notif-content">
                                                    <div className="notif-title">{n.title}</div>
                                                    <div className="notif-text">{n.message}</div>
                                                    <div className="notif-time">{new Date(n.created_at).toLocaleString()}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="user-profile-dropdown">
                        <div className="profile-info">
                            <div className={`profile-img ${user?.avatar ? 'has-avatar' : ''}`}>
                                {user?.avatar ? (
                                    <img
                                        src={`${BACKEND_URL}/${user.avatar}`}
                                        alt={user.username}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                ) : (
                                    <i className={`fa-solid ${user?.role === 'admin' ? 'fa-user-shield' : 'fa-user-graduate'}`}></i>
                                )}
                            </div>
                            <div className="profile-meta">
                                <span className="profile-name">{user?.username}</span>
                                <span className="profile-role" style={{ textTransform: 'capitalize' }}>{user?.role}</span>
                            </div>
                            <i className="fa-solid fa-chevron-down toggle-icon"></i>
                        </div>
                        <div className="dropdown-menu-portal">
                            <Link to={user?.role === 'admin' ? "/admin-portal" : "/student-portal"} className="menu-item">
                                <i className="fa-solid fa-gauge"></i> Dashboard
                            </Link>
                            <Link to="/contact" className="menu-item">
                                <i className="fa-solid fa-headset"></i> Support
                            </Link>
                            <div className="menu-divider"></div>
                            <button onClick={handleLogout} className="menu-item logout">
                                <i className="fa-solid fa-right-from-bracket"></i> Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PortalHeader
