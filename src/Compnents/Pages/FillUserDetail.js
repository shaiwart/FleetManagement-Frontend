import React, { useState } from 'react';
import '../../Style/FillUserDetail.css';
import { Container } from 'react-bootstrap';
import Navbar from "../PageNavigation";
import { useNavigate } from 'react-router-dom'; 

function FillUserDetail({ userData, setUserData }) {

  const localUserData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    emailId: userData.emailId,
    mobileNumber: userData.mobileNumber,
    address: userData.address,
    dlNo: userData.dlNo,
    aadharNo: userData.aadharNo,
    passportNo: userData.passportNo,
    state: userData.state.stateId,
    city: userData.city.cityId
    // hub: '', 
    // categoryId: ''
  };

  const dataToAddInUserTable = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    emailId: userData.emailId,
    mobileNumber: userData.mobileNumber,
    address: userData.address,
    dlNo: userData.dlNo,
    aadharNo: userData.aadharNo,
    passportNo: userData.passportNo,
    state: userData.state.stateId,
    city: userData.city.cityId
  };

  const [formData, setFormData] = useState(localUserData);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the entered data
    const userObject = { ...formData };
    console.log(userObject);
    // You can now handle the userObject as needed (e.g., send to an API)
    console.log(userObject);


    setFormData(localUserData); // Reset the form after submission
    setUserData(userObject); // this will update the main data in the App.js 

    // before going to booking add this user in the user table 
    // so wi will do a POST 

    try {
      const response = await fetch('http://localhost:8085/api/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
      });

      if (response.ok) {
        console.log('User data successfully submitted.');
        // navigate('/confirmation'); 
      } else {
        console.error('Failed to submit user data.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }




    navigate('/booking'); // Navigate to confirmation page or other route
  }

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  }

  const handleCancel = () => {
    navigate('/');
  };

  console.log(userData); // If it prints means App.js wala main data is getting updated.  

  return (
    <>
      <Navbar />
      <div className='registration-page-container'>
        <h3 className='welcome-message'>Fill Your Details</h3> 
        <form className='registration-form' onSubmit={handleSubmit}>
          {Object.keys(localUserData).map((field, index) => (
            <div className='form-row' key={index}>
              <label htmlFor={field} className='form-label'>
                {field}
              </label>
              <input
                type='text'
                className='form-input'
                id={field}
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            </div>
          ))}
          <div className='buttons'>
            <button type='submit' className='register-button'>
              Go Ahead
            </button>
            <button className='direct-booking-button' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FillUserDetail;
