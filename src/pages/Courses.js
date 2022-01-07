import React from 'react'
import Header from '../components/Header'
import { FaCss3Alt,FaHtml5,FaJsSquare,FaBootstrap,FaReact } from "react-icons/fa";

function Courses() {
    return (
        <div>
            <Header />
            <div class="progress_bar">
                <h2 className="html_h2" data-aos="fade-up"> <FaHtml5/> HTML5</h2>
                <div class="progress">
                    <div class="progress-value value1"></div>
                </div>
                <h2 className="css_h2" data-aos="fade-up"> <FaCss3Alt/> CSS3</h2>
                <div class="progress">
                    <div class="progress-value value2"></div>
                </div>
                <h2 data-aos="fade-up"><FaJsSquare/> JAVASCRIPT</h2>
                <div class="progress">
                    <div class="progress-value value3"></div>
                </div>
                <h2 data-aos="fade-up"><FaBootstrap/> BOOTSTRAP</h2>
                <div class="progress">
                    <div class="progress-value value4"></div>
                </div>
                <h2 className="react_h2" data-aos="fade-up"><FaReact/> REACT JS</h2>
                <div class="progress">
                    <div class="progress-value value5"></div>
                </div>
            </div>



        </div>
    )
}

export default Courses
