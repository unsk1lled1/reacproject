import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Modal from '../../components/Modal/Modal';
import { useFavorites } from '../../hooks/useFavorites';
import { services, categories } from '../../data/services';
import './ServicesPage.css';

export default function ServicesPage() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('Все');
    const [selectedService, setSelectedService] = useState(null);
    const { toggleFavorite, isFavorite } = useFavorites();

    const getFilteredServices = () => {
        let result = services;

        if (search !== '') {
            const query = search.toLowerCase();
            result = result.filter(s => s.title.toLowerCase().includes(query));
        }

        if (category !== 'Все') {
            result = result.filter(s => s.category === category);
        }

        return result;
    };

    const filteredServices = getFilteredServices();

    return (
        <div className="services-page">
            <div className="services-page__container">
                <div className="services-page__header">
                    <h1 className="services-page__title">Наши услуги</h1>
                    <p className="services-page__subtitle">Выберите подходящую финансовую услугу для достижения ваших целей</p>
                </div>

                <div className="services-page__toolbar">
                    <SearchBar value={search} onChange={setSearch} placeholder="Поиск услуг..." />
                </div>

                <div className="services-page__categories">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`services-page__chip ${category === cat ? 'services-page__chip--active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <p className="services-page__results-count">
                    Найдено: {filteredServices.length} {filteredServices.length === 1 ? 'услуга' : 'услуг'}
                </p>

                {filteredServices.length > 0 ? (
                    <div className="services-page__grid">
                        {filteredServices.map((s) => (
                            <div key={s.id} onClick={() => setSelectedService(s)} style={{ cursor: 'pointer' }}>
                                <ServiceCard
                                    service={s}
                                    isFavorite={isFavorite(s.id)}
                                    onToggleFavorite={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(s.id);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="services-page__empty">
                        <span className="services-page__empty-icon">🔍</span>
                        <h3>Ничего не найдено</h3>
                        <p>Попробуйте изменить параметры поиска или фильтрации</p>
                    </div>
                )}
            </div>

            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title || ''}
            >
                {selectedService && (
                    <div className="services-page__modal-content">
                        <img src={selectedService.image} alt={selectedService.title} className="services-page__modal-image" />
                        <span className="services-page__modal-category">{selectedService.category}</span>
                        <p className="services-page__modal-desc">{selectedService.description}</p>
                        <div className="services-page__modal-footer">
                            <span className="services-page__modal-price">{selectedService.price.toLocaleString('ru-RU')} ₽</span>
                            <span className="services-page__modal-rating">⭐ {selectedService.rating}</span>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
