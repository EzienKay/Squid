import { useState } from "react";
import "./createoffer.css";
import {Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap"



const CreateOffer = () => {
    const [activeTab, setActiveTab] = useState("Dollar");
  
    const onOptionChange = (e) => {
      setActiveTab(e.target.value);
    };

  const openCurrency = (currencyType) => {
    setActiveTab(currencyType);
  }; 
    

  return (
    <div className="cr8tofa">
        <Container className="cr8toffacontain" >
            <Row>
                <Col sm={8} className="cr8toffagrid" >
                    <div>
                        <div className="cr8toffa" >
                            <h1>Create an Offer to Sell Currency</h1>
                            <div className="cr8tmtd" > 
                                <div className="cr8tpymt" >                                
                                    <span className="cr8tspan" > </span>
                                    <div>
                                        Payment Method
                                    </div>
                                </div>
                                <div className="cr8tdash" ></div>
                                <div className="cr8tpymt" >                                
                                    <span className="cr8tspan cr8tjkt" > </span>
                                    <div>
                                        Pricing
                                    </div>
                                </div>
                                <div className="cr8tdash" ></div>
                                <div className="cr8tpymt" >                                
                                    <span className="cr8tspan cr8tjkt" > </span>
                                    <div>
                                        Other Settings
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="corencyopt" >
                            <div>
                                <h3>Choose your currency</h3>
                                <div className="tab">
                                    <button className={activeTab === "Dollar" ? "tablinks active" : "tablinks"} onClick={() => openCurrency("Dollar")}>
                                    <span > <img src="https://cdn-icons-png.flaticon.com/128/10308/10308618.png?ga=GA1.1.1573563758.1694015872&track=ais" alt="Dollar" class="cr8timg"/>
                                        Dollar
                                    </span>
                                    </button>
                                    <button className={activeTab === "Euro" ? "tablinks active" : "tablinks"} onClick={() => openCurrency("Euro")}>
                                    <span> <img src="https://cdn-icons-png.flaticon.com/128/10452/10452701.png?ga=GA1.1.1573563758.1694015872&track=ais" alt="Euro" class="cr8timg"/>
                                        Euro 
                                    </span>
                                    </button>
                                    <button className={activeTab === "Pound" ? "tablinks active" : "tablinks"} onClick={() => openCurrency("Pound")}>
                                    <span> <img src="https://cdn-icons-png.flaticon.com/128/182/182924.png?ga=GA1.1.1573563758.1694015872&track=ais" alt="Pound" class="cr8timg"/>
                                        Pound
                                    </span>
                                    </button>
                                </div>
                                <h3 className="tab-h3" >What would you like to do?</h3>
                                
                                <div id="Dollar" className={activeTab === "Dollar" ? "tabcontent" : "hide"}>
                                    <input
                                        type="radio"
                                        name="activeTab"
                                        value="Dollar"
                                        id="dollar"
                                        checked={activeTab === "Dollar"}
                                        onChange={onOptionChange}
                                    />
                                        <label className="cr8tlabel" htmlFor="dollar">Sell {activeTab} <div>Your offer will be listed on the Buy {activeTab} page</div></label>
                                </div>

                                <div id="Euro" className={activeTab === "Euro" ? "tabcontent" : "hide"}>
                                    <input
                                        type="radio"
                                        name="activeTab"
                                        value="Euro"
                                        id="euro"
                                        checked={activeTab === "Euro"}
                                        onChange={onOptionChange}
                                    />
                                        <label className="cr8tlabel" htmlFor="euro">Sell {activeTab} <div>Your offer will be listed on the Buy {activeTab} page</div></label>                                        
                                </div>

                                <div id="Pound" className={activeTab === "Pound" ? "tabcontent" : "hide"}>
                                    <input
                                        type="radio"
                                        name="activeTab"
                                        value="Pound"
                                        id="pound"
                                        checked={activeTab === "Pound"}
                                        onChange={onOptionChange}
                                    />
                                        <label className="cr8tlabel" htmlFor="pound">Sell {activeTab} <div>Your offer will be listed on the Buy {activeTab} page</div> </label>
                                </div>
                            </div>                           
                            <h2>Payment Method</h2>
                            <Col sm={12} xxl={8}>
                                <div className="font-weight-semibold mb-2 label-md">Select Payment Method</div>
                                <div className="d-flex align-items-center justify-content-between form-control bg-white">
                                    <span className="ml-2">
                                        <div className="ml-2">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="text-gray-500"
                                        >
                                            <g clipPath="url(#search_svg__clip0)">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.6 11.2a7 7 0 10-1.4 1.4.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093zM12 7A5 5 0 112 7a5 5 0 0110 0z"
                                                clipRule="evenodd"
                                            />
                                            </g>
                                            <defs>
                                            <clipPath id="search_svg__clip0">
                                                <path d="M0 0h16v16H0V0z"></path>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        </div>
                                    </span>
                                    <input
                                        placeholder="Start typing..."
                                        type="text"
                                        className="min-width-0 border-transparent py-0 py-0 bg-white cursor-pointer form-control"
                                        value=""
                                    />                                     
                                    <DropdownButton
                                        align="end"
                                        title="Show all"
                                        id="dropdown-menu-align-end"
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>      
                                    </DropdownButton>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="cr8tside2" >
                        <h2>About This Step</h2>
                        <div>Start creating your offer by selecting the currency you want to trade, whether or not you want to buy or sell, and the payment method you want to use.</div>
                        <a className="form-btn cr8toffasingup" variant="primary" href="/" >Sign Up</a>
                        <div class="text-center py-2">To proceed, please create an account</div>
                    </div>
                </Col>
            </Row>           
        </Container>      
        
    </div>
  )
}

export default CreateOffer

