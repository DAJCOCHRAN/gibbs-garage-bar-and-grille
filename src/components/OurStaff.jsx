import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import staff from '../images/staff.jpg'
const OurStaff = () => {
    return (
            <div style={{backgroundColor:"maroon"}}>
            <Container>
                    <Row>
                        <Col className="col-7" style={{ margin: "180px auto", opacity: "0.89" }}>
                            <Card bg="secondary">
                                <Card.Img variant= "top" src={staff}/>
                                <Card.Title>Giving appreciation to our staff</Card.Title>
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>Could add personal description for each of the staff members</h3></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default OurStaff;
