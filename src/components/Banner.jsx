import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Banner() { 
    return(
        <div className="bg-transparent p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8}>
                        <h1 className="display-1 font-weight-bolder">Hi I'm Nirmal Sankalana</h1>
                        <h3 className="display-4 font-weight-light">I'm a FullStack Developer</h3>
                        <h3 className="lead font-weight-normal">Checkout my Projects Below...</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
 }

 export default Banner;