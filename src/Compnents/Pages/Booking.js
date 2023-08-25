import React from 'react';
import Navbar from "../PageNavigation";

function BookingPage({ userData, homePageData }) {
    return (
        <div>
            <Navbar />
            <h3>Booking Page</h3>
            <div className="card">
                <div className="card-header">Booking Information</div>
                <div className="card-body">
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

            <div className="card">
                <div className="card-body">
                    <button className="btn btn-primary">Confirm</button>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </div>

        </div>
    );
}

export default BookingPage;
