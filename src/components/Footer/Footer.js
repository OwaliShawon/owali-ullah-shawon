import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-menu">
      <Container className="sub-menu">
  <Row className="logo-upper p-5">

          <Col md="12" className="">
            Designed & Built by
            <a className="address text-info" href="https://github.com/OwaliShawon">
              {' '}
              Owali Ullah Shawon
            </a>
          </Col>

          <Col md="12" className="">
            <a
              href="https://www.facebook.com/OwaliShawon"
              target="_blank"
              className="address"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            &nbsp; &nbsp;
            <a
              href="https://twitter.com/owalishawon"
              target="_blank"
              className="address"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            &nbsp; &nbsp;
            <a
              href="https://www.linkedin.com/in/owalishawon/"
              target="_blank"
              className="address"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            &nbsp; &nbsp;
            <a
              href="https://github.com/owalishawon"
              target="_blank"
              className="address"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
