import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import NavigationSecondaryBar from './NavigationSecondaryBar';
const HomePage = () => {
    return (
        <>
            <div className="homePage">
            
                <Container>
                    <Row style={{width:"100%"}}>
                        
                    </Row>
                    <Row>
                        <Col className="col-7" style={{ margin: "180px auto", opacity: "0.89" }}>
                            <Card bg="secondary">
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>Welcome to the Gibbs Garage Bar and Grille Website Home Page!!!</h3></Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-7" style={{ margin: "15% auto", opacity: "0.89" }}>
                            <Card bg="secondary">
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>COVID AWARENESS:</h3>
                                    <h5 style={{fontWeight:"400"}}>Gibbs is following state and federal guidelings during the COVID-19 pandemic</h5>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
                    <Row style={{backgroundColor:"maroon"}}>
                        <Col style={{ margin: "5% auto", opacity: "0.85", width:"30%" }}>
                            <Card bg="secondary">
                                <Card.Body>
                                    <h3 style={{fontWeight:"600"}}>Any other content can be added, the sky is the limit!!!!!</h3></Card.Body>
                            </Card>
                        </Col>
                    </Row>
        </>
    );
}

export default HomePage;
