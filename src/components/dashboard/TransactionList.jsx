import { Hotel, Plane, Pizza, MoreHorizontal, SlidersHorizontal } from 'lucide-react'
import './TransactionList.css'

const MOCK_TRANSACTIONS = [
  { id: 1, name: 'ЗолотоеЯблоко', receiver: 'INV_000076', date: '17 Апр, 2026', time: '15:45', amount: '$25,500', status: 'Успешно', Icon: Hotel, color: '#3B82F6' },
  { id: 2, name: 'AirAstana', receiver: 'INV_000075', date: '15 Апр, 2026', time: '11:30', amount: '$32,750', status: 'В ожидании', Icon: Plane, color: '#F97316' },
  { id: 3, name: 'Bahandi', receiver: 'INV_000074', date: '14 Апр, 2026', time: '13:20', amount: '$120', status: 'Успешно', Icon: Pizza, color: '#EC4899' },
]

function TransactionList() {
  return (
    <section className="transaction-list">
      <div className="transaction-list__head">
        <h3 className="transaction-list__title">Последние транзакции</h3>
        <div className="transaction-list__controls">
          <input type="text" placeholder="Поиск" className="transaction-list__search" />
          <select className="transaction-list__select" defaultValue="all">
            <option value="all">Все категории</option>
          </select>
          <button className="transaction-list__btn">
            <SlidersHorizontal size={14} style={{ display: 'inline', marginRight: 4 }} />
            Фильтр
          </button>
        </div>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Операция</th>
            <th>ID заказа</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {MOCK_TRANSACTIONS.map((t) => (
            <tr key={t.id}>
              <td>
                <div className="t-info">
                  <div className="t-icon" style={{ background: `${t.color}20`, color: t.color }}>
                    <t.Icon size={16} />
                  </div>
                  {t.name}
                </div>
              </td>
              <td style={{ color: 'var(--text-tertiary)' }}>{t.receiver}</td>
              <td style={{ color: 'var(--text-secondary)' }}>{t.date}</td>
              <td style={{ color: 'var(--text-secondary)' }}>{t.time}</td>
              <td style={{ fontWeight: 600 }}>{t.amount}</td>
              <td>
                <span className={`t-status t-status--${t.status === 'Успешно' ? 'success' : 'pending'}`}>
                  ● {t.status}
                </span>
              </td>
              <td>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', display: 'flex' }} aria-label="Меню">
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TransactionList
