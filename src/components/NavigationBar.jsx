import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';

function NavigationBar(){
    return(
        <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand> Nirmal Sankalana </Navbar.Brand>
        <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
        <Navbar.Collapse id='navbar-toggle'>
          <Nav className="ml-auto">
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>                
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavigationBar;