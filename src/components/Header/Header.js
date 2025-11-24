import React, { useState, useEffect, memo } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import profiledata from '../../assets/data/about.json';
import Button from '../common/Button';
import navigation from '../../assets/data/navigation.json';
import './Header.css';

const Header = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`shadow navbar ${scrolled ? 'scrolled' : ''}`}
      sticky="top"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          className="logo"
          aria-label="Home - Owali Ullah Shawon Portfolio"
        >
          <span className="visually-hidden">Owali Ullah Shawon Portfolio</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto align-items-lg-center">
            {navigation.links.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            
            <li className="nav-item btn-special">
              <Button 
                href={profiledata.resumeLink} 
                newTab 
                className="btn-download"
                variant="accent"
                aria-label="Download resume (opens in new tab)"
              >
                Get Resume
              </Button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
});

Header.displayName = 'Header';

export default Header;
