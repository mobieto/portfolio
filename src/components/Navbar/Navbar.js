import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={ logo } alt='' className='logo'/>

            <div className='desktopLinks'>
                <Link className='desktopLinkItem'>About</Link>
                <Link className='desktopLinkItem'>Portfolio</Link>
                <Link className='desktopLinkItem'>Projects</Link>
                <Link className='desktopLinkItem'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar