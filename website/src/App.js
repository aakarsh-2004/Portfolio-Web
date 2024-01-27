import React from 'react'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import LandingPage from './Components/Landing-Page/LandingPage.jsx';
import AboutMe from './Components/About-me/AboutMe.jsx';
import Project from './Components/Projects/Project.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import BlogPage from './Components/Blog-Page/BlogPage.jsx';


function App() {
  return (
    <BrowserRouter >
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <div className='App'>
              <section id='landing-page'>
            <LandingPage />
            </section>
            <section id='about'>
              <AboutMe />
            </section>
            <section id='project'>
              <Project />
            </section>
            <section id='blog'>
              <Blog />
            </section>
            <section id='contact'>
              <Contact />
            </section>
            </div>
          }/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/blogpage' element={<BlogPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
