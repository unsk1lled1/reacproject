import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('fp_current_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const register = (userData) => {
        const newUser = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: 'user'
        };

        localStorage.setItem('fp_current_user', JSON.stringify(newUser));

        setUser(newUser);
        setIsAuthenticated(true);

        return { success: true };
    };

    const login = (email, password) => {
        const savedUserText = localStorage.getItem('fp_current_user');

        if (!savedUserText) {
            return { success: false, error: 'Пользователь не найден' };
        }

        const savedUser = JSON.parse(savedUserText);

        if (savedUser.email === email && savedUser.password === password) {
            setUser(savedUser);
            setIsAuthenticated(true);
            return { success: true };
        }

        return { success: false, error: 'Неверный email или пароль' };
    };

    const logout = () => {
        localStorage.removeItem('fp_current_user');
        setUser(null);
        setIsAuthenticated(false);
    };

    const updateProfile = (newData) => {
        if (!user) return;

        const updatedUser = { ...user, ...newData };
        localStorage.setItem('fp_current_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, register, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}
