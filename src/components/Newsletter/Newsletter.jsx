import React from 'react'
import './Newletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>
       <h1>GET EXCLUSIVE OFFERS ON YUOR MAIL</h1>
       <p>Subscribe to our Newletter and Stay Updated</p>
       <div>
        <input type="email"  placeholder='Enter your Email'/>
        <button>SUBSCRIBE</button>
       </div>
       
    </div>
  )
}

export default Newsletter