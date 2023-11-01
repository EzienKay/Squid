import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import taw from "./HomeImage/taw-img.png";
import Filter from "./Filter";
import Trend from "../Trend/Trend";
import Features from "../Feature/Feature";
import Trade from "../Trade/Trade";
import Testimonial from "../Testimonial/Testimonial";
import FAQ from "../FAQ/FAQ";




const Home = () => {
  return (
    <div id="home" className="home" >      
        <div className="home-banner">
            <Container>
                <Row>
                    <Col className="home-col1" >
                        <h1 className="home-title">Fast, Secure Money Exchange</h1>
                        <p className="home-content">Most Popular Peer To Peer Money Exchange Platform.</p>
                        <Button className="form-btn reg-btn" variant="primary">register</Button>
                    </Col>                
                    <Filter />
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
        <Trend />
        <Features />
        <Trade />    
        <Testimonial />
        <FAQ />    
    </div>    
  )
}

export default Home