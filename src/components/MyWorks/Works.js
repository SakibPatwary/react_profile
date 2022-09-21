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
      <Container className='pb-5' tyle={{ paddingTop:'0px', marginTop:'0px'}}>
        <h2
          style={{ fontWeight: "bold" , paddingTop:'0px', marginTop:'0px'}}
          className="h1-responsive my-5 pt-3 text-center"
        >
          Projects & Works
        </h2>

        <Row className="justify-content-center">
          
          
          <Col xs={12} md={3}>
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

          <Col xs={12} md={3}>
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

          <Col xs={12} md={3}>
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

          <Col xs={12} md={3}>
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