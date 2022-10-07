import React, {Component, Fragment} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
               <Container className='py-5'>
                   <Row>
                       <Col lg={6} md={6} sm={12}>
                           <Form>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                               </Form.Group>

                               <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" placeholder="Password" />
                               </Form.Group>
                               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                   <Form.Check type="checkbox" label="Check me out" />
                               </Form.Group>
                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </Form>
                       </Col>
                       <Col lg={6} md={6} sm={12}>
                          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis nihil numquam repellendus unde voluptatum!
                              Consectetur dignissimos eum eveniet iusto nostrum numquam tempore veritatis? Assumenda cupiditate enim impedit
                              magni nihil nisi odit perferendis placeat porro? Facere repudiandae suscipit ut voluptatem? Ab consequatur ducimus
                              optio quam rerum similique totam. Amet dignissimos et ex sapiente voluptas. Animi, aspernatur cupiditate facere
                              laboriosam, maiores minima nihil numquam, praesentium provident quidem sequi vero voluptas. A accusantium
                              architecto commodi culpa debitis dolorum, ea earum eligendi error esse eum ex facilis fugit impedit
                              in molestias mollitia nihil perspiciatis
                              praesentium quam quia repellendus rerum sequi, sint suscipit tenetur.</p>
                       </Col>
                   </Row>
               </Container>
            </Fragment>
        );
    }
}

export default Contact;