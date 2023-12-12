import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../Context/ShopContext'
import remove_Icon from '../Assets/cart_cross_icon.png'
//import all_products from '../Assets/all_product'

const Cartitem = () => {
    const {all_products,Cartitem,removeFromCart}=useContext(ShopContext)
    if (!all_products) {
        return null; // or display a loading state, error message, etc.
      }
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
        {all_products.map((e)=>{
             if (e) {
                console.log("e.id:", e.id);
                console.log("Cartitems[e.id]:", Cartitem[e.id]);
             if (e && e.id && Cartitem[e.id] > 0)
            {
                return ( <div  >
                    
                    <div className="cartitems-format">
                <img src={e.image} alt=""  className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-qauntity'>{Cartitem[e.id]}</button>
                <p>{e.new_price*Cartitem[e.id]}</p>
                    <img src={remove_Icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr/>
            </div>
         );
         }
        }
        return null
        })}
    </div>
  )
}

export default Cartitem 