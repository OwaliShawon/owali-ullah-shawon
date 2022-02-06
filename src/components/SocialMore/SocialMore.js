import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const SocialMore = () => {
    return (
        <div>
            {/* social */}
            <div>
                <Container className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="mailto:owali.shawon@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="owali.shawon@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="linkedin.com/in/owalishawon/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Visit my LinkenIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </Button>
                                </a>
                            </div>

                            <div className="m-2">
                                <a href="https://github.com/OwaliShawon" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-success" title="My other projects">
                                        <i className="fab fa-github-square"></i> GitHub
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.youtube.com/user/oshawon" target="_blank" rel="noopener noreferrer">
                                    <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                                        <i class="fab fa-youtube"></i> Youtube
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://twitter.com/OwaliShawon" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-light" title="Tweets are welcomed!">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.facebook.com/OwaliShawon/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Say hello on FB">
                                        <i className="fab fa-facebook-square"></i> FaceBook
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SocialMore;