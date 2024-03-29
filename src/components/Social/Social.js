import React from "react";
import { motion } from "framer-motion";
import "./social.css";
import { Container, CardGroup, Card} from "react-bootstrap";
import Phone from '../../img/Svg/Phone.png'
import Mail from '../../img/Svg/Mail.png'
import facebook from '../../img/Svg/facebook.png'
import twitter from '../../img/Svg/twitter.png'
import github from '../../img/Svg/github.png'
import telegram from '../../img/Svg/telegram.png'
import discord from '../../img/Svg/discord.png'
import instagram from '../../img/Svg/instagram.png'
import linkedIn from '../../img/Svg/linkedIn.png'

const Social = () => {
  return (
    <>
      <section className="trial-block shadow3 social-bar" id="contact">
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
                        <img className="s-icon" src={facebook} alt="facebook icon" />
                      </a>

                      <a
                        href="https://twitter.com/Iamsakib5"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={twitter} alt="twitter icon" />
                      </a>

                      <a
                        href="https://github.com/SakibPatwary"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={github} alt="github icon" />
                      </a>

                      <a
                        href="https://www.instagram.com/_sakiib_/"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={instagram} alt="instagram icon" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/sakib-patwary/"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={linkedIn} alt="linkedIn icon" />
                      </a>

                      <a
                        href="https://discord.com/channels/@me/864547214205386772"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={discord} alt="discord icon" />
                      </a>

                      <a
                        href="https://telegram.me/sakibpatwary"
                        target="_blank"
                        className="slider-nav-item"
                      >
                         <img className="s-icon" src={telegram} alt=" telegram icon" />
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
              href="tel:+8801628279057"
            >
              <Card
                className="mt-4 mx-2 text-center"
                style={{ border: "none", backgroundColor: "#cce6ff" }}
              >
                <Card.Body>
                  <Card.Title
                    className="c-contact-item"
                    style={{ fontSize: "18px", margin: "0px" }}
                  >
                    <img className="c-icon" src={Phone} alt="" />
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
                  <Card.Title
                    className="c-contact-item"
                    style={{ fontSize: "18px", margin: "0px" }}
                  >
                    <img className="c-icon" src={Mail} alt="" />
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
