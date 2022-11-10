import React from 'react'

function ShoppingCartProduct() {
    const handleRemoveFromCart= ()=>{
        props.item.quantityInCart= event.target.value;
        forceUpdate();
        props.updateAmoungToPay(props.item)
    }
  return (
    <tr className="items-in-cart">
          <td><img src={props.item.image}></img></td>
          <td>{props.item.name}</td>
          <td>£{props.item.price}</td>
          <td>
            <input type="number" name="quantity" min="1" max="150" onChange={handleQuantityChange} />
          </td>
          <td>£{props.item.price * props.item.quantityInCart}</td>
          <td><i className="fas fa-trash"
                onClick={handleRemoveFromCart}></i></td>
        </tr>
  )
}

export default ShoppingCartProduct