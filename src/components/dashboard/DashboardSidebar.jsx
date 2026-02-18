import { NavLink } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <aside style={{ width: '200px', background: '#16213e', padding: '20px' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginBottom: '30px' }}>
        Cashora
      </div>

      <nav>
        <NavLink to="/" style={{ display: 'block', color: '#aaa', padding: '8px', marginBottom: '2px' }} end>
          Дашборд
        </NavLink>
        <NavLink to="/analytics" style={{ display: 'block', color: '#aaa', padding: '8px', marginBottom: '2px' }}>
          Аналитика
        </NavLink>
        <NavLink to="/insights" style={{ display: 'block', color: '#aaa', padding: '8px', marginBottom: '2px' }}>
          Инсайты
        </NavLink>
        <NavLink to="/updates" style={{ display: 'block', color: '#aaa', padding: '8px', marginBottom: '2px' }}>
          Обновления
        </NavLink>
      </nav>
    </aside>
  )
}

export default DashboardSidebar
