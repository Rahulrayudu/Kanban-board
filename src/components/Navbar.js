// src/components/Navbar.js
import React from 'react';
import FilterOptions from './FilterOptions';
import './styles.css';

const Navbar = ({ onFilterChange }) => {
  return (
    <nav className="navbar">
      <div className="left-corner">
        <FilterOptions onFilterChange={onFilterChange} />
      </div>
      <div className="center-title">
        <h1>Kanban Board</h1>
      </div>
    </nav>
  );
};

export default Navbar;
