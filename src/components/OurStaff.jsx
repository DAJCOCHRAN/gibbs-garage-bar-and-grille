import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import staff from '../images/staff.jpg'
const OurStaff = () => {
    return (
            <div className="menuBackground">
            <Container>
                    <Row>
                        <Col className="col-7" style={{ margin: "180px auto"}}>
                            <Card bg="secondary">
                                <Card.Img variant= "top" src={staff}/>
                                <Card.Title>Giving appreciation to our staff</Card.Title>
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>Shout out to all the Gibbs Members for making and serving all of this delicious food!!</h3></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default OurStaff;
