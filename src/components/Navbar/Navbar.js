import React from 'react'
import "./navbar.css";
import Me from "../../img/Me.png";

const Navbar = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello 🖐🏻, I am</h2>
          <h1 className="i-name">SAKIB</h1>
          <h2 className="i-desc">
            Nice to Meet You!</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Navbar