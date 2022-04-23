import './App.css';
import Header from './components/Header';
import Filter from './components/Header/Filter/Index';
import PieChartCard from './components/Header/Pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="App-container">
        <Filter />

        <PieChartCard name="Pagamento" labels={['name', 'name2', 'name3']} series={[1, 2, 4]} />
      </div>
    </>
  );
}

export default App;
