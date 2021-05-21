import React from 'react'
import '../styles/ProjectItem.css'

const ProjectItem = props => {
  const { title, description, projectUrl, image, techstack } = props.projectDetails
  return (
    <article className='card'>
      <CardHeader image={image} />
      <CardBody projectBody={{ title, description, projectUrl, techstack }} />
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
  const { title, description, projectUrl, techstack } = props.projectBody

  return (
    <div className='card-body'>
      <p className='tech-stack'>{techstack.join(', ')}</p>

      <h2>{title}</h2>

      <p className='card-description'>{description}</p>

      <a href={projectUrl} target='blank' className='button'>
        View Project
      </a>
    </div>
  )
}

export default ProjectItem
