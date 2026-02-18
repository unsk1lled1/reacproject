import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './HomePage.css';

export default function HomePage() {
    const { isAuthenticated } = useAuth();

    const features = [
        { icon: '📊', title: 'Аналитика расходов', desc: 'Детальная статистика ваших финансов с визуализацией по категориям и периодам.' },
        { icon: '🔒', title: 'Безопасность', desc: 'Ваши данные защищены современными технологиями шифрования и безопасного хранения.' },
        { icon: '📈', title: 'Инвестиции', desc: 'Отслеживайте портфель, получайте рекомендации и анализируйте доходность.' },
        { icon: '🎯', title: 'Финансовые цели', desc: 'Ставьте цели, отслеживайте прогресс и достигайте финансовой свободы.' },
        { icon: '💳', title: 'Управление картами', desc: 'Все ваши банковские карты в одном месте с историей транзакций.' },
        { icon: '📱', title: 'Мобильный доступ', desc: 'Полный контроль финансов с любого устройства в любое время.' },
    ];

    const stats = [
        { value: '50 000+', label: 'Активных клиентов' },
        { value: '₽2 млрд+', label: 'Управляемых активов' },
        { value: '99.9%', label: 'Время работы' },
        { value: '4.9/5', label: 'Рейтинг клиентов' },
    ];

    const testimonials = [
        { name: 'Алексей К.', role: 'Предприниматель', text: 'FinPlatform полностью изменил мой подход к управлению финансами. Теперь я вижу полную картину своих доходов и расходов.' },
        { name: 'Мария С.', role: 'Дизайнер', text: 'Удобный интерфейс и мощная аналитика. Наконец-то я начала копить и инвестировать грамотно!' },
        { name: 'Дмитрий В.', role: 'Менеджер', text: 'Лучшая платформа для персональных финансов. Советую всем, кто хочет навести порядок в деньгах.' },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg-effects">
                    <div className="hero__glow hero__glow--1"></div>
                    <div className="hero__glow hero__glow--2"></div>
                </div>
                <div className="hero__container">
                    <div className="hero__content">
                        <span className="hero__badge">🚀 Новая версия платформы</span>
                        <h1 className="hero__title">
                            Управляйте <span className="hero__highlight">финансами</span> с уверенностью
                        </h1>
                        <p className="hero__subtitle">
                            Персональная платформа для отслеживания доходов, расходов, инвестиций
                            и достижения ваших финансовых целей.
                        </p>
                        <div className="hero__actions">
                            {isAuthenticated ? (
                                <Link to="/dashboard" className="hero__btn hero__btn--primary">
                                    Перейти в кабинет →
                                </Link>
                            ) : (
                                <>
                                    <Link to="/register" className="hero__btn hero__btn--primary">
                                        Начать бесплатно
                                    </Link>
                                    <Link to="/login" className="hero__btn hero__btn--secondary">
                                        Войти в аккаунт
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="hero__visual">
                        <div className="hero__card hero__card--main">
                            <div className="hero__card-header">
                                <span>Баланс</span>
                                <span className="hero__card-badge">+12.5%</span>
                            </div>
                            <h2 className="hero__card-value">₽ 847 500</h2>
                            <div className="hero__card-chart">
                                <div className="hero__bar" style={{ height: '40%' }}></div>
                                <div className="hero__bar" style={{ height: '65%' }}></div>
                                <div className="hero__bar" style={{ height: '45%' }}></div>
                                <div className="hero__bar" style={{ height: '80%' }}></div>
                                <div className="hero__bar" style={{ height: '55%' }}></div>
                                <div className="hero__bar" style={{ height: '70%' }}></div>
                                <div className="hero__bar hero__bar--accent" style={{ height: '90%' }}></div>
                            </div>
                        </div>
                        <div className="hero__card hero__card--float hero__card--float-1">
                            <span>💰</span> Доход: +230 000 ₽
                        </div>
                        <div className="hero__card hero__card--float hero__card--float-2">
                            <span>📉</span> Расходы: -142 000 ₽
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="home-stats">
                <div className="home-stats__container">
                    {stats.map((stat, i) => (
                        <div key={i} className="home-stats__item">
                            <h3 className="home-stats__value">{stat.value}</h3>
                            <p className="home-stats__label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="features__container">
                    <div className="features__header">
                        <span className="features__tag">Возможности</span>
                        <h2 className="features__title">Всё для управления финансами</h2>
                        <p className="features__subtitle">Мощные инструменты, которые помогут вам контролировать каждый рубль</p>
                    </div>
                    <div className="features__grid">
                        {features.map((feature, i) => (
                            <div key={i} className="feature-card">
                                <span className="feature-card__icon">{feature.icon}</span>
                                <h3 className="feature-card__title">{feature.title}</h3>
                                <p className="feature-card__desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="testimonials__container">
                    <div className="testimonials__header">
                        <span className="testimonials__tag">Отзывы</span>
                        <h2 className="testimonials__title">Что говорят наши клиенты</h2>
                    </div>
                    <div className="testimonials__grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">{t.name[0]}</div>
                                    <div>
                                        <p className="testimonial-card__name">{t.name}</p>
                                        <p className="testimonial-card__role">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta__container">
                    <h2 className="cta__title">Готовы начать?</h2>
                    <p className="cta__subtitle">Присоединяйтесь к тысячам пользователей, которые уже управляют финансами эффективно.</p>
                    <Link to="/register" className="cta__btn">Создать аккаунт бесплатно →</Link>
                </div>
            </section>
        </div>
    );
}
