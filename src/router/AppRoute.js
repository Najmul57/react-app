import React, {Component, Fragment} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/course" element={<CoursePage />} />
                            <Route path="/portfolio" element={<PortfolioPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default AppRoute;