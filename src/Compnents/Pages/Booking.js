import React from 'react';
import Navbar from "../PageNavigation";
import '../../Style/Booking.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function BookingPage() {
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [mobileNumber, setMobileNumber] = useState(localStorage.getItem('mobileNumber') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [emailId, setEmailId] = useState(localStorage.getItem('emailId') || '');
  const [dlNo, setDlNo] = useState(localStorage.getItem('dlNo') || '');
  const [aadharNo, setAadharNo] = useState(localStorage.getItem('aadharNo') || '');
  const [passportNo, setPassportNo] = useState(localStorage.getItem('passportNo') || '');
  const [cityName, setCityName] = useState(localStorage.getItem('cityName') || '');
  const [cityId, setCityId] = useState(localStorage.getItem('cityId') || '');
  const [stateName, setStateName] = useState(localStorage.getItem('stateName') || '');
  const [stateId, setStateId] = useState(localStorage.getItem('stateId') || ''); 
  // const [userId, setUserId] = useState(); 

  let pickcategoryName = sessionStorage.getItem('pickcategoryName'); 
  let pickuphubName = sessionStorage.getItem('pickuphubName'); 
  let dropHubName = sessionStorage.getItem('dropHubName'); 

  const navigate = useNavigate();


  const handleCancel = () => {
    navigate("/");
  };

  const handleConfirm = async () => {
    console.log("helloEmail-> " + emailId);
    
    try {
      const response = await fetch(`http://localhost:8080/api/user/${emailId}`);
      const result = await response.json(); 
      let userId = await result.userId; 

  
      console.log("helloInside-> " + result.userId);
      sessionStorage.setItem("userId", result.userId);
  
      console.log("hello-> " + userId); 
  
      const tempData = {
        "bookingDateAndTime": "",
        "firstName": firstName,
        "lastName": lastName,
        "mobileNumber": mobileNumber,
        "emailId": emailId,
        "dLNumber": dlNo,
        "aadharNo": aadharNo,
        "passportNo": passportNo,
        "user": userId,
        "state": {
          "stateId": stateId
        },
        "city": {
          "cityId": cityId
        }, 
        "pickupHub": {
          "hubId": sessionStorage.getItem("pickupHubId") == undefined ? 0 : sessionStorage.getItem("pickupHubId")
        },
        "dropHub": {
          "hubId": sessionStorage.getItem("dropHubId") == undefined ? 0 : sessionStorage.getItem("dropHubId")
        },
        "category": {
          "categoryId": sessionStorage.getItem("pickCategoryId") == undefined ? 0 : sessionStorage.getItem("pickCategoryId")
        }
      };
  
      console.log("--> TempData");
      console.log(tempData);
  
      // Now post in Booking table
      const bookingResponse = await fetch('http://localhost:8080/api/addbooking', {
        method: 'POST',
        body: JSON.stringify(tempData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (bookingResponse.ok) {
        console.log("Booking successfully added.");
        localStorage.clear();
        navigate("/successpage");
      } else {
        console.log("Error while adding booking.");
        // Handle the error scenario
      }
    } catch (error) {
      console.error("--> Error:", error);
      // Handle the error scenario
    }
  };
  

  




  return (
    <div className='booking-page-container'>
      <Navbar />
      <h3 className='booking-header'>Booking Details</h3>
      <div className='booking-card'>
        <div className='booking-card-header'>Booking Information</div>

        <div className='booking-card-body'>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Email:</strong> {emailId}</p>
          <p><strong>Mobile Number:</strong> {mobileNumber}</p>

          <p><strong>Pickup hub name:</strong> {pickuphubName}</p>
          <p><strong>Drop hub name:</strong> {dropHubName}</p>

          <p><strong>Selected Car Category:</strong> {pickcategoryName}</p> 
        </div>
      </div>

      <div className='booking-card'>
        <div className='booking-card-body'>
          <button className='booking-confirm-button' onClick={handleConfirm}>Confirm</button>
          <button className='booking-confirm-button' onClick={() => { navigate("/filluserdetails") }}>Modify</button>
          <button className='booking-cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage; 