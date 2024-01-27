import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <div className='Projects'>
            <h1>Projec<span>ts</span></h1>
            <div className='Project'>
                <div className="project-list">
                    <div className="firstrow">
                        <div className="first">
                            
                        </div>
                        <div className="second">

                        </div>
                    </div>
                    <div className="secondrow">
                        <div className="third">

                        </div>
                        <div className="fourth">

                        </div>
                    </div>
                </div>
                <a href='/' className='btn'><button>See all projects</button></a>
            </div>
        </div>
    );
};

export default Project;