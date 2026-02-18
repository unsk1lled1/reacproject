import DebitCard from './DebitCard'
import './MainCard.css'

function MainCard() {
  return (
    <section className="main-card">
      <div className="main-card__stack">
        <div className="main-card__card main-card__card--back main-card__card--back-1" aria-hidden />
        <div className="main-card__card main-card__card--back main-card__card--back-2" aria-hidden />
        <div className="main-card__card main-card__card--front">
          <DebitCard />
        </div>
      </div>
    </section>
  )
}

export default MainCard
