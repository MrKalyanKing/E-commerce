/*import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../Context/ShopContext'
import remove_Icon from '../Assets/cart_cross_icon.png'
//import all_products from '../Assets/all_product'

const Cartitem = () => {
    const {all_products,CartItem,removeFromCart}=useContext(ShopContext)
    //const Cartitem=[];
   
  return (
    <div className='Cartitem'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qauntity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div>
            <div className="cartitems-format">
                <img src="" alt=""  className='carticon-product-icon'/>
                <p></p>
                <p></p>
                <button className='cartitems-qauntity'></button>
                <p></p>
                    <img src={remove_Icon} onClick={()=>{removeFromCart()}} alt="" />
            </div>
            <hr/>
        </div>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Qauntity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_products && all_products.map((product)=>{
            const qauntity=CartItem[product.id];
              if(qauntity>0)
            {
                return ( 
                <div  >
                    
                    <div className="cartitems-format">
                <img src={product.image} alt=""  className='carticon-product-icon'/>
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-qauntity'>{Cartitem[product.id]}</button>
                <p>{product.new_price*Cartitem[product.id]}</p>
                    <img src={remove_Icon} onClick={()=>{removeFromCart(product.id)}} alt="" />
            </div>
            <hr/>
            </div>
         );
                }      
        return null;
})}
    </div>
  )
}

export default Cartitem */
import React, { useContext } from 'react';
import './Cartitem.css';
import { ShopContext } from '../Context/ShopContext';
import remove_Icon from '../Assets/cart_cross_icon.png';

const Cartitem = () => {
  const {getTotalCartAmount, all_products, CartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='Cartitem'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products && all_products.map((product) => {
        const quantity = CartItem[product.id];

        if (quantity > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={product.image} alt="" className='carticon-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cartitems-quantity'>{CartItem[product.id]}</button>
                <p>${product.new_price * CartItem[product.id]}</p>
                <img className="Cartitem-remove-icon"
                  src={remove_Icon}
                  onClick={() => { removeFromCart(product.id) }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
        <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
              </div>
                <button className='cartitems-total-btn'>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cartitems-promocode">
                <p>If you have a promo code,Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
              </div>
      </div>

    </div>
  );
};

export default Cartitem;
