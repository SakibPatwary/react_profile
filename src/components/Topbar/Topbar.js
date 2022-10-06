import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logo.gif";
import SakibCV from "./SakibCV.pdf";

const Topbar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className=" fixed-top" style={{ backgroundColor: "#E1E1E1" }}>
      <Container flex>
        <Navbar.Brand>  <a href="#">
                <img
                  style={{ maxWidth: "250px", maxHeight: "100px" }}
                  src={logo}
                />
              </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-items-center pt-2">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Topbar