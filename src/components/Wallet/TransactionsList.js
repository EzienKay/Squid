//import { Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "./transactionlist.css";
import { useState } from "react";




const TransactionsList = () => {
  return (
    <>
      
        <div>
          <div className="px-2_5 px-sm-3 aL1ZZ px-2_5 px-sm-3 mb-2">
            <div className="label-sm text-gray-700 text-truncate">
              TRANSACTION
            </div>
            <div className="label-sm text-gray-700 text-truncate">DETAILS</div>
            <div className="label-sm text-gray-700 text-truncate">STATUS</div>
            <div className="label-sm text-gray-700 text-RIGHT">AMOUNT</div>
          </div>
          {Array(5).fill().map((transaction, i) => (
            <div key={i}
          className="my-2 px-2_5 px-sm-3 aL1ZZ bg-white p-2_5 p-sm-3 cursor-pointer rounded ijs1u"
          data-recording-disable="true"
        >
          <div className="d-flex align-items-center text-truncate">
            <div className="text-blue-700 rounded-circle bg-blue-100 d-flex align-items-center justify-content-center position-relative mr-2 icon-32">
              <img
                src="https://cdn-icons-png.flaticon.com/128/10308/10308618.png?ga=GA1.1.1573563758.1694015872&track=ais"
                alt="Dollar"
                className="position-absolute cCDwo d-JFU"
              />
            </div>
            <div className="text-truncate">
              <div className="mb-1 font-weight-semibold regular-20 text-truncate">
                Sent Out
              </div>
              <div className="regular-18 text-gray-700 text-truncate">
                Oct 14, 2021, 10:27 AM
              </div>
            </div>
          </div>
          <div className="text-truncate">
            Sent to 32MvjicwWTGnNX9AaqcSh2aw7ZN6Fj3uyz in transaction{" "}
            <a
              href="https://blockstream.info/tx/d041306ec5b806470b08b81aaeac854c565626f5d43bafb68943b3a60dcac0c1"
              target="_blank"
              rel="noreferrer"
            >
              d041306ec5b806470b08b81aaeac854c565626f5d43bafb68943b3a60dcac0c1{i}
            </a>
            .
          </div>
          <div>
            <span className="tag tag--md tag-success">
              <span className="text-truncate LYHm5">
                Completed
              </span>
            </span>
          </div>
          <div className="text-right">
            <div className="mb-1 font-weight-semibold regular-20">
              <span className=" d-inline-block mx-1">- 0.00049{i}</span>
              <span className="text-break d-inline-block">USD</span>
            </div>
          </div>
        </div>
          ))}
          
        </div>
      
    </>
  );
};





const Transaction = () => {


  const buyOptions = [
    {
        title: "Buy Dollar",
        BuyLink: "#/action-1", 
        img: "https://cdn-icons-png.flaticon.com/128/10308/10308618.png?ga=GA1.1.1573563758.1694015872&track=ais" ,
        alt: "Dollar"          
    },
    {
        title: "Buy Euro",
        BuyLink: "#/action-2", 
        img: "https://cdn-icons-png.flaticon.com/128/10452/10452701.png?ga=GA1.1.1573563758.1694015872&track=ais",
        alt: "Euro" 
    },
    {
        title: "Buy Pound",
        BuyLink: "#/action-3",
        img: "https://cdn-icons-png.flaticon.com/128/182/182924.png?ga=GA1.1.1573563758.1694015872&track=ais",
        alt: "Pound"    
    }
] 


const [selectedOption, setSelectedOption] = useState(buyOptions[0].title); // Set default option to the first option

  const handleSelect = (option) => {
    setSelectedOption(option.title); // Update selected option upon selection
    // You can perform any action upon selecting an option here
  };
  
 return ( 
 
 <div className="mb-5">
 

<Dropdown className="transact-option ">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="rounded">
                                            {selectedOption}
                                            </Dropdown.Toggle>                                    
                                                <Dropdown.Menu >
                                                    { buyOptions.map((buyOption, index) =>(
                                                        <Dropdown.Item href={buyOption.BuyLink} key={index} onClick={() => handleSelect(buyOption)}>
                                                           <img src={buyOption.img} alt={buyOption.alt} className="icon-24 mr-2" />
                                                            <div>{buyOption.title}</div>                                                            
                                                        </Dropdown.Item>
                                                    ))}                                       
                                                </Dropdown.Menu>                                    
                                        </Dropdown>


 </div>
) 

}

export {
  TransactionsList,
  Transaction,
}
