import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="foot">
        <div className="foot-top">
            <Container>
                <Row>
                    <Col sm>
                        <div>
                            <h2>Squid</h2>
                            <p>Squid is a complete peer-to-peer exchange platform to buy or sell Money.</p>
                            <ul className="ul-kk">
                                <li>FB</li>
                                <li>X</li>
                                <li>in</li>
                                <li>ins</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm>
                        <div>
                            <h2>Features</h2>
                            <ul className="ul-feature-kk">
                                <li>News</li>
                                <li>Trending</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm>
                        <div>
                            <h2>Services</h2>
                            <ul className="ul-service-kk">
                                <li>About Us</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm>
                        <div>
                            <h2>Newsletter</h2>
                            <p>Subscribe to our weekly newsletter and receive updates via email</p>
                            <div className="email-container-kk">
                                <form className="footer-form-kk" action="">
                                    <input type="email" placeholder="Email.." name="email" id="" />
                                    {/* <button type="submit"></button> */}
                                    {/* <input type="text" placeholder="Search.." name="search"> */}
                                    <button type="submit"><i class="fa fa-send" style={{color:"#ffffff"}}></i></button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
        <div className="foot-bottom">
            <p>© Copyright 2023 Squid All rights reserved.</p>
        </div>       
    </footer>
  )
}

export default Footer