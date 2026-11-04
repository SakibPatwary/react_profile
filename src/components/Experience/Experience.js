import React from "react";
import html from "../../img/Svg/html.png";
import css from "../../img/Svg/css.png";
import js from "../../img/Svg/js.png";
import react from "../../img/Svg/react.png";
import bootstrap from "../../img/Svg/bootstrap.png";
import git from "../../img/Svg/git.png";
import figma from "../../img/Svg/figma.png";
import canva from "../../img/Svg/canva.png";
import ai from "../../img/Svg/ai.png";
import ps from "../../img/Svg/ps.png";
import filmora from "../../img/Svg/filmora.png";
import framer from "../../img/Svg/framer.png";

const tools = [
  ["HTML", html], ["CSS", css], ["JavaScript", js], ["React", react],
  ["Bootstrap", bootstrap], ["Framer", framer], ["Git", git], ["Figma", figma],
  ["Canva", canva], ["Illustrator", ai], ["Photoshop", ps], ["Filmora", filmora],
];

const roles = [
  { title: "Junior Web Developer", company: "TGIT Bangladesh", period: "May 2022 — Present" },
  { title: "Part-time Web Developer", company: "TGIT Bangladesh", period: "January 2022 — April 2022" },
];

const Experience = () => (
  <section className="experience-section" id="experience">
    <div className="page-container">
      <div className="section-heading section-heading-left">
        <span className="section-kicker">THE TOOLKIT & THE JOURNEY</span>
        <h2>Skills & experience<span className="heading-period">.</span></h2>
        <p>Tools I use to shape useful, polished digital products.</p>
      </div>
      <div className="experience-layout">
        <div className="tool-panel">
          <h3 className="panel-label">TOOLS I WORK WITH</h3>
          <div className="tool-grid">
            {tools.map(([name, image]) => <div className="tool-item" key={name}><img src={image} alt="" loading="lazy" /><span>{name}</span></div>)}
          </div>
        </div>
        <div className="timeline-panel">
          <h3 className="panel-label">EXPERIENCE</h3>
          <div className="experience-timeline">
            {roles.map((role) => (
              <article className="experience-role" key={role.title}>
                <span className="timeline-marker" />
                <span className="role-period">{role.period}</span>
                <h4>{role.title}</h4>
                <p>{role.company}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
