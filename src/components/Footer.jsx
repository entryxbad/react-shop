import React from 'react'

const Footer = () => {
    return (
        <footer className='page-footer light-blue lighten-2 '>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/entryxbad/react-shop'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
