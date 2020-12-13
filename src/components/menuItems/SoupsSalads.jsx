import React from 'react';
import { Row, Col, Card, CardImg } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import { mobileCardMenuItem } from '../../styles'

import chili from '../../images/menu/soups-salads/chili.jpg'
import wedgeSalad from '../../images/menu/soups-salads/wedgeSalad.jpg'



const SoupsSalads = () => {
    return (
        <div className='menuBackground'>
            <MediaQuery minWidth={960}>
            <Row>
                <Col className='col-4' />

                <Col className='col-4'>
                    <div className='border border-warning rounded-pill' style={{ textAlign: "center", backgroundColor: "black", margin: "4% 0", color: "yellow", border: '5px solid yelow', padding: '2px 50px' }}>
                        <h1>Soups & Salads</h1>
                    </div>
                </Col>
                <Col className='col-4' />
            </Row>
            <Row style={{ marginBottom: "5%" }}>
                <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "5%" }}>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Caesar Salad</Card.Title>
                        {/* <CardImg src={chili}/> */}
                        <Card.Body>
                            <p>crispy romaine topped with croutons, parmesan & our home-made caesar dressing</p>
                        </Card.Body>
                    </Card>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Roasted Beet & Spinach Salad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Fresh Spinach, liced Beets, pickled red onions, goat cheese, candied walnuts with house-made vinaigrette</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "2.8%" }}>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Wedge Salad</Card.Title>
                        <CardImg src={wedgeSalad} />
                        <Card.Body>
                            <p>Crisp iceburg lettuce, Tomatoes, bacon, onions, bleu cheese crumble and servered with bleu cheese dressing</p>
                        </Card.Body>
                    </Card>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Mixed Green Salad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Mixed greens, tomatoes, red onion & cukes with your choice of dressing</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginBottom: "5%" }}>
                <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "5%" }}>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Taco Salad</Card.Title>
                        {/* <CardImg src={chili}/> */}
                        <Card.Body>
                            <p>Crisp iceberg lettuce, ground beef, pico de gallo, colby jack cheese, avocado, tortilla chips & cilantro lime sour cream</p>
                        </Card.Body>
                    </Card>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Chopped Cobb Sallad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Mixed Greens, bacon bits, red onion, cucumbers, tomatoes, hard boiled egg, chicken, bleu cheese crumbles served with bleu cheese dressing</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "2.8%" }}>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Gibb's Chili</Card.Title>
                        <CardImg src={chili} />
                        <Card.Body>
                            <p>House made chili served with tortilla chips & cheese blend</p>
                        </Card.Body>
                    </Card>
                    <Card bg="" style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                        <Card.Title>Corn Chowder</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>A hearty mix of corn, potatoes & onions in a creamy fire roasted base</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        <br />
        </MediaQuery>
        {/* SMALL SCREEN ------------------------------------------------------------------------------------------------------------------*/}
        <MediaQuery maxWidth={960}>
                <Row>
                    <Col className='col-4' />

                    <Col className='col-4'>
                        <div className='border border-warning rounded-pill' style={{ textAlign: "center", backgroundColor: "black", margin: "8% 0", color: "yellow", border: '5px solid yelow', padding: '15px 0px 15px 0px' }}>
                            <span style={{textSize:"0.5em"}}>Soups & Salads</span>
                        </div>
                    </Col>
                    <Col className='col-4' />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5' >
                        <Card style={mobileCardMenuItem} >
                        <Card.Title>Caesar Salad</Card.Title>
                        {/* <CardImg src={chili}/> */}
                        <Card.Body>
                            <p>crispy romaine topped with croutons, parmesan & our home-made caesar dressing</p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-5">
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Roasted Beet & Spinach Salad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Fresh Spinach, liced Beets, pickled red onions, goat cheese, candied walnuts with house-made vinaigrette</p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Wedge Salad</Card.Title>
                        <CardImg src={wedgeSalad} />
                        <Card.Body>
                            <p>Crisp iceburg lettuce, Tomatoes, bacon, onions, bleu cheese crumble and servered with bleu cheese dressing</p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem} >
                        <Card.Title>Mixed Green Salad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Mixed greens, tomatoes, red onion & cukes with your choice of dressing</p>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Taco Salad</Card.Title>
                        {/* <CardImg src={chili}/> */}
                        <Card.Body>
                            <p>Crisp iceberg lettuce, ground beef, pico de gallo, colby jack cheese, avocado, tortilla chips & cilantro lime sour cream</p>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Chopped Cobb Sallad</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>Mixed Greens, bacon bits, red onion, cucumbers, tomatoes, hard boiled egg, chicken, bleu cheese crumbles served with bleu cheese dressing</p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1"/>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Gibb's Chili</Card.Title>
                        <CardImg src={chili} />
                        <Card.Body>
                            <p>House made chili served with tortilla chips & cheese blend</p>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col className="col-5">
                        <Card style={mobileCardMenuItem}>
                        <Card.Title>Corn Chowder</Card.Title>
                        {/* <CardImg src={chili} /> */}
                        <Card.Body>
                            <p>A hearty mix of corn, potatoes & onions in a creamy fire roasted base</p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1"/>
                </Row>
                
                <br />
                <br />
            </MediaQuery>
        </div>
    );
}

export default SoupsSalads;
