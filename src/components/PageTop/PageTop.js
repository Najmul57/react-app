import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage">
                    <div className="topPageOverlay">
                        <Container className="toPageContent">
                            <Row>
                                <Col className="text-center text-white text-capitalize">
                                    <h4>{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}export default PageTop;