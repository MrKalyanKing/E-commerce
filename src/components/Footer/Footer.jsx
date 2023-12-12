import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div>
            <ul className="Footer-links">
                <li>Compnay</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="Footer-social-icon">
                <div className="Footer-icon-container">
                    <img src={ instagram_logo} alt="" />
                   
                </div>
                <div className="Footer-icon-container">
                    <img src={ pintrest_icon} alt="" />
                   
                </div>
                <div className="Footer-icon-container">
                    <img src={whatsapp_logo} alt="" />
                   
                </div>
            </div>
        </div>
        <div className="Footer-copyright">
            <hr/>
            <p>Copyright @ 2023 Allrights Deserve</p>
        </div>
    </div>
  )
}

export default Footer