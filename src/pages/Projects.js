import React from 'react'
import Header from '../components/Header'
// import {FaLaptopCode} from 'react-icons/fa'
import projectsdata from './projectsdata'

function Projects() {
    return (
        <div>
            <Header/>
          <div className='container project-list' id="projects-list">
            <h3 className='font-bold'>Take a look of my projects</h3>
            <hr />

            <div className="row">
                {projectsdata.map((project)=>{
                    return <div className="col-md-4">
                        <div className="position-relative project">
                            <img src={project.image} alt="" />
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <hr />
                              <button className="primary-button"><a href={project.link} target="_blank" rel="noreferrer">Demo</a></button>
                                
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>


        </div>
    )
}

export default Projects
