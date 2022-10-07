import React, {Component, Fragment} from 'react';
import { Col, Container, Row, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";


class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center my-5">
                    <Row>
                       <Col sm={12}>
                            <h3>How I Do</h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores aut
                               cupiditate eveniet labore molestiae nihil pariatur perspiciatis, placeat quas qui quisquam
                               rem repellat sunt, unde! Ad doloribus eaque facilis nostrum sequi. Autem cum expedita harum
                               illum odit. Cum est libero nostrum reiciendis soluta ut vitae tes. Quisquam.</p>
                           <FontAwesomeIcon onClick={this.modalOpen} icon={faPlayCircle} />
                       </Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        {/*<Modal.Title>Modal heading</Modal.Title>*/}
                    </Modal.Header>
                    <Modal.Body>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ml6KQcjILJM"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;