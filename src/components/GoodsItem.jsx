import React, { useContext } from 'react'
import { ShopContext } from '../context'

const GoodsItem = ({ id, name, description, price, full_background }) => {
    const item = { id, name, price }

    const { addToCart } = useContext(ShopContext)

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={name}></img>
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button className='btn' onClick={() => addToCart(item)}>
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    )
}

export default GoodsItem
