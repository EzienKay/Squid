import './App.css';
import Feature from './components/Homepage/Feature/Feature';
import Trade from './components/Homepage/Trade/Trade';
import Trend from './components/Homepage/Trend/Trend';

function App() {
  return (
    <div className="App">
      <Trend />
      <Feature />
      <Trade />
    </div>
  );
}

export default App;
