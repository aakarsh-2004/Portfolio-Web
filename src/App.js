import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import NavbarPhone from './Components/Navbar/NavbarPhone.jsx';
import LandingPage from './Components/Landing-Page/LandingPage.jsx';
import AboutMe from './Components/About-me/AboutMe.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blog from './Components/Projects/Projects.jsx'
import Technologies from './Components/Technologies/Technologies.jsx';


function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderNavbar = () => {
    return width > 480 ? <Navbar /> : <NavbarPhone />;
  };
  return (
    <div className='App'>
      {renderNavbar()}
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
