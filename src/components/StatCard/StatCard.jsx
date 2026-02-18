import './StatCard.css';

export default function StatCard({ icon, title, value, subtitle, trend, color = 'blue' }) {
    return (
        <div className={`stat-card stat-card--${color}`}>
            <div className="stat-card__icon">{icon}</div>
            <div className="stat-card__content">
                <p className="stat-card__title">{title}</p>
                <h3 className="stat-card__value">{value}</h3>
                {subtitle && (
                    <p className={`stat-card__subtitle ${trend ? `stat-card__subtitle--${trend}` : ''}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
