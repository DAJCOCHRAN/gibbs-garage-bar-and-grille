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
        <div>
            <Container>
                    <Row style={{ margin: "180px auto" }}>
                        <Col className="col-8" >
                            <Card bg="secondary">
                                <Card.Title>SteakTip Dinner</Card.Title>
                                <CardImg src={steakTip} />
                                <Card.Body>
                                    <p>Marinated steak tips with a side of sweet potato mashed potatoes with sauted green beans</p>
                                    <Button onClick={()=>{setOrder(addOrder(steakObj))}}>Add To Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default Specials;
