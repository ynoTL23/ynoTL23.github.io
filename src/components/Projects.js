import React from 'react'
import ProjectItem from './ProjectItem'
import '../styles/Projects.css'

const projects = [
  {
    title: 'My First Project',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nam pariatur iusto iste nostrum asperiores?',
    projectUrl: 'https://github.com',
    image: 'https://picsum.photos/300',
    techstack: ['React', 'Node', 'PostgreSQL']
  },
  {
    title: 'Some Java Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed enim aperiam dolor rem totam cupiditate voluptatum, blanditiis, in, praesentium ducimus id quia fuga accusantium voluptates?',
    projectUrl: 'https://github.com',
    image: 'https://picsum.photos/300',
    techstack: ['Java']
  },
  {
    title: 'Netflix Clone',
    description: 'Description about the project.',
    projectUrl: 'https://github.com',
    image: 'https://picsum.photos/300',
    techstack: ['Python', 'Node', 'React', 'Material UI']
  }
]

const Projects = () => {
  return (
    <>
      <div className='projects-container'>
        <div className='projects-header'>
          <h1>Projects</h1>
        </div>
        <div className='projects-list'>
          {projects.map(project => (
            <ProjectItem projectDetails={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
