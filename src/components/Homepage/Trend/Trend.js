import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Convenient, Easily, Instant, Safe } from '../../../asset/image/Images';

import './Trend.css';

const Trend = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleButton = () => {
    setShowMore(!showMore);
  };
  return (
    <section id='trend'>
      <div className='custom-cardt'>
        <div className='heading'>
          <h3 className='text'>Market Trend</h3>
          <span className='line'></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vitae odio laboriosam exercitationem quos eum!</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <p className='e'>Name</p>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <p className='e'>Last Price</p>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <p className='e'>24h Change</p>           
            </Col>
            <Col xs={12} sm={6} md={3}>
              <p className='e'>Markets</p>
            </Col>
          </Row>
        </Container>
        <div className="text-center btn-container">
      <button
        className={`form-btn`}
        onClick={toggleButton}
      >
        {showMore ? 'Show Less Markets' : 'View More Markets'}
      </button>
    </div>
      </div>

      {/* second content  */}
      <div className='custom-cardt2'>
        <div className='heading'>
          <h3 className='text'>Cash-In On Crypto Today</h3>
          <span className='line'></span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vitae odio laboriosam exercitationem quos eum!</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3} className="text-center">
              <div>
                <img src={Easily} alt="" className='logo1' />
              </div>
              <div>
                <h4>Purchase Easily</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore natus quidem.</p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center">
              <div>
                <img src={Instant} alt="" className='logo2' />
              </div>
              <div>
                <h4>Instant</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore natus quidem.</p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center">
              <div>
                <img src={Safe} alt="" className='logo1' />
              </div>
              <div>
                <h4>Safe & Secure</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore natus quidem.</p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center">
              <div>
                <img src={Convenient} alt="" className='logo3' />
              </div>
              <div>
                <h4>Convenient</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore natus quidem.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Trend