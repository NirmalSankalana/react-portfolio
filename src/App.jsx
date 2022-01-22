import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';

import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends React.Component{

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className=" border-bottom px-3 px-md-4 px-lg-5" expand="lg" fixed="top" bg="light" variant="light">
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
          
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
          
          

          <Footer />
        </Container>

      </Router>
      );
  }

}

export default App;
