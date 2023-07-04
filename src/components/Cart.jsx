import React from 'react'

const Cart = ({ quantity = 0, handleCartShow = Function.prototype }) => {
    return (
        <div className='cart  blue darken-3 white-text' onClick={handleCartShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export default Cart
