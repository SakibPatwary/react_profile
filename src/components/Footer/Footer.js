import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
  return (
    <>
        <Navbar className="mb-3 pt-2">
          <Container className='justify-content-center'>
            <p>Design and Developed &copy; SAKIB 2022</p>
          </Container>
        </Navbar>
    </>
  )
}

export default Footer