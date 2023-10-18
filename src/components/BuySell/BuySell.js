import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Hand, Credit, Wallet, Bank } from '../../asset/icon/Icon'
import './buysell.css';

const BuySell = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const buttons = [
    {
      label: 'Bank Transfer',
      icon: Bank,
      info: {
        name: 'Jesus',
        likes: 'likes',
        lastSeen: 'last seen',
        paymentMethod: 'Bank Transfer',
        tradeStatus: 'statues of trade',
        receiptRequired: 'Receipt required',
        tradeSpeed: '5 min',
        priceInfo: '1 USD = 1.4 USD of BTC',
        minSale: 'Min sale: 10,000 NGN',
        maxSale: 'Max sale: 40,000,000 NGN',
        button:'sell',
      },
    },
    {
      label: 'Online Wallet',
      icon: Wallet,
      info: {
        // Information for Online Wallet button
      },
    },
    {
      label: 'Debit/Credit Card',
      icon: Credit,
      info: {
        // Information for Debit/Credit Card button
      },
    },
  ];

  const handleColumnClick = (index) => {
    setActiveButtonIndex(index);
  };

  const activeButtonInfo = buttons[activeButtonIndex].info;

  return (                
        <div className='main-info'>
          <section className='item'>
            <div>
              <h2>Sell Bitcoin (BTC).</h2>
              <p>Receive payment for your Bitcoin directly into your bank account anywhere in the world.</p>
            </div>
            <div>
              <Row>
                {buttons.map((button, index) => (
                  <Col xs={12} md={4} key={index}>
                    <div>
                      <button
                        className={`label button${activeButtonIndex === index ? ' active' : ''}`}
                        onClick={() => handleColumnClick(index)}
                      >
                        <span>
                          {typeof button.icon === 'string' ? (
                            <img src={button.icon} alt={button.label} style={{ width: '10%' }} />
                          ) : (
                            <button.icon style={{ width: '100%' }} />
                          )}
                        </span>
                        <span style={{ fontSize: '1.0em', marginLeft: '0.2rem' }}>
                          {button.label}
                        </span>
                      </button>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          <section>
            <div className='filter'>
              <input type="checkbox" />
              <label htmlFor='vendor'>Vendors active in the last 10 min</label>
            </div>
            {activeButtonInfo && (
              <div className='sellers'>
                <div>
                  <div className='head'>
                    <p>Sell to</p>
                    <p>Get paid with</p>
                    <p>Avg. trade speed</p>
                    <p>Price per Bitcoin</p>
                  </div>
                  <div>
                    {/* <Card> */}
                      <div className='card-edt'>
                        <div className='card-info'>
                          <div>
                            <p>{activeButtonInfo.name}</p>
                            <p>{activeButtonInfo.likes}</p>
                          </div>
                          <div>
                            <p>{activeButtonInfo.paymentMethod}</p>
                            <p>{activeButtonInfo.tradeStatus}</p>
                          </div>
                          <div>
                            <p>{activeButtonInfo.tradeSpeed}</p>
                          </div>
                          <div>
                            <p>39,962,510 NGN</p>
                            <p>{activeButtonInfo.priceInfo}</p>
                          </div>
                        </div>
                        <div className='card-info'>
                          <div>
                            <p>{activeButtonInfo.lastSeen}</p>
                          </div>
                          <div>
                            <p>No third party</p>
                          </div>
                          <div>
                            <p>new offer</p>
                          </div>

                          <div className='card-in'>
                            <div className='card-text'>
                              <span className='small-text'>{activeButtonInfo.minSale}</span>
                              <span className='small-text'>{activeButtonInfo.maxSale}</span>
                            </div>
                            <button className='content-btn1' >{activeButtonInfo.button}</button>
                            {/* <button className='content-btn1'>sell</button> */} 
                          </div>
                        </div>
                      </div>
                    {/* </Card> */}

                  </div>
                </div>
              </div>
            )}
            <div className='table-btn'>
              <button className='content-btn'>Load More Offers</button>
              <button className='content-btn2'>Create an Offer</button>
            </div>
          </section>

          <div className='refer'>
            <div className='ref-logo'>
              <img src={Hand} alt="bithand" width={50} />
            </div>
            <div className='card-tex'>
              <div className='refer-text'>
                <p>Refer your friends</p>
                <p>Recommend Squid and get rewarded when your friends and family buy and sell Bitcoin. <br/> Sign up to start earning.Learn more </p>
              </div>
              <div>
              <button className='refer-btn1'>Get Started</button>
              </div>
            </div>
          </div>

          <section>
            <h3>Showing Offers Worldwide</h3>
            <div className='sellers'>
              <div>
                <div className='head'>
                  <p>Sell to</p>
                  <p>Get paid with</p>
                  <p>Avg. trade speed</p>
                  <p>Price per Bitcoin</p>
                </div>
                <div>
                  <Card>
                    <div>
                      <div className='card-info'>
                        <div>
                          <p>Paul</p>
                          <p>Numbers of likes</p>
                        </div>
                        <div>
                          <p>Other Bank Transfer</p>
                          <p>Fast payment assured</p>
                        </div>
                        <div>
                          <p>3 mins</p>
                        </div>
                        <div>
                          <p>39,962,510 NGN</p>
                          <p>1 USD = 1.4 USD of BTC</p>
                        </div>
                      </div>
                      <div className='card-info'>
                        <div>
                          <p>last seen</p>
                        </div>
                        <div>
                          <p>No third party</p>
                        </div>
                        <div>
                          <p>new offer</p>
                        </div>
                        <div className='card-in'>
                          <div className='card-text'>
                            <span className='small-text'>Min sale: 10,000 NGN</span>
                            <span className='small-text'>Max sale: 41,000,000 NGN</span>
                          </div>
                          <button className='content-btn1'>sell</button>
                        </div>
                      </div>
                    </div>
                  </Card>               
                </div>
              </div>
            </div>
            <div className='table-btn'>
              <button className='content-btn'>Load More Offers</button>
              <button className='content-btn2'>Create an Offer</button>
            </div>
          </section>         


          <section className='last-section'>
            <div className='last-content'>
              <h3>How to Sell Bitcoin on Squid</h3>
              <p>It’s now easy to sell Bitcoin as a Squid vendor. You have the freedom to set your own rates, and also the luxury of over 300 payment options to get paid for the Bitcoin you sell. As Paxful is a peer-to-peer marketplace, you can sell your Bitcoin directly to over 3 million users worldwide. Our platform makes it extremely easy for beginners and veterans alike to make a profit.</p>
              <p>To sell Bitcoin instantly,create a Squid account or og in to your existing one. Once logged in, just follow these steps:</p>
              <ol>
                <li><strong>Set your requirements:</strong> Choose your preferred payment method, maximum Bitcoin amount, location, and preferred currency. Click <strong>Search for Offers</strong> to see relevant offers.</li>
                <li><strong>Review offers:</strong> Before selecting an offer, check the buyer's information, including name, reputation, verification level, and rate per Bitcoin. Click <strong>Sell</strong> to review the offer terms.</li>
                <li><strong>Start the trade:</strong> If you're satisfied with the buyer's terms, enter the trade amount and click <strong>Sell Now</strong> This opens a live trade chat and secures your Bitcoin in escrow. Follow instructions carefully, and once you receive payment, release the Bitcoin.</li>
                <li><strong>Leave feedback:</strong> After a successful trade, provide feedback to build your reputation on our platform.</li>
              </ol>
              <p>For more information, watch our detailed video tutorial on how to sell Bitcoin quickly. You can also create an offer to sell Bitcoin by following our guide to creating an offer on Squid.</p>
            </div>

          </section>
        </div>
  );
};

export default BuySell;

