import React from 'react'
// import DashNav from '../DashNav/DashNav'
import { WomanWallet } from '../../asset/image/Images'
import './walletnotlogin.css';

const Walletnotlogin = () => {
  return (
    <div >
      <div className='notlogin'>
        <div className='notlogin-info'>
          <h3>Get your free, <br /> secure bitcoin <br /> wallet</h3>
          <p>A simple and safe way to buy, sell, send, <br /> and store your Bitcoin.</p>
          <button className="form-btn">Get your free bitcoin wallet</button>
        </div>
        <div>
          <img src={WomanWallet} alt="notlogintab" width='600'/>
        </div>
      </div>
    </div>
  )
}

export default Walletnotlogin