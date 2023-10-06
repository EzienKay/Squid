import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Power,
  Security,
  Kyc,
  System,
  Swap,
  Dispute,
  Trader,
  Admin,
  Support,
} from '../../../asset/image/Images';
import './Feature.css';

const featureData = [
  {
    image: Power,
    title: 'Powerful Matching Engine',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Security,
    title: 'Multi-Layer Security',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Kyc,
    title: 'Instant KYC And AML Verifications',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: System,
    title: 'Escrow System',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Swap,
    title: 'Atomic Swap',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Dispute,
    title: 'Dispute Management',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Trader,
    title: 'Preferred Trader Selection',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Admin,
    title: 'Admin Panel',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
  {
    image: Support,
    title: 'DMulti-Language Support',
    label:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam doloremque autem ex porro adipisci ab a at',
  },
];

const Features = () => {
  return (
    <section id='feature' className='custom-card'>
      <div className='heading'>
      <h3 className='text'>P2p Cryptocurrency Exchange Features</h3>
      <span className='line'></span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vitae
        odio laboriosam exercitationem quos eum!
      </p>
      </div>
      <Container>
      <Row className="justify-content-center">
        {featureData.map((feature, index) => (
          <Col xs={12} md={4} key={index} className="mb-3">
            <Card >
              <img src={feature.image} alt="logo" className='logo' />
              <Card.Body>
                <h4>{feature.title}</h4>
                <p>{feature.label}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
};

export default Features;
