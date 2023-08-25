import React, { useState } from 'react';
// import './RegistrationForm.css';
import { Container } from 'react-bootstrap'; 
import Navbar from "../PageNavigation";
import { useNavigate } from 'react-router-dom'; 

function Membership({userData, setUserData}) {

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

  const handleCancel = ()=> {
    navigate('/');
  }; 

  console.log(userData); // If it prints means App.js wala main data is getting updated.  

  return (
    <div>
      <Navbar/>
      <h3>Registration Form</h3> 
      <form className='form' onSubmit={handleSubmit}>
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
        {/* <button type='submit' className='btn btn-block'>
          Submit
        </button>  */}



        <div className="card">
                <div className="card-body">
                    <button type='submit' className="btn btn-primary">Go Ahead</button> 
                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
      </form>
    </div>
  );
}

export default Membership;
