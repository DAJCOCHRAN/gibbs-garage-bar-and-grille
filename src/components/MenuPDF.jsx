import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import menuOne from '../images/physicalMenus/menuOne.jpg'
import menuTwo from '../images/physicalMenus/menuTwo.jpg'
import drinkMenuOne from '../images/physicalMenus/drinkMenuOne.jpg'
import drinkMenuTwo from '../images/physicalMenus/drinkMenuTwo.jpg'
const MenuPDF = () => {
    return (
        <div style={{ backgroundColor: "maroon" }}>
                <Row>
                    <Col className='col-3'></Col>
                    <Col className='col-6' >
                    <Image src={menuOne} style={{margin:'0 auto', display:'block', width:'100%', height:'100%'}}/>
                    </Col>
                    <Col className='col-3'></Col>
                </Row>
                <Row>
                    <Col className='col-3'></Col>
                    <Col className='col-6'>
                    <Image src={menuTwo} style={{margin:'0 auto', display:'block',  width:'100%', height:'100%'}} />
                    </Col>
                    <Col className='col-3'></Col>
                </Row>
                <Row>
                    <Col className='col-2'></Col>
                    <Col className='col-4'>
                    <Image src={drinkMenuOne} style={{margin:'0 auto', display:'block', width:'100%', height:'100%'}} />
                    </Col>
                    <Col className='col-4'>
                    <Image src={drinkMenuTwo} style={{margin:'0 auto', display:'block',  width:'100%', height:'100%'}} />
                    </Col>
                    <Col className='col-2'></Col>
                </Row>
        </div >
    );
}

export default MenuPDF;
