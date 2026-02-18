import './QuickContacts.css'

const CONTACTS = [
  { id: 1, name: 'Мама', initial: 'М', color: '#fef3c7' },
  { id: 2, name: 'Алексей', initial: 'А', color: '#dbeafe' },
  { id: 3, name: 'Брат', initial: 'Б', color: '#d1fae5' },
]

function QuickContacts() {
  return (
    <section className="quick-contacts">
      <div className="quick-contacts__head">
        <h3 className="quick-contacts__title">Отправить деньги</h3>
        <button type="button" className="quick-contacts__menu" aria-label="Ещё">⋮</button>
      </div>
      <div className="quick-contacts__tray">
        <button type="button" className="quick-contacts__add" aria-label="Добавить контакт" title="Добавить контакт">
          <span className="quick-contacts__add-icon">+</span>
          <span className="quick-contacts__add-label">Добавить</span>
        </button>
        <div className="quick-contacts__list">
          {CONTACTS.map((c) => (
            <button key={c.id} type="button" className="quick-contacts__item" title={`Отправить ${c.name}`}>
              <span
                className="quick-contacts__avatar"
                style={{ background: c.color, color: '#374151' }}
              >
                {c.initial}
              </span>
              <span className="quick-contacts__name">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickContacts
