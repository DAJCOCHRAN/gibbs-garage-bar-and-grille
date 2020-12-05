import React from 'react';
import { Card, Container, Row, Col, CardImg, Button } from 'react-bootstrap'
import steakTip from '../../images/menu/specials/steakTip.jpg'
const Specials = (props) => {
    const {order, setOrder} = props;
    let { stateSwitch, setStateSwitch } = props;
    const steakObj = {title:"Steak Tip Dinner", cost:"$$.$$"}
    const addOrder = (menuObj) => {
        order.splice(0,0, menuObj)
        console.log("orderList from burger component", order)
        setStateSwitch(!stateSwitch);
        return order
    }
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
                        <Card bg="" style={{marginLeft:"10%", backgroundColor:"whitesmoke"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip}/>
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card bg="" style={{marginLeft:"10%", backgroundColor:"white"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={steakTip} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>
    );
}

export default Specials;
