import React from 'react'
import { preprocessCSS } from 'vite';

function ShoppingCart() {
    const ShowOverlay =()=>{
 document.getElementById("overlay").style.display="flex";
 document.querySelector("body").style.overflow="hidden"
    }
  return (
    <div id="cart"><span className={props.quantity == 0 ? "hide price" : ""}>{props.quantity}</span><i className="fas fa-shopping-cart"
    onClick={showOverlay}></i></div>
  )
}

export default ShoppingCart