// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TicketList from './components/TicketList';
import './components/styles.css';

const App = () => {
  const [data, setData] = useState(null);
  const [filterOptions, setFilterOptions] = useState({ groupBy: 'status', sortBy: 'priority' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (options) => {
    setFilterOptions(options);
  };

  return (
    <div className="">
      <Navbar onFilterChange={handleFilterChange} />
      {data && <TicketList tickets={data.tickets} users={data.users} {...filterOptions} />}
    </div>
  );
};

export default App;
