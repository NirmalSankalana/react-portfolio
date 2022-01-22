import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

function About() {
    return(
        <div>
            <div className="bg-transparent p-0">
        <Container fluid={true} className="pt-5">
            <Row className="justify-content-center py-5">
                <Col md={8}>
                    <h1 className="display-1 font-weight-bolder text-center">About Me</h1>
                </Col>
            </Row>
        </Container>
        </div>
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>

                    <p>Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at MaxCDN. Using a package manager or need to download the source files? Head to the downloads page.</p>

                    <p>Many of our components require the use of JavaScript to function. Specifically, they require jQuery, Popper.js, and our own JavaScript plugins. Place the followings near the end of your pages, right before the closing tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.</p>

                    <p>Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>

                    <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
                </Col>
            </Row>
        </Container>
        </div>
        
    );
}

export default About;