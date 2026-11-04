import React from 'react'
import skills1 from "../../img/skills/skills1.png"
import skills2 from "../../img/skills/skills2.png"
import skills3 from "../../img/skills/skills3.png"
import skills4 from "../../img/skills/skills4.png"

const capabilities = [
  { title: 'Frontend development', image: skills1, number: '01' },
  { title: 'Software engineering', image: skills4, number: '02' },
  { title: 'UI/UX design', image: skills2, number: '03' },
  { title: 'Graphic design', image: skills3, number: '04' },
]

const Skills = () => (
  <section className="skill-section" id="skills">
    <div className="page-container mx-auto w-full max-w-6xl">
      <div className="section-heading section-heading-center">
        <span className="section-kicker">WHAT I DO</span>
        <h2>Ideas into interfaces<span className="heading-period">.</span></h2>
        <p>A blend of design thinking and practical development.</p>
      </div>
      <div className="skill-grid grid grid-cols-2 gap-4 lg:grid-cols-4">
        {capabilities.map((item) => (
          <div key={item.title} className="skill-column">
            <article className="skill-card group transition duration-200">
              <div className="skill-image"><img src={item.image} alt="" loading="lazy" /></div>
              <span className="skill-number">{item.number}</span>
              <h3>{item.title}</h3>
              <span className="skill-line transition-all duration-200 group-hover:w-12" />
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
