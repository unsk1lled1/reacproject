import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">ClientPortal</div>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">Главная</NavLink>
        <NavLink to="/services" className="header__link">Услуги</NavLink>
        <NavLink to="/statistics" className="header__link">Статистика</NavLink>
        <NavLink to="/dashboard" className="header__link">Кабинет</NavLink>
        <NavLink to="/login" className="header__link">Вход</NavLink>
        <NavLink to="/register" className="header__link header__link--accent">Регистрация</NavLink>
      </nav>
    </header>
  )
}

export default Header
