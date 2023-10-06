import './App.css';
import FAQ from './components/Homepage/FAQ/FAQ';
import Footer from './components/Homepage/Footer/Footer';
import Home from './components/Homepage/Home/Home';
import Testimonial from './components/Homepage/Testimonial/Testimonial';

import Feature from './components/Homepage/Feature/Feature';
import Trade from './components/Homepage/Trade/Trade';
import Trend from './components/Homepage/Trend/Trend';

function App() {
  return (
    <div className="App"> 
      <Home /> 
      <Trend />
      <Feature />
      <Trade />    
      <Testimonial />
      <FAQ />
      <Footer />
      
    </div>
  );
}

export default App;
