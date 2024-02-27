import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Projects.css'

const Blog = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.10
    });
    
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0%)' : 'translateY(-5%)',
        config: { mass: 1, tension: 120, friction: 40 }
    });
    return (
        <animated.div className='Blogs' ref={ref} style={props}>
            <h1>My Projec<span>ts</span></h1>
            <div className="BlogCont">
                <div className="blog">
                    <h1 className='blog-title'>Full Stack E-commerce Website <span>📍 19th Jan, 2024</span></h1>
                    {/* <span className="readtime">2 min read</span> */}
                    <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-builder.jpg" alt="mountain-img" />
                    <p className="blog-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, iure! Praesentium assumenda quasi dicta, quibusdam possimus labore libero veritatis eum mollitia consequuntur? Debitis eligendi aspernatur facere vitae, eveniet, fugit cupiditate tenetur voluptates magnam quis aperiam esse? Voluptatibus, vero molestiae. Fuga porro, aut aspernatur accusantium sequi inventore ducimus rerum neque deserunt tempora labore nostrum, id minus amet.. </p>
                    <div className="buttons">
                        <button><a href="" target='_blank'>Github</a></button>
                        <button><a href="" target='_blank'>Project Link</a></button>
                    </div>
                </div>
                <div className="blog">
                    <h1 className='blog-title'>Real Time Video Calling App <span>📍 7th Feb, 2024</span></h1>
                    {/* <span className="readtime">2 min read</span> */}
                    <img src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/transformed-images/storage_googleapis_com/dialpad-cms.appspot.com/cms/App-UI-shown-on-iOS-and-Android-apps-single-item-card.webp" alt="mountain-img" />
                    <p className="blog-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, iure! Praesentium assumenda quasi dicta, quibusdam possimus labore libero veritatis eum mollitia consequuntur? Debitis eligendi aspernatur facere vitae, eveniet, fugit cupiditate tenetur voluptates magnam quis aperiam esse? Voluptatibus, vero molestiae. Fuga porro, aut aspernatur accusantium sequi inventore ducimus rerum neque deserunt tempora labore nostrum, id minus amet..</p>
                    <div className="buttons">
                        <button><a href="" target='_blank'>Github</a></button>
                        <button><a href="" target='_blank'>Project Link</a></button>
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Blog;