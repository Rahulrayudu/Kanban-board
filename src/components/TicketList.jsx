// src/components/TicketList.js
import React from 'react';
import TicketCard from './TicketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TicketList = ({ tickets, users, groupBy, sortBy }) => {
  const getPriorityName = (priority) => {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
        return 'No Priority';
      default:
        return 'Unknown Priority';
    }
  };

  const groupedTickets = tickets.reduce((grouped, ticket) => {
    const key = ticket[groupBy];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(ticket);
    return grouped;
  }, {});

  const sortedTickets = Object.keys(groupedTickets).reduce((sorted, group) => {
    const groupTickets = groupedTickets[group].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    sorted[group] = groupTickets;
    return sorted;
  }, {});

  const getGroupName = (group) => {
    switch (groupBy) {
      case 'status':
        return `${group}`;
      case 'userId':
        const user = users.find((u) => u.id === group);
        return user ? user.name : 'Unknown User';
      case 'priority':
        return getPriorityName(parseInt(group, 10)); // Parse group to an integer
      default:
        return 'Unknown Group';
    }
  };

  return (
    <div className="ticket-list">
      {Object.keys(sortedTickets).map((group) => (
        <div key={group} className="status-column">
          <h2>
            {/* Render sample icon, group name, '+' icon, and menu icon */}
            <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" style={{color: "#e0d90b",}} />
            <span>{getGroupName(group)}</span>
            <span>{' + '}</span>
            <span>{'{menu icon}'}</span>
          </h2>
          {sortedTickets[group].map((ticket) => {
            const user = users.find((u) => u.id === ticket.userId);
            const priorityName = getPriorityName(ticket.priority);
            return (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                user={user}
                priorityName={priorityName}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TicketList;
