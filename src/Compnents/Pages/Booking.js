import React from 'react';
import Navbar from "../PageNavigation"; 
import '../../Style/Booking.css'; 
import { useNavigate } from 'react-router-dom'; 

function BookingPage({ userData, homePageData }) {

    const navigate = useNavigate();

    const handleCancel=()=>{
        navigate("/"); 
    }
    const handleConfirm=()=>{
        navigate("/successpage"); 
    }


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
                    <p><strong>DL Number:</strong> {userData.dlNo}</p>
                    <p><strong>Aadhar Number:</strong> {userData.aadharNo}</p>
                    <p><strong>Passport Number:</strong> {userData.passportNo}</p>
                    <p><strong>State:</strong> {userData.state}</p>
                    <p><strong>City:</strong> {userData.city}</p>
                    <p><strong>Selected Hub:</strong> {homePageData.pickupHub}</p>
                    <p><strong>Selected Car Category ID:</strong> {homePageData.category}</p>
                </div>
            </div>

            <div className='booking-card'>
                <div className='booking-card-body'>
                    <button className='booking-confirm-button' onClick={handleConfirm} >Confirm</button>
                    <button className='booking-confirm-button' onClick={()=>{navigate("/registrationform")}} >Modify</button>
                    <button className='booking-cancel-button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>

    );
}

export default BookingPage;
