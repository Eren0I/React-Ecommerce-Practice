import React from 'react'
import ShoppingCartProduct from "./ShoppingCartProduct"

function ShoppingCartOverlay() {
    const closeOverlay =()=>{
        document.getElementById('overlay').style.display = 'none';
      document.querySelector('body').style.overflow = 'auto';
    }
    const updateAmountToPay=(item)=> {
        forceUpdate();
    }
    const itemsInCart= props.data.itemsInCart.map((item, index)=>{
        return <ShoppingCartProduct key={index}
        item={item}
        indexInCart={index}
        removeFromCart={props.removeFromCart}
        updateAmountToPay={updateAmountToPay}
        />
    })
    let amountToPay = 0;
    for (let i = 0; i < props.data.items.length; i++) {
        const amountToPay = props.data.items[i].price * props.data.items[i].quantityInCart;  
    }
  return (
    <div id="overlay">
    <section id='shopping-cart'>
    <div id="cart-header">
              <span id="cart-title">Shopping Cart</span>
              <i className="far fa-times-circle"
                onClick={closeOverlay}></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemsInCart}
              </tbody>
            </table>
            <span id="empty-cart">{(itemsInCart.length == 0) ? "Shopping cart is empty" : ""}</span>
            <h3 id="cart-total">Cart Total</h3>
            <div id="totals">
              <span>Cart Totals</span>
              <span>Number of items: {props.data.quantity}</span>
              <span>Total: £{amountToPay}</span>
            </div>
            <button id="checkout" 
              disabled={itemsInCart.length == 0 ? true : false} >Checkout</button>
    </section>
    </div>
  )
}

export default ShoppingCartOverlay