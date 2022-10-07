import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import  logo from '../../assets/images/logo.png';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="section-title">my services</h2>
                   <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img src={logo} alt="logo" width= '100px' />
                                <h2>Web development</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Culpa dolorum ducimus nemo tempore voluptatem. Dolorum
                                    eveniet iste quidem sit soluta!</p>
                            </div>
                        </Col>
                       <Col lg={4} md={6} sm={12}>
                           <div className='serviceCard text-center'>
                               <img src={logo} alt="logo" width= '100px' />
                               <h2>Mobile development</h2>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                   Culpa dolorum ducimus nemo tempore voluptatem. Dolorum
                                   eveniet iste quidem sit soluta!</p>
                           </div>
                       </Col>
                       <Col lg={4} md={6} sm={12}>
                           <div className='serviceCard text-center'>
                               <img src={logo} alt="logo" width= '100px' />
                               <h2>Graphics design</h2>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                   Culpa dolorum ducimus nemo tempore voluptatem. Dolorum
                                   eveniet iste quidem sit soluta!</p>
                           </div>
                       </Col>
                   </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;