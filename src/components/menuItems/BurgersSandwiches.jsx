import React, { useEffect } from 'react';
import { Card, CardImg, Row, Col } from 'react-bootstrap'
import elCamino from '../../images/menu/burgers-sandwiches/elCamino.jpg'
import macTruckBurger from '../../images/menu/burgers-sandwiches/macTruckBurger.jpg'
import brisketSammy from '../../images/menu/burgers-sandwiches/brisketSammy.jpg'
const BurgersSandwiches = (props) => {
    // const { order, setOrder } = props;
    // let { stateSwitch, setStateSwitch } = props;
    // const elCaminoObj = { title: "elCamino", cost: "$$.$$" }
    // const addOrder = (menuObj) => {
    //     order.splice(0, 0, menuObj)
    //     console.log("orderList from burger component", order)
    //     setStateSwitch(!stateSwitch);
    //     return order
    // }
    return (
        
        <div className='menuBackground'>
            <Row>
                <Col className='col-4' />
                
                <Col className='col-4'>
                <div className='border border-warning rounded-pill' style={{textAlign:"center", backgroundColor:"black", margin:"4% 0", color:"yellow", border: '5px solid yelow', padding:'2px 50px'}}>
                    <h1>Burgers & Sandwiches</h1>
                </div>
                </Col>
                <Col className='col-4'/>
            </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>57 Chevy</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Classic cheese burger with american cheese, lettuce, tomato, onion & pickle</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>El Camino Burger</Card.Title>
                            <CardImg src={elCamino} style={{width:'100%', height:'55%'}} />
                            <Card.Body>
                                <p>Pepper jack cheese, cilantro lime sour cream, pico de gallo, avocado, crushed tortilla chips, shredded lettuce</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Twin Engine</Card.Title>
                            {/* <CardImg src={elCamino} style={{width:'100%', height:'55%'}} /> */}
                            <Card.Body>
                                <p>Pulled Pork & a patty with sauteed mushrooms, onions, and chedar cheese</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Mac Truck Burger</Card.Title>
                            <CardImg src={macTruckBurger} style={{width:'100%', height:'55%'}} />
                            <Card.Body>
                                <p>American Cheese, Thousand Island Dressing, Lettuce, Pickes, & onions</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Monte Carlo</Card.Title>
                            {/* <CardImg src={brisketSammy} style={{width:'100%', height:'55%'}} /> */}
                            <Card.Body>
                                <p>American cheese, fried egg, bacon, hash browns & gravy</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>The Bronco</Card.Title>
                            {/* <CardImg src={macTruckBurger} style={{width:'100%', height:'55%'}} /> */}
                            <Card.Body>
                                <p>Bacon, pepper jack cheese, spicy BBQ, fried onion strings, & jalapenos</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Bit Burger</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Smoked bacon, letuce, tomatoes, chedar cheese, & garlic aioli</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Veggie Burger</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>A cauliflower & quinoa mix patty topped with lettuce, tomato, onion, & garlic aioli</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Brisket Sandwich</Card.Title>
                            <CardImg src={brisketSammy} style={{width:'100%', height:'55%'}} />
                            <Card.Body>
                                <p>Smoked brisket topped with bacon, swiss cheese & horse radish mayo</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                        <Card.Title>Chicken Sandwich</Card.Title>
                            {/* <CardImg src={brisketSammy} style={{width:'100%', height:'55%'}} /> */}
                            <Card.Body>
                                <p>Cajun chicken topped with bacon, lettuc, cilantro, lime sour cream, & salsa between cheese quesadillas.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Pulled Pork Sandwich</Card.Title>
                            {/* <CardImg src={brisketSammy} style={{width:'100%', height:'55%'}} /> */}
                            <Card.Body>
                                <p>BBQ pork topped with coleslaw, red onions & a pickle</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Haddock Sandwhich</Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p>Naragansett beer battered filet with lettuce, tomato, & tartar sauce on a brioche bun</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
        </div>
    );
}

export default BurgersSandwiches;
