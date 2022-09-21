import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div id="container">
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        textAlign: 'center'
                    }}>Get in Touch!</h2>
                    
                    <form action="https://formsubmit.co/shakibpatwary001@gmail.com" method="POST" method="post" id="contact_form">
                        <div className="name">
                            <label for="name"></label>
                            <input type="text" placeholder=" Name" name="name" id="name_input" required />
                        </div>
                        <div className="email">
                            <label for="email"></label>
                            <input type="email" placeholder=" E-mail" name="email" id="email_input" required />
                        </div>
                        <div className="subject">
                            <label for="subject"></label>
                            <input type="text" placeholder=' Subject' name="subject" id="subject" required />
                        </div>
                        <div className="message">
                            <label for="message"></label>
                            <textarea name="message" placeholder=" Desire Message" id="message_input" cols="30" rows="5" required></textarea>
                        </div>
                        <div>
                        <input type="hidden" name="_captcha" value="false"/>
                        </div>
                        <div>
                        <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
                        </div>
                        <div className="submit">
                            <input type="submit" value="submit" id="form_button" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact