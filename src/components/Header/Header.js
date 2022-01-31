import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import profiledata from "../../assets/data/about.json";
import "./Header.css";

const Header = () => {
    return (
        <Navbar expand="lg" className="shadow navbar py-3" sticky="top">
            <div className="container">
                <Navbar.Brand href="#home" className="logo">
                    <span className="logo-icon text-white"></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#skill">
                                SKILL
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#portfolio">
                                PORTFOLIO
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contact">
                                CONTACT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href={profiledata.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-primary btn-download text-white my-3 my-sm-0"
                                type="button"
                            >
                                Resume
                            </a>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;