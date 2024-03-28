import React from 'react';

function Header() {
    return(
        <nav>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;