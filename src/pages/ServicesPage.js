import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Service Page' />
                <PageTop pageTitle='Our Services' />
                <Services />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicesPage;