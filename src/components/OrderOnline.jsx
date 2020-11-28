import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'

const OrderOnline = (props) => {
    const { order, setOrder } = props
    const populateList = () => {
        if(order.length === 0) return(<h3>You have no Items selected, please select an item from the menu</h3>)
        else{
            return (
                order.map((menuItem, i) => {
                    return(<ListGroup.Item>
                        <h3> {menuItem.title} </h3>
                    </ListGroup.Item>)
                })
            )
        }
    }
    return (
        <div>
             <Container>
                    <Row>
                        <Col className="col-12" style={{ margin: "180px auto", opacity: "0.89" }}>
                            <Card bg="secondary">
                                {/* <Card.Img variant= "top" src={staff}/> */}
                                <Card.Title>
                                    <h1>Online Order</h1>
                                </Card.Title>
                                <Card.Body>
                                    <ListGroup>
                                    {populateList()}
                                    </ListGroup>
                                </Card.Body>
                                </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12">
                            <Card>
                                <Card.Body>We can contintue to payment processing and other services based on pickup/delivery</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default OrderOnline;
