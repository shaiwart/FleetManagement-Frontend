import Navbar from "../PageNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function HandOver() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [booking, setBooking] = useState(null);
    const [carList, setCarList] = useState([]);



    const fetchBookingByEmailId = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/booking/by-email/${emailId}`);
            const result = await response.json();
            setBooking(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleCar = async () => {
        try {
            console.log("yaha aaya"); 
            const response = await fetch(`http://localhost:8080/api/cars/${booking.pickupHubId}/${booking.category.categoryId}`);
            const result = await response.json();
            setCarList(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    return (
        <div>
            <Navbar />
            <div className="booking-details-container">
                <h3>Booking Details</h3>

                <div className="input-fields">
                    <input
                        type="text"
                        placeholder="Enter Email ID"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                    <Button variant="primary" onClick={fetchBookingByEmailId}>
                        Fetch by Email ID
                    </Button>
                </div>

                {booking && (
                    <div className="booking-table">
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Aadhar No</th>
                                    <th>Booking Date and Time</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Driving License number</th>
                                    <th>Car category selected</th>
                                    {/* Add more table headers here */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{booking.bookingId}</td>
                                    <td>{booking.aadharNo}</td>
                                    <td>{booking.bookingDateAndTime}</td>
                                    <td>{booking.firstName}</td>
                                    <td>{booking.lastName}</td>
                                    <td>{booking.dLNumber}</td>
                                    <td>{sessionStorage.getItem('pickcategoryName')}</td>
                                    {/* Add more table data here */}
                                </tr>
                                {/* Add more rows for other booking data */}
                            </tbody>
                        </Table>
                        <Button variant="primary" onClick={handleCar}>
                            Assign Car
                        </Button>
                        {/* generate cars dynamically from carList */}
                        {carList.length > 0 && (
                            <div className="car-list">
                                <h4>Available Cars:</h4>
                                <ul>
                                    {carList.map(car => (
                                        <li key={car.carId}>
                                            {car.carName} - {car.carNumberplate}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HandOver;