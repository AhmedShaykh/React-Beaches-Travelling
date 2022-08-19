import React from 'react';
import './Destinations.css';

import BoraBora from '../../Assets/Photos/borabora.jpg';
import KeyWest from '../../Assets/Photos/keywest.jpg';
import Boating from '../../Assets/Photos/boating.jpg';
import Maldives from '../../Assets/Photos/maldives.jpg'
import Maldives2 from '../../Assets/Photos/maldives2.jpg'

function Destinations() {
    return (
        <div className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/" />
                    <img src={KeyWest} alt="/" />
                    <img src={Maldives} alt="/" />
                    <img src={Boating} alt="/" />
                    <img src={Maldives2} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destinations;