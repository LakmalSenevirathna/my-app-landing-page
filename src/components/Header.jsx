import React from 'react';

function Header() {
    return(
        <nav>
            <ul className='nav-links'>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">SERVICE</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default Header;