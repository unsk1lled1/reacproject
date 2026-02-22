import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setErrorMessage('Пожалуйста, введите email и пароль');
            return;
        }

        const result = login(formData.email, formData.password);

        if (result.success) {
            navigate('/dashboard');
        } else {
            setErrorMessage(result.error);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-page__card">
                <div className="auth-page__header">
                    <h1 className="auth-page__title">Вход</h1>
                    <p className="auth-page__subtitle">Войдите в свой личный кабинет</p>
                </div>

                {errorMessage && <div className="auth-page__error-banner">{errorMessage}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
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
                            placeholder="Ваш пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">Войти</button>
                </form>

                <p className="auth-page__footer-text">
                    Нет аккаунта? <Link to="/register" className="auth-page__link">Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
}
