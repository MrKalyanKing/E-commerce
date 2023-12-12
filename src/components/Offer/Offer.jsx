import React from 'react'
import './Offer.css'
import offer_img from '../Assets/exclusive_image.png'
import arrow_img from '../Assets/arrow.png'

const Offer = () => {
  return (
    <div className="Offer">
    <div className='Ex-offer-left'>
        <h1>Exclusive </h1>
        <h1>Offers For You</h1>
        <p>ONLY FROM BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        <img src={arrow_img} alt="" />
    </div>
      <div className="offer-right">
        <img src={offer_img} alt="" />
        
      </div>

    </div>
  )
}

export default Offer