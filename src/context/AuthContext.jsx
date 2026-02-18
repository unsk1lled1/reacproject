import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedSession = localStorage.getItem('fp_session');
        if (savedSession) {
            try {
                const parsed = JSON.parse(savedSession);
                setUser(parsed);
                setIsAuthenticated(true);
            } catch {
                localStorage.removeItem('fp_session');
            }
        }
        setIsLoading(false);
    }, []);

    const register = (userData) => {
        const users = JSON.parse(localStorage.getItem('fp_users') || '[]');
        const exists = users.find((u) => u.email === userData.email);
        if (exists) {
            return { success: false, error: 'Пользователь с таким email уже существует' };
        }

        const newUser = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: 'user',
            createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        localStorage.setItem('fp_users', JSON.stringify(users));

        const session = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
        localStorage.setItem('fp_session', JSON.stringify(session));
        setUser(session);
        setIsAuthenticated(true);

        return { success: true };
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('fp_users') || '[]');
        const found = users.find((u) => u.email === email && u.password === password);
        if (!found) {
            return { success: false, error: 'Неверный email или пароль' };
        }

        const session = { id: found.id, name: found.name, email: found.email, role: found.role };
        localStorage.setItem('fp_session', JSON.stringify(session));
        setUser(session);
        setIsAuthenticated(true);

        return { success: true };
    };

    const logout = () => {
        localStorage.removeItem('fp_session');
        setUser(null);
        setIsAuthenticated(false);
    };

    const updateProfile = (newData) => {
        const users = JSON.parse(localStorage.getItem('fp_users') || '[]');
        const idx = users.findIndex((u) => u.id === user.id);
        if (idx !== -1) {
            users[idx] = { ...users[idx], ...newData };
            localStorage.setItem('fp_users', JSON.stringify(users));
        }
        const session = { ...user, ...newData };
        localStorage.setItem('fp_session', JSON.stringify(session));
        setUser(session);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, register, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}
