import React from 'react'
import Navigation from './Navigation'
import ShoppingCart from './ShoppingCart'
import { preprocessCSS } from 'vite'

function Header() {
  return (
    <div>
    <Navigation />
    <ShoppingCart 
    quantity={props.quantity}
    amountToPay={props.amountToPay}
    />
    </div>
  )
}

export default Header