import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='text-center py-5'>
                    <Row>
                       <Col lg={3} md={3} sm={2} xs={12}>
                          <div className='footer-widget'>
                              <h4>Follow Me</h4>
                              <a href=""><FontAwesomeIcon icon={faFacebook} />Facebook</a> <br/>
                              <a href=""><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                          </div>
                       </Col>
                        <Col lg={3} md={3} sm={2} xs={12}>
                            <div className='footer-widget'>
                                <h4>Follow Me</h4>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={2} xs={12}>
                            <div className='footer-widget'>
                                <h4>Follow Me</h4>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={2} xs={12}>
                            <div className='footer-widget'>
                                <h4>Follow Me</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;