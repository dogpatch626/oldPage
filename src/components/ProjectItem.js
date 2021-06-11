import React from 'react'
import '../styles/ProjectItem.css'

const ProjectItem = props => {
  const { projectTitle, projectDescription, projectUrl, projectImage, projectTechStack } =
    props.projectDetails

  return (
    <article className='card'>
      <CardHeader image={projectImage} />
      <CardBody
        projectBody={{
          projectTitle,
          projectDescription,
          projectUrl,
          projectImage,
          projectTechStack
        }}
      />
    </article>
  )
}

const CardHeader = props => {
  var style = {
    backgroundImage: `url(${props.image})`
  }
  return <div style={style} className='card-img'></div>
}

const CardBody = props => {
  const { projectTitle, projectDescription, projectUrl, projectTechStack } = props.projectBody

  return (
    <div className='card-body'>
      <p className='tech-stack'>{projectTechStack.join(', ')}</p>

      <h2>{projectTitle}</h2>

      <p className='card-description'>{projectDescription}</p>

      <a href={projectUrl} target='blank' className='button'>
        View Project
      </a>
    </div>
  )
}

export default ProjectItem
