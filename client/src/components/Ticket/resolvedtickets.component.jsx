import React, { useEffect, useState } from 'react';
import EditTicket from '../Edit/editticket.component';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const ResolvedTickets = () => {

    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [fetchTicket, setFetchTicket] = useState(false)

    useEffect(() => {
      axios.get('http://localhost:3001/ticket')
        .then(response => {
          setTickets(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        setFetchTicket(false)
    }, [fetchTicket]);

    const resolvedTickets = tickets.filter(ticket => ticket.status === "resolved");

    return(
        <>
        {resolvedTickets.map(ticket => (
          <Card bg="Light" text="dark" className="mb-3 card-shadow" key={ticket.id}>
            <div className="card-header">
              <span className="card-header-text">Title: {ticket.title}</span> 
              <div className="card-header-icon">
                <EditTicket ticketData={ticket} setFetchTicket={setFetchTicket} />
              </div>
            </div>
            <Card.Body>
              <p>Description: {ticket.description}</p>
              <p>Contact Info: {ticket.contact_info}</p>
              <p>Status: {ticket.status}</p>
            </Card.Body>
          </Card>
        ))}
      </>
    )
}

export default ResolvedTickets;