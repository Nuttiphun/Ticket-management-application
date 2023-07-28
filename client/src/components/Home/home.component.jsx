import React from "react";
import NavbarComponent from "../Navbar/navbarcomponent.component";
import PendingTickets from "../Ticket/pendingtickets.component";
import AcceptedTickets from "../Ticket/acceptedtickets.component";
import ResolvedTickets from "../Ticket/resolvedtickets.component";
import RejectedTickets from "../Ticket/rejectedtickets.component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Toaster } from "react-hot-toast";

const Home = () => {

    const ticketComponents = [
        { name: "Pending", component: PendingTickets, bgColor: 'Secondary' },
        { name: "Accepted", component: AcceptedTickets, bgColor: 'Success' },
        { name: "Resolved", component: ResolvedTickets, bgColor: 'Warning' },
        { name: "Rejected", component: RejectedTickets, bgColor: 'Danger' },
    ];

    return (
        <>
            <Toaster/>
            <NavbarComponent fixed="top" />
            <Container
                style={{ marginTop: '5vh' }}
            >
                <Row xs={1} md={4} className="g-4">
                    {ticketComponents.map((ticket, idx) => (
                        <Col key={idx}>
                            <Card
                                bg={ticket.bgColor.toLowerCase()}
                                text={ticket.bgColor.toLowerCase() === 'light' ? 'dark' : 'white'}
                                className="mb-2 card-shadow"
                            >
                                <Card.Header 
                                    style={{ backgroundColor: ticket.bgColor.toLowerCase() === 'light' ? '#EFF5F5' : ticket.bgColor }}
                                    className="header-color"
                                >
                                    {ticket.name}
                                </Card.Header>
                                <Card.Body 
                                    style={{ 
                                        backgroundColor: '#EDEDED',
                                    }}
                                >
                                    <ticket.component />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home;
