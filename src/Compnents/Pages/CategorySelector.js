import React from 'react';
import '../../Style/VehicleSelection.css'; 
import small from '../../Images/small.png';
import compact from '../../Images/Compact1.jpg';
import intermediate from '../../Images/Intermediate.jpg';
import luxury from '../../Images/luxury.png'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../PageNavigation'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';



function CategorySelector() {
    const [selectedCategory, setSelectedCategory] = useState(); 
    const [selectedCategoryName, setSelectedCategoryName] = useState(); 
    const navigate = useNavigate();


    const handleCategorySelect = (category) => {
        setSelectedCategory(category.id); 
        setSelectedCategoryName(category.carType); 
        sessionStorage.setItem("selectedCategoryId" ,category.id); 
        sessionStorage.setItem("selectedCategoryName" ,category.carType); 
    };

    const continueBookingHandler = () => {
        navigate('/addonpage'); 
    }

    const cancelHandler = ()=> {
        navigate('/'); 
    }

    const vehicles = [
        {   id: '1', 
            carType: 'Economy',
            dailyRate: '$45.99',
            weeklyRate: '$249.99',
            monthlyRate: '$799.99',
            image: small // Path to the image
        },
        {
            id: '2', 
            carType: 'Compact',
            dailyRate: '$55.99',
            weeklyRate: '$279.99',
            monthlyRate: '$899.99',
            image: compact // Path to the image
        },
        {
            id: '3', 
            carType: 'Midsize',
            dailyRate: '$65.99',
            weeklyRate: '$299.99',
            monthlyRate: '$999.99',
            image: intermediate // Path to the image
        },
        {
            id: '4', 
            carType: 'Luxury',
            dailyRate: '$99.99',
            weeklyRate: '$499.99',
            monthlyRate: '$1699.99',
            image: luxury // Path to the image
        }
        // ... add more vehicle data entries
    ];



    return (
        <>
        <Navbar />

        
        <div className="vehicle-selection">
            <table className="vehicle-table">
                <thead>
                    <tr>
                        <th>Car Image</th>
                        <th>Car Type</th>
                        <th>Daily Rate</th>
                        <th>Weekly Rate</th>
                        <th>Monthly Rate</th>
                        <th>Choose</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td><img src={vehicle.image} alt={vehicle.carType} className="vehicle-image" /></td>
                            <td>{vehicle.carType}</td>
                            <td>{vehicle.dailyRate}</td>
                            <td>{vehicle.weeklyRate}</td>
                            <td>{vehicle.monthlyRate}</td>
                            <td><button className="select-button" onClick={() => handleCategorySelect(vehicle)}> Select </button></td>
                        </tr>
                    ))}
                </tbody>
                <br></br>
                <tr>
                    <td> <Button variant="secondary" onClick={continueBookingHandler}>Continue Booking</Button> </td>
                    <td> <Button variant="secondary" onClick={cancelHandler}>Cancel</Button> </td>
                </tr>
            </table> 
            <p>You chose: {selectedCategoryName}</p> 
        </div>
        </>
    );
}

export default CategorySelector;







