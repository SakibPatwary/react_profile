import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './experience.css'
import { motion } from "framer-motion";
import html from "../../img/Svg/html.png";
import css from "../../img/Svg/css.png";
import js from "../../img/Svg/js.png";
import react from "../../img/Svg/react.png";
import bootstrap from "../../img/Svg/bootstrap.png";
import git from "../../img/Svg/git.png";
import figma from "../../img/Svg/figma.png";
import canva from "../../img/Svg/canva.png";
import ai from "../../img/Svg/ai.png";
import ps from "../../img/Svg/ps.png";
import filmora from "../../img/Svg/filmora.png";
import framer from "../../img/Svg/framer.png";


const Experience = () => {
  return (
    <>
      <Container>
        <h2
          style={{ fontWeight: "bold" }}
          className="h1-responsive my-5 text-center"
        >
          SKILLS & EXPERIENCE
        </h2>

        <Row xs={1} md={2}>
          <Col>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Row className="justify-content-end">
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={html} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={css} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={js} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={react} />
                      </Card>
                    </motion.div>
                  </Col>
                </Row>

                <Row className="justify-content-end pt-4">
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img
                          style={{ borderRadius: "50%" }}
                          src={bootstrap}
                        />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img
                          style={{ borderRadius: "50%" }}
                          src={framer}
                        />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={git} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={figma} />
                      </Card>
                    </motion.div>
                  </Col>
                </Row>

                <Row className="justify-content-end pt-4">
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={canva} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={ai} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img style={{ borderRadius: "50%" }} src={ps} />
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={3} md={2}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card style={{ border: "none" }}>
                        <Card.Img
                          style={{ borderRadius: "50%" }}
                          src={filmora}
                        />
                      </Card>
                    </motion.div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{border:'none'}} className="pt-4 ">
              <Card.Body>
                <main className="CV-page">
                  <div className="CV-grid">
                    <div className="CV-grid-column">
                      <div className="CV-jobs">
                        <section className="CV-timeline CV-job">
                          <h4 className="CV-timeline-heading">
                            <span className="CV-timeline-heading-title">
                              Junior Web Developer
                            </span>
                            <span className="CV-timeline-heading-location">
                              TGIT Bangladesh
                            </span>
                            <small className="CV-timeline-heading-duration">
                              May 2022 - Present
                            </small>
                          </h4>
                        </section>
                        <section className="CV-timeline CV-job">
                          <h4 className="CV-timeline-heading">
                            <span className="CV-timeline-heading-title">
                              Part-time Web Developer
                            </span>
                            <span className="CV-timeline-heading-location">
                              TGIT Bangladesh
                            </span>
                            <small className="CV-timeline-heading-duration">
                              January 2022 - April 2022
                            </small>
                          </h4>
                        </section>
                      </div>
                    </div>
                  </div>
                </main>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
