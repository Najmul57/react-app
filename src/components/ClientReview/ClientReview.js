import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import client from '../../assets/images/banner.avif';

class ClientReview extends Component {
    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            autoplay:true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container>
                    <h2 className="section-title">client says</h2>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={6}>
                                   <div className='single-client'>
                                       <img className='client-img' src={client} alt="client"/>
                                       <h1>Md Najmul Hasan</h1>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor
                                           ducimus et ex exercitationem modi possimus totam veniam. A, impedit.</p>
                                   </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={6}>
                                <div className='single-client'>
                                    <img className='client-img' src={client} alt="client"/>
                                    <h1>Md Najmul Hasan</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor
                                        ducimus et ex exercitationem modi possimus totam veniam. A, impedit.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                        <div>
                        <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={6}>
                                <div className='single-client'>
                                    <img className='client-img' src={client} alt="client"/>
                                    <h1>Md Najmul Hasan</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor
                                        ducimus et ex exercitationem modi possimus totam veniam. A, impedit.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;