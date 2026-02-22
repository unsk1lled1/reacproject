import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import StatCard from '../../components/StatCard/StatCard';
import Modal from '../../components/Modal/Modal';
import { dashboardStats, recentTransactions } from '../../data/analytics';
import './DashboardPage.css';

export default function DashboardPage() {
    const { user, logout, updateProfile } = useAuth();
    const [editModal, setEditModal] = useState(false);
    const [editName, setEditName] = useState(user?.name || '');

    const handleSaveProfile = () => {
        if (editName !== '') {
            updateProfile({ name: editName });
            setEditModal(false);
        }
    };

    const formatMoney = (num) => {
        return num + ' ₽';
    };

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <div className="dashboard__welcome">
                    <div>
                        <h1 className="dashboard__title">Добро пожаловать, {user?.name}! 👋</h1>
                        <p className="dashboard__subtitle">Вот ваша финансовая сводка на сегодня</p>
                    </div>
                    <div className="dashboard__welcome-actions">
                        <button className="dashboard__edit-btn" onClick={() => setEditModal(true)}>✏️ Редактировать</button>
                        <button className="dashboard__logout-btn" onClick={logout}>Выйти</button>
                    </div>
                </div>

                <div className="dashboard__user-info">
                    <div className="dashboard__avatar">👤</div>
                    <div className="dashboard__user-details">
                        <h3>{user?.name}</h3>
                        <p>{user?.email}</p>
                        <span className="dashboard__role">Пользователь</span>
                    </div>
                </div>

                <div className="dashboard__stats">
                    <StatCard icon="💰" title="Общий баланс" value={formatMoney(dashboardStats.totalBalance)} />
                    <StatCard icon="📈" title="Доходы" value={formatMoney(dashboardStats.monthlyIncome)} />
                    <StatCard icon="📉" title="Расходы" value={formatMoney(dashboardStats.monthlyExpenses)} />
                </div>

                <div className="dashboard__section">
                    <div className="dashboard__section-header">
                        <h2 className="dashboard__section-title">Последние транзакции</h2>
                    </div>
                    <div className="dashboard__transactions">
                        {recentTransactions.map((t) => (
                            <div key={t.id} className="dashboard__transaction">
                                <div className="dashboard__transaction-info">
                                    <span className="dashboard__transaction-icon">
                                        {t.type === 'income' ? '📥' : '📤'}
                                    </span>
                                    <div>
                                        <p className="dashboard__transaction-title">{t.title}</p>
                                        <p className="dashboard__transaction-date">{t.date}</p>
                                    </div>
                                </div>
                                <span className={`dashboard__transaction-amount dashboard__transaction-amount--${t.type}`}>
                                    {formatMoney(t.amount)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={editModal} onClose={() => setEditModal(false)} title="Редактировать профиль">
                <div className="dashboard__edit-form">
                    <label className="auth-form__label">Имя</label>
                    <input
                        type="text"
                        className="auth-form__input"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <button className="auth-form__submit" onClick={handleSaveProfile} style={{ marginTop: '1rem' }}>Сохранить</button>
                </div>
            </Modal>
        </div>
    );
}
