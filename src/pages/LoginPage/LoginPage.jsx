import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const validate = () => {
        const errs = {};
        if (!formData.email.trim()) errs.email = 'Введите email';
        if (!formData.password) errs.password = 'Введите пароль';
        return errs;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setServerError('');
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        const result = login(formData.email, formData.password);
        if (result.success) {
            navigate('/dashboard');
        } else {
            setServerError(result.error);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-page__card">
                <div className="auth-page__header">
                    <h1 className="auth-page__title">Вход</h1>
                    <p className="auth-page__subtitle">Войдите в свой личный кабинет</p>
                </div>

                {serverError && <div className="auth-page__error-banner">{serverError}</div>}

                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className={`auth-form__input ${errors.email ? 'auth-form__input--error' : ''}`}
                            placeholder="example@mail.ru"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="auth-form__error">{errors.email}</span>}
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="password">Пароль</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className={`auth-form__input ${errors.password ? 'auth-form__input--error' : ''}`}
                            placeholder="Ваш пароль"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="auth-form__error">{errors.password}</span>}
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
