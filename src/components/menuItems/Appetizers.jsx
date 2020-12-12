import React from 'react';
import { Row, Col, Card, CardImg } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import { mobileCardMenuItem } from '../../styles'
import BeerCheesePretzels from '../../images/menu/appetizers/BeerCheesePretzels.jpg'
import frenchOnionDip from '../../images/menu/appetizers/frenchOnionDip.jpg'

const Appetizers = () => {
    return (
        <div className='menuBackground'>
            <MediaQuery minWidth={960}>
                <Row>
                    <Col className='col-4' />

                    <Col className='col-4'>
                        <div className='border border-warning rounded-pill' style={{ textAlign: "center", backgroundColor: "black", margin: "4% 0", color: "yellow", border: '5px solid yelow', padding: '2px 50px' }}>
                            <h1>Appetizers</h1>
                        </div>
                    </Col>
                    <Col className='col-4' />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "5%" }}>
                        <Card  style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Wings</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Grilled to perfection! served with a choice of sauce/dusting</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Tenders</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Hand battered chicken strips served plain or tossed in your choice of sauce/dusing</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "2.8%" }}>
                        <Card style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Cauliflower</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Lightly battered cauliflower bites deep fried and tossed in your choice of sauce or dusting</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title></Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <h3>Sauces:</h3>
                                <p>BBQ, buffalo, sweet red chili, mango habenaro, honey mustard</p>
                                <h3>Dustings:</h3>
                                <p>Salt & Vinegar, garlic parmesan, cajun</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "5%" }}>
                        <Card  style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Nachos</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Tri-color chips topped with onion, tomato, black olives, jalapeno & house cheese blend.</p>
                                <p>*Add Pulled pork or chili for extra charge</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Fried Brussel Sprouts</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Topped with garlic, parm & served with honey mustard sauce</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "2.8%" }}>
                        <Card style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Beer Cheese Pretzels</Card.Title>
                            <CardImg src={BeerCheesePretzels} />
                            <Card.Body>
                                <p>A hearty cheese sauce made with craft beer served with pretzel sticks</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Fried Pickles</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Battered & deep fried. Served with ranch dressing</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "5%" }}>
                        <Card  style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Poutine</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Served with cheese curds, gravy and scallions</p>
                                <p>*Add Pulled pork or chili for extra charge</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Spinach Artichoke Dip</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Creamy house recipie topped with parmesan served with pita chips</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{ display: 'flex', flexDirection: 'row', marginLeft: "2.8%" }}>
                        <Card style={{ marginLeft: "10%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>Buffalo Chicken Dip</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Made fresh in-house and served with tortilla chips</p>
                            </Card.Body>
                        </Card>
                        <Card style={{ marginLeft: "5%", backgroundColor: "whitesmoke", width: '100%', height: '100%' }}>
                            <Card.Title>French Onion Dip</Card.Title>
                            <CardImg src={frenchOnionDip} />
                            <Card.Body>
                                <p>Fresh made carmelized onions & our house beef stock. Served with chips</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                {/* MOBILE ------------------------------------------------------------------------------------------------------------------*/}
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <Row>
                    <Col className='col-4' />

                    <Col className='col-4'>
                        <div className='border border-warning rounded-pill' style={{ textAlign: "center", backgroundColor: "black", margin: "8% 0", color: "yellow", border: '5px solid yelow', padding: '15px 0px 15px 0px' }}>
                            <h4>Appetizers</h4>
                        </div>
                    </Col>
                    <Col className='col-4' />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5' >
                        <Card style={mobileCardMenuItem} >
                            <Card.Title>Wings</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Grilled to perfection! served with a choice of sauce/dusting</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-5">
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Tenders</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Hand battered chicken strips served plain or tossed in your choice of sauce/dusing</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Cauliflower</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Lightly battered cauliflower bites deep fried and tossed in your choice of sauce or dusting</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem} >
                            <Card.Title></Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <h3>Sauces:</h3>
                                <p>BBQ, buffalo, sweet red chili, mango habenaro, honey mustard</p>
                                <h3>Dustings:</h3>
                                <p>Salt & Vinegar, garlic parmesan, cajun</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1" />
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Nachos</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Tri-color chips topped with onion, tomato, black olives, jalapeno & house cheese blend.</p>
                                <p>*Add Pulled pork or chili for extra charge</p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Fried Brussel Sprouts</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Topped with garlic, parm & served with honey mustard sauce</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1" />
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1"/>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Beer Cheese Pretzels</Card.Title>
                            <CardImg src={BeerCheesePretzels} />
                            <Card.Body>
                                <p>A hearty cheese sauce made with craft beer served with pretzel sticks</p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className="col-5">
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Fried Pickles</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Battered & deep fried. Served with ranch dressing</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1"/>
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col className="col-1"/>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Poutine</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Served with cheese curds, gravy and scallions</p>
                                <p>*Add Pulled pork or chili for extra charge</p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Spinach Artichoke Dip</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Creamy house recipie topped with parmesan served with pita chips</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-1"/>
                    </Row>
                    <Row style={{ marginBottom: "5%" }}>
                    <Col className='col-1'/>
                    <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>Buffalo Chicken Dip</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Made fresh in-house and served with tortilla chips</p>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col className='col-5'>
                        <Card style={mobileCardMenuItem}>
                            <Card.Title>French Onion Dip</Card.Title>
                            <CardImg src={frenchOnionDip} />
                            <Card.Body>
                                <p>Fresh made carmelized onions & our house beef stock. Served with chips</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-1'/>
                </Row>
                <br />
                <br />
            </MediaQuery>
        </div>

    );
}

export default Appetizers;
