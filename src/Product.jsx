import React from 'react'


function Product() {
    const handleAddToCart=()=>{
        props.addToCart(props.item)
    }
  return (
    <div className="items">
    <img src={props.item.image}></img>
    <div className="info">
      <h3>{props.item.name}</h3>
      <span>£ {props.item.price}</span>
      <button onClick={handleAddToCart}
        disabled={props.item.inCart}
        className={props.item.inCart ? "button-disabled" : ""}>
        {props.item.inCart ? "Item in a cart" : "Add to cart"}
      </button>
    </div>
  </div>
  )
}

export default Product