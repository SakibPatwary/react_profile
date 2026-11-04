import React from 'react'
import tgit from "../../img/works/tgit.png"
import asaduzzaman from "../../img/works/asaduzzaman.png"
import unifly from "../../img/works/unifly.png"
import youwin from "../../img/works/youwin.png"

const projects = [
  { name: 'TGIT Bangladesh', image: tgit, url: 'https://tgitbangladesh.com/', type: 'Web development', color: 'blue' },
  { name: 'Unifly Travels', image: unifly, url: 'http://unifly-travels.com/', type: 'Travel platform', color: 'mint' },
  { name: 'Youwin Education', image: youwin, url: 'https://youwineducation.org/', type: 'Education', color: 'orange' },
  { name: 'Asaduzzaman Portfolio', image: asaduzzaman, url: 'https://asaduzzamanriyad.netlify.app/', type: 'Personal portfolio', color: 'lilac' },
]

const Works = () => (
  <section className="work-section" id="works">
    <div className="page-container mx-auto w-full max-w-6xl">
      <div className="section-heading section-heading-left">
        <span className="section-kicker">A FEW THINGS I’VE MADE</span>
        <h2>Selected work<span className="heading-period">.</span></h2>
        <p>A selection of projects I’ve helped bring to life.</p>
      </div>
      <div className="project-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div key={project.name} className="project-column">
            <a className={`project-card group project-${project.color} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176b61]`} href={project.url} target="_blank" rel="noreferrer">
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.name} website preview`} loading="lazy" />
                <span className="project-number">0{index + 1}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="project-info">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Works
