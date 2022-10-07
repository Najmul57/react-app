import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';



class Summary extends Component {
    render() {
        return (
            <Container fluid={true} className="summaryBanner my-5">
                <div className="summaryOverlay">
                    <Container className="text-center text-white">
                        <Row className="align-items-center">
                            <Col lg={8} md={6} sm={12}>
                                <Row>
                                    <Col>
                                        <CountUp start={0} end={100} delay={0}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                        <h4>Total Projects</h4>
                                    </Col>
                                    <Col>
                                        <CountUp start={0} end={200} delay={0}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                </div>
                                            )}
                                        </CountUp>
                                        <h4>Total Projects</h4>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="text-black">
                                    <Card >
                                        <Card.Body>
                                            <Card.Title>How i Work</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum.</li>
                                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor.</li>
                                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Lorem ipsum dolor sit amet.</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    }
}

export default Summary;
