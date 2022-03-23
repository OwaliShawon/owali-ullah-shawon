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
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-info' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto">
                        {/* navbar pages */}
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/works">
                                Works
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link text-white" href="/blogs">
                                Blogs
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/connect">
                                Connect
                            </a>
                        </li>
                        {/* download resume button */}
                        <li className="nav-item btn-special">
                            <a
                                href={profiledata.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-info btn-download text-light my-3 my-sm-0"
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