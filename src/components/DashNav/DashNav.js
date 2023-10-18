import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap"
import Filter from "../Homepage/Home/Filter"
import "./dashnav.css";
import ezienlogo1 from "../../asset/ezienlogo1.png";
import BuySell from "../BuySell/BuySell";


const DashNav = () => {
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

    const sellOptions = [
        {
            title: "Sell Dollar",
            para: "Search for offers to Sell Dollar", 
            sellLink: "#/action-1"           
        },
        {
            title: "Sell Euro",
            para: "Search for offers to Sell Euro", 
            sellLink: "#/action-2"   
        },
        {
            title: "Sell Pound",
            para: "Search for offers to Sell Pound",
            sellLink: "#/action-3"    
        }
    ]


  return (
    <>
        <div className="dash-nav">            
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="nav-logo" href="#home"> <img className="logo-img" src={ezienlogo1} alt="Ezien logo" /> </Navbar.Brand>
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
                                                { sellOptions.map((sellOption, index) =>(
                                                    <Dropdown.Item href={sellOption.sellLink} key={index}>
                                                        <h6>{sellOption.title}</h6>
                                                        <p>{sellOption.para}</p>
                                                    </Dropdown.Item>
                                                ))}                                       
                                            </Dropdown.Menu>                                    
                                    </Dropdown>
                                </div>  
                                <Nav.Link href=""> My Wallet</Nav.Link>                   
                                <Nav.Link href=""> Create an Offer</Nav.Link>                   
                            </Nav>
                            <Button variant="light">Sgin In</Button>
                        </Navbar.Collapse>                
                </Container>
            </Navbar>
            <div className="in-content" >
                <div className="filter-sidebar">
                    <Filter />                
                </div>
                <div className="buysell-kay">
                    <BuySell />
                </div>
            </div>
        </div>    
    </>
  )
}

export default DashNav