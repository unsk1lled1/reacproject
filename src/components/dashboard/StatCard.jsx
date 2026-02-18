function StatCard({ title, value, icon }) {
  return (
    <div style={{ background: '#16213e', padding: '16px', borderRadius: '6px', flex: 1 }}>
      <div style={{ fontSize: '20px', marginBottom: '6px' }}>{icon}</div>
      <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{value}</div>
      <div style={{ color: '#888', fontSize: '13px', marginTop: '4px' }}>{title}</div>
    </div>
  )
}

export default StatCard
