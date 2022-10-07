import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='About Page' />
                <PageTop pageTitle="About Me" />
                <About />
                <Footer />
            </Fragment>
        );
    }
}

export default AboutPage;