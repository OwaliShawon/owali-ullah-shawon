import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../common/Button';

const SocialMore = () => {
  return (
    <div>
      {/* social */}
      <div>
        <Container className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <Button href="mailto:owali.shawon@gmail.com" newTab title="owali.shawon@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </div>
              <div className="m-2">
                <Button
                  href="https://www.linkedin.com/in/owalishawon/"
                  newTab
                  aria-label="LinkedIn"
                  title="Visit my LinkedIn"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </div>

              <div className="m-2">
                <Button href="https://github.com/OwaliShawon" newTab title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </div>
              <div className="m-2">
                <Button
                  id="youtube-btn"
                  href="https://www.youtube.com/user/oshawon"
                  newTab
                  aria-label="YouTube"
                  title="Let's code together!"
                >
                  <i className="fab fa-youtube"></i> Youtube
                </Button>
              </div>
              <div className="m-2">
                <Button href="https://twitter.com/OwaliShawon" newTab title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </div>
              <div className="m-2">
                <Button href="https://www.facebook.com/OwaliShawon/" newTab title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SocialMore;
