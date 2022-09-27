import React from "react";
import { motion } from "framer-motion";
import "./social.css";
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FcCallback } from "react-icons/fc";
import { HiMail } from "react-icons/hi";
import { Container, CardGroup, Card} from "react-bootstrap";

const Social = () => {
  return (
    <>
      <section className="trial-block shadow3 social-bar" id="ContactUs">
        <div className="height450">
          <div className="section-title text-center">
            <h2
              style={{
                fontWeight: "600",
                paddingTop: "35px",
                marginBottom: "-25px",
              }}
            >
              DON'T BE A STRANGER
              <br />{" "}
              <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                Connect With Me!
              </span>
            </h2>
          </div>
          <div className="social-overlap process-scetion mt100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="social">
                    <div className="social-icons mb-3 iconpad text-center">
                      <a
                        href="https://www.facebook.com/sakkurian/"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaFacebook />
                        </i>
                      </a>

                      <a
                        href="mailto:shakibpatwary001@gmail.com"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <SiGmail />
                        </i>
                      </a>

                      <a
                        href="https://github.com/SakibPatwary"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaGithub />
                        </i>
                      </a>

                      <a
                        href="https://www.instagram.com/_sakiib_/"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaInstagram />
                        </i>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/sakib-patwary/"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaLinkedin />
                        </i>
                      </a>

                      <a
                        href="https://discord.com/channels/@me/864547214205386772"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaDiscord />
                        </i>
                      </a>

                      <a
                        href="https://telegram.me/sakibpatwary"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab">
                          <FaTelegramPlane />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container fluid>
        <CardGroup className="justify-content-center pb-5">
          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.1 }}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="callto:+8801628279057"
            >
              <Card
                className="mt-4 mx-2 text-center"
                style={{ border: "none", backgroundColor: "#cce6ff" }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "18px" }}>
                    <FcCallback style={{ marginRight: "2px" }}></FcCallback>
                    +880 1628-279057
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.1 }}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="mailto:shakibpatwary001@gmail.com"
            >
              <Card
                className="mt-4 mx-2 text-center"
                style={{
                  border: "none",
                  backgroundColor: "#ffd6cc",
                  fontSize: "1px",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "18px" }}>
                    <HiMail
                      style={{ color: "red", marginRight: "2px" }}
                    ></HiMail>
                    shakibpatwary001@gmail.com
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </motion.div>
        </CardGroup>
      </Container>
    </>
  );
};

export default Social;
