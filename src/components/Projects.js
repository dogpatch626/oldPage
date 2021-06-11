import React from 'react'
import ProjectItem from './ProjectItem'
import projects from '../data/projectsList.json'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <h1>Projects</h1>
      </div>
      <div className='projects-list'>
        {projects.map((project, idx) => (
          <ProjectItem key={idx} projectDetails={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
