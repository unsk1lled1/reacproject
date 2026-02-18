import { useState, useMemo } from 'react';
import { monthlyData, expenseCategories } from '../../data/analytics';
import './AnalyticsPage.css';

export default function AnalyticsPage() {
    const [sortField, setSortField] = useState('month');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedMetric, setSelectedMetric] = useState('income');

    const maxValue = useMemo(() => {
        return Math.max(...monthlyData.map((d) => Math.max(d.income, d.expenses)));
    }, []);

    const sortedData = useMemo(() => {
        const data = [...monthlyData];
        data.sort((a, b) => {
            let valA, valB;
            if (sortField === 'month') {
                valA = monthlyData.indexOf(a);
                valB = monthlyData.indexOf(b);
            } else {
                valA = a[sortField];
                valB = b[sortField];
            }
            return sortOrder === 'asc' ? valA - valB : valB - valA;
        });
        return data;
    }, [sortField, sortOrder]);

    const totals = useMemo(() => {
        return monthlyData.reduce(
            (acc, d) => ({
                income: acc.income + d.income,
                expenses: acc.expenses + d.expenses,
                savings: acc.savings + d.savings,
            }),
            { income: 0, expenses: 0, savings: 0 }
        );
    }, []);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    return (
        <div className="analytics">
            <div className="analytics__container">
                <div className="analytics__header">
                    <h1 className="analytics__title">Аналитика</h1>
                    <p className="analytics__subtitle">Визуализация ваших финансовых данных за год</p>
                </div>

                {/* Totals */}
                <div className="analytics__totals">
                    <div className="analytics__total-card">
                        <p className="analytics__total-label">Всего доходов</p>
                        <h3 className="analytics__total-value analytics__total-value--green">{totals.income.toLocaleString('ru-RU')} ₽</h3>
                    </div>
                    <div className="analytics__total-card">
                        <p className="analytics__total-label">Всего расходов</p>
                        <h3 className="analytics__total-value analytics__total-value--red">{totals.expenses.toLocaleString('ru-RU')} ₽</h3>
                    </div>
                    <div className="analytics__total-card">
                        <p className="analytics__total-label">Всего накоплено</p>
                        <h3 className="analytics__total-value analytics__total-value--blue">{totals.savings.toLocaleString('ru-RU')} ₽</h3>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="analytics__chart-section">
                    <div className="analytics__chart-header">
                        <h2 className="analytics__section-title">Доходы и расходы по месяцам</h2>
                        <div className="analytics__chart-legend">
                            <button
                                className={`analytics__legend-btn ${selectedMetric === 'income' ? 'analytics__legend-btn--income-active' : ''}`}
                                onClick={() => setSelectedMetric('income')}
                            >
                                <span className="analytics__legend-dot analytics__legend-dot--income"></span> Доходы
                            </button>
                            <button
                                className={`analytics__legend-btn ${selectedMetric === 'expenses' ? 'analytics__legend-btn--expenses-active' : ''}`}
                                onClick={() => setSelectedMetric('expenses')}
                            >
                                <span className="analytics__legend-dot analytics__legend-dot--expenses"></span> Расходы
                            </button>
                            <button
                                className={`analytics__legend-btn ${selectedMetric === 'savings' ? 'analytics__legend-btn--savings-active' : ''}`}
                                onClick={() => setSelectedMetric('savings')}
                            >
                                <span className="analytics__legend-dot analytics__legend-dot--savings"></span> Накопления
                            </button>
                        </div>
                    </div>
                    <div className="analytics__chart">
                        {monthlyData.map((d, i) => (
                            <div key={i} className="analytics__chart-col">
                                <div className="analytics__chart-bars">
                                    <div
                                        className={`analytics__chart-bar analytics__chart-bar--${selectedMetric}`}
                                        style={{ height: `${(d[selectedMetric] / maxValue) * 100}%` }}
                                        title={`${d[selectedMetric].toLocaleString('ru-RU')} ₽`}
                                    >
                                        <span className="analytics__chart-tooltip">{(d[selectedMetric] / 1000).toFixed(0)}K</span>
                                    </div>
                                </div>
                                <span className="analytics__chart-label">{d.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expense Categories */}
                <div className="analytics__categories-section">
                    <h2 className="analytics__section-title">Структура расходов</h2>
                    <div className="analytics__categories">
                        {expenseCategories.map((cat, i) => (
                            <div key={i} className="analytics__category-row">
                                <div className="analytics__category-info">
                                    <span className="analytics__category-dot" style={{ background: cat.color }}></span>
                                    <span className="analytics__category-name">{cat.name}</span>
                                </div>
                                <div className="analytics__category-bar-wrapper">
                                    <div className="analytics__category-bar" style={{ width: `${cat.percentage}%`, background: cat.color }}></div>
                                </div>
                                <div className="analytics__category-values">
                                    <span className="analytics__category-amount">{cat.amount.toLocaleString('ru-RU')} ₽</span>
                                    <span className="analytics__category-pct">{cat.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Table */}
                <div className="analytics__table-section">
                    <h2 className="analytics__section-title">Детальные данные</h2>
                    <div className="analytics__table-wrapper">
                        <table className="analytics__table">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('month')} className="analytics__th--sortable">
                                        Месяц {sortField === 'month' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('income')} className="analytics__th--sortable">
                                        Доходы {sortField === 'income' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('expenses')} className="analytics__th--sortable">
                                        Расходы {sortField === 'expenses' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th onClick={() => handleSort('savings')} className="analytics__th--sortable">
                                        Накопления {sortField === 'savings' && (sortOrder === 'asc' ? '↑' : '↓')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedData.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.month}</td>
                                        <td className="analytics__td--green">{d.income.toLocaleString('ru-RU')} ₽</td>
                                        <td className="analytics__td--red">{d.expenses.toLocaleString('ru-RU')} ₽</td>
                                        <td className="analytics__td--blue">{d.savings.toLocaleString('ru-RU')} ₽</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
