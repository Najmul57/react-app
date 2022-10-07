import React, {Component, Fragment} from 'react';
import '../../assets/css/customs.css';
import '../../assets/css/bootstrap.min.css'
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import props from "prop-types/prop-types";

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            nabBarBg:"navBarBackground",
            navItem:'navItemColor',
            pageTitle: props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',nabBarBg:'navBarBackgroundScroll',navItem:'navItemColorScroll'})
        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle',nabBarBg:'navBarBackground',navItem:'navItemColor'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar fixed='top' className={this.state.nabBarBg} collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand  className={this.state.navBarTitle}> <NavLink to='/'>Najmul</NavLink> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink className={this.state.navItem} to="/">Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navItem} to="/services">services</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navItem} to="/course">courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navItem} to="/portfolio">portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navItem} to="/about">about</NavLink></Nav.Link>
                                <Nav.Link><NavLink className={this.state.navItem} to="/contact">contact</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;