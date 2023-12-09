// src/components/TicketList.js
import React from 'react';
import TicketCard from './TicketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import plus from'../assets/plus-solid.svg'
import ellips_menu from'../assets/ellipsis-solid.svg'
import userIcons from '../constants/userIcons';
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
  const handlePlusIconClick = () => {
    console.log('PlusIcon clicked!');
  };

  const handleMenuEllipsisIconClick = () => {
    console.log('MenuEllipsisIcon clicked!');
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
           <div className="ticket-header">
            <div>
            {userIcons[group] && <img src={userIcons[group]} alt={`User ${group} Icon`} className="group-icon" />}
              <span style={{ marginRight: '8px', cursor: 'pointer' }} >{getGroupName(group)}</span>  
              <span>{sortedTickets[group].length}</span>
            </div>
            <div>
            <span onClick={handlePlusIconClick}>
                <img src={plus} alt="Plus Icon" width="20" height="20" style={{ marginRight: '8px', cursor: 'pointer' }} />
              </span>
              <span onClick={handleMenuEllipsisIconClick}>
                <img src={ellips_menu} alt="Menu Icon" width="20" height="20" style={{ cursor: 'pointer' }} />
              </span>
            </div>
            </div>
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
