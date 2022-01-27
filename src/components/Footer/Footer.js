import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="main-menu">
            <Container fluid className="sub-menu">
                <Row className="logo-upper">
                    <Col md="4">
                        <address>
                            <a href="tel:+801842320960" className="address"><FontAwesomeIcon icon={faPhone} />  (+880) 1842-320960 </a>
                            &nbsp; &nbsp;
                            <a href="mailto: owali.shawon@gmail.com" className="address"><FontAwesomeIcon icon={faAt} /> owali.shawon@gmail.com</a>
                        </address>
                    </Col>

                    <Col md="4"><a className="address" href='#hero'>A Owali Ullah Shawon Portfolio Site</a></Col>

                    <Col md="4">
                        <a href="#" className="address"><FontAwesomeIcon icon={faFacebook} /></a>
                        &nbsp; &nbsp;
                        <a href="#" className="address"><FontAwesomeIcon icon={faTwitter} /></a>
                        &nbsp; &nbsp;
                        <a href="#" className="address"><FontAwesomeIcon icon={faLinkedin} /></a>
                        &nbsp; &nbsp;
                        <a href="#" className="address"><FontAwesomeIcon icon={faGithub} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Footer;