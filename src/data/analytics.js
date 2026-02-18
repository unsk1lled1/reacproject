export const monthlyData = [
    { month: 'Янв', income: 185000, expenses: 120000, savings: 65000 },
    { month: 'Фев', income: 192000, expenses: 115000, savings: 77000 },
    { month: 'Мар', income: 178000, expenses: 130000, savings: 48000 },
    { month: 'Апр', income: 205000, expenses: 125000, savings: 80000 },
    { month: 'Май', income: 198000, expenses: 140000, savings: 58000 },
    { month: 'Июн', income: 210000, expenses: 135000, savings: 75000 },
    { month: 'Июл', income: 215000, expenses: 128000, savings: 87000 },
    { month: 'Авг', income: 200000, expenses: 145000, savings: 55000 },
    { month: 'Сен', income: 225000, expenses: 132000, savings: 93000 },
    { month: 'Окт', income: 218000, expenses: 138000, savings: 80000 },
    { month: 'Ноя', income: 230000, expenses: 142000, savings: 88000 },
    { month: 'Дек', income: 250000, expenses: 160000, savings: 90000 },
];

export const expenseCategories = [
    { name: 'Жильё', amount: 45000, percentage: 32, color: '#6366f1' },
    { name: 'Питание', amount: 28000, percentage: 20, color: '#06b6d4' },
    { name: 'Транспорт', amount: 15000, percentage: 11, color: '#f59e0b' },
    { name: 'Развлечения', amount: 12000, percentage: 9, color: '#ec4899' },
    { name: 'Здоровье', amount: 10000, percentage: 7, color: '#10b981' },
    { name: 'Одежда', amount: 8000, percentage: 6, color: '#8b5cf6' },
    { name: 'Образование', amount: 7000, percentage: 5, color: '#f97316' },
    { name: 'Прочее', amount: 15000, percentage: 10, color: '#64748b' },
];

export const recentTransactions = [
    { id: 1, title: 'Зарплата', amount: 185000, type: 'income', date: '2026-02-15', category: 'Доход' },
    { id: 2, title: 'Аренда квартиры', amount: -45000, type: 'expense', date: '2026-02-14', category: 'Жильё' },
    { id: 3, title: 'Супермаркет', amount: -4500, type: 'expense', date: '2026-02-13', category: 'Питание' },
    { id: 4, title: 'Фриланс проект', amount: 35000, type: 'income', date: '2026-02-12', category: 'Доход' },
    { id: 5, title: 'Подписка Netflix', amount: -1200, type: 'expense', date: '2026-02-11', category: 'Развлечения' },
    { id: 6, title: 'Бензин', amount: -3500, type: 'expense', date: '2026-02-10', category: 'Транспорт' },
    { id: 7, title: 'Спортзал', amount: -3000, type: 'expense', date: '2026-02-09', category: 'Здоровье' },
    { id: 8, title: 'Инвестиции дивиденды', amount: 12000, type: 'income', date: '2026-02-08', category: 'Доход' },
    { id: 9, title: 'Кафе', amount: -1800, type: 'expense', date: '2026-02-07', category: 'Питание' },
    { id: 10, title: 'Онлайн курс', amount: -5000, type: 'expense', date: '2026-02-06', category: 'Образование' },
];

export const dashboardStats = {
    totalBalance: 847500,
    monthlyIncome: 230000,
    monthlyExpenses: 142000,
    monthlySavings: 88000,
    investmentReturn: 12.5,
    goalsCompleted: 3,
    totalGoals: 5,
};
