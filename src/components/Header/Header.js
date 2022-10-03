import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../img/logo.gif";
import SakibCV from "./SakibCV.pdf";

const Header = () => {
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
              <a href="#">
                <img
                  style={{ maxWidth: "250px", maxHeight: "100px" }}
                  src={logo}
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ maxWidth: "60%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  style={{ fontWeight: "bold" }}
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Quick Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body
                style={{
                  lineHeight: "30px",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#works">Works</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Nav.Link href={SakibCV} download>
                    <button
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        height: "30px",
                        width: "120px",
                        marginLeft: "20px",
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
};

export default Header;
