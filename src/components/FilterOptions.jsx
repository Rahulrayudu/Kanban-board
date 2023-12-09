// src/components/FilterOptions.js
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { FaChevronDown } from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";
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
      <button className='arrow' onClick={() => setModalOpen(!isModalOpen)}> { <IoOptionsOutline />} <span className='display'>Display</span> {<FaChevronDown />} </button>

      {isModalOpen && (
        <div className="modal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className='but-label' style={{ marginRight: '8px' }}>Group By:</label>
            <select
              onChange={(e) => handleOptionChange('groupBy', e.target.value)}
              value={options.groupBy}
              className='options'
            >
              <option value="status">Status</option>
              <option value="userId">User ID</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className='but-label' >Sort By:</label>
            <select onChange={(e) => handleOptionChange('sortBy', e.target.value)} 
            className='options'
            value={options.sortBy}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
