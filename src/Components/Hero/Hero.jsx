import React from 'react';
import Video from '../../Assets/Video.mp4';
import { AiOutlineSearch } from 'react-icons/ai'

import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>

            <div className="content">
                <h1 style={{ marginBottom: "0.5rem" }}>
                    Enjoy Your Vacations
                </h1>
                <h2 style={{ marginBottom: "0.8rem" }}>
                    Search Your Destinations Top Worldwide Locations
                </h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;