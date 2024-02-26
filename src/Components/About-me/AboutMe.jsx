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
        <animated.div className='AboutSection' ref={ref} style={props}>
            <h1 className='about-h1'>Abo<span>ut</span></h1>
            <div className='AboutMe' >
                <div className="info">
                    <div className="about-content">

                        <p className='para-about'>
                            Greetings! I'm Aakarsh, a <span>MERN stack developer</span> with a serious case of wanderlust. Ever since I was a kid, computers have held a special place in my heart. I find myself constantly drawn to their intricate workings, their potential to create, and the endless possibilities they hold. The learning journey in this field is what truly excites me. No matter how much I delve into the world of code, there's always a new challenge, a fresh concept, or a hidden gem waiting to be discovered.
                        </p>
                        <p className='para-about'>
                            
                            My passion for technology has fueled my journey, leading me to develop proficiency in various tools and languages. I'm well-versed in the MERN stack <span>(MongoDB, Express.js, React.js, and Node.js)</span>, <span>Redux</span> for state management, and <span>TypeScript</span> for enhanced development experience. Additionally, I possess a strong foundation <span>Data Structures and Algorithms</span> with languages like <span>C/C++ and Python</span>, giving me a broader perspective and adaptability in the ever-evolving tech landscape.
                        </p>
                        <p className='para-about'>
                            This passion doesn't just manifest in theoretical knowledge. I've channeled it into building diverse and impactful projects that showcase my skills and problem-solving abilities. These projects serve as testaments to my commitment to continuous learning and exploration in the exciting world of technology.
                        </p>
                        <p className='para-about'>
                            So, whether I'm coding away or exploring a new corner of the globe, I'm always seeking new experiences and pushing the boundaries of what's possible. If you're looking for a developer who brings both technical expertise and a touch of adventurous spirit to the table, then I might just be your perfect match!
                        </p>
                    </div>
                </div>
                <div className="picture">
                    <img src="./Images/myphoto-2.jpg" alt="" className='mypicabout'/>
                </div>
            </div>
        </animated.div>
    );
};

export default AboutMe;