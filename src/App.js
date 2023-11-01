import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home/Home';
import Footer from './components/Homepage/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import CreateOffer from './components/CreateAnOffer/CreateOffer';
import BuySell from './components/BuySell/BuySell';



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Navigation />}> 
         <Route index element={<Home />} />               
         <Route path="createoffer" element={<CreateOffer />} />               
         <Route path="buysell" element={<BuySell />} />               
      </Route>      
  )
)
 

function App() {
  return (
    <div className="App"> 
      <RouterProvider router={router} />
      <Footer />      
    </div>
  );
}

export default App;
