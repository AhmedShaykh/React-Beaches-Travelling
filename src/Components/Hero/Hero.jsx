import React from 'react';
import Video from '../../Assets/Video.mp4';

import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
        </div>
    );
}

export default Hero;