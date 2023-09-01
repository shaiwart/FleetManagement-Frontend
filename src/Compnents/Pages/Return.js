import Navbar from "../PageNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

function Return() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userEmailId, setUserEmailId] = useState('');
    const [booking, setBooking] = useState(null);
    const [billing, setBilling] = useState(null);
    const [carList, setCarList] = useState([]);
    const [selectedCarId, setSelectedCarId] = useState();
    const navigate = useNavigate();
    const [fuelStatus, setFuelStatus] = useState();

    const handleFuelStatusChange = (event) => {
        setFuelStatus(event.target.value);
    };


    const fetchBookingByEmailId = () => {
        fetch(`http://localhost:8080/api/booking/by-email/${userEmailId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setBooking(result);
                console.log("booking result-> ");
                console.log(result);

                return fetch(`http://localhost:8080/api/billing/by-bookingid/${result.bookingId}`);
            })
            .then((billingResponse) => {
                if (!billingResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                return billingResponse.json();
            })
            .then((billingResult) => {
                setBilling(billingResult);
                console.log("billing result-> ");
                console.log(billingResult);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleCarSelection = (selectedCar) => {
        // Perform your desired task using the selected car
        console.log("Selected car:", selectedCar);
        setSelectedCarId(selectedCar.carId);
        sessionStorage.setItem("selectedCarId", selectedCar.carId);
        // Add your logic here
    };

    const handleHandover = async () => {
        // POST data in billing table 

        try {
            const billingData = {
                staffName: sessionStorage.getItem("employeeName"),
                userName: booking.firstName + " " + booking.lastName,
                userEmailId: booking.emailId,
                customerMobileNo: booking.mobileNumber,
                customerAadharNo: booking.aadharNo,
                customerPassNo: booking.passportNo,
                billAmount: 0.0,
                fuelStatus: "full",
                startDate: "2023-08-31T12:00:00",
                endDate: "2023-09-01T12:00:00",
                categoryId: booking.category.categoryId,
                car: {
                    carId: sessionStorage.getItem("selectedCarId")
                },
                booking: {
                    bookingId: booking.bookingId
                },
                pickupHub: {
                    hubId: booking.pickupHubId
                },
                dropHub: {
                    hubId: booking.dropHubId
                }
            };

            const response = await fetch('http://localhost:8080/api/addbilling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(billingData)
            });

            if (response.ok) {
                console.log('Billing record created successfully.');
                // Perform any additional actions after successful creation
                navigate("/handoversuccess")
            } else {
                console.error('Failed to create billing record.');
            }
        } catch (error) {
            console.error('Error creating billing record:', error);
        }

    }

    const handleBillAmount = () => {

    };

    const renderBillAmount = (
        <section>
            <Button variant="primary" onClick={handleBillAmount}>
                Generate Bill Amount 
            </Button> 

        </section>
    );



    return (
        <>
            <Navbar />
            <Container>

                <div>
                    <h3>Return Car</h3>
                    <div className="booking-details-container">
                        <h5>Enter customer's email id</h5>
                        <div className="input-fields">
                            <input
                                type="text"
                                placeholder="Enter Email ID"
                                value={userEmailId}
                                onChange={(e) => setUserEmailId(e.target.value)}
                            />
                            <Button variant="primary" onClick={fetchBookingByEmailId}>
                                Fetch by Email ID
                            </Button>
                        </div>
                        {billing && (
                            <div className="booking-table">
                                <Table striped bordered>
                                    <tbody>
                                        <tr>
                                            <td><strong>Billing ID:</strong></td>
                                            <td>{billing.billingId}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Staff:</strong></td>
                                            <td>{billing.staffName}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Customer Name:</strong></td>
                                            <td>{billing.userName}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email ID:</strong></td>
                                            <td>{billing.userEmailId}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Fuel Status:</strong></td>
                                            <td>{fuelStatus || billing.fuelStatus}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bill Amount:</strong></td>
                                            <td>{billing.billAmount}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Start Date:</strong></td>
                                            <td>{billing.startDate}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>End Date:</strong></td>
                                            <td>{billing.endDate}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Category:</strong></td>
                                            <td>{billing.booking.category.categoryName}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div>
                                    <div>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                // Show the radio buttons when the Fuel Status button is clicked
                                                // You can also toggle the visibility with a state variable if needed
                                                setFuelStatus(''); // Clear the selected value when the button is clicked
                                            }}
                                        >
                                            Fuel Status
                                        </Button>

                                        {fuelStatus === '' || (
                                            <Form>
                                                <Form.Check
                                                    type="radio"
                                                    label="Empty"
                                                    name="fuelStatus"
                                                    value="empty"
                                                    checked={fuelStatus === 'empty'}
                                                    onChange={handleFuelStatusChange}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Half"
                                                    name="fuelStatus"
                                                    value="half"
                                                    checked={fuelStatus === 'half'}
                                                    onChange={handleFuelStatusChange}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Full"
                                                    name="fuelStatus"
                                                    value="full"
                                                    checked={fuelStatus === 'full'}
                                                    onChange={handleFuelStatusChange}
                                                />
                                            </Form>
                                        )}

                                        {/* Display the selected fuel status */}
                                        {fuelStatus !== '' && <p>Selected Fuel Status: {fuelStatus}</p>}
                                    </div>

                                    <div>
                                        { fuelStatus ? <>{renderBillAmount}</> : <></>} 
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Return;