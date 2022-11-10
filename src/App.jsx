import { useState } from 'react'

import './index.css'
import shoppingProducts from './shoppingProducts'
import Header from './Header'
import ShoppingCartOverlay from './ShoppingCartOverlay'
import ProductList from './ProductList'

function App() {
  const[items, setItems]= useState(shoppingProducts)
  const[quantity, setQuantity]= useState(0)
  const[amountToPay, setAmountToPay]= useState(0)
  const[itemsInCart, setItemsInCart]= useState([])

  const addToCart= (item)=>{
let itemsInCart= itemsInCart;
itemsInCart.push(probs.items[item.id])
shoppingProducts[item.id].inCart=true
shoppingProducts[item.id].quantityInCart=1;
/**/ 
setQuantity(quantity + 1)
setAmountToPay(amountToPay + props.items[item.id].price)
setItemsInCart(itemsInCart)
setItems(shopppingProducts)
  }
  const removeFromCart= (item, index)=>{
    let itemsInCart= itemsInCart;
    shoppingProducts[item.id].inCart=false
    shoppingProducts[item.id].quantityInCart=0;
    itemsInCart.splice(indexInCart,1)
    /**/ 
    setQuantity(quantity -1)
    setAmountToPay(amountToPay - props.items[item.id].price)
    setItemsInCart(itemsInCart)
    setItems(shoppingProducts)
      }
  return (
    <div className="App">
      <Header quantity={quantity}
              amountToPay={amountToPay}
      />
      <ShoppingCartOverlay removeFromCart={removeFromCart}/>
      <ProductList items={items} addToCart={addToCart} />
    </div>
  )
}

export default App
