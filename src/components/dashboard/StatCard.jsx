import { MoreHorizontal } from 'lucide-react'
import './StatCard.css'

function StatCard({ title, value, subtitle, icon, accent = 'purple' }) {
  return (
    <article className={`stat-card stat-card--${accent}`}>
      <div className="stat-card__top">
        <div className="stat-card__icon-wrapper">
          {icon}
        </div>
        <div className="stat-card__main">
          <div className="stat-card__value">{value}</div>
          {subtitle && <div className="stat-card__desc">{subtitle}</div>}
        </div>
      </div>
      <div className="stat-card__bottom">
        <div className="stat-card__title">{title}</div>
        <button type="button" className="stat-card__menu" aria-label="Меню"><MoreHorizontal size={18} /></button>
      </div>
    </article>
  )
}

export default StatCard
