import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setErrorMessage('Пожалуйста, заполните все поля');
            return;
        }

        if (formData.password.length < 6) {
            setErrorMessage('Пароль должен быть не меньше 6 букв или цифр');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        }

        register(formData);
        navigate('/dashboard');
    };

    return (
        <div className="auth-page">
            <div className="auth-page__card">
                <div className="auth-page__header">
                    <h1 className="auth-page__title">Регистрация</h1>
                    <p className="auth-page__subtitle">Создайте аккаунт для доступа к платформе</p>
                </div>

                {errorMessage && <div className="auth-page__error-banner">{errorMessage}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="name">Имя</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="auth-form__input"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="auth-form__input"
                            placeholder="example@mail.ru"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="auth-form__input"
                            placeholder="Минимум 6 символов"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            className="auth-form__input"
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">Зарегистрироваться</button>
                </form>

                <p className="auth-page__footer-text">
                    Уже есть аккаунт? <Link to="/login" className="auth-page__link">Войти</Link>
                </p>
            </div>
        </div>
    );
}
