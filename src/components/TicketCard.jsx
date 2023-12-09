// src/components/TicketCard.js
import React from 'react';
import './styles.css';

const TicketCard = ({ ticket, user }) => {
  const { id, title, tag, userId, status,priority } = ticket;
  const { name, available } = user;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{id}</h3>
      </div>
      <div className="ticket-details">
        <p>{title}</p>
        <p>{`Tag: ${tag.join(', ')}`}</p>
        {/*
        <p>{`Assigned to: ${name} (${userId})`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{priority}</p>

        <p>{`Availability: ${available ? 'Available' : 'Unavailable'}`}</p>*/}
      </div>
    </div>
  );
};

export default TicketCard;
