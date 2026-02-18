import DebitCard from './DebitCard'
import './AvailableCards.css'

function AvailableCards() {
  const used = 3884
  const limit = 20638
  const percent = Math.round((used / limit) * 100)

  return (
    <section className="available-cards">
      <div className="available-cards__head">
        <div>
          <h3 className="available-cards__title">Мои карты</h3>
          <p className="available-cards__subtitle">Всего 3 карты</p>
        </div>
        <button type="button" className="available-cards__menu" aria-label="Меню">⋯</button>
      </div>

      {/* Credit Card Visual */}
      <div className="credit-card-stack">
        <div className="credit-card-layer credit-card-layer--2"></div>
        <div className="credit-card-layer credit-card-layer--1"></div>
        <div className="credit-card">
          <div className="credit-card__nav">
            <span className="credit-card__status">Активна</span>
            <span className="credit-card__contactless">)))</span>
          </div>
          <div className="credit-card__chip-group">
            <div className="credit-card__chip"></div>
          </div>

          <div className="credit-card__footer">
            <div className="credit-card__info">
              <span className="credit-card__label">Номер карты</span>
              <span className="credit-card__val">**** **** **** 6782</span>
            </div>
            <div className="credit-card__info">
              <span className="credit-card__label">Срок</span>
              <span className="credit-card__val">09/29</span>
            </div>
            <div className="credit-card__info">
              <span className="credit-card__label">CVV</span>
              <span className="credit-card__val">611</span>
            </div>
            <div className="credit-card__brand">
              <div className="cc-circle cc-circle--red"></div>
              <div className="cc-circle cc-circle--yellow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="available-cards__limit">
        <div className="available-cards__limit-text">
          <span className="available-cards__limit-label">Лимит расходов</span>
          <span className="available-cards__limit-val">использовано <b>${used.toLocaleString()}</b> из ${limit.toLocaleString()}</span>
        </div>
        <div className="available-cards__progress">
          <div
            className="available-cards__progress-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </section>
  )
}

export default AvailableCards
