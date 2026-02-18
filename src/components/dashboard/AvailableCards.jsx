function AvailableCards() {
  return (
    <div style={{ background: '#16213e', border: '1px solid #333', borderRadius: '8px', padding: '20px', minWidth: '260px' }}>
      <h3 style={{ color: 'white', marginBottom: '16px' }}>Мои карты</h3>

      <div style={{ background: '#0f3460', borderRadius: '12px', padding: '20px', color: 'white', marginBottom: '16px' }}>
        <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '20px' }}>Активна</div>
        <div style={{ fontSize: '18px', letterSpacing: '2px', marginBottom: '20px' }}>**** **** **** 6782</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#aaa' }}>
          <span>СРОК: 09/29</span>
          <span>CVV: 611</span>
        </div>
      </div>

      <div>
        <div style={{ color: '#888', fontSize: '13px', marginBottom: '6px' }}>Лимит расходов</div>
        <div style={{ color: 'white', fontSize: '13px', marginBottom: '8px' }}>$3,884 использовано из $20,638</div>
        <div style={{ background: '#333', borderRadius: '4px', height: '6px' }}>
          <div style={{ background: '#3b82f6', width: '19%', height: '100%', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  )
}

export default AvailableCards
