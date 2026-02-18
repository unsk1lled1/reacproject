import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isAuthenticated, user, logout } = useAuth();

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo" onClick={closeMenu}>
                    <span className="header__logo-icon">📊</span>
                    <span className="header__logo-text">FinPlatform</span>
                </Link>

                <button
                    className={`header__burger ${menuOpen ? 'header__burger--active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Single mobile menu wrapper */}
                <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
                    <nav className="header__nav">
                        <NavLink to="/" className="header__link" onClick={closeMenu}>Главная</NavLink>
                        <NavLink to="/services" className="header__link" onClick={closeMenu}>Услуги</NavLink>
                        <NavLink to="/analytics" className="header__link" onClick={closeMenu}>Аналитика</NavLink>
                        <NavLink to="/contacts" className="header__link" onClick={closeMenu}>Контакты</NavLink>
                        {isAuthenticated && (
                            <NavLink to="/dashboard" className="header__link" onClick={closeMenu}>Кабинет</NavLink>
                        )}
                    </nav>

                    <div className="header__actions">
                        <button className="header__theme-btn" onClick={toggleTheme} aria-label="Сменить тему">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        {isAuthenticated ? (
                            <div className="header__user">
                                <Link to="/dashboard" className="header__user-name" onClick={closeMenu}>{user?.name}</Link>
                                <button className="header__logout-btn" onClick={() => { logout(); closeMenu(); }}>Выйти</button>
                            </div>
                        ) : (
                            <div className="header__auth">
                                <Link to="/login" className="header__btn header__btn--ghost" onClick={closeMenu}>Войти</Link>
                                <Link to="/register" className="header__btn header__btn--primary" onClick={closeMenu}>Регистрация</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Backdrop overlay for mobile */}
                {menuOpen && <div className="header__backdrop" onClick={closeMenu}></div>}
            </div>
        </header>
    );
}
