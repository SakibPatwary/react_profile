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
        id='skills'
        className="pb-4"
        style={{ marginTop: "-150px", backgroundColor: " #e6e6e6" }}
      >
        <h2
          style={{ fontWeight: "bold", paddingTop: "0px", marginTop: "0px" }}
          className="h1-responsive my-5 pt-3 text-center"
        >
          WHAT I CAN DO!
        </h2>

        <Row className="justify-content-center">
          <Col xs={10} md={2}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card style={{ marginBottom: "10px", borderRadius: "10%" }}>
                <Card.Img cascade className="img-fluid" src={skills1} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    Frontend Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={10} md={2}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card style={{ marginBottom: "10px", borderRadius: "10%" }}>
                <Card.Img cascade className="img-fluid" src={skills4} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    Software Engineering
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={10} md={2}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card style={{ marginBottom: "10px", borderRadius: "10%" }}>
                <Card.Img cascade className="img-fluid" src={skills2} />

                <Card.Body cascade>
                  <Card.Title style={{ fontSize: "15px", textAlign: "center" }}>
                    UI/UX Design
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={10} md={2}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Card style={{ marginBottom: "10px", borderRadius: "10%" }}>
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