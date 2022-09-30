import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import { motion } from "framer-motion"
import tgit from "../../img/works/tgit.png"
import asaduzzaman from "../../img/works/asaduzzaman.png"
import unifly from "../../img/works/unifly.png"
import youwin from "../../img/works/youwin.png"

const Works = () => {


  return (
    <>
      <Container fluid className='pb-4' id='works' style={{ backgroundColor: " #e6e6e6" }}>
        <h2
          style={{ fontWeight: "bold"}}
          className="h1-responsive my-5 pt-3 text-center"
        >
          SOME OF MY WORKS
        </h2>

        <Row className="justify-content-center">
          
          
          <Col xs={9} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a style={{textDecoration:'none'}} href='https://tgitbangladesh.com/'>
              <Card style={{ marginBottom: "10px" , backgroundColor:'#004AAD'}}>
                <Card.Img
                  cascade
                  className="img-fluid"
                  src={tgit}
                />

                <Card.Body cascade>
                  <Card.Title style={{fontSize:'15px', textAlign:'center',color:'white'}}>TGIT Bangladesh</Card.Title>
                </Card.Body>
              </Card>
              </a>
            </motion.div>
          </Col>

          <Col xs={9} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a style={{textDecoration:'none'}} href='http://unifly-travels.com/'>
              <Card style={{ marginBottom: "10px", backgroundColor:'#389D49' }}>
                <Card.Img
                  cascade
                  className="img-fluid"
                  src={unifly}
                />

                <Card.Body cascade>
                  <Card.Title style={{fontSize:'15px', textAlign:'center',color:'white'}}>Unifly Travels</Card.Title>
                </Card.Body>
              </Card>
              </a>
            </motion.div>
          </Col>

          <Col xs={9} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a style={{textDecoration:'none'}} href='https://youwineducation.org/'>
              <Card style={{ marginBottom: "10px" , backgroundColor:'#5271FF'}}>
                <Card.Img
                  cascade
                  className="img-fluid"
                  src={youwin}
                />

                <Card.Body cascade>
                  <Card.Title style={{fontSize:'15px', textAlign:'center',color:'white'}}>Youwin Education</Card.Title>
                </Card.Body>
              </Card>
              </a>
            </motion.div>
          </Col>

          <Col xs={9} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a style={{textDecoration:'none'}} href='https://asaduzzamanriyad.netlify.app/'>
              <Card style={{ marginBottom: "10px", backgroundColor:'#3B4349' }}>
                <Card.Img
                  cascade
                  className="img-fluid"
                  src={asaduzzaman}
                />

                <Card.Body cascade>
                  <Card.Title style={{fontSize:'15px', textAlign:'center', color:'white'}}>Asaduzzaman Portfolio</Card.Title>
                </Card.Body>
              </Card>
              </a>
            </motion.div>
          </Col>

          
        </Row>
      </Container>
    </>
  );
}

export default Works