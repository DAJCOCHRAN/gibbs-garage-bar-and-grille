import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import menuOne from '../images/menuOne.jpg'
import menuTwo from '../images/menuTwo.jpg'
import drinkMenuOne from '../images/drinkMenuOne.jpg'
import drinkMenuTwo from '../images/drinkMenuTwo.jpg'
const MenuPDF = () => {
    return (
        <div style={{margin:"100px auto", backgroundColor:"maroon"}}>
            <Container>
                <Row>
                    <Col>
                        <Image src={menuOne} />
                    </Col>
                    <Col>
                        <Image src={menuTwo} />
                    </Col>
                    <Col>
                        <Image src={drinkMenuOne} />
                    </Col>
                    <Col>
                        <Image src={drinkMenuTwo} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MenuPDF;
