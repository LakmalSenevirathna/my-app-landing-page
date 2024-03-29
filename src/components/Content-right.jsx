import React from 'react';
import heroImage from '../assets/images/IMG1.jpg';

function ContentRight() {
    return (
        <div className='content'>
            <div className='image-left'>
                <img src={heroImage} alt="image3" />
            </div>
            <div className='text-right'>
                <h3>"Taking pictures is savoring life intensely, every hundredth of a second." - Marc Riboud</h3>
            </div>
        </div>
    );
}

export default ContentRight;