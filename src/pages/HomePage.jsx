import { Wallet, Target, ShoppingBag, PiggyBank } from 'lucide-react'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopBar from '../components/dashboard/DashboardTopBar'
import StatCard from '../components/dashboard/StatCard'
import MoneyFlowChart from '../components/dashboard/MoneyFlowChart'
import QuickContacts from '../components/dashboard/QuickContacts'
import ScheduledPayments from '../components/dashboard/ScheduledPayments'
import TransactionList from '../components/dashboard/TransactionList'
import AvailableCards from '../components/dashboard/AvailableCards'
import './HomePage.css'

function HomePage() {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="dashboard__main">
        <div className="dashboard__content">
          <DashboardTopBar />
          <div className="dashboard__center">

            {/* Секция обзора дашборда (Приветствие + Статистика) */}
            <section className="dashboard__overview">
              <div className="dashboard__overview-head">
                <div className="dashboard__overview-welcome">
                  <h2 className="dashboard__overview-title">Доброе утро, Жангир ✨</h2>
                  <p className="dashboard__overview-subtitle">Вот обзор вашего финансового состояния и недавней активности.</p>
                </div>
                <div className="dashboard__overview-controls">
                  <select className="dashboard__select" defaultValue="month">
                    <option value="month">Этот месяц</option>
                    <option value="year">Этот год</option>
                  </select>
                  <button className="dashboard__btn-export">
                    <span>↑ Экспорт</span>
                  </button>
                </div>
              </div>

              <div className="dashboard__stats-row">
                <StatCard
                  title="Общий баланс"
                  value="$15,340"
                  subtitle="Общий капитал."
                  icon={<Wallet size={28} />}
                  accent="purple"
                />
                <StatCard
                  title="Месячный доход"
                  value="$3,200"
                  subtitle="Общий доход за месяц"
                  icon={<Target size={28} />}
                  accent="orange"
                />
                <StatCard
                  title="Месячные расходы"
                  value="$2,475"
                  subtitle="Общие расходы."
                  icon={<ShoppingBag size={28} />}
                  accent="pink"
                />
                <StatCard
                  title="Сбережения"
                  value="$725"
                  subtitle="Сбережения за месяц"
                  icon={<PiggyBank size={28} />}
                  accent="blue"
                />
              </div>
            </section>

            <div className="dashboard__chart-row">
              <MoneyFlowChart />
              <AvailableCards />
            </div>

            <div className="dashboard__transactions">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
