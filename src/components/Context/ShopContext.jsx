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
    /*const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in CartItem){
        const quantit = CartItem[item];
        if(quantit>0)
        {
          let itemInfo=all_products.find((product)=>product.id===Number(item))
          totalAmount+=itemInfo.new_price * quantit;
          console.log(totalAmount)
        }
        return totalAmount
      }
    }*/
    const getTotalCartAmount = () => {
      let totalAmount = 0;
    
      for (const item in CartItem) {
        const quantity = CartItem[item];
        console.log(quantity)
    
        if (quantity > 0) {
          let itemInfo = all_products.find((product) => product.id === Number(item));
          totalAmount += itemInfo.new_price * quantity;
        }
      }
    
      return totalAmount; // Move this line outside of the loop
    };
    const getTotalCArtitem=()=>{
      let totalItem=0;
      for(const item in CartItem){
        const quantity=CartItem[item];

        if(quantity>0)
        {
          totalItem+=quantity;
        }
      }
      return totalItem
    }
    const ContextValue={getTotalCArtitem,getTotalCartAmount,all_products,CartItem,addTocart,removeFromCart};
    
    return(
          <ShopContext.Provider value={ContextValue}>
            {props.children}
          </ShopContext.Provider>
    )

} 
export default ShopContextProvider