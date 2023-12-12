import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../components/Context/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Discriptionbox from '../components/Discriptionbox/Discriptionbox';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';

const Product = () => {
  const {all_products}=useContext(ShopContext)
  const {productId}=useParams();
  console.log('all_product:', all_products);
  console.log('productId:', productId);
  if (!all_products) {
    // Handle the case where all_product is undefined or null
    return <div>Loading...</div>;
  }
  const product=all_products.find((e)=>e.id===Number(productId));
  console.log('product:',product)
  
  
    return (
      <div>
      
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <Discriptionbox product={product}/>
            <Relatedproduct product={product}/>
      </div>
    );

}

export default Product