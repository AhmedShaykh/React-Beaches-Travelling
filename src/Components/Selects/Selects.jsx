import React from 'react';
import './Selects.css';

import SelectsImg from '../SelectsImg/SelectsImg';

import KeyWest from '../../Assets/Photos/keywest2.jpg';
import Bali from '../../Assets/Photos/bali.jpg';
import EmeraldBay from '../../Assets/Photos/emeraldbay.jpg';
import Maldives from '../../Assets/Photos/maldivesgirl.jpg';
import Barbados from '../../Assets/Photos/barbados.jpg';
import Jumeirah from '../../Assets/Photos/jumeirah.jpg';
import Miami from '../../Assets/Photos/miami.jpg';
import BoraBora from '../../Assets/Photos/borabora2.jpg';
import Gernada from '../../Assets/Photos/gernada.jpg';

function Selects() {
    return (
        <div name="book" className='selects'>
            <div className="container">
                <SelectsImg bgImg={KeyWest} text='Key West' />
                <SelectsImg bgImg={Bali} text='Bali' />
                <SelectsImg bgImg={EmeraldBay} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Barbados} text='Barbados' />
                <SelectsImg bgImg={Jumeirah} text='Jumeirah' />
                <SelectsImg bgImg={Miami} text='Miami' />
                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={Gernada} text='Gernada' />
            </div>
        </div>
    )
}

export default Selects;