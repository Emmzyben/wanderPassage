import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, ApiUser } from '@/lib/api';

interface AuthContextType {
    user: ApiUser | null;
    token: string | null;
    login: (email: string, password: string) => Promise<{ status: string; message?: string; user?: ApiUser }>;
    register: (username: string, email: string, password: string) => Promise<{ status: string; message?: string; user?: ApiUser }>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser]     = useState<ApiUser | null>(null);
    const [token, setToken]   = useState<string | null>(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    // On mount (or token change), verify the stored JWT with the server
    useEffect(() => {
        const checkUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const result = await authApi.me();
                if (result.status === 'success' && result.user) {
                    setUser(result.user);
                } else {
                    // Token is invalid / expired — clear it
                    localStorage.removeItem('token');
                    setToken(null);
                }
            } catch {
                localStorage.removeItem('token');
                setToken(null);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, [token]);

    const login = async (email: string, password: string) => {
        const result = await authApi.login(email, password);
        if (result.status === 'success' && result.token && result.user) {
            localStorage.setItem('token', result.token);
            setToken(result.token);
            setUser(result.user);
        }
        return { status: result.status, message: result.message, user: result.user };
    };

    const register = async (username: string, email: string, password: string) => {
        const result = await authApi.register(username, email, password);
        if (result.status === 'success' && result.token && result.user) {
            localStorage.setItem('token', result.token);
            setToken(result.token);
            setUser(result.user);
        }
        return { status: result.status, message: result.message, user: result.user };
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
    return ctx;
};
