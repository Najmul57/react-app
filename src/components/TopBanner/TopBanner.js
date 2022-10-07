import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner">
                    <div className="topBannerOverlay">
                        <Container className="toContent">
                            <Row>
                                <Col className="text-center text-white text-capitalize">
                                    <h1>software engineer</h1>
                                    <h4>web application</h4>
                                    <button className="btn btn-primary text-capitalize">more</button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;