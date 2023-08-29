import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'
import Logo from '../assets/Images/logo.png'
import {links} from '../data'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav_container">
            <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav_Logo" />
            </Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink 
                                to={path} 
                                className={({isActive}) => isActive ? "active-nav" : ""} 
                                onClick={() => setIsNavShowing(prevState => !prevState)}>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button 
            onClick={() => setIsNavShowing(prevState => !prevState)} 
            className="nav_toggle-btn">
                {
                    isNavShowing ? <MdOutlineClose />  : <VscThreeBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar
