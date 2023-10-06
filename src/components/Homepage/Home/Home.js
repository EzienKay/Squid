import "./Home.css";
import { Button, Col, Container, Form, Nav, Navbar, Row, Tab, Tabs, } from "react-bootstrap";
import taw from "./HomeImage/taw-img.png";


const Home = () => {
  return (
    <div id="home">
        <header>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Squid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />                
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"  defaultActiveKey="#home">
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
            </Navbar>
        </header>
    <div className="home-banner">
        <Container>
            <Row>
                <Col className="home-col1" >
                    <h1 className="home-title">Fast, Secure Money Exchange</h1>
                    <p className="home-content">Most Popular Peer To Peer Money Exchange Platform.</p>
                    <Button className="form-btn" variant="primary">register</Button>
                </Col>
                <Col className="home-col2">
                    <Tabs variant="pills" defaultActiveKey="buy">
                        <Tab eventKey="buy" title="buy" className="buy-tab">

                            <Form action="" className="home-form" >
                                <Form.Label>Buy</Form.Label>
                                <Form.Select size="lg">
                                    <option>Dollar</option>
                                    <option>Euro</option>
                                    <option>Pounds</option>
                                </Form.Select>
                                <br />
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select size="lg">
                                    <option>Payment Method</option>
                                </Form.Select> 
                                <br />
                                <Form.Label>Choose Country</Form.Label>
                                <Form.Select size="lg">
                                    <option>Nigeria</option>
                                </Form.Select> 
                                <Button className="form-btn" variant="primary">find offer</Button>
                            </Form> 

                        </Tab> 
                        <Tab eventKey="sell" title="sell">                            
                            <Form action="" className="home-form" >
                                <Form.Label>Sell</Form.Label>
                                <Form.Select size="lg">
                                    <option>Dollar</option>
                                    <option>Euro</option>
                                    <option>Pounds</option>
                                </Form.Select>
                                <br />
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select size="lg">
                                    <option>Payment Method</option>
                                </Form.Select> 
                                <br />
                                <Form.Label>Choose Country</Form.Label>
                                <Form.Select size="lg">
                                    <option>Nigeria</option>
                                </Form.Select> 
                                <Button className="form-btn" variant="primary">find offer</Button>
                            </Form> 
                        </Tab>                                              
                    </Tabs>              
                    
                </Col>
            </Row>      
        </Container>
    </div> 

    <section className="TAW">
        <div className="caption" >                        
            <h2 className="testimonial-h">Exchange Anywhere</h2>
            <span className="devider"></span>
            <p className="testimonial-p" >Whether you're traveling the globe or conducting international business, our currency exchange platform ensure seamless transactions. With competitive rates and a hassle-free process, converting your money has never been more convenient. Trust us for reliable, swift, and secure currency exchange services that put the world's currencies at your fingertips."</p>
        </div> 
        <Container className="taw-container">
            <Row>
                <Col sm> 
                    <div>
                        <img src={taw} alt="exchange anywhere"  className="taw-img" />
                    </div>
                </Col>
                <Col sm className="col-box">
                    
                    <Row className="box-row">
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-apple"></i> 
                            <span className="box-span" >App Store</span>
                        </Col>
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-android"></i>
                            <span className="box-span" >Andriod APK</span>
                        </Col>
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-google-play"></i>
                            <span className="box-span" >Google Play</span>
                        </Col> 
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-windows"></i>
                            <span className="box-span" >Windows</span>
                        </Col>
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-linux"></i>
                            <span className="box-span" >Linux</span>
                        </Col>
                        <Col xs={6} md={4} className="box-taw">
                            <i class="fa fa-apple"></i>
                            <span className="box-span" >MacOS</span>
                        </Col>                       
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    </section>
    </div>    
  )
}

export default Home