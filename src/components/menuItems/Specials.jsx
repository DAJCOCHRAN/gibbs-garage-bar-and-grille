import React from 'react';
import { Card, Container, Row, Col, CardImg, Button } from 'react-bootstrap'
import halfRackDinner from '../../images/menu/specials/halfRackDinner.jpg'
const Specials = (props) => {
    
    return (
        <div className='menuBackground'>
            <Row>
                <Col className='col-5' />
                
                <Col className='col-2 border border-warning rounded-pill' style={{textAlign:"center", backgroundColor:"black", margin:"2% 0", color:"yellow", border: '5px solid yelow' }}>
                    <h1>Specials</h1>
                </Col>
                <Col className='col-5'/>
            </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card bg="" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Half Rack Dinner</Card.Title>
                            <CardImg src={halfRackDinner}/>
                            <Card.Body>
                                <p></p>

                                <p></p>
                            </Card.Body>
                        </Card>
                        {/* <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Chicken Parm</Card.Title>
                            <CardImg src={chickenParmDinner} />
                            <Card.Body>
                                <p>Lightly breaded chicken served over linguini with house marinara</p>
                                <p>16</p>
                            </Card.Body>
                        </Card> */}
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        {/* <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Bacon Wrapped Meatloaf</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Chef Jon's classic recipie served with mashed potatoes & broccoli</p>
                                <p>16</p>
                            </Card.Body>
                        </Card> */}
                        {/* <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>House Made BBQ Ribs</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>St. Louis style ribs brined overnight & slow-cooked, served with house coleslaw and fries</p>
                                <p>17</p>
                            </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                    {/*<Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Beer Battered Fish & Chips</Card.Title>
                            <CardImg src={fishChips} />
                            <Card.Body>
                                <p>Haddock filets coated in narangansett beer batter, served with garage fries, coleslaw and tartar sauce</p>
                                <p>17</p>
                            </Card.Body>
                        </Card> */}
                        {/* <Card bg="red" style={{marginLeft:"5%", backgroundColor:"white", width:'100%', height:'100%'}}>
                            <Card.Title>Chicken Tender Dinner</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Generous portion of hand-battered chicken strips served with garage fries</p>
                                <p>14</p>
                            </Card.Body>
                        </Card> */}
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        {/* <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Beer Battered Fish & Chips</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Haddock filets coated in narangansett beer batter, served with garage fries, coleslaw and tartar sauce</p>
                                <p>17</p>
                            </Card.Body>
                        </Card> */}
                        {/* <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
        </div>
    );
}

export default Specials;
