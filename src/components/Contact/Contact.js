import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ia2hlis",
                "template_2bqei6g",
                form.current,
                "7AoPx5yHyJm_X2h59"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSubmitted(true);

                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div>
            <div className="contact">
                <div id="container">

                    {!isSubmitted ? (
                        <div> 
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>GET IN TOUCH!</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="name">
                                    <label for="name"></label>
                                    <input type="text" placeholder=" Name" name="name" id="name" required />
                                </div>
                                <div className="email">
                                    <label for="email"></label>
                                    <input type="email" placeholder=" E-mail" name="email" id="email" required />
                                </div>
                                <div className="subject">
                                    <label for="subject"></label>
                                    <input type="text" placeholder=' Subject' name="subject" id="subject" required />
                                </div>
                                <div className="message">
                                    <label for="message"></label>
                                    <textarea name="message" placeholder=" Desire Message" id="message" cols="30" rows="5" required></textarea>
                                </div>
                                <div className="submit">
                                    <input type="submit" value="send" id="form_button" />
                                </div>
                       
                    </form>

                    </div>
                
                 ):(
                <div>
                    <h3 style={{fontSize: '23px',
                    color:'#0000b3',
                    marginBottom:'50px',
                    marginTop: '0px',
                            fontWeight: '700',
                            textAlign: 'center'}}>THANK YOU FOR GETTING IN TOUCH!</h3>
                    </div>
                    )
                    } 

                </div>
            </div>
        </div>
    )
}

export default Contact