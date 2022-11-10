import React from 'react'
import Product from "./Product"

function ProductList() {
    const items = props.items.map((item,index)=>{
        return(<Product
        key={item.id}
        item={item}
        addToCart={props.addToCart}
        />
        )
    })
  return (
    <div id='list'>
    {items}
    </div>
  )
}

export default ProductList