function DashboardTopBar() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#16213e', borderBottom: '1px solid #333' }}>
      <h1 style={{ color: 'white', fontSize: '20px', margin: 0 }}>Обзор</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <input
          type="text"
          placeholder="Поиск..."
          style={{ background: '#0f3460', border: '1px solid #444', borderRadius: '6px', padding: '8px 12px', color: 'white', width: '200px' }}
        />
        <span style={{ color: '#ccc' }}>🔔</span>
        <span style={{ color: 'white', fontSize: '14px' }}>Жангир</span>
      </div>
    </header>
  )
}

export default DashboardTopBar
