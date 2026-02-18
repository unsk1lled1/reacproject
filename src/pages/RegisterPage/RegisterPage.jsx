import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) errs.name = 'Введите имя';
        if (!formData.email.trim()) errs.email = 'Введите email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Некорректный email';
        if (!formData.password) errs.password = 'Введите пароль';
        else if (formData.password.length < 6) errs.password = 'Минимум 6 символов';
        if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Пароли не совпадают';
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
        const result = register(formData);
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
                    <h1 className="auth-page__title">Регистрация</h1>
                    <p className="auth-page__subtitle">Создайте аккаунт для доступа к платформе</p>
                </div>

                {serverError && <div className="auth-page__error-banner">{serverError}</div>}

                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="name">Имя</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className={`auth-form__input ${errors.name ? 'auth-form__input--error' : ''}`}
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="auth-form__error">{errors.name}</span>}
                    </div>

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
                            placeholder="Минимум 6 символов"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="auth-form__error">{errors.password}</span>}
                    </div>

                    <div className="auth-form__group">
                        <label className="auth-form__label" htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            className={`auth-form__input ${errors.confirmPassword ? 'auth-form__input--error' : ''}`}
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span className="auth-form__error">{errors.confirmPassword}</span>}
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
