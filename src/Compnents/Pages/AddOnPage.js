import React, { useState } from 'react';
import Navbar from '../PageNavigation';
import { useNavigate } from 'react-router-dom';
import '../../Style/addonpage.css';

function AddOnPage() {
  const [selectedAddOns, setSelectedAddOns] = useState([]); 
  const navigate = useNavigate(); 

  const addons = [
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

  const handleContinue = () => {
    // Store selected addons in sessionStorage
    selectedAddOns.forEach(addonId => {
      const addon = addons.find(addon => addon.id === addonId);
      if (addon) {
        sessionStorage.setItem(`addOnId${addonId}`, addon.id);
        sessionStorage.setItem(`addonName${addonId}`, addon.name);
        sessionStorage.setItem(`addonPrice${addonId}`, addon.price);
      }
    });

    navigate('/filluserdetails'); // ye change hoga 
  }
 
  return (
    <div className="add-on-page">
      <Navbar />
      <h1>Add-Ons</h1>
      <table className="add-ons-table">
        <thead>
          <tr>
            <th>Add-On</th>
            <th>Price</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {addons.map(addon => (
            <tr key={addon.id}>
              <td>{addon.name}</td>
              <td>${addon.price}</td>
              <td>
                <input
                  type="checkbox"
                  onClick={() => handleAddOnToggle(addon.id)}
                  checked={selectedAddOns.includes(addon.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="continue" onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default AddOnPage;
