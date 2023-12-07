import { useState } from "react";
import { Container } from "react-bootstrap";
import "./wallet.css";
import {Transaction, TransactionsList} from "./TransactionsList";

const Walletlogin = () => {
  const [activeTab, setActiveTab] = useState("Balance");

  const openCurrency = (currencyType) => {
    setActiveTab(currencyType);
  };

  return (
    <>
      <Container className="wallet-login mb-5">
        <div className="wallet-login-tab">
          <button
            className={activeTab === "Balance" ? "tablinks active" : "tablinks"}
            onClick={() => openCurrency("Balance")}
          >
            <span>Balance</span>
          </button>
          <button
            className={
              activeTab === "Transaction" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCurrency("Transaction")}
          >
            <span>Transaction</span>
          </button>
          <button
            className={activeTab === "Address" ? "tablinks active" : "tablinks"}
            onClick={() => openCurrency("Address")}
          >
            <span>Address</span>
          </button>
          <button
            className={activeTab === "Convert" ? "tablinks active" : "tablinks"}
            onClick={() => openCurrency("Convert")}
          >
            <span>Convert</span>
          </button>
        </div>
        <div
          id="Balance"
          className={activeTab === "Balance" ? "tabcontent" : "hide"}
        >
          <div className="mb-4 row">
            <div className="col-4 d-flex">
              <div className="debit-card mb-4 card">
                <div className="d-flex flex-column h-100">
                  <div className="d-block">
                    <div className="d-flex position-relative">
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img
                            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                            alt="master"
                            className="master"
                          />
                          <div className="text-white fs-5">Balance</div>
                        </div>
                        <div>
                          <div className="position-absolute fs-2 text-gray-950 text-white fw-bold  end-0 ">
                            {" "}
                            &#x20A6;35,000.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto fw-bold d-flex align-items-center justify-content-between">
                    <p className="m-0">Oluwashola JOHNSON</p>
                    <p className="m-0">05/23</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 d-flex flex-column card-2">
              <div className="debit-card mb-1 card">
                <div className="d-flex flex-column h-100">
                  <div className="d-block">
                    <div className=" position-relative">
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img
                            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                            alt="master"
                            className="master"
                          />
                          <div className="text-white fs-5 ">Balance</div>
                        </div>

                        <div className="h5 text-gray-950 text-white mt-2 text-end">
                          {" "}
                          $106.89
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="debit-card card-3 mb-0 card">
                <div className="d-flex flex-column h-100">
                  <div className="d-block">
                    <div className=" position-relative">
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <img
                            src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                            alt="master"
                            className="master"
                          />
                          <div className="text-white fs-5">Balance</div>
                        </div>

                        <div className="h5 text-gray-950 text-white mt-2 text-end">
                          {" "}
                          &euro;233.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div>{/* Content for col-8 */}</div>
            </div>
          </div>


          <div className="p-4 mb-4 rounded-lg border-0 bg-white">
        <h3 className="mb-4">Latest transactions</h3>


          <TransactionsList />
        </div>

        </div>

        <div
          id="Transaction"
          className={activeTab === "Transaction" ? "tabcontent" : "hide"}
        >

          
          <Transaction />



          <h3 className="mb-4 mt-6">Finished transactions</h3>

          <TransactionsList />

        </div>

        <div
          id="Address"
          className={activeTab === "Address" ? "tabcontent" : "hide"}
        >
          <h3>just to see</h3>
        </div>
        <div
          id="Convert"
          className={activeTab === "Convert" ? "tabcontent" : "hide"}
        >
          <h3>just to see</h3>
        </div>
      </Container>
     
    </>
  );
};

export default Walletlogin;
