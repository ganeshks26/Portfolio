import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './stylesheets/home.css'
import './stylesheets/header-footer.css'
import './stylesheets/projects-courses.css'
import './stylesheets/contact.css'
import Footer from './components/Footer';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:500
});


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App





