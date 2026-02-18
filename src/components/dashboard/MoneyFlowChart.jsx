import './MoneyFlowChart.css'

const POINTS = [0, 8, 12, 6, 18, 14, 22]
const POINTS2 = [4, 10, 8, 14, 10, 16, 12]

function pointsToPath(points, width, max) {
  return points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * width
      const py = 90 - (y / max) * 70
      return `${i === 0 ? 'M' : 'L'} ${x} ${py}`
    })
    .join(' ')
}

function MoneyFlowChart() {
  /* Simplified paths for demo */
  const pathBlue = "M 0 250 Q 80 150 150 200 T 300 150 T 450 100 T 600 220 T 750 180"
  const pathGreen = "M 0 220 Q 80 200 150 220 T 300 180 T 450 160 T 600 190 T 750 150"

  return (
    <section className="money-flow">
      <div className="money-flow__head">
        <div className="money-flow__title-group">
          <h3 className="money-flow__title">Обзор транзакций</h3>
          <div className="money-flow__subtitle">
            $45,567.00
            <small>↑ 4.9%</small>
          </div>
        </div>

        <div className="money-flow__controls">
          <div className="money-flow__toggle">
            <button className="active">Месяц</button>
            <button>Год</button>
          </div>
        </div>
      </div>

      <div className="money-flow__legend">
        <div className="money-flow__legend-item">
          <span className="money-flow__dot" style={{ background: 'var(--accent-purple)' }}></span>
          Доход
        </div>
        <div className="money-flow__legend-item">
          <span className="money-flow__dot" style={{ background: 'var(--accent-green)' }}></span>
          Расход
        </div>
        <div className="money-flow__legend-item">
          <span className="money-flow__dot" style={{ background: 'var(--text-tertiary)' }}></span>
          Сбережения
        </div>
      </div>

      <div className="money-flow__chart-container">
        <svg viewBox="0 0 800 300" className="money-flow__svg" preserveAspectRatio="none">
          {/* Grid Lines */}
          <line x1="0" y1="50" x2="800" y2="50" className="money-flow__grid-line" />
          <line x1="0" y1="125" x2="800" y2="125" className="money-flow__grid-line" />
          <line x1="0" y1="200" x2="800" y2="200" className="money-flow__grid-line" />
          <line x1="0" y1="275" x2="800" y2="275" className="money-flow__grid-line" />

          {/* Blue Line (Earnings) - Highlight dot */}
          <path d={pathBlue} fill="none" stroke="var(--accent-purple)" strokeWidth="4" className="money-flow__line" />
          <circle cx="300" cy="150" r="6" fill="var(--bg-card)" stroke="var(--accent-purple)" strokeWidth="3" />

          {/* Tooltipish thing */}
          <g transform="translate(260, 110)">
            <rect width="80" height="30" rx="6" fill="var(--accent-purple)" />
            <text x="40" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$22,430</text>
            <path d="M 40 30 L 35 36 L 45 36 Z" fill="var(--accent-purple)" />
          </g>

          {/* Green Line (Savings) */}
          <path d={pathGreen} fill="none" stroke="var(--accent-green)" strokeWidth="4" className="money-flow__line" style={{ animationDelay: '0.2s' }} />

          {/* Area under curve (Simulated) */}
          <path d={`${pathBlue} L 800 300 L 0 300 Z`} fill="url(#blueGradient)" className="money-flow__area" />

          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* X-Axis Labels */}
          <text x="20" y="295" className="money-flow__text">Янв</text>
          <text x="100" y="295" className="money-flow__text">Фев</text>
          <text x="180" y="295" className="money-flow__text">Мар</text>
          <text x="260" y="295" className="money-flow__text">Апр</text>
          <text x="340" y="295" className="money-flow__text">Май</text>
          <text x="420" y="295" className="money-flow__text">Июн</text>
          <text x="500" y="295" className="money-flow__text">Июл</text>
          <text x="580" y="295" className="money-flow__text">Авг</text>
          <text x="660" y="295" className="money-flow__text">Сен</text>
          <text x="740" y="295" className="money-flow__text">Окт</text>
          <text x="800" y="295" className="money-flow__text" textAnchor="end">Дек</text>
        </svg>
      </div>
    </section>
  )
}

export default MoneyFlowChart
