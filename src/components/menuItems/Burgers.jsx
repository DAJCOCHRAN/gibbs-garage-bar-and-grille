import React, { useEffect }from 'react';
import { Card, CardImg, Button, Container, Row, Col } from 'react-bootstrap'
import tacoBurger from '../../images/menu/burgers/tacoBurger.jpg'
const Burgers = (props) => {
    const {order, setOrder} = props;
    let { stateSwitch, setStateSwitch } = props;
    const tacoBurgerObj = {title:"tacoBurger", cost:"$$.$$"}
    const addOrder = (menuObj) => {
        order.splice(0,0, menuObj)
        console.log("orderList from burger component", order)
        setStateSwitch(!stateSwitch);
        return order
    }
    return (
        <div>
            <Container>
                    <Row style={{ margin: "180px auto" }}>
                        <Col className="col-8" >
                            <Card bg="secondary">
                                <Card.Title>Taco Burger</Card.Title>
                                <CardImg src={tacoBurger} />
                                <Card.Body>
                                    <p>Taco seasoned burger topped with pepperjack, avocado, cilantro, lime, sourcream, with a side of house waffle fries</p>
                                    <Button onClick={()=>{setOrder(addOrder(tacoBurgerObj))}}>Add To Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default Burgers;
