import React from 'react';
import { Card, CardImg, Button, Container, Row, Col } from 'react-bootstrap'
import cookieSunday from "../../images/menu/desserts/cookieSunday.jpg"
const Desserts = (props) => {
    const {order, setOrder} = props;
    let { stateSwitch, setStateSwitch } = props;
    const cookieSundayObj = {title:"cookieSunday", cost:"$$.$$"}
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
                    <h1>Burgers</h1>
                </Col>
                <Col className='col-5'/>
            </Row>
                <Row style={{marginBottom:"5%"}}>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"5%"}}>
                        <Card bg="" style={{marginLeft:"10%", backgroundColor:"whitesmoke"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday}/>
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
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
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-5' style={{display: 'flex', flexDirection: 'row', marginLeft:"2.8%"}}>
                        <Card bg="red" style={{marginLeft:"10%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                        <Card bg="red" style={{marginLeft:"5%"}}>
                            <Card.Title>Taco Burger</Card.Title>
                            <CardImg src={cookieSunday} />
                            <Card.Body>
                                <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>

        // <div> THis is a comment
        //     <Container>
        //             <Row style={{ margin: "180px auto" }}>
        //                 <Col className="col-8" >
        //                     <Card bg="secondary">
        //                         <Card.Title>Taco Burger</Card.Title>
        //                         <CardImg src={cookieSunday} />
        //                         <Card.Body>
        //                             <p>Cookie sunday with whatever cookie sundays have</p>
        //                             <Button onClick={()=>{setOrder(addOrder(cookieSundayObj))}}>Add To Order</Button>
        //                         </Card.Body>
        //                     </Card>
        //                 </Col>
        //             </Row>
                    
        //         </Container>
        // </div>
    );
}

export default Desserts;
