import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'


const ProductDisplay = (props) => {
  const {product}=props;
   const {addTocart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
       <div className="productdisplau-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img"src={product.image} alt="" />
        </div>
       </div>
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
           <div className="productdisplay-right-prices">
            <div className="productdisplay-right-old-price">${product.old_price}</div>
            <div className="productdisplay-right-new-price">${product.new_price}</div>
           </div>
            <div className="productdisplay-right-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit sint perspiciatis magnam sequi reprehenderit, mollitia, voluptates quo nulla quis vitae quia 
              tempore corrupti tenetur, vel itaque doloremque non reiciendis in.
            </div>
            <div className="productdisplay-right-size">
              <h1>select Size</h1>
               <div className="productdisplay-right-size">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
               </div>
            </div>
            <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-categoty"><span>Category:</span>Women,T-Shirt,Crop top</p>
            <p className="productdisplay-right-categoty"><span>Tags:</span>Modern,Latest</p>
       </div>
    </div>
  )
}

export default ProductDisplay