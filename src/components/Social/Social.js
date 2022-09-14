import React from 'react'
import './social.css'
import {FaFacebook,FaTwitter,FaDiscord,FaSnapchat,FaSpotify,FaTelegram, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Social = () => {
  return (
    <>
      <section className="trial-block shadow3 social-bar" id="ContactUs">
        <div className="height450">
          <div className="section-title text-center">
          <h2 style={{fontWeight: '600', paddingTop: '15px', paddingBottom: '0px'}}>Connect With Me!</h2>
            <span className="section-title-line section-title-line"></span>
          </div>
          <div className="social-overlap process-scetion mt100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="social">
                    <div className="social-icons mb-3 iconpad text-center">
                      <a href="https://www.facebook.com/sakkurian/"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaFacebook/></i>
                      </a>

                      <a href="mailto: shakibpatwary001@gmail.com"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><SiGmail/></i>
                      </a>

                      <a href="https://www.instagram.com/_sakiib_/"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaInstagram/></i>
                      </a>

                      <a href="https://github.com/SakibPatwary"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaGithub/></i>
                      </a>

                      <a href="https://www.linkedin.com/in/sakib-patwary/"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaLinkedin/></i>
                      </a>

                      <a href="https://discord.com/channels/@me/864547214205386772"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaDiscord/></i>
                      </a>

                      <a href="#"
                        target="_blank"
                        className="slider-nav-item">
                        <i className="fab"><FaTelegram/></i>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Social