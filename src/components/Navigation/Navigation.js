import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import ezienlogo1 from "../../asset/ezienlogo4.png";
import { Outlet, useLocation } from "react-router";
import "./Navigation.css"
import { NavLink } from "react-router-dom";


const Navigation = () => {

    const buyOptions = [
        {
            title: "Buy Dollar",
            para: "Search for offers to Buy Dollar", 
            BuyLink: "#/action-1"           
        },
        {
            title: "Buy Euro",
            para: "Search for offers to Buy Euro", 
            BuyLink: "#/action-2"   
        },
        {
            title: "Buy Pound",
            para: "Search for offers to Buy Pound",
            BuyLink: "#/action-3"    
        }
    ]   
   

    const location = useLocation();
    // Check if the current location is the home page
    const isHomePage = location.pathname === '/';

  return (
    <>
        <header>
            {isHomePage && <Navbar fixed="top" expand="lg" className="first-nav bg-body-tertiary">
                    <Container>
                        <Navbar.Brand className="nav-logo" as={NavLink} to="/" end>                    
                            <img className="logo-img" src={ezienlogo1} alt="Ezien logo" />                   
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto kay-link"  defaultActiveKey="#home">
                                    <Nav.Link href="#home">Home</Nav.Link>                                    
                                    <Nav.Link href="#trend">Trend</Nav.Link>                    
                                    <Nav.Link href="#feature">Feature</Nav.Link>                    
                                    <Nav.Link href="#trade">How To Exchange</Nav.Link>                    
                                    <Nav.Link href="#testimonial">Testimonial</Nav.Link>                    
                                    <Nav.Link href="#faq">FAQ</Nav.Link>                    
                                </Nav>                           
                                    <Button variant="light">Sgin In</Button>                            
                            </Navbar.Collapse>                
                    </Container>
                            </Navbar> }


            {!isHomePage && <Navbar fixed="top" expand="lg"  className="second-nav bg-body-tertiary">
                    <Container>
                        <Navbar.Brand className="nav-logo" as={NavLink} to="/" end> <img className="logo-img" src={ezienlogo1} alt="Ezien logo" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto"  defaultActiveKey="#home"> 
                                    <div className="dropdown-div">                                                
                                        <Dropdown className="buy-dropdown">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Buy
                                            </Dropdown.Toggle>                                    
                                                <Dropdown.Menu >
                                                    { buyOptions.map((buyOption, index) =>(
                                                        <Dropdown.Item href={buyOption.BuyLink} key={index}>
                                                            <h6>{buyOption.title}</h6>
                                                            <p>{buyOption.para}</p>
                                                        </Dropdown.Item>
                                                    ))}                                       
                                                </Dropdown.Menu>                                    
                                        </Dropdown>
                                        <Dropdown className="sell-dropdown">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Sell
                                            </Dropdown.Toggle>                                    
                                                <Dropdown.Menu >
                                                    <Dropdown.Item>
                                                    <NavLink to="createoffer"  role="button" className="nav-link" tabindex="0">Create an Offer</NavLink>                                                                                           
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>                                                                                    
                                        </Dropdown>
                                    </div>
                                    <NavLink to="wallet"  role="button" className="nav-link" tabindex="0">not login Wallet</NavLink>
                                    <NavLink to="walletlogin"  role="button" className="nav-link" tabindex="0">login Wallet</NavLink>
                                </Nav>                           
                                <Button variant="light">Sign in</Button>
                            </Navbar.Collapse>                
                    </Container>                
                            </Navbar> }
        </header>  
        <main>
            <Outlet />
        </main>     
    </>
  )
}

export default Navigation