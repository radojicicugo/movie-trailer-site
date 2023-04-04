import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.jpeg';
import { Card } from 'react-bootstrap';

function NavBar(props) {



     return (
          <div>
               <Navbar bg="dark" variant="dark">
                    <Container className="p-3 ">
                         <Nav className="me-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/contact">Contact</Nav.Link>
                         </Nav>
                          <Card.Img style={{height:'80px', width:'80px'}} src={logo} alt="Description" variant="top" />
                    </Container>
               </Navbar>
          </div>
     );
}

export default NavBar;