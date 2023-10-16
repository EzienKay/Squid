// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import FAQ from './components/Homepage/FAQ/FAQ';
// import Footer from './components/Homepage/Footer/Footer';
// import Home from './components/Homepage/Home/Home';
// import Testimonial from './components/Homepage/Testimonial/Testimonial';
// import Feature from './components/Homepage/Feature/Feature';
// import Trade from './components/Homepage/Trade/Trade';
// import Trend from './components/Homepage/Trend/Trend';
// import BuySell from './components/BuySell/BuySell';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />}/>
//       <Route path='/trend' element={<Trend />}/>
//       <Route path='/feature' element={<Feature />}/>
//       <Route path='/trade' element={<Trade />}/>
//       <Route path='/faq' element={<FAQ />} />
//       <Route path='/footer' element={<Footer />} />
//       <Route path='/testimonial' element={<Testimonial />} />
//       <Route path='/buysell' element={<BuySell />} />
//     </Routes>
//   );
// }

// export default App;




















import './App.css';
import FAQ from './components/Homepage/FAQ/FAQ';
import Footer from './components/Homepage/Footer/Footer';
import Home from './components/Homepage/Home/Home';
import Testimonial from './components/Homepage/Testimonial/Testimonial';

import Feature from './components/Homepage/Feature/Feature';
import Trade from './components/Homepage/Trade/Trade';
import Trend from './components/Homepage/Trend/Trend';
import BuySell from './components/BuySell/BuySell';

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
      <BuySell />
    </div>
  );
}

export default App;
