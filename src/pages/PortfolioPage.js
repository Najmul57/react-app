import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='p-0'>
                    <TopNavigation title='Prtfolio Page' />
                    <PageTop pageTitle="All Projects" />
                    <RecentProjects />
                    <Footer />
                </Container>
            </Fragment>
        );
    }
}

export default PortfolioPage;