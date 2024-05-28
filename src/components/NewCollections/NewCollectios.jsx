import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
const NewCollectios = () => {
  const [newCollections,setNewCollection] = useState([]);
  useEffect(()=>{
    fetch("https://commerce-backend-154x.onrender.com/getnewcollections")
    .then((res)=>res.json())
    .then((product)=>setNewCollection(product))
  },[])
  return (
    <div className='new-collectios'>
          <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
        {newCollections.map((item, key)=>{
                return <Item 
                key={key} 
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollectios