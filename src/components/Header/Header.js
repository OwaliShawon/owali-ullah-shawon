import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./Header.css";

const Header = () => {
    const resumeLink = "https://drive.google.com/file/d/12TxQOPu1uOLvZvgSQLcJANT7NOPZvbYK/view?usp=sharing";
    return (
        <Navbar expand="lg" className="shadow bg-dark-blue py-3" sticky="top">
            <div className="container">
                <Navbar.Brand href="#home" className="logo">
                    <span className="logo-icon text-white">Owali Ullah Shawon</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                                href={resumeLink}
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