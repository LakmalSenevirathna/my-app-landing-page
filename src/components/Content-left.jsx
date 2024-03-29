import React from 'react';
import heroImage from '../assets/images/IMG3.jpg';

function ContentLeft () {
    return(
        <div className='content'>
            <div className='text-left'>
                 <h3>"Taking pictures is savoring life intensely, every hundredth of a second." - Marc Riboud</h3>
            </div>
            <div className='image-right'>
                <img src={heroImage} alt="image3" />
            </div>
        </div>
    );
}

export default ContentLeft;