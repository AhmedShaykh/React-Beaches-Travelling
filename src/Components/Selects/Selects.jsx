import React from 'react';
import './Selects.css';

import SelectsImg from '../SelectsImg/SelectsImg';

import KeyWest from '../../Assets/Photos/siblingsinkeywest.jpg';
import EmeraldBay from '../../Assets/Photos/emeraldbay.jpg';
import BoraBora from '../../Assets/Photos/borabora2.jpg';
import Barbados from '../../Assets/Photos/barbados.jpg';
import Maldives from '../../Assets/Photos/maldivesgirl.jpg';
import Gernada from '../../Assets/Photos/gernada.jpg';

function Selects() {
    return (
        <div className='selects'>
            <div className="container">
                <SelectsImg bgImg={KeyWest} text='Key West' />
                <SelectsImg bgImg={EmeraldBay} text='Emerald Bay' />
                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={Barbados} text='Barbados' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Gernada} text='Gernada' />
            </div>
        </div>
    )
}

export default Selects;