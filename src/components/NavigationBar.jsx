import React, { useState, useEffect } from 'react';
import logo from '../images/logo.jpg'
import { Nav, Navbar, NavDropdown, Image, Button, Badge, Container, Row, Col } from 'react-bootstrap'
import { BsList, BsArrowDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const baseNavItemColor = { borderColor: "black", backgroundColor: "black", color: "yellow" }
const hoverNavItemColor = { borderColor: "black", backgroundColor: "white", color: "black" }
const NavigationBar = () => {
  const [logoColor, setLogoColor] = useState(baseNavItemColor)
  const [homeColor, setHomeColor] = useState(baseNavItemColor)
  const [pickUpColor, setPickUpColor] = useState(baseNavItemColor)
  const [deliveryColor, setDeliveryColor] = useState(baseNavItemColor)
  const [ourStaffColor, setOurStaffColor] = useState(baseNavItemColor)
  const [menuColor, setMenuColor] = useState(baseNavItemColor)
  useEffect(() => {

  }, [])
  return (
    <div>
      <Row>
        <Navbar expand="lg" fixed="top" style={{ backgroundColor: "black" }}>
          <Col className='col-4'>
            <Link to="/">
              <Navbar.Brand>
                <Button style={logoColor} onMouseEnter={() => { setLogoColor(hoverNavItemColor); }}
                  onMouseLeave={() => { setLogoColor(baseNavItemColor); }}>
                  <span className="navItems">
                    <Image src={logo} roundedCircle width="80px" />
                Gibbs Garage Bar and Grille
              </span>
                </Button>
              </Navbar.Brand>
            </Link>
            </Col>
            <Col className='col-8'>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span><BsList className="navItems" style={{ color: 'yellow' }} /></span>
          </Navbar.Toggle>
             
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
                <NavDropdown
                  title={
                    // { padding: "0.5rem 1rem" },
                    <Button style={menuColor} onMouseEnter={() => { setMenuColor(hoverNavItemColor); }}
                      onMouseLeave={() => { setMenuColor(baseNavItemColor) }}>
                      <span className="navItems">
                        Menu
                    <BsArrowDown />
                      </span>

                    </Button>}> {/*can you have dropdowns in Dropdowns??? */}
                  <NavDropdown.Header className="m-auto">Virtual</NavDropdown.Header>
                  <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/specials">Specials</Link></NavDropdown.Item>
                  <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/burgers">Burgers/Sandwiches</Link></NavDropdown.Item>
                  <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/sides">Sides</Link></NavDropdown.Item>
                  <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/desserts">Desserts</Link></NavDropdown.Item> {/*Dont know why navItemsDropdown textAlign center doesnt work */}
                  <NavDropdown.Divider />
                  <NavDropdown.Header style={{ textAlign: "center" }}>Physical</NavDropdown.Header>
                  <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}>
                    <Link to="/menuPDF"> All Menus</Link></NavDropdown.Item>

                </NavDropdown>
              </Nav>
              <Nav className="ml-auto" style={{width:'auto'}}>
                <Button href="https://app.upserve.com/s/gibbs-garage-portsmouth?preview_token=88NmrzPtdToO1eCPvTvo-A&fbclid=IwAR2XkDbioTf7-PbzSOmUNAemDrRB4qwp6nJAI5yOM42h5Nwmy-B_OO16mJY" target="blank"
                  style={pickUpColor} onMouseEnter={() => { setPickUpColor(hoverNavItemColor); }}
                  onMouseLeave={() => { setPickUpColor(baseNavItemColor); }}>
                  {<span className="navItems"> PickUp </span>}
                </Button>

                <Button href="https://www.grubhub.com/restaurant/gibbs-garage-bar-3612-lafayette-rd-portsmouth/2287225" target="blank"
                  style={deliveryColor} onMouseEnter={() => { setDeliveryColor(hoverNavItemColor); }}
                  onMouseLeave={() => { setDeliveryColor(baseNavItemColor); }}>
                  {<span className="navItems"> Delivery </span>}
                </Button>
                <Link to="/ourStaff">
                  <Button style={ourStaffColor} onMouseEnter={() => { setOurStaffColor(hoverNavItemColor); }}
                    onMouseLeave={() => { setOurStaffColor(baseNavItemColor); }}>
                    {<span className="navItems"> Our Staff </span>}
                  </Button>
                </Link>
              </Nav>
          </Navbar.Collapse>
          </Col>
        </Navbar>
        </Row>
    </div>
  );
}

export default NavigationBar;
