import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import './ContactsPage.css';

export default function ContactsPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const contacts = [
        { icon: '📍', title: 'Адрес', value: 'г. Москва, ул. Финансовая, д. 42, офис 301', desc: 'Бизнес‑центр «Капитал»' },
        { icon: '📞', title: 'Телефон', value: '+7 (800) 123‑45‑67', desc: 'Пн–Пт: 9:00 – 18:00' },
        { icon: '✉️', title: 'Email', value: 'info@finplatform.ru', desc: 'Ответим в течение 24 часов' },
        { icon: '💬', title: 'Telegram', value: '@finplatform_support', desc: 'Онлайн‑поддержка 24/7' },
    ];

    const faq = [
        { q: 'Как начать пользоваться платформой?', a: 'Зарегистрируйтесь на сайте, подтвердите email и перейдите в личный кабинет. Там вы найдёте все инструменты для управления финансами.' },
        { q: 'Безопасно ли хранить данные на платформе?', a: 'Да, мы используем современные технологии шифрования и никогда не передаём личные данные третьим лицам.' },
        { q: 'Есть ли бесплатный тариф?', a: 'Базовый функционал доступен бесплатно. Для продвинутой аналитики и инвестиций доступны платные планы.' },
        { q: 'Как связаться с поддержкой?', a: 'Через форму ниже, по телефону или в нашем Telegram‑канале. Среднее время ответа — 2 часа.' },
    ];

    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Введите имя';
        if (!formData.email.trim()) errs.email = 'Введите email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Некорректный email';
        if (!formData.message.trim()) errs.message = 'Введите сообщение';
        return errs;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contacts">
            <div className="contacts__container">
                {/* Header */}
                <div className="contacts__header">
                    <span className="contacts__tag">Связаться с нами</span>
                    <h1 className="contacts__title">Контакты</h1>
                    <p className="contacts__subtitle">Мы всегда рады помочь. Свяжитесь с нами удобным способом.</p>
                </div>

                {/* Contact cards */}
                <div className="contacts__cards">
                    {contacts.map((c, i) => (
                        <div key={i} className="contacts__card">
                            <span className="contacts__card-icon">{c.icon}</span>
                            <h3 className="contacts__card-title">{c.title}</h3>
                            <p className="contacts__card-value">{c.value}</p>
                            <p className="contacts__card-desc">{c.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Main content: form + map/faq */}
                <div className="contacts__content">
                    {/* Form */}
                    <div className="contacts__form-section">
                        <h2 className="contacts__section-title">Напишите нам</h2>
                        <form className="contacts__form" onSubmit={handleSubmit} noValidate>
                            <div className="contacts__form-row">
                                <div className="contacts__form-group">
                                    <label className="contacts__label" htmlFor="c-name">Имя</label>
                                    <input
                                        id="c-name" type="text" name="name"
                                        className={`contacts__input ${errors.name ? 'contacts__input--error' : ''}`}
                                        placeholder="Ваше имя"
                                        value={formData.name} onChange={handleChange}
                                    />
                                    {errors.name && <span className="contacts__error">{errors.name}</span>}
                                </div>
                                <div className="contacts__form-group">
                                    <label className="contacts__label" htmlFor="c-email">Email</label>
                                    <input
                                        id="c-email" type="email" name="email"
                                        className={`contacts__input ${errors.email ? 'contacts__input--error' : ''}`}
                                        placeholder="example@mail.ru"
                                        value={formData.email} onChange={handleChange}
                                    />
                                    {errors.email && <span className="contacts__error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="contacts__form-group">
                                <label className="contacts__label" htmlFor="c-subject">Тема</label>
                                <input
                                    id="c-subject" type="text" name="subject"
                                    className="contacts__input"
                                    placeholder="Тема обращения (необязательно)"
                                    value={formData.subject} onChange={handleChange}
                                />
                            </div>

                            <div className="contacts__form-group">
                                <label className="contacts__label" htmlFor="c-message">Сообщение</label>
                                <textarea
                                    id="c-message" name="message" rows="5"
                                    className={`contacts__textarea ${errors.message ? 'contacts__input--error' : ''}`}
                                    placeholder="Опишите ваш вопрос..."
                                    value={formData.message} onChange={handleChange}
                                ></textarea>
                                {errors.message && <span className="contacts__error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="contacts__submit">Отправить сообщение</button>
                        </form>
                    </div>

                    {/* FAQ */}
                    <div className="contacts__faq-section">
                        <h2 className="contacts__section-title">Частые вопросы</h2>
                        <div className="contacts__faq-list">
                            {faq.map((item, i) => (
                                <details key={i} className="contacts__faq-item">
                                    <summary className="contacts__faq-question">{item.q}</summary>
                                    <p className="contacts__faq-answer">{item.a}</p>
                                </details>
                            ))}
                        </div>

                        <div className="contacts__socials">
                            <h3 className="contacts__socials-title">Мы в соцсетях</h3>
                            <div className="contacts__social-links">
                                <a href="#" className="contacts__social-link">VK</a>
                                <a href="#" className="contacts__social-link">TG</a>
                                <a href="#" className="contacts__social-link">VC</a>
                                <a href="#" className="contacts__social-link">YT</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="contacts__map-container">
                    <div className="contacts__map-overlay">
                        <div className="contacts__map-info">
                            <h3>Приезжайте в гости</h3>
                            <p>Наш офис находится в самом центре делового квартала. Чай, кофе и финансовые советы — за наш счёт!</p>
                        </div>
                    </div>
                    <div className="contacts__map-placeholder">
                        {/* Using a styled pattern or image for the map effect */}
                        <div className="contacts__map-pattern"></div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)} title="Сообщение отправлено">
                <div className="contacts__success">
                    <span className="contacts__success-icon">✅</span>
                    <p>Спасибо за обращение! Мы свяжемся с вами в ближайшее время.</p>
                </div>
            </Modal>
        </div>
    );
}
