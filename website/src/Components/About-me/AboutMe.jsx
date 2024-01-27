import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css'

const AboutMe = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.37
    });
    
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0%)' : 'translateX(-5%)',
        config: { mass: 1, tension: 120, friction: 40 }
    });
    
    return (
        <animated.div className='AboutMe' ref={ref} style={props}>
            <div className="info">
                <h1>Abo<span>ut</span></h1>
                <p>I am Aakarsh, a <span>MERN</span> Stack Developer, who also loves travelling. </p>
                <p>Ever since my childhood, computers has a special place in me, I love working around it. I am always trying to learn something new and it just fascinates me that no matter how much I learn, there is always something new to do.</p>
                <br></br>
                <p>Currently, I am skilled in <span>MERN Stack</span>, <span>Redux</span>, <span>TypeScript</span> & languages like <span>C/C++</span> and <span>Python</span>.</p>
                <p>My Passion for computers keeps me driving forward and hence I have built good projects which includes diverse technologies.</p>
            </div>
            <div className="picture">
                <img src="./myphoto-2.jpg" alt="" />
            </div>
        </animated.div>
    );
};

export default AboutMe;