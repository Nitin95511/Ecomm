import React from 'react'
import './Fotter.css'
import fotter_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Fotter = () => {
  return (
    <div className='main'>
    <div className='fotter'>
        <div className="fotter-logo">
            <img src={fotter_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="fotter-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="fotter-social-icon">
            <div className="fotter-icon-container">
                <img src={instagram_icon} alt="" />    
            </div>
            <div className="fotter-icon-container">
                <img src={pintester_icon} alt="" />    
            </div>
            <div className="fotter-icon-container">
                <img src={whatsapp_icon} alt="" />    
            </div>
        </div>
        <div className="fotter-copyright">
            <hr />
           <p>Copyright @2023 - All Right Reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Fotter