import './Technologies.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.37
    });
    
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0%)' : 'translateY(-5%)',
        config: { mass: 1, tension: 120, friction: 40 }
    });
    return (
        <animated.div className='Technologies' ref={ref} style={props}>
            <h1>Technologi<span>es</span></h1>
            <div className="technology">
                <div className="technology-1">
                    <img src="./Gifs/React.gif" alt="React Icon" className='react-icon icon'/>
                    <img src="./Gifs/Express.gif" alt="Express Icon" className='express-icon icon'/>
                    <img src="./Gifs/Mongodb.gif" alt="Mongodb Icon" className='mongodb-icon icon'/>
                    <img src="./Gifs/Nodejs.gif" alt="Node.js Icon" className='nodejs-icon icon'/>
                    <img src="./Gifs/Typescript.gif" alt="TypeScript Icon" className='typescript-icon icon'/>
                    <img src="./Gifs/Redux.gif" alt="Redux Icon" className='redux-icon icon'/>
                    <img src="./Gifs/Github.gif" alt="Github Icon" className='github-icon icon'/>
                    <img src="./Gifs/C++.gif" alt="CPP Icon" className='cpp-icon icon'/>
                    <img src="./Gifs/C.gif" alt="C Icon" className='c-icon icon'/>
                    <img src="./Gifs/Python.gif" alt="Python Icon" className='python-icon icon'/>
                    <img src="./Gifs/Sql.gif" alt="Sql Icon" className='sql-icon icon'/>
                    <img src="./Gifs/Tensorflow.gif" alt="Tensorflow Icon" className='tensorflow-icon icon'/>
                    <img src="./Gifs/Linux.gif" alt="Linux Icon" className='linux-icon icon'/>
                </div>
            </div>
        </animated.div>
    );
};

export default Technologies;