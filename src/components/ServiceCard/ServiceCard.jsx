import './ServiceCard.css';

export default function ServiceCard({ service, isFavorite, onToggleFavorite }) {
    return (
        <div className="service-card">
            <div className="service-card__image-wrapper">
                <img src={service.image} alt={service.title} className="service-card__image" loading="lazy" />
                <span className="service-card__category">{service.category}</span>
                <button
                    className={`service-card__fav ${isFavorite ? 'service-card__fav--active' : ''}`}
                    onClick={() => onToggleFavorite(service.id)}
                    aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <div className="service-card__footer">
                    <span className="service-card__price">{service.price.toLocaleString('ru-RU')} ₽</span>
                    <span className="service-card__rating">⭐ {service.rating}</span>
                </div>
            </div>
        </div>
    );
}
