import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import DashNav from './components/DashNav/DashNav';
import Home from './components/Homepage/Home/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>    
        <Route index element={<Home />} /> 
        <Route path="dashnav" element={<DashNav />} /> 
      </Route>    
    
  )
)
 

function App() {
  return (
    <div className="App"> 
      <RouterProvider router={router} />      
    </div>
  );
}

export default App;
