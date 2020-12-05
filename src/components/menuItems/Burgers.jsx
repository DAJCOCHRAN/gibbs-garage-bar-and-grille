import React, { useEffect } from 'react';
import { Card, CardImg, Row, Col } from 'react-bootstrap'
import elCamino from '../../images/menu/burgers-sandwiches/elCamino.jpg'
import macTruckBurger from '../../images/menu/burgers-sandwiches/macTruckBurger.jpg'
import brisketSammy from '../../images/menu/burgers-sandwiches/brisketSammy.jpg'
const Burgers = (props) => {
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
                
                <Col className='col-4 border border-warning rounded-pill' style={{textAlign:"center", backgroundColor:"black", margin:"2% 0", color:"yellow", border: '5px solid yelow' }}>
                    <h1>Burgers/Sandwiches</h1>
                </Col>
                <Col className='col-4'/>
            </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>El Camino Burger</Card.Title>
                            <CardImg src={elCamino} style={{width:'100%', height:'55%'}} />
                            <Card.Body>
                                <p>Pepper jack cheese, cilantro lime sour cream, pico de gallo, avocado, crushed tortilla chips, shredded lettuce</p>
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
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title>Brisket Sandwich</Card.Title>
                            <CardImg src={brisketSammy} style={{width:'100%', height:'55%'}} />
                            <Card.Body>
                                <p>Smoked brisket topped with bacon, swiss cheese & horse radish mayo</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title></Card.Title>
                            {/* <CardImg src={tacoBurger} /> */}
                            <Card.Body>
                                <p></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card bg="" style={{marginLeft:"10%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title></Card.Title>
                            <CardImg src={tacoBurger} />
                            <Card.Body>
                                <p></p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title></Card.Title>
                            <CardImg src={tacoBurger} />
                            <Card.Body>
                                <p></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%", width:'100%', height:'100%'}}>
                            <Card.Title></Card.Title>
                            <CardImg src={tacoBurger} />
                            <Card.Body>
                                <p></p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%", backgroundColor:"whitesmoke", width:'100%', height:'100%'}}>
                            <Card.Title></Card.Title>
                            <CardImg src={tacoBurger} />
                            <Card.Body>
                                <p></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
                <br />
                <br />
        </div>
    );
}

export default Burgers;
