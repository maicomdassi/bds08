import './App.css';
import Header from './components/Header';
import Filter from './components/Header/Filter/Index';

function App() {
  return (
    <>
      <Header />
      <div className="App-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
