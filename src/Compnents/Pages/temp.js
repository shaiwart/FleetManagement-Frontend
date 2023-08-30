// {
//     "firstName": "James Kumar Khan",
//     "lastName": "Garcia",
//     "mobileNumber": "555-444-4444",
//     "emailId": "jaimish@example.com",
//     "address": "707 Walnut St",
//     "password": "password11",
//     "dlNo": "DL44444",
//     "aadharNo": 4444444,
//     "passportNo": 444444,
//     "isReigsteredUser": 1, 
//     "isEmployee": 0, 
//     "state": {
//         "stateId": 21
//     },
//     "city": {
//         "cityId": 2110
//     },
//     "bookings": []
// }


const onChangeHandler = async (event) => {
    console.log(" City Change hua");
    let tempId = event.target.value; 
    sessionStorage.setItem("pickUpCityId", tempId); 
}

const handelClick = async (e) => {
    e.preventDefault(); 

    try {
        const response = await fetch("http://localhost:8080/api/cities/"  + localStorage.getItem("userStateId")); 
        const result = await response.json();
        setCityList(result);  
    } catch (error) {
        console.error('Error fetching data:', error); 
        // yaha pe use navigate use karke Error page pe send karo 
    }
}



const tempData = {
    "firstName": firstName ? firstName : '',
    "lastName": lastName ? lastName : '',
    "mobileNumber": mobileNumber ? mobileNumber : '',
    "emailId": emailId ? emailId : '',
    "dLNumber": dlNo ? dlNo : '',
    "aadharNo": aadharNo ? aadharNo : '',
    "passportNo": passportNo ? passportNo : '',
    "state": {
      "stateId": stateId
    },
    "city": {
      "cityId": cityId
    }
  }



  fetch("http://localhost:8080/api/user/add", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tempData) // Your request data
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the successful response data 
      Navigate("booking"); 
      console.log('Response:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  
    if (isLoggedIn == false) { // then only POST in user table 

        const response = await fetch('http://localhost:8080/api/user/add', { 
          method: 'POST',
          body: JSON.stringify(tempData),
          headers: {
            'Content-Type': 'application/json'
          }
        }); 
        const result = await response.json(); 
        console.log(result); 
        navigate("booking"); 
      }



      import React from 'react';
import Navbar from "../PageNavigation";
import '../../Style/Booking.css'; 
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';



function BookingPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(); 

  const handleCancel = () => {
    navigate("/");
  };

  const handleConfirm = () => {

    // create an object to send to Booking table 
    fetch(`http://localhost:8080/api/user/${sessionStorage.getItem("emailId")}`) 
        .then(response => response.json()) 
        .then(result => {sessionStorage.setItem("userId", result.userId);  setUserId(result.userId)})


        const data = {
            "bookingDateAndTime": "", 
            "firstName": sessionStorage.getItem("firstName"), 
            "lastName": sessionStorage.getItem("lastName"), 
            "mobileNumber": sessionStorage.getItem("mobileNumber"),
            "emailId": sessionStorage.getItem("emailId"),
            "dLNumber": sessionStorage.getItem("dlNo"),
            "aadharNo": sessionStorage.getItem("aadharNo"),
            "passportNo": sessionStorage.getItem("passpostNo"),
            "user": {
                "userId": userId
            },
            "state": {
                "stateId": ""
            },
            "city": {
                "cityId": ""
            },
            "pickupHub": {
                "hubId": sessionStorage.getItem("pickupHubId")
            },
            "dropHub": {
                "hubId": sessionStorage.getItem("dropHubId")
            },
            "category": {
                "categoryId": sessionStorage.getItem("pickCategoryId") 
            }
        }
    // Now post in Booking table 
    fetch('http://localhost:8080/api/addbooking', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })


    navigate("/successpage");
}

  // Retrieve selected information from session storage
  const userData = {
    firstName: sessionStorage.getItem('firstName'),
    lastName: sessionStorage.getItem('lastName'),
    emailId: sessionStorage.getItem('emailId'),
    mobileNumber: sessionStorage.getItem('mobileNumber'),
    address: sessionStorage.getItem('address'),
   
    pickUpStateId: sessionStorage.getItem('userStateId'),
    pickUpCityId: sessionStorage.getItem('pickUpCityId'),
    
   
  };

 let pickcategoryName=sessionStorage.getItem('pickcategoryName');
 let pickuphubName= sessionStorage.getItem('pickuphubName');
 let dropHubName= sessionStorage.getItem('dropHubName');


  return (
    <div className='booking-page-container'>
      <Navbar />
      <h3 className='booking-header'>Booking Details</h3>
      <div className='booking-card'>
        <div className='booking-card-header'>Booking Information</div>
        <div className='booking-card-body'>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Email:</strong> {userData.emailId}</p>
          <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
          <p><strong>Address:</strong> {userData.address}</p>
          
          <p><strong>Pickup hub name:</strong> {pickuphubName}</p>
          <p><strong>Drop hub name:</strong> {dropHubName}</p>
         
          <p><strong>Selected Car Category:</strong> {pickcategoryName}</p>
        </div>
      </div>

      <div className='booking-card'>
        <div className='booking-card-body'>
          <button className='booking-confirm-button' onClick={handleConfirm}>Confirm</button>
          <button className='booking-confirm-button' onClick={() => { navigate("/registrationform") }}>Modify</button>
          <button className='booking-cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;



response.json()
console.log(response); 
console.log("length-> " + response.headers.get("content-length")); 

        fetch(`http://localhost:8080/api/user/${uname.value}/${pass.value}`) 
            // .then() // check if null is coming 
            // .then(response => {console.log(response);})
            .then((response) => {
                if (response.status === 200 && response.headers.get("content-length") === "0") {
                    console.log("username / password mismatch");
                    setErrorMessages({ name: "pass", message: errors.pass });
                    throw new Error("Empty response"); 
                }
                return response.json(); 
            })
            .then((result) => {
                setIsSubmitted(true);
                console.log("submitted & got reply");
                // Process the result here
            })
            .catch(error => {
                console.error("Error during fetch:", error);
                // Handle any errors that occurred during the fetch
            });