import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { saveAs } from "file-saver";
import logo from '../../img/logo.gif'


const Header = () => {
  const saveFile = ()=> {
    saveAs(
      "https://drive.google.com/u/0/uc?id=1JnKRw3jQCbV4p3qpG19yiU4G-wNBYYql&export=download",
      "SakibCV.pdf"
    );
  }


  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          style={{ backgroundColor: "#E1E1E1" }}
          expand={expand}
          className="mb-3 fixed-top"
        >
          <Container>
            <Navbar.Brand>
              <img
                style={{ maxWidth: "250px", maxHeight: "100px" }}
                src={logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{maxWidth: '60%'}}
            >
              <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{fontWeight:'bold'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Quick Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{lineHeight:'30px', fontWeight:'bold',marginLeft:'10px'}}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">Works</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link  href="#">Contact</Nav.Link>
                  <Nav.Link>
                    <button
                      onClick={saveFile}
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        height: "30px",
                        width: "120px",
                        marginLeft:'40px',
                      }}
                    >
                      Download CV
                    </button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header