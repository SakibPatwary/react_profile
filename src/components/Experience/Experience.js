import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './experience.css'

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

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                  skills
                                </Card.Body>
                              </Card>
                            </Col>

                            <Col>
                              <Card>
                                <Card.Body>Experience</Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </>
                      );
};

                      export default Experience;
