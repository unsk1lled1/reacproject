import './ScheduledPayments.css'

const ITEMS = [
  { id: 1, name: 'Тариф «Базовый»', price: '990 ₽/мес' },
  { id: 2, name: 'Доп. хранилище', price: '199 ₽/мес' },
  { id: 3, name: 'Поддержка 24/7', price: '490 ₽/мес' },
]

function ScheduledPayments() {
  return (
    <section className="scheduled">
      <div className="scheduled__head">
        <h3 className="scheduled__title">Предстоящие платежи</h3>
        <button type="button" className="scheduled__menu" aria-label="Ещё">⋮</button>
      </div>
      <div className="scheduled__tray">
        <div className="scheduled__row">
          {ITEMS.map((item) => (
            <div key={item.id} className="scheduled__pill">
              <span className="scheduled__name">{item.name}</span>
              <span className="scheduled__price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduledPayments
