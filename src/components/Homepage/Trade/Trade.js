import React, { useState } from 'react';
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import {
  Pay,
  Get,
  Place2,
  Place,
  Get2,
  Exchange,
  Vicky,
  Rowling,
  Tucker,
  Twitter,
  Facebook,
  Linkedin,
} from '../../../asset/image/Images';
import './Trade.css';

const trades = [
  {
    image: Place,
    title: 'Place An Order',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Pay,
    title: 'Pay The Seller',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Get,
    title: 'Place An Order',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus obcaecati vitae neque cumque dolorem ut quos modi?',
  },
];

const tradex = [
  {
    numbering: 1,
    image: Place2,
    title: 'Place P2P Order',
    label: 'Make Exchange Make Exchange Make Exchange',
  },
  {
    numbering: 2,
    image: Exchange,
    title: 'Make Exchange',
    label: 'Make Exchange Make Exchange Make Exchange',
  },
  {
    numbering: 3,
    image: Get2,
    title: 'Get Crypto',
    label: 'Make Exchange Make Exchange Make Exchange',
  },
];

const Trade = () => {
  const [isBuyButtonClicked, setBuyButtonClicked] = useState(false);
  const [isSellButtonClicked, setSellButtonClicked] = useState(false);

  const handleBuyButtonClick = () => {
    setBuyButtonClicked(true);
    setSellButtonClicked(false);
  };

  const handleSellButtonClick = () => {
    setBuyButtonClicked(false);
    setSellButtonClicked(true);
  };


  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cardsData = [
    {
      name: 'VICKY SMITH',
      position: 'Leader',
      imageSrc: Vicky,
    },
    {
      name: 'ROWLING',
      position: 'Team',
      imageSrc: Rowling,
    },
    {
      name: 'TUCKER',
      position: 'Team Leader',
      imageSrc: Tucker,
    },
  ];

  return (
    <section className="custom-card1">
      <div className="heading1">
        <h3 className='text'>How P2p Work</h3>
        <span className='line'></span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          vitae odio laboriosam exercitationem quos eum!
        </p>
      </div>
      <div className="text-center mb-4"> {/* Add the mb-4 class */}
        <button
          onClick={handleBuyButtonClick}
          className={`btn-center ${isBuyButtonClicked ? 'btn-clicked' : ''}`}
        >
          Buy Crypto
        </button>
        <button
          onClick={handleSellButtonClick}
          className={`btn-center ${isSellButtonClicked ? 'btn-clicked' : ''}`}
        >
          Sell Crypto
        </button>
      </div>

      <Container>
        <Row>
          {trades.map((trades, index) => (
            <Col xs={12} md={4} key={index} className="mb-3 box1">
              <Card className="how1">
                <img src={trades.image} alt="logo" className='logo' />
                <Card.Body>
                  <h4>{trades.title}</h4>
                  <p>{trades.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* second content */}
      <div className="custom-card2">
        <div className="heading2">
          <h3 className='text'>How To Do Pexeer Trading</h3>
          <span className='line'></span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            vitae odio laboriosam exercitationem quos eum!
          </p>
        </div>
        <Container>
          <Row>
            {tradex.map((tradex, index) => (
              <Col xs={12} md={4} key={index} className="mb-3 box">
                <Card className="how2">
                  <span className='numbs'>{tradex.numbering}</span>
                  <img src={tradex.image} alt="logo" className="logo" />
                  <Card.Body>
                    <h4>{tradex.title}</h4>
                    <p>{tradex.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>



      {/* third content */}
      <div className="custom-card3">
        <div className="heading3">
          <h3 className='text'>Our Team</h3>
          <span className='line'></span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            vitae odio laboriosam exercitationem quos eum!
          </p>
        </div>

        <Container>
          <Row>
            {cardsData.map((card, index) => (
              <Col xs={12} md={4} className="mb-3" key={index}>
                <Card
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card.Body
                    className={`card-body-hovered ${hoveredCard === index ? 'image-hovered' : ''
                      }`}
                  >
                    <div className="image-container">
                      <Image
                        src={card.imageSrc}
                        roundedCircle
                        width="400px"
                        alt={`${card.name}'s Image`}
                      />
                      {hoveredCard === index && (
                        <div className="social-icons">
                          <a
                            href="https://www.instagram.com/"
                            className="social-link"
                          >
                            <img
                              src={Linkedin}
                              alt="LinkedIn"
                              className="social-image"
                            />
                          </a>
                          <a
                            href="https://twitter.com/"
                            className="social-link"
                          >
                            <img
                              src={Twitter}
                              alt="Twitter"
                              className="social-image"
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/"
                            className="social-link"
                          >
                            <img
                              src={Facebook}
                              alt="Facebook"
                              className="social-image"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                  <div className="heading3">
                    <h3>{card.name}</h3>
                    <p>{card.position}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>





      </div>
    </section>
  );
};
export default Trade;
