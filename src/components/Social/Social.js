import React from "react";
import Phone from '../../img/Svg/Phone.png'
import Mail from '../../img/Svg/Mail.png'
import facebook from '../../img/Svg/facebook.png'
import twitter from '../../img/Svg/twitter.png'
import github from '../../img/Svg/github.png'
import telegram from '../../img/Svg/telegram.png'
import discord from '../../img/Svg/discord.png'
import instagram from '../../img/Svg/instagram.png'
import linkedIn from '../../img/Svg/linkedIn.png'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/sakkurian/', image: facebook },
  { label: 'Twitter', href: 'https://twitter.com/Iamsakib5', image: twitter },
  { label: 'GitHub', href: 'https://github.com/SakibPatwary', image: github },
  { label: 'Instagram', href: 'https://www.instagram.com/_sakiib_/', image: instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sakib-patwary/', image: linkedIn },
  { label: 'Discord', href: 'https://discord.com/channels/@me/864547214205386772', image: discord },
  { label: 'Telegram', href: 'https://telegram.me/sakibpatwary', image: telegram },
]

const Social = () => (
  <section className="contact-section" id="contact">
    <div className="page-container">
      <div className="contact-intro">
        <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
        <h2>Let’s make something <em>meaningful.</em></h2>
        <p>Reach out or find me around the web.</p>
      </div>
      <div className="contact-links">
        <a className="contact-link" href="mailto:shakibpatwary001@gmail.com">
          <span className="contact-icon"><img src={Mail} alt="" /></span>
          <span><small>Email me</small><strong>shakibpatwary001@gmail.com</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="contact-link" href="tel:+8801628279057">
          <span className="contact-icon"><img src={Phone} alt="" /></span>
          <span><small>Call me</small><strong>+880 1628-279057</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="social-links" aria-label="Social profiles">
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
            <img src={social.image} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Social
