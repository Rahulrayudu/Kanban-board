// src/components/TicketCard.js
import React from 'react';
import './styles.css';
import userIcons from '../constants/userIcons';
import { useState } from 'react';

const TicketCard = ({ ticket, user, groupBy }) => {
  const { id, title, tag, userId, status, priority } = ticket;
  const { available } = user;
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  const renderGroupIcon = () => {
    if (groupBy === 'userId' || groupBy === 'priority') {
      return (
        <img
          src={userIcons['Todo']}
          alt={`User ${userId} Icon`}
          width="20px"
          height="20px"
        />
      );
    }
    return null;
  };

  const renderGroupIcon2 = () => {
    if (groupBy === 'userId' || groupBy === 'status') {
      return (
        <img
          src={userIcons[priority]}
          alt={`User ${priority} Icon`}
          width="20px"
          height="20px"
          className="prio-tag"
        />
      );
    }
    return null;
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{id}</h3>
        <div className="user-status-container">
          {userIcons[userId] && (
            <img src={userIcons[userId]} alt={`User ${userId} Icon`} className="user-icon" />
          )}
          <div className={`status-circle ${available ? 'available' : 'unavailable'}`} />
        </div>
      </div>
      <div className="ticket-details">
        <label className={'radio-button1'}>
          {renderGroupIcon()}
          <span className='title'>{title}</span>
        </label>
        <div className='reqtag'>
          {renderGroupIcon2()}
          <button className="bottom-button">
          {renderGroupIcon2() ? null : (
              <img src={userIcons['prio']} alt="Your Icon" width="20" height="20" className='ppr' />)}
            {tag}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
