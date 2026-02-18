import './DebitCard.css'

function DebitCard({ className = '' }) {
  return (
    <div className={`debit-card ${className}`.trim()}>
      <div className="debit-card__pattern" aria-hidden />
      <div className="debit-card__top">
        <div className="debit-card__top-left">
          <span className="debit-card__contactless" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 A 9 9 0 0 1 6 18" />
              <path d="M6 8 A 7 7 0 0 1 6 16" />
              <path d="M6 10 A 5 5 0 0 1 6 14" />
              <circle cx="4" cy="12" r="1.2" fill="currentColor" />
            </svg>
          </span>
          <span className="debit-card__badge">Active</span>
        </div>
        <div className="debit-card__mastercard" aria-label="Mastercard">
          <span className="debit-card__mc debit-card__mc--red" />
          <span className="debit-card__mc debit-card__mc--orange" />
        </div>
      </div>
      <div className="debit-card__bottom">
        <div className="debit-card__field">
          <span className="debit-card__label">Card Number</span>
          <span className="debit-card__value">**** **** 6782</span>
        </div>
        <div className="debit-card__field">
          <span className="debit-card__label">EXP</span>
          <span className="debit-card__value">09/29</span>
        </div>
        <div className="debit-card__field">
          <span className="debit-card__label">CVV</span>
          <span className="debit-card__value">611</span>
        </div>
      </div>
    </div>
  )
}

export default DebitCard
