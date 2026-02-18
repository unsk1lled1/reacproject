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
    const [filter, setFilter] = useState('all');

    const handleSaveProfile = () => {
        if (editName.trim()) {
            updateProfile({ name: editName.trim() });
            setEditModal(false);
        }
    };

    const filteredTransactions = recentTransactions.filter((t) => {
        if (filter === 'all') return true;
        return t.type === filter;
    });

    const formatMoney = (num) => {
        const abs = Math.abs(num);
        return (num < 0 ? '- ' : '+ ') + abs.toLocaleString('ru-RU') + ' ₽';
    };

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                {/* Welcome */}
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

                {/* User Info */}
                <div className="dashboard__user-info">
                    <div className="dashboard__avatar">{user?.name?.[0]?.toUpperCase()}</div>
                    <div className="dashboard__user-details">
                        <h3>{user?.name}</h3>
                        <p>{user?.email}</p>
                        <span className="dashboard__role">{user?.role === 'admin' ? '👑 Администратор' : '👤 Пользователь'}</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="dashboard__stats">
                    <StatCard icon="💰" title="Общий баланс" value={`${dashboardStats.totalBalance.toLocaleString('ru-RU')} ₽`} subtitle="↑ 5.2% за месяц" trend="up" color="blue" />
                    <StatCard icon="📈" title="Доходы" value={`${dashboardStats.monthlyIncome.toLocaleString('ru-RU')} ₽`} subtitle="В этом месяце" trend="up" color="green" />
                    <StatCard icon="📉" title="Расходы" value={`${dashboardStats.monthlyExpenses.toLocaleString('ru-RU')} ₽`} subtitle="В этом месяце" trend="down" color="red" />
                    <StatCard icon="🏦" title="Накопления" value={`${dashboardStats.monthlySavings.toLocaleString('ru-RU')} ₽`} subtitle="↑ 8.1% за месяц" trend="up" color="purple" />
                </div>

                {/* Quick Stats Row */}
                <div className="dashboard__quick-stats">
                    <div className="dashboard__quick-stat">
                        <span className="dashboard__quick-stat-label">Доходность портфеля</span>
                        <span className="dashboard__quick-stat-value dashboard__quick-stat-value--green">{dashboardStats.investmentReturn}%</span>
                    </div>
                    <div className="dashboard__quick-stat">
                        <span className="dashboard__quick-stat-label">Цели</span>
                        <span className="dashboard__quick-stat-value">{dashboardStats.goalsCompleted}/{dashboardStats.totalGoals}</span>
                    </div>
                    <div className="dashboard__quick-stat">
                        <span className="dashboard__quick-stat-label">Уровень накоплений</span>
                        <div className="dashboard__progress-bar">
                            <div className="dashboard__progress-fill" style={{ width: `${(dashboardStats.monthlySavings / dashboardStats.monthlyIncome) * 100}%` }}></div>
                        </div>
                        <span className="dashboard__quick-stat-value">{Math.round((dashboardStats.monthlySavings / dashboardStats.monthlyIncome) * 100)}%</span>
                    </div>
                </div>

                {/* Transactions */}
                <div className="dashboard__section">
                    <div className="dashboard__section-header">
                        <h2 className="dashboard__section-title">Последние транзакции</h2>
                        <div className="dashboard__filter-group">
                            <button className={`dashboard__filter-btn ${filter === 'all' ? 'dashboard__filter-btn--active' : ''}`} onClick={() => setFilter('all')}>Все</button>
                            <button className={`dashboard__filter-btn ${filter === 'income' ? 'dashboard__filter-btn--active' : ''}`} onClick={() => setFilter('income')}>Доходы</button>
                            <button className={`dashboard__filter-btn ${filter === 'expense' ? 'dashboard__filter-btn--active' : ''}`} onClick={() => setFilter('expense')}>Расходы</button>
                        </div>
                    </div>
                    <div className="dashboard__transactions">
                        {filteredTransactions.map((t) => (
                            <div key={t.id} className="dashboard__transaction">
                                <div className="dashboard__transaction-info">
                                    <span className="dashboard__transaction-icon">
                                        {t.type === 'income' ? '📥' : '📤'}
                                    </span>
                                    <div>
                                        <p className="dashboard__transaction-title">{t.title}</p>
                                        <p className="dashboard__transaction-date">{t.date} · {t.category}</p>
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

            {/* Edit Profile Modal */}
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
