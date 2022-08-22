import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top" style={{ padding: "1rem 0" }}>
                    <h3 style={{ fontSize: "1.5rem" }}>BEACHES.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom" style={{ padding: "1rem 0" }}>
                    <div className="left" style={{ marginLeft: "-8px" }}>
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className='center'>
                    <h3>
                        Copyright © 2022 By BEACHES.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;