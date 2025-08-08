import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import ExternalLink from '../common/ExternalLink';

const Footer = () => {
  return (
    <div className="main-menu">
      <Container className="sub-menu">
        <Row className="logo-upper p-5">
          <Col md="12" className="">
            Designed & Built by
            <ExternalLink className="address text-info" href="https://github.com/OwaliShawon">
              {' '}
              Owali Ullah Shawon
            </ExternalLink>
          </Col>

          <Col md="12" className="">
            <ExternalLink href="https://www.facebook.com/OwaliShawon" className="address">
              <FontAwesomeIcon icon={faFacebook} />
            </ExternalLink>
            &nbsp; &nbsp;
            <ExternalLink href="https://twitter.com/owalishawon" className="address">
              <FontAwesomeIcon icon={faTwitter} />
            </ExternalLink>
            &nbsp; &nbsp;
            <ExternalLink href="https://www.linkedin.com/in/owalishawon/" className="address">
              <FontAwesomeIcon icon={faLinkedin} />
            </ExternalLink>
            &nbsp; &nbsp;
            <ExternalLink href="https://github.com/owalishawon" className="address">
              <FontAwesomeIcon icon={faGithub} />
            </ExternalLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
