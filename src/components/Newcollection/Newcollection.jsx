import React from 'react'
import './Newcollection.css'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'

const Newcollection = () => {
  return (
    <div className='Newcollection'>
        <div className="new-collection">
            <h2>New Collections</h2>
            <hr/>
            <div className="collecctions">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Newcollection