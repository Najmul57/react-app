import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='p-0'>
                    <TopNavigation title='Course Page' />
                    <PageTop pageTitle='All Courses' />
                    <Courses />
                    <Footer />
                </Container>
            </Fragment>
        );
    }
}

export default CoursePage;