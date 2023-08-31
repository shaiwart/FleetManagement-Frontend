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
    const [selectedCar, setSelectedCar] = useState(); 



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


    const handleCarSelection = (selectedCar) => {
        // Perform your desired task using the selected car
        console.log("Selected car:", selectedCar); 
        setSelectedCar(selectedCar.carId); 
        sessionStorage.setItem("selectedCar", selectedCar.carId); 
        // Add your logic here
    };



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
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="primary" onClick={handleCar}>
                            Assign Car
                        </Button>
                        {carList.length > 0 && (
                            <div className="car-list">
                                <h4>Available Cars:</h4>
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Car Name</th>
                                            <th>Car Numberplate</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carList.map(car => (
                                            <tr key={car.carId}>
                                                <td>{car.carName}</td>
                                                <td>{car.carNumberplate}</td>
                                                <td>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => handleCarSelection(car)}
                                                        className="select-button"
                                                    >
                                                        Select
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default HandOver;