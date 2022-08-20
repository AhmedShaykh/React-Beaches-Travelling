import React from 'react';
import './ImgCarousel.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Beach from '../../Assets/Photos/beach.jpg';
import Beach2 from '../../Assets/Photos/beach2.jpg';
import Beach3 from '../../Assets/Photos/beach3.jpg';
import Beach4 from '../../Assets/Photos/beach4.jpg';
import Beach5 from '../../Assets/Photos/beach5.jpg';
import Beach6 from '../../Assets/Photos/beach6.jpg';
import Beach7 from '../../Assets/Photos/beach7.jpg';
import Beach8 from '../../Assets/Photos/beach8.jpg';
import Beach9 from '../../Assets/Photos/beach9.jpg';
import Beach10 from '../../Assets/Photos/beach10.jpg';

function ImgCarousel() {
    return (
        <div className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Beach} alt='/' />
                </div>
                <div>
                    <img src={Beach2} alt='/' />
                </div>
                <div>
                    <img src={Beach3} alt='/' />
                </div>
                <div>
                    <img src={Beach4} alt='/' />
                </div>
                <div>
                    <img src={Beach5} alt='/' />
                </div>
                <div>
                    <img src={Beach6} alt='/' />
                </div>
                <div>
                    <img src={Beach7} alt='/' />
                </div>
                <div>
                    <img src={Beach8} alt='/' />
                </div>
                <div>
                    <img src={Beach9} alt='/' />
                </div>
                <div>
                    <img src={Beach10} alt='/' />
                </div>
            </Carousel>
        </div>
    )
}

export default ImgCarousel;