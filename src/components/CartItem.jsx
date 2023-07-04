import React from 'react'

const CartItem = ({
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
}) => {
    return (
        <li className='collection-item'>
            {name}{' '}
            <i className='material-icons cart-quantity' onClick={() => decrementQuantity(id)}>
                remove
            </i>{' '}
            x{quantity}{' '}
            <i className='material-icons cart-quantity' onClick={() => incrementQuantity(id)}>
                add
            </i>{' '}
            = {price * quantity} руб.
            <span href='#!' className='secondary-content' onClick={() => removeFromCart(id)}>
                <i className='material-icons cart-delete'>close</i>
            </span>
        </li>
    )
}

export default CartItem
