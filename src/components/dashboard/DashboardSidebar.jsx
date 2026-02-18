import { NavLink } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <aside style={{ width: '220px', background: '#1a1a2e', padding: '20px', minHeight: '100vh' }}>
      <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '30px' }}>
        Cashora
      </div>

      <p style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>МЕНЮ</p>
      <nav>
        <NavLink to="/" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }} end>
          Дашборд
        </NavLink>
        <NavLink to="/analytics" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }}>
          Аналитика
        </NavLink>
        <NavLink to="/insights" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }}>
          Инсайты
        </NavLink>
        <NavLink to="/updates" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }}>
          Обновления
        </NavLink>
      </nav>

      <p style={{ color: '#888', fontSize: '12px', marginTop: '20px', marginBottom: '8px' }}>ОБЩЕЕ</p>
      <nav>
        <a href="/" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }}>Настройки</a>
        <a href="/" style={{ display: 'block', color: '#ccc', padding: '8px', marginBottom: '4px' }}>Помощь</a>
      </nav>
    </aside>
  )
}

export default DashboardSidebar
