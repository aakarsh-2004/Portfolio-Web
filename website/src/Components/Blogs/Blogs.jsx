import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Blogs.css';

const Blogs = () => {
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
        <animated.div className='Blogs' ref={ref} style={props}>
            <h1>My Blo<span>gs</span></h1>
            <div className="BlogCont">
                <div className="blog">
                    <h1 className='blog-title'>Achieving Freedom <span>📍 19th Jan, 2024</span></h1>
                    <span className="readtime">2 min read</span>
                    <img src="https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="mountain-img" />
                    <p className="blog-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, iure! Praesentium assumenda quasi dicta, quibusdam possimus labore libero veritatis eum mollitia consequuntur? Debitis eligendi aspernatur facere vitae, eveniet, fugit cupiditate tenetur voluptates magnam quis aperiam esse? Voluptatibus, vero molestiae. Fuga porro, aut aspernatur accusantium sequi inventore ducimus rerum neque deserunt tempora labore nostrum, id minus amet.. <span><a href='/blogpage/'>Read More.</a></span></p>
                </div>
                <div className="blog">
                    <h1 className='blog-title'>Travelling Europe<span>📍 27th Jan, 2024</span></h1>
                    <span className="readtime">5 min read</span>
                    <img src="https://images.unsplash.com/photo-1683009427598-9c21a169f98f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="mountain-img" />
                    <p className="blog-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, iure! Praesentium assumenda quasi dicta, quibusdam possimus labore libero veritatis eum mollitia consequuntur? Debitis eligendi aspernatur facere vitae, eveniet, fugit cupiditate tenetur voluptates magnam quis aperiam esse? Voluptatibus, vero molestiae. Fuga porro, aut aspernatur accusantium sequi inventore ducimus rerum neque deserunt tempora labore nostrum, id minus amet.. <span><a href='/blogpage/'>Read More.</a></span></p>
                </div>
            </div>
        </animated.div>
    );
};

export default Blogs;