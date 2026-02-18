import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span>📊</span> FinPlatform
                        </Link>
                        <p className="footer__desc">
                            Современная платформа для управления финансами с персональной аналитикой и индивидуальным подходом.
                        </p>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__title">Навигация</h4>
                        <Link to="/" className="footer__link">Главная</Link>
                        <Link to="/services" className="footer__link">Услуги</Link>
                        <Link to="/analytics" className="footer__link">Аналитика</Link>
                        <Link to="/dashboard" className="footer__link">Кабинет</Link>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__title">Услуги</h4>
                        <Link to="/services" className="footer__link">Планирование</Link>
                        <Link to="/services" className="footer__link">Инвестиции</Link>
                        <Link to="/services" className="footer__link">Страхование</Link>
                        <Link to="/services" className="footer__link">Налоги</Link>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__title">Контакты</h4>
                        <span className="footer__link">info@finplatform.ru</span>
                        <span className="footer__link">+7 (800) 123-45-67</span>
                        <span className="footer__link">Москва, Россия</span>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; 2026 FinPlatform. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
