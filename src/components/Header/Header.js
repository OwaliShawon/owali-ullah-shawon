import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import profiledata from '../../assets/data/about.json';
import navigation from '../../assets/data/navigation.json';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow navbar py-3" sticky="top">
      <div className="container">
        <Navbar.Brand as={NavLink} to="/" className="logo">
          <span className="logo-icon text-white"></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-info" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            {/* navbar pages rendered from config */}
            {navigation.links.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
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
