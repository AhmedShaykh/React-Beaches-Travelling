import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>
                    <span>
                        BEACHES.
                    </span>
                </h2>
            </div>
            <ul className="nav-menu">
                <li><span>Home</span></li>
                <li><span>Destinations</span></li>
                <li><span>Book</span></li>
                <li><span>View</span></li>
            </ul>
            <div className="nav-response" onClick={handleNav}>
                {!nav ? (<span><HiOutlineMenuAlt4
                    className='icon' /></span>) : (<span><AiOutlineClose
                        style={{ color: '#000' }}
                        className='icon' /></span>)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li><span>Home</span></li>
                    <li><span>Destinations</span></li>
                    <li><span>Book</span></li>
                    <li><span>View</span></li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="social-icons">
                        <span><FaFacebook className='icon' /></span>
                        <span><FaInstagram className='icon' /></span>
                        <span><FaTwitter className='icon' /></span>
                        <span><FaPinterest className='icon' /></span>
                        <span><FaYoutube className='icon' /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;