import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 220) {
            setColor(true);
        } else {
            setColor(false)
        };
    }
    window.addEventListener('scroll', changeColor);
    return (
        <div className='Navbar'>
            <ul className= {color ? 'ul-scroll' : ''}>
                <li><a href="/#">Hom<span>e</span></a></li>
                <li><a href="/#project">Project<span>s</span></a></li>
                <li><a href="/#technology">Technologie<span>s</span></a></li>
                <li><a href="/#contact">Contac<span>t</span></a></li>
            </ul>
        </div>
    )
};

export default Navbar;