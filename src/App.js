// src/App.js


import './App.css';
import CompetitiveProgramming from './components/CompetitiveProgramming/CompetitiveProgramming';
import ContestStats from './components/ConetstStats/ContestStats';
import ProfileCard from './components/ProfileCard/ProfileCard';
import RatingChart from './components/RatingChart/RatingChart';
import SolvedProblems from './components/SolvedProblems/SolvedProblems';
import StatCard from './components/StatCard/StatCard';


function App() {
  return (
    <div className="dashboard">
      <ProfileCard />
      <div className="stats-container">
        <StatCard title="Total Questions" value={803} />
        <StatCard title="Total Active Days" value={307} />
      </div>
      <div className="middle-section">
        <ContestStats />
        <RatingChart />
      </div>
      <div className="bottom-section">
        <SolvedProblems />
        <CompetitiveProgramming />
      </div>
    </div>
  );
}

export default App;
