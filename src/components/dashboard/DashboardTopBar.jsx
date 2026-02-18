import { Search, HelpCircle, Bell, ChevronDown } from 'lucide-react'
import './DashboardTopBar.css'

function DashboardTopBar() {
  return (
    <header className="d-topbar">
      <div className="d-topbar__left">
        <h1 className="d-topbar__title">Обзор</h1>
      </div>

      <div className="d-topbar__right">
        <div className="d-topbar__search">
          <span className="d-topbar__search-icon"><Search size={16} /></span>
          <input type="text" className="d-topbar__search-input" placeholder="Поиск..." />
          <div className="d-topbar__shortcuts">
            <span className="d-topbar__key">K</span>
            <span className="d-topbar__key">⌘</span>
          </div>
        </div>

        <div className="d-topbar__action-group">
          <button className="d-topbar__icon-btn"><HelpCircle size={18} /></button>
          <button className="d-topbar__icon-btn d-topbar__icon-btn--notification"><Bell size={18} /></button>
        </div>

        <div className="d-topbar__profile">
          <div className="d-topbar__avatar" />
          <div className="d-topbar__user-info">
            <span className="d-topbar__user-name">Жангир</span>
            <span className="d-topbar__user-role">@unsk1lled</span>
          </div>
          <ChevronDown size={14} className="d-topbar__chevron" />
        </div>
      </div>
    </header>
  )
}

export default DashboardTopBar
