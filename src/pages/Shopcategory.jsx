import React, { useContext } from 'react' 
import {ShopContext} from '../components/Context/ShopContext'
import drop_down_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';
//import all_products from '../components/Assets/all_product'
import './Css/Shopcategory.css'

const Shopcategory =(props)=>{
  const {all_products}=useContext(ShopContext);
  //console.log(all_products);
    // Check if all_products is undefined
    if (!all_products) {
      return <p>Loading...</p>; // You can replace this with your loading indicator or message
    }
  return (
    <div className='shopcategory'>
      <img className='shopcategorybanner' src={props.banner} alt="" />
    <div className="shopcategory-indexsort">
      <p>
        <span>Show 1 to 12</span> Out of 36
      </p>
      <div className="shopcategory-sort">
        Sort By <img src={drop_down_icon} alt="" />
      </div>
    </div>
         <div className="shopcategory-products">
          {all_products.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            
            else{
              return null;
            }
          })}
         </div>
         <div className="Shopcategory-loadmore">
                EXPLORE MORE
         </div>
    </div>
  )
}

export default Shopcategory