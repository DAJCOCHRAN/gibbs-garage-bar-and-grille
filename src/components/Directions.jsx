import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import gibbsMaps from '../images/gibbsMobileMap.jpg'
const Directions = () => {
    
    return (
        <div style={{backgroundColor:"maroon"}}>
            <Container>
                    <Row>
                        <Col className="col-8" style={{ margin: "180px auto", opacity: "0.89" }}>
                            <Card bg="secondary">
                                <Card.Title><a href="https://goo.gl/maps/Gx4NQbnceAbDRg5s5" target="blank" style={{fontSize:"40px", color:"yellow"}}> Click me to see Gibbs in Maps</a></Card.Title>
                                <Card.Img variant= "top" src={gibbsMaps} height="700px" width="auto"/>
                                <Card.Title>Google Maps API</Card.Title>
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>Could Implement a Google Maps Service for users to get directions</h3></Card.Body>
                                    
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default Directions;
