import React, { useContext } from 'react'
import { ShopContext } from '../context'

const Cart = () => {
    const { order, handleCartShow } = useContext(ShopContext)

    const quantity = order.length

    return (
        <div className='cart  blue darken-3 white-text' onClick={handleCartShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}

export default Cart
