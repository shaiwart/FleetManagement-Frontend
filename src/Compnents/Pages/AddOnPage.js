import React, { useState } from 'react';
import Navbar from '../PageNavigation';
import { Link, useNavigate } from 'react-router-dom';

function AddOnPage() {
  const [selectedAddOns, setSelectedAddOns] = useState([]); 
  const navigate = useNavigate(); 

  const addonsList = [
    { id: 1, name: 'GPS Navigation', price: 10 },
    { id: 2, name: 'Child Seat', price: 15 },
    { id: 3, name: 'Wi-Fi Hotspot', price: 5 },
    // Add more add-ons here
  ];

  const handleAddOnToggle = (addonId) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  const handleContinueBooking = () => {
    // Handle the booking process with selected add-ons
    navigate('/loginpage'); 

  };

  return (
    <div>
      <Navbar />
      <h1>Add-Ons</h1>
      <div className="add-ons-list">
        {addonsList.map(addon => (
          <label key={addon.id} className="add-on-label">
            <input
              type="checkbox"
              checked={selectedAddOns.includes(addon.id)}
              onChange={() => handleAddOnToggle(addon.id)}
            />
            {addon.name} (+${addon.price})
          </label>
        ))}
      </div>
      <button onClick={handleContinueBooking}>Continue Booking</button>
    </div>
  );
}

export default AddOnPage; 
