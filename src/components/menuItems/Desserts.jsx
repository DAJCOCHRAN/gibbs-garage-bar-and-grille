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
        <div>
            <Container>
                    <Row style={{ margin: "35% auto" }}>
                        <Col className="col-8" >
                            <Card bg="secondary">
                                <Card.Title>Taco Burger</Card.Title>
                                <CardImg src={cookieSunday} />
                                <Card.Body>
                                    <p>Cookie sunday with whatever cookie sundays have</p>
                                    <Button onClick={()=>{setOrder(addOrder(cookieSundayObj))}}>Add To Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
        </div>
    );
}

export default Desserts;
