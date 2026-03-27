import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const PortalHeader = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/student-login")
    }

    return (
        <header className="portal-header">
            <div className="header-left">
                <div className="welcome-text">
                    <h1>Student Portal</h1>
                    <p>Welcome back, <span>{user?.username || 'Student'}</span>! 👋</p>
                </div>
            </div>

            <div className="header-right">


                <div className="header-actions">
                    <button className="action-btn notifications">
                        <i className="fa-regular fa-bell"></i>
                        <span className="pulse-dot"></span>
                    </button>

                    <div className="user-profile-dropdown">
                        <div className="profile-info">
                            <div className="profile-img">
                                <i className="fa-solid fa-user-graduate"></i>
                            </div>
                            <div className="profile-meta">
                                <span className="profile-name">{user?.username}</span>
                                <span className="profile-role">Student</span>
                            </div>
                            <i className="fa-solid fa-chevron-down toggle-icon"></i>
                        </div>
                        <div className="dropdown-menu-portal">
                            <Link to="/student-portal" className="menu-item">
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
