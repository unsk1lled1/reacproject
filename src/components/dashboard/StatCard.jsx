import './StatCard.css'

function StatCard({ title, value, subtitle, icon, accent = 'purple' }) {
  return (
    <div className="stat-card">
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '22px', fontWeight: 'bold', color: 'white' }}>{value}</div>
      <div style={{ color: '#aaa', fontSize: '13px', marginTop: '4px' }}>{title}</div>
      {subtitle && <div style={{ color: '#666', fontSize: '12px', marginTop: '2px' }}>{subtitle}</div>}
    </div>
  )
}

export default StatCard
