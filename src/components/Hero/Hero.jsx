import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import heroo_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div className='hero-handicon'>
                <h2>new</h2>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections </p>
            <p>For Everyone</p>
        </div>
        <div className="hero-lastest-btn">
            <div>Lastest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        <div className="hero-right">
            <img src={heroo_image} alt="" />
        </div>
    </div>
    
  )
}

export default Hero

