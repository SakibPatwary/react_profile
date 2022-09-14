import React from 'react'
import './project.css'

const Projects = () => {
  return (
    <section className="hero-section">
      <div l="card-grid">
        <a l="card" href="#">
          <div className="card__background" style="background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"></div>
          <div className="card__content">
            <p className="card__category">Category</p>
            <h3 className="card__heading">Example Card Heading</h3>
          </div>
        </a>
    </div>
    </section>
  )
}

export default Projects