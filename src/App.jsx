import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Container, Nav, Navbar} from 'react-bootstrap';

import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';


class App extends React.Component{

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
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
