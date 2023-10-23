import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import DashNav from './components/DashNav/DashNav';
import Home from './components/Homepage/Home/Home';
import Footer from './components/Homepage/Footer/Footer';



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>    
        <Route index element={<Home />} /> 
        <Route path="buysell" element={<DashNav />} />          
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
