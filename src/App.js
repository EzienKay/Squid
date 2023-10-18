import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import DashNav from './components/DashNav/DashNav';
import Home from './components/Homepage/Home/Home';
import RootLayout from './components/Homepage/Home/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout    />} >
      <Route path="/dashnav" element={<DashNav />} />
        {/* <Route index element={<Home/>} />
        <Route path="#trend"  />
        <Route path="#feature"  />
        <Route path="#trade"  />
        <Route path="#testimonial" /> 
        <Route path="#faq"  /> */}
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
