import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology:'Java',Projects:100},
                {Technology:'PHP',Projects:90},
                {Technology:'React',Projects:80},
                {Technology:'Angular',Projects:70},
                {Technology:'VUE',Projects:60}
            ]
        }
    }


    render() {
        let blue = 'rgba(0,115,230,.8)';
        return (
            <Fragment>
                <Container>
                    <h2 className="section-title">technology used</h2>
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey='Technology'></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="Projects" fill={blue}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div className="technology-used">
                              <p >
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores optio quae
                                  quisquam recusandae. Ab ea eligendi expedita incidunt qui quibusdam, repudiandae tempora.
                                  Adipisci aliquam error, est ipsum quasi qui tenetur! Ab, ad assumenda blanditiis consequatur
                                  explicabo fugiat ipsa nobis optio reprehenderit sed? Consequatur, possimus praesentium. <br/>
                                  A ab ad aperiam architecto asperiores atque exercitationem expedita ipsa, magni nobis quam,
                                  recusandae rem repellendus similique soluta. A aliquid blanditiis consectetur, <br/> culpa delectus
                                  eius eum magnam natus nemo nulla, quisquam reiciendis temporibus. Ab adipisci aliquid aperiam
                                  deleniti, dicta eos est
                                  facere facilis, iusto minus nihil non pariatur quos reiciendis saepe tempore vero, voluptatum.
                              </p>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;