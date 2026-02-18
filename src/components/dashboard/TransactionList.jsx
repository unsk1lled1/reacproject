const MOCK_TRANSACTIONS = [
  { id: 1, name: 'ЗолотоеЯблоко', date: '17 Апр, 2026', amount: '$99,500', status: 'Успешно' },
  { id: 2, name: 'ЭйрАстана', date: '15 Апр, 2026', amount: '$32,750', status: 'Ожидание' },
  { id: 3, name: 'Баханди', date: '14 Апр, 2026', amount: '$120', status: 'Успешно' },
]

function TransactionList() {
  return (
    <div style={{ background: '#16213e', border: '1px solid #333', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
      <h3 style={{ color: 'white', marginBottom: '16px' }}>Последние транзакции</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ccc' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #333' }}>
            <th style={{ textAlign: 'left', padding: '8px', color: '#888' }}>Название</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#888' }}>Дата</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#888' }}>Сумма</th>
            <th style={{ textAlign: 'left', padding: '8px', color: '#888' }}>Статус</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_TRANSACTIONS.map((t) => (
            <tr key={t.id} style={{ borderBottom: '1px solid #222' }}>
              <td style={{ padding: '10px 8px' }}>{t.name}</td>
              <td style={{ padding: '10px 8px', color: '#888' }}>{t.date}</td>
              <td style={{ padding: '10px 8px', fontWeight: 'bold' }}>{t.amount}</td>
              <td style={{ padding: '10px 8px' }}>
                <span style={{ color: t.status === 'Успешно' ? '#22c55e' : '#f59e0b' }}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList
