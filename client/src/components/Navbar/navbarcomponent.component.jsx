import React from "react";
import CreateTicket from "../Create/createticket.component";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavbarComponent = () => {
    return(
        <>
            <Navbar className="navbar-color navbar-shadow">
                <Container>
                    <Navbar.Brand href="/home">Ticket management application</Navbar.Brand>
                    <Row> 
                        <Col xs="auto">
                            <CreateTicket />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;