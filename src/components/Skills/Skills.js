import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import { motion } from "framer-motion"
import skills1 from "../../img/skills/skills1.png"
import skills2 from "../../img/skills/skills2.png"
import skills3 from "../../img/skills/skills3.png"
import skills4 from "../../img/skills/skills4.png";

const Works = () => {


  return (
    <>
      <Container
        fluid
        className="pb-5"
        tyle={{ paddingTop: "0px", marginTop: "0px" }}
      >
        <h2
          style={{ fontWeight: "bold", paddingTop: "0px", marginTop: "0px" }}
          className="h1-responsive my-5 pt-3 text-center"
        >
          Skills & Experience
        </h2>

        <Row className="justify-content-center">
          <Col xs={12} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card style={{ marginBottom: "10px" }}>
                <Card.Img cascade className="img-fluid" src={skills1} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    Frontend Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card style={{ marginBottom: "10px" }}>
                <Card.Img cascade className="img-fluid" src={skills4} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    Software Engineering
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card style={{ marginBottom: "10px" }}>
                <Card.Img cascade className="img-fluid" src={skills2} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    UI/UX Design
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} md={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Card style={{ marginBottom: "10px" }}>
                <Card.Img cascade className="img-fluid" src={skills3} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    Graphics Design
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Works