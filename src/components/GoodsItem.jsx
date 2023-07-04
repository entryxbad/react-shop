import React from 'react'

const GoodsItem = ({ id, name, description, price, full_background, addToCart = Function.prototype }) => {
    const item = { id, name, price }

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
