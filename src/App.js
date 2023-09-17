import './App.css';
import FAQ from './components/Homepage/FAQ/FAQ';
import Footer from './components/Homepage/Footer/Footer';
import Testimonial from './components/Homepage/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
