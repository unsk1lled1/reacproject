import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopBar from '../components/dashboard/DashboardTopBar'
import StatCard from '../components/dashboard/StatCard'
import MoneyFlowChart from '../components/dashboard/MoneyFlowChart'
import TransactionList from '../components/dashboard/TransactionList'
import AvailableCards from '../components/dashboard/AvailableCards'
import './HomePage.css'

function HomePage() {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="dashboard__main">
        <DashboardTopBar />
        <div className="dashboard__content">

          <div className="dashboard__stats-row">
            <StatCard title="Общий баланс" value="$15,340" subtitle="Общее состояние." icon="💼" accent="purple" />
            <StatCard title="Месячный доход" value="$3,200" subtitle="Весь доход за месяц" icon="🎯" accent="orange" />
            <StatCard title="Месячные расходы" value="$2,475" subtitle="Все расходы." icon="👛" accent="pink" />
            <StatCard title="Сбережения" value="$725" subtitle="Сбережения за месяц" icon="💳" accent="blue" />
          </div>

          <div className="dashboard__chart-row">
            <MoneyFlowChart />
            <AvailableCards />
          </div>

          <TransactionList />

        </div>
      </div>
    </div>
  )
}

export default HomePage
