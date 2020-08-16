import React from 'react';
import logo from './images/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (
    <div className='NavBar'>
      <Navbar style={{ backgroundColor: '#f6f5f5' }} fixed='top' expand='md'>
        <Navbar.Brand href='/'>
          <img src={logo} width='50' height='50' alt='' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link>
              <NavLink className='Nav-text' to='/'>
                HOME
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='Nav-text' to='/vote'>
                VOTE
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='Nav-text' to='/donate'>
                DONATE
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='Nav-text' to='/petitions'>
                PETITIONS
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='Nav-text' to='/survey'>
                SURVEY
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
