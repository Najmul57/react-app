import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="section-title">our courses</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={logo} alt="logo" className="w-100"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>web development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam
                                        culpa, cumque deserunt distinctio dolores excepturi ipsam, molestiae omnis quidem quis quo
                                        rerum! Excepturi perferendis quasi sed veritatis voluptas.</p>
                                    <Link to="/Course" className="btn btn-success">details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={logo} alt="logo" className="w-100"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>web development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam
                                        culpa, cumque deserunt distinctio dolores excepturi ipsam, molestiae omnis quidem quis quo
                                        rerum! Excepturi perferendis quasi sed veritatis voluptas.</p>
                                    <Link to="contact" className="btn btn-success">details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={logo} alt="logo" className="w-100"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>web development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam
                                        culpa, cumque deserunt distinctio dolores excepturi ipsam, molestiae omnis quidem quis quo
                                        rerum! Excepturi perferendis quasi sed veritatis voluptas.</p>
                                    <Link to="portfolio" className="btn btn-success">details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img src={logo} alt="logo" className="w-100"/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4>web development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam
                                        culpa, cumque deserunt distinctio dolores excepturi ipsam, molestiae omnis quidem quis quo
                                        rerum! Excepturi perferendis quasi sed veritatis voluptas.</p>
                                    <a href="#" className="btn btn-success">details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Courses;