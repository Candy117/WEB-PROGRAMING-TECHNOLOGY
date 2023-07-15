import React from 'react'
import Product from './Product.js'

export default function ListPlant(props) {
  return (
      props.productList.length>0 ?
       props.productList.map((product,i)=>{
         return <Product product={product} key={i} increaseQuantity={props.increaseQuantity} index={i} decreaseQuantity={props.decreaseQuantity} removeItem={props.removeItem} addPlant={props.addPlant}/>
        })
        : <h1>No products</h1>
  )
}
