import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'  
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profileimg from '../../assets/profileimg.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>My favourait</li>
                    <li>MOvies</li>
                    <li>MOst Popular</li>
                    <li>Tv shows</li>
                    <li>tv</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="navbar-icons">
                    <img src={search_icon} alt="" />
                    <img src={bell_icon} alt="" />
                </div>
                <div className="profile-icon">
                   <img src={profileimg} alt="" />
                    <img src={caret_icon} alt="" className='caret-icon'/>
                <div className="dropdown">
                    <p>log out</p>

                </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
