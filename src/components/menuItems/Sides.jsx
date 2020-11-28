import React from 'react';
import { Card, CardImg, Button, Container, Row, Col } from 'react-bootstrap'
import chili from '../../images/menu/sides/chili.jpg'
const Sides = (props) => {
    const {order, setOrder} = props;
    let { stateSwitch, setStateSwitch } = props;
    const chiliObj = {title:"chili", cost:"$$.$$"}
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
                                <Card.Title>Chili</Card.Title>
                                <CardImg src={chili} />
                                <Card.Body>
                                    <p>Chili bowl with cheddar jack cheese</p>
                                    <Button onClick={()=>{setOrder(addOrder(chiliObj))}}>Add To Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default Sides;
