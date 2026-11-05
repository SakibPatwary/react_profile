import React from 'react'
import Me from "../../img/Me.png";

const Navbar = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <p className="hero-eyebrow"><span className="status-dot" /> Available for creative projects</p>
          <h2 className="i-intro">Hello, I’m</h2>
          <h1 className="i-name">SAKIB</h1>
          <p className="i-desc">I design and build thoughtful digital experiences.</p>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Designer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="hero-actions">
            <a className="hero-primary transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176b61]" href="#works">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="hero-secondary transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176b61]" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="Sakib Patwary" className="i-img" fetchPriority="high" />
      </div>
    </div>
  );
}

export default Navbar
