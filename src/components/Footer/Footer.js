import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
  return (
    <>
        <Navbar className="pt-4">
          <Container className='justify-content-center'>
            <p>Design and Developed &copy; <span style={{fontWeight:'bold'}}>SAKIB</span> 2022</p>
          </Container>
        </Navbar>
    </>
  )
}

export default Footer