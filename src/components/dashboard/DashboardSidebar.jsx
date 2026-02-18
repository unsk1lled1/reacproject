import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart2,
  Lightbulb,
  Clock,
  MessageSquare,
  Settings,
  HelpCircle,
  Link2,
  MessageCircle,
  Crown
} from 'lucide-react'
import './DashboardSidebar.css'

function DashboardSidebar() {
  return (
    <aside className="d-sidebar">
      <div className="d-sidebar__logo">
        <span className="d-sidebar__logo-icon">C</span>
        Cashora
      </div>

      <div className="d-sidebar__section-header">Меню</div>
      <nav className="d-sidebar__nav">
        <NavLink to="/" className="d-sidebar__link" end>
          <span className="d-sidebar__link-icon"><LayoutDashboard size={18} /></span>
          <span>Главная</span>
        </NavLink>
        <NavLink to="/analytics" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><BarChart2 size={18} /></span>
          <span>Аналитика</span>
        </NavLink>
        <NavLink to="/insights" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><Lightbulb size={18} /></span>
          <span>Идеи</span>
        </NavLink>
        <NavLink to="/updates" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><Clock size={18} /></span>
          <span>Обновления</span>
        </NavLink>
        <NavLink to="/chat" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><MessageSquare size={18} /></span>
          <span>Чат</span>
          <span className="d-sidebar__badge">20</span>
        </NavLink>
      </nav>

      <div className="d-sidebar__section-header">Общее</div>
      <nav className="d-sidebar__nav">
        <a href="/" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><Settings size={18} /></span>
          <span>Настройки</span>
        </a>
        <a href="/" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><HelpCircle size={18} /></span>
          <span>Поддержка</span>
        </a>
        <a href="/" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><Link2 size={18} /></span>
          <span>Интеграции</span>
        </a>
        <a href="/" className="d-sidebar__link">
          <span className="d-sidebar__link-icon"><MessageCircle size={18} /></span>
          <span>Отзывы</span>
        </a>
      </nav>

      <div className="d-sidebar__upgrade">
        <div className="d-sidebar__upgrade-header">
          <div className="d-sidebar__upgrade-icon"><Crown size={18} /></div>
          <button className="d-sidebar__upgrade-close">×</button>
        </div>
        <div className="d-sidebar__upgrade-title">Тариф Про! 👑</div>
        <div className="d-sidebar__upgrade-desc">Повысьте продуктивность с лучшей организацией</div>
        <button className="d-sidebar__upgrade-btn">Активировать</button>
      </div>
    </aside>
  )
}

export default DashboardSidebar
