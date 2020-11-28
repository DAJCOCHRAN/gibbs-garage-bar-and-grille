import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col style={{margin: "20% auto"}}>
                    <h1>404: Page Not Found</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NotFoundPage;
