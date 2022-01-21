import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Nirmal Sankalana',
      headerLinks:[
        {title:'Home', path: '/'},
        {title:'About', path: '/about'},
        {title:'Contact', path: '/contact'}
      ],
      home: {
        title:'Title Home', 
        subTitle: 'Subtitle Home',
        text: 'Text of the home page is here'
      },
      about: {
        title:'About Me',
      },
      contact: {
        title:'Contact',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Nirmal Sankalana </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className="ml-auto">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/about'>About</Link>
                <Link className="nav-link" to='/contact'>Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <Route path='/' exact render={()=> <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={()=> <About title={this.state.about.title} />} />
          <Route path='/contact' exact render={()=> <Contact title={this.state.contact.title} />} /> */}
          

          {/* <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}  /> */}

          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
					<Route path="/about" render={() => <About title={this.state.about.title} />} />
					<Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
          

          <Footer />
        </Container>
      </Router>
      );
  }

}

export default App;
