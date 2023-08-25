import React, { useState } from 'react';
import Navbar from '../PageNavigation'; 
import { Link, useNavigate } from 'react-router-dom';

function CategorySelector({setHomePageData}) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate(); 

  const categories = [
    'Sedan',
    'SUV',
    'Truck',
    'Convertible',
    'Minivan',
    // Add more categories here
  ]; // CAN BRING THIS FROM DATABASE ALSO 

  const categoriesNew = [
    { id: 1, name: 'Sedan' },
    { id: 2, name: 'SUV' },
    { id: 3, name: 'Truck' },
    { id: 4, name: 'Convertible' },
    { id: 5, name: 'Minivan' },
  ]; 

  const handleCategorySelect = (category) => { 
    setHomePageData(prevData => ({ ...prevData, category: category })); // Setting the main data in App.js 
    setSelectedCategory(category); 
    navigate('/addonpage'); 
  };

  return (
    <div>
      <Navbar />
      <h1>Car Categories Selector</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === category ? 'selected' : ''
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <p>You have selected: {selectedCategory}</p>
      )}
    </div>
  );
}

export default CategorySelector;
