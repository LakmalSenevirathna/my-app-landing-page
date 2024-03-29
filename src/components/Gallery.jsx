import React from 'react';
import heroImage from '../assets/images/IMG2.jpg';

function Gallery() {
    return(
        <div className='gallery-container'>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
            <div><img className='gallery-images' src={heroImage} alt="" /></div>
        </div>
    );
}

export default Gallery;