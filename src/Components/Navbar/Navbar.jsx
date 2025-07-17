import React from 'react'
import './Navbar.css'
import logo from '../../assets/elaelalogo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/discover-ela">Discover Ela & Ela</Link></li>
            <li><Link to="/meet-the-women">The Women Behind the Vision</Link></li>
        </ul>
    </div>
  )
}

export default Navbar