// src/components/TicketCard.js
import React from 'react';
import './styles.css';
import one from '../assets/one.png';
import zoro from '../assets/zoro.png';
import ace from '../assets/ace.png';
import chopper from '../assets/chopper.png';
import luffy from '../assets/luffy.png';

const TicketCard = ({ ticket, user }) => {
  const { id, title, tag, userId, status,priority } = ticket;
  const { name, available } = user;
  const userIcons = {
    'usr-1': one,
    'usr-2': zoro,
    'usr-3': ace,
    'usr-4': chopper,
    'usr-5': luffy,
  };
  const userIcon = userIcons[userId];

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{id}</h3>
        <div className="user-status-container">
          {userIcon && <img src={userIcon} alt={`User ${userId} Icon`} className="user-icon" />}
          <div className={`status-circle ${available ? 'available' : 'unavailable'}`} />
        </div>
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
