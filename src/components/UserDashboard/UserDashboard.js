import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaQuestion, FaPhone, FaLock } from 'react-icons/fa';
import UserDashForm from './UserDashForm';
import './UserDashboard.css';


const links = [
  {
    label: 'Trade History',
  },
  {
    label: 'Recent Trade Partners',
  },
  {
    label: 'My Offers',
  },
  {
    label: 'Favorite Offers',
  },
  {
    label: 'Trade Statistic',

  },
  {
    label: 'Invite a Friend',
  },
  {
    label: 'Account Setting',
  },
];

const LinkItem = ({ label, icon, onClick, isSelected }) => {
  return (
    <p
      className={`link ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </p>
  );
};

const UserDashboard = () => {
  const [selectedContent, setSelectedContent] = useState('Trade History');
  const [leftCardLabel, setLeftCardLabel] = useState('Trade History');

  useEffect(() => {
    handleLinkClick('Trade History');
  }, []);

  const handleLinkClick = (label) => {
    setSelectedContent(label);

    const selectedLink = links.find(link => link.label === label);
    setLeftCardLabel(selectedLink ? selectedLink.label : 'Ezien');
  };

  return (
    <div className="dash">
      <Container>
        <Row>
          <Col xs={4}>
            <div className="smaller-div">
              <h4>{leftCardLabel}</h4>
            </div>
          </Col>
          <Col xs={8}>
            <div className="larger-div">
              <div className="card-item account-level-card">
                <div>
                  <h4>Account Level: 1</h4>
                  <p>Account Limit: 1150000 NGN</p>
                </div>
                <div className="icon"><FaQuestion /></div>
              </div>

              <div className="card-item phone-number-card">
                <div>
                  <div className="icon"><FaPhone /></div>
                </div>
                <div>
                  <h4>Phone Number Not Verified</h4>
                  <p>Take a minute to verify your number</p>
                  <p className="card-content">
                    <a href="/">Verify Me</a>
                  </p>
                </div>
              </div>

              <div className="card-item two-factor-auth-card">
                <div className="icon"><FaLock /></div>
                <div>
                  <h4>2FA Not Enabled</h4>
                  <p>Enabling two-factor authentication is a great way to secure your account.</p>
                  <p className="card-content">
                    <a href="/">Setup 2FA Now</a>
                  </p>
                </div>
              </div>
              
            </div>
          </Col>

        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className="view-container">
              <div className="small-child">
                <div>
                  {links.map((link, index) => (
                    <LinkItem
                      key={index}
                      label={link.label}
                      icon={link.icon}
                      onClick={handleLinkClick}
                      isSelected={selectedContent === link.label}
                    />
                  ))}

                </div>
              </div>
              <div className={`bigger-child ${selectedContent}`}>
                {selectedContent === 'Trade History' ? (
                  <div className='housing'>
                    <p className='housing-info'>You are viewing all trades for the last 4 days</p>
                    <p className='housing-info'>Filters</p>
                    <p className='housing-info'>Completed Trades: 0% (trades out of 0)</p>
                  </div>
                ) : selectedContent === 'Recent Trade Partners' ? (
                  <p>Content for Recent Trade Partners</p>
                ) : selectedContent === 'My Offers' ? (
                  <>
                    <div className='offers'>
                      <div>
                        <p>Offer to Sell</p>
                      </div>
                      <div>
                        <p>Offer to Buy</p>
                      </div>
                    </div>
                    <div className='housing'>
                      <p>Create New Offers</p>
                    </div>
                  </>
                ) : selectedContent === 'Favorite Offers' ? (
                  <>
                    <div className='offers'>
                      <div>
                        <p>Sell cryptocurrency</p>
                      </div>
                      <div>
                        <p>Buy cryptocurrency</p>
                      </div>
                    </div>
                  </>
                ) : selectedContent === 'Trade Statistic' ? (
                  <div>
                    <div>
                      <h4>Balance</h4>
                      <div className='housing-info'>
                        <h5>0 BTC</h5>
                        <p>Monthly traded Bitcoin in total</p>
                        <p>0 BTC were sold and bought
                          in the previous month (October)</p>
                        <h5>0 USDT</h5>
                        <p>Monthly traded Tether in total</p>
                        <p>0 USDT were sold and bought
                          in the previous month (October)</p>
                        <h5>0 ETH</h5>
                        <p>Monthly traded Ethereum in total</p>
                        <p>0 ETH were sold and bought
                          in the previous month (October)</p>
                        <h5>0 USDC</h5>
                        <p>Monthly traded USD Coin in total</p>
                        <p>0 USDC were sold and bought
                          in the previous month (October)</p>
                      </div>
                    </div>
                    <div>
                      <h4>Trades</h4>
                      <div className='housing-info'>
                        <div className='offers'>
                          <div>
                            <p>Monthly successful trades</p>
                            <h5>0 successful BTC trades</h5>
                            <h5>0 successful USDT trades</h5>
                            <h5>0 successful ETH trades</h5>
                            <h5>0 successful USDC trades</h5>
                            <p>in the previous month (October)</p>
                          </div>
                          <div>
                            <p>Monthly total</p>
                            <h5>0 USD</h5>
                            <p>0 USD were sold and bought
                              in the previous month (October)</p>
                          </div>
                          <div>
                            <p>Monthly closing ratio</p>
                            <h5>No trades</h5>
                            <p>No trades
                              in the previous month (October</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                ) : selectedContent === 'Invite a Friend' ? (
                  <div>
                    <div className='housing'>
                      <div>
                        <h3 className='text'>Invite friends to join Ezien.</h3>
                        <div>
                          <h3>Referral Link</h3>
                          <p>Your referral link</p>
                          <p>Anyone who uses this link will become your referral on Ezien</p>
                          <div>
                            <p>Share your link on social media</p>
                            <div>
                              <ul className="ul-kk">
                                <li>FB</li>
                                <li>X</li>
                                <li>in</li>
                                <li>ins</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedContent === 'Account Setting' ? (
                  <div>
                    <h3>Account settings</h3>
                    <UserDashForm />
                    <div>
                      <p>Preferred Currency</p>
                      <p>Bio</p>
                      <input type="text" />
                    </div>
                  </div>
                ) : selectedContent === 'Other Option' ? (
                  <p>Content for Other Option</p>
                ) : (
                  'Bigger Child'
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;


