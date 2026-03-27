import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

interface ProtectedRouteProps {
    children: React.ReactNode
    redirectTo?: string
}

/**
 * Wraps any route that requires a logged-in user.
 * Shows a spinner while auth is loading, then redirects to /student-login if not authenticated.
 */
const ProtectedRoute = ({ children, redirectTo = "/student-login" }: ProtectedRouteProps) => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="portal-loading" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                gap: "1rem",
                color: "var(--wp-gold, #C9A84C)"
            }}>
                <i className="fa-solid fa-spinner fa-spin fa-2x" />
                <p style={{ margin: 0, fontSize: "1rem", opacity: 0.7 }}>Authenticating...</p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to={redirectTo} replace />
    }

    return <>{children}</>
}

export default ProtectedRoute
