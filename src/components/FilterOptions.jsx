// src/components/FilterOptions.js
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const FilterOptions = ({ onFilterChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [options, setOptions] = useState({ groupBy: 'status', sortBy: 'priority' });
  const modalRef = useRef(null);

  const handleOptionChange = (key, value) => {
    const newOptions = { ...options, [key]: value };
    setOptions(newOptions);
    onFilterChange(newOptions);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="filter-options" ref={modalRef}>
      <button onClick={() => setModalOpen(!isModalOpen)}>Options</button>

      {isModalOpen && (
        <div className="modal">
          <h3>Filter Options</h3>

          <label>Group By:</label>
          <select onChange={(e) => handleOptionChange('groupBy', e.target.value)} value={options.groupBy}>
            <option value="status">Group By Status</option>
            <option value="userId">Group By User ID</option>
            <option value="priority">Group By Priority</option>
          </select>

          <label>Sort By:</label>
          <select onChange={(e) => handleOptionChange('sortBy', e.target.value)} value={options.sortBy}>
            <option value="priority">Sort By Priority</option>
            <option value="title">Sort By Title</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
