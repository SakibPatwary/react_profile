import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../img/logo.gif'


import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Header = () => {


  return (
      <>
      {['sm'].map((expand) => (
        <Navbar key={expand} style={{backgroundColor:"#E1E1E1"}} expand={expand} className="mb-3 fixed-top">
          <Container>
            <Navbar.Brand><img style={{maxWidth:'250px', maxHeight:'100px'}} src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Works</Nav.Link>
                  <Nav.Link href="#action3">About</Nav.Link>
                  <Nav.Link href="#action4">Contact</Nav.Link>
                  <Nav.Link><button style={{borderRadius:'15px', backgroundColor:"blue", color:'white', border:'none', height:'30px', width:'120px'}}>
                  <a href={logo} download style={{ margin:"5px"}}> Download CV</a>
                </button></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header