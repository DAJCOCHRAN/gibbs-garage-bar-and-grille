import React, { useEffect, useState } from 'react';
import MediaQuery  from 'react-responsive';
import { Nav, Navbar, NavDropdown, Image, Badge, Button, Row, Col } from 'react-bootstrap'
import { FaFacebookSquare, FaMapMarkedAlt } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { CgPhone } from "react-icons/cg";

const NavigationSecondaryBar = () => {
    const [buttonColorFb, setButtonColorFb] = useState({ backgroundColor: "black", borderColor:"black" })
    const [buttonColorIs, setButtonColorIs] = useState({ backgroundColor: "black", borderColor:"black"  })
    const [buttonColorGm, setButtonColorGm] = useState({ backgroundColor: "black", borderColor:"black"  })
    const [iconColorFb, setIconColorFb] = useState({ color: "yellow" })
    const [iconColorIs, setIconColorIs] = useState({ color: "yellow" })
    const [iconColorGm, setIconColorGm] = useState({ color: "yellow" })
    useEffect(() => {
    }, [buttonColorFb, buttonColorIs, buttonColorGm]);
    return (
        <>
            <Navbar style={{ backgroundColor: "#000", marginTop: "100px", height: "90px" }}>

                    <Navbar.Brand>
                            <Button class="btn" style={buttonColorFb} href="https://www.facebook.com/GibbsGarageBar/" target="blank"
                                onMouseEnter={() => { setButtonColorFb({ backgroundColor: "white", color: "black", borderColor:"black"  }); setIconColorFb({color:'blue'}) }}
                                onMouseLeave={() => { setButtonColorFb({ backgroundColor: "black", borderColor:"black"  }); setIconColorFb({color: "yellow"}) }}>
                                <FaFacebookSquare className="icons" color={iconColorFb.color} size="2em" />
                                <MediaQuery minWidth={683}>
                                    Facebook
                                </MediaQuery>
                        
                    </Button>
                            <Button class="btn" style={buttonColorIs} href="https://www.instagram.com/gibbsgaragebar/" target="blank"
                                onMouseEnter={() => { setButtonColorIs({ backgroundColor: "white", color: "black", borderColor:"black"  }); setIconColorIs({color:'red'}) }}
                                onMouseLeave={() => { setButtonColorIs({ backgroundColor: "black", borderColor:"black" }); setIconColorIs({color: "yellow"}) }}>
                                <AiFillInstagram className="icons" color={iconColorIs.color} size="2em" />
                                <MediaQuery minWidth={683}>
                                Instagram
                                </MediaQuery>
                        
                    </Button>
                            <Button class="btn" style={buttonColorGm} href="https://www.google.com/maps/place/Gibb's+Garage+Bar+and+Grille/@43.0183753,-70.8033895,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2c1f2f3e8f403:0xa1a2c5107b1fff0c!8m2!3d43.0183753!4d-70.8012008" target="blank"
                                onMouseEnter={() => { setButtonColorGm({ backgroundColor: "white", color: "black", borderColor:"black"  }); setIconColorGm({color:'green'}) }}
                                onMouseLeave={() => { setButtonColorGm({ backgroundColor: "black", borderColor:"black" }); setIconColorGm({color: "yellow"})}}>
                                <FaMapMarkedAlt className="icons" color={iconColorGm.color} size="2em" />
                                <MediaQuery minWidth={683}>
                                Google Maps
                                </MediaQuery>
                                
                            </Button>
                            </Navbar.Brand>
                            <Nav className="ml-auto">
                        
                                <CgPhone className="icons" color="yellow" size="2em" />
                                <span style={{color:'white', fontSize:"20px", fontWeight:"bold"}}>1-(603)-369-4123</span>
        
                            </Nav>
                    

            </Navbar>
        </>
    );
}

export default NavigationSecondaryBar;
