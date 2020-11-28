import React from 'react';
import logo from '../images/logo.jpg'
import { Nav, Navbar, NavDropdown, Image, Badge } from 'react-bootstrap'
import { BsList, BsArrowDown } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { GiFoodTruck } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const NavigationBar = (props) => {
  const {order} = props
  return (
    <div>
      <Navbar expand="lg"  fixed="top" style={{ backgroundColor: "black" }}>
        <Navbar.Brand><span className="navItems"> <Image src={logo} roundedCircle width="80px" /> Gibbs Garage Bar and Grille</span></Navbar.Brand>
        <Navbar.Brand style={{ margin: "0 10px" }}>
          <a href="https://www.facebook.com/GibbsGarageBar/" target="blank">
            <FaFacebookSquare className="icons" color="blue" size="2em" />
          </a>
          <a href="https://www.instagram.com/gibbsgaragebar/" target="blank">
            <AiFillInstagram className="icons" color="red" size="2em" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span><BsList className="navItems" /></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown title={<span className="navItems" style={{ padding: "0.5rem 1rem" }}>Menu <BsArrowDown /></span>} > {/*can you have dropdowns in Dropdowns??? */}
            <NavDropdown.Header style={{textAlign:"center"}}>Virtual</NavDropdown.Header>
              <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/specials">Specials</Link></NavDropdown.Item>
              <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/burgers">Burgers</Link></NavDropdown.Item>
              <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/sides">Sides</Link></NavDropdown.Item>
              <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}><Link to="/desserts">Desserts</Link></NavDropdown.Item> {/*Dont know why navItemsDropdown textAlign center doesnt work */}
              <NavDropdown.Divider />
              <NavDropdown.Header style={{textAlign:"center"}}>Physical</NavDropdown.Header>
                <NavDropdown.Item className="navItemsDropdown" style={{ textAlign: "center" }}> 
                <Link to="/menuPDF"> All Menus</Link></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/">
              {<h2 className="navItems">Home </h2>}
            </Link>
            <Link to="/directions">
              {<h2 className="navItems"> Directions </h2>}
            </Link>
            <Link to="/ourStaff">
              {<h2 className="navItems"> Our Staff </h2>}
            </Link>
            <Link to="/orderOnline">
              <GiFoodTruck className="icons" size="3em" color="yellow" />
              <Badge variant="light">{order.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
