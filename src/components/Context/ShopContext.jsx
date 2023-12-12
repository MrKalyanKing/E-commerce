import React, { createContext, useState } from "react";
import all_products from '../Assets/all_product'

export const ShopContext=createContext(null);

    
    const getdefaulterCart=()=>{
      let Cart={};
      for(let index=0;index< all_products.length+1;index++){
        Cart[index]=0;
      }
      return Cart
    }
    const ShopContextProvider=(props)=>{
      const [CartItem,setCartItems]=useState(getdefaulterCart());
    

    const addTocart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log("added item",CartItem);

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const ContextValue={all_products,CartItem,addTocart,removeFromCart};
    
    return(
          <ShopContext.Provider value={ContextValue}>
            {props.children}
          </ShopContext.Provider>
    )

} 
export default ShopContextProvider