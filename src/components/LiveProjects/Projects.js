import React from 'react'
import './project.css'
import Me from '../../img/Me.png'

const Projects = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center', fontWeight: '600', paddingTop: '60px' }}>My Works & Projects</h2>
      <div className="main-container">
      <div className="project-card">
          <img className='project-img' src={Me} />
          <h3>Card title</h3>
        </div>

        <div className="project-card">
          <img className='project-img' src={Me} />
          <h3>Card title</h3>
        </div>

        <div className="project-card">
          <img className='project-img' src={Me} />
          <h3>Card title</h3>
        </div>

        <div className="project-card">
          <img className='project-img' src={Me} />
          <h3>Card title</h3>
        </div>
      </div>
      
    </>
  )
}

export default Projects