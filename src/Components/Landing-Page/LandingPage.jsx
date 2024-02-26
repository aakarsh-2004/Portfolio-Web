import React from 'react';
import { useSpring, animated } from 'react-spring';
import './LandingPage.css';

const LandingPage = () => {
    const props = useSpring({
        from: { marginLeft: '-2%', opacity: 0 },
        to: { marginLeft: '0%', opacity: 1 },
        config: { duration: 700 }, // Adjust the duration as needed
    });
    return (
    <animated.div style={props} className='LandingPage'>
        <div className="first">
            <h1>Hello,</h1>
            <h3>This is Aakar<span>sh.</span></h3>
        </div>
    </animated.div>
    )
};

export default LandingPage;