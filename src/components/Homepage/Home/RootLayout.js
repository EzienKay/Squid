import {  Nav } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"


function RootLayout() {
  return (
    <>
    <header>
            
                            <Nav className="me-auto"  defaultActiveKey="#home">
                                <NavLink to="#home">Home</NavLink>
                                <NavLink to="#trend">Trend</NavLink>                    
                                <NavLink to="#feature">Feature</NavLink>                    
                                <NavLink to="#trade">How To Exchange</NavLink>                    
                                <NavLink to="#testimonial">Testimonial</NavLink>                    
                                <NavLink to="#faq">FAQ</NavLink>                    
                            </Nav>
                           
        </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default RootLayout