import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, users, groupBy, sortBy }) => {
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

  return (
    <div className="ticket-list">
      {Object.keys(sortedTickets).map((group) => (
        <div key={group} className="status-column">
          <h2>{`${groupBy}: ${group}`}</h2>
          {sortedTickets[group].map((ticket) => {
            const user = users.find((u) => u.id === ticket.userId);
            return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default TicketList;