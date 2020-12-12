import React from 'react';
import { Card, Container, Row, Col, Carousel, Image } from 'react-bootstrap'
import NavigationSecondaryBar from './NavigationSecondaryBar';
import truck from '../images/truck.jpg'
import truckShirts from '../images/truckShirts.jpg'
import entranceChristmas from '../images/entranceChristmas.jpg'
import giftCardDeal from '../images/giftCardDeal.jpg'
import triviaNight from '../images/triviaNight.jpg'
import liveMusicFriday from '../images/liveMusicFriday.jpg'
import kidsEatFree from '../images/kidsEatFree.jpg'
import happyHour from '../images/happyHour.jpg'
const HomePage = () => {
    return (
        <>
            <div className="homePage">
            
                <Container>
                    <Row style={{width:"100%"}}>
                        
                    </Row>
                    
                    <Row>
                        <Col className="col-7" style={{ margin: "210px auto", background: 'rgba(204, 204, 204, 0.7)' }}>
                                    <h3 style={{fontWeight:"600", opacity: "1.00"}}>Welcome to the Gibbs Garage Bar and Grille Website Home Page!!!</h3>
                                    <h3 style={{fontWeight:"600", opacity: "1.00"}}>COVID AWARENESS:</h3>
                                    <h5 style={{fontWeight:"600", opacity: "1.00"}}>Gibbs is following state and federal guidelings during the COVID-19 pandemic</h5>
                                    
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-9" style={{ margin: "0 auto", backgroundColor:"black", textAlign:"center", color:"yellow" }}>
                            <h1>Gallery</h1>
                            <Carousel>
                            <Carousel.Item>
                                    <Image className="d-block w-100" src={giftCardDeal} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={triviaNight} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={liveMusicFriday} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={kidsEatFree} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={happyHour} width={825} height={615}/>
                                </Carousel.Item>
                            <Carousel.Item>
                                    <Image className="d-block w-100" src={entranceChristmas} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={truckShirts} width={825} height={615}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="d-block w-100" src={truck} width={825} height={615}/>
                                </Carousel.Item>
                            </Carousel>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default HomePage;
