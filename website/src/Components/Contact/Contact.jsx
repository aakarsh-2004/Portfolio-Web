import React from 'react';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Mail from '@iconscout/react-unicons/icons/uil-envelope';
import './Contact.css'

const Contact = () => {
    const year = new Date().getFullYear();
    
    return (
        <div className='Contact'>
            <h1>Conta<span>ct</span></h1>
            <div className="contact-details">
                <h1> <Mail size={20} color='black'/>aakarshbeohar2004<span>@gmail.com</span></h1>
                <div className="icons">
                    <a href='mailto:aakarshbeohar2004@gmail.com' target='_blank'><Mail size={40} color='black'/></a> 
                    <a href='https://www.linkedin.com/in/aakarsh-beohar/' target='_blank'><Linkedin size={40} color='black'/></a>
                    <a href='' target='_blank'><Twitter size={40} color='black'/></a>
                    <a href='https://github.com/aakarsh-2004' target='_blank'><Github size={40} color='black'/></a>
                </div>
                <h3 className='copyright'>&copy; Copyright {year}</h3>
            </div>
        </div>
    );
};

export default Contact;