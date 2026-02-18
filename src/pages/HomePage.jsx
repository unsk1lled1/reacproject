import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardTopBar from '../components/dashboard/DashboardTopBar'
import StatCard from '../components/dashboard/StatCard'
import MoneyFlowChart from '../components/dashboard/MoneyFlowChart'
import './HomePage.css'

function HomePage() {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="dashboard__main">
        <DashboardTopBar />
        <div className="dashboard__content">

          <div className="dashboard__stats-row">
            <StatCard title="Общий баланс" value="$15,340" icon="💼" />
            <StatCard title="Месячный доход" value="$3,200" icon="🎯" />
            <StatCard title="Месячные расходы" value="$2,475" icon="👛" />
            <StatCard title="Сбережения" value="$725" icon="💳" />
          </div>

          <MoneyFlowChart />

        </div>
      </div>
    </div>
  )
}

export default HomePage
