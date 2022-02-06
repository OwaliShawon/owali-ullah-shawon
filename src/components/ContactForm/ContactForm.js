import emailjs from '@emailjs/browser';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import "./ContactForm.css";

const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_vvi37ho', 'template_ge44qpr', form.current, 'user_RUpQSThF0gMSLd9vpXPnx')
            .then((result) => {
                console.log(result.text);
                alert("Thank You for your Message, I will reply to you soon!");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section>
            <Container>
                <div className="section-title-text mb-2">
                    <h1 className="pt-3 text-start pb-3 text-center">CONNECT WITH ME</h1>
                </div>

                <div className='contact-form'>
                    <form className="bg-dark" ref={form} onSubmit={sendEmail}>
                        <div className='form-icon'>
                            <FontAwesomeIcon className='m-5' icon={faIdCardAlt} color="white" size="6x"></FontAwesomeIcon>
                        </div>
                        {/* <label>Name</label> */}
                        <input type="text" name="user_name" placeholder='Your Name' className='item' required />
                        <br />
                        <input type="email" name="user_email" placeholder='Email Address' className='item' required />
                        <br />
                        <textarea name="message" placeholder='Write Down Message' className='item' required />
                        <br />
                        <input type="submit" value="Send" className='item btn btn-outline-info' />
                    </form>
                </div>
            </Container>
        </section>

    );
};

export default Contact;