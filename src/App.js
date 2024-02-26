import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import NavbarPhone from './Components/Navbar/NavbarPhone.jsx';
import LandingPage from './Components/Landing-Page/LandingPage.jsx';
import AboutMe from './Components/About-me/AboutMe.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blog from './Components/Projects/Projects.jsx'
import Technologies from './Components/Technologies/Technologies.jsx';


function App() {
  
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <NavbarPhone />
      <div className='App'>
        <section id='landing-page'>
          <LandingPage />
        </section>
        <section id='about'>
          <AboutMe />
        </section>
        <section id='project'>
          <Blog />
        </section>
        <section id='technology'>
          <Technologies />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </div>

    </div>
  );
}

export default App;
