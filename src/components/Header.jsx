import React from 'react'

const Header = () => {
    return (
        <nav className='light-blue darken-2'>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/entryxbad/react-shop' target='_blank' rel='noreferrer'>
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
