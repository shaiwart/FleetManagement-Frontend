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



function CategorySelector({setHomePageData}) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();


    const handleCategorySelect = (category) => {
        setHomePageData(prevData => ({ ...prevData, category: category })); // Setting the main data in App.js 
        setSelectedCategory(category); 
    };

    const continueBookingHandler = () => {
        navigate('/addonpage');
    }

    const cancelHandler = ()=> {
        navigate('/'); 
    }





    const vehicles = [
        {
            carType: 'Economy',
            dailyRate: '$45.99',
            weeklyRate: '$249.99',
            monthlyRate: '$799.99',
            availability: 'Select',
            image: small // Path to the image
        },
        {
            carType: 'Compact',
            dailyRate: '$55.99',
            weeklyRate: '$279.99',
            monthlyRate: '$899.99',
            availability: 'Select',
            image: compact // Path to the image
        },
        {
            carType: 'Midsize',
            dailyRate: '$65.99',
            weeklyRate: '$299.99',
            monthlyRate: '$999.99',
            availability: 'Select',
            image: intermediate // Path to the image
        },
        {
            carType: 'Luxury',
            dailyRate: '$99.99',
            weeklyRate: '$499.99',
            monthlyRate: '$1699.99',
            availability: 'Select',
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
                            <button className="select-button" onClick={() => handleCategorySelect(vehicle)} >
                                {vehicle.availability}
                            </button>
                        </tr>
                    ))}
                </tbody>
                <br></br>
                <tr>
                    <td>
                        <button id="continue" style={{ fontSize: '20px' }} onClick={continueBookingHandler}>Continue Booking</button>
                    </td>
                    <td>
                        <button type="reset" id="cancel" style={{ fontSize: '20px' }} onClick={cancelHandler}>Cancel</button>
                    </td>
                </tr>
            </table>
        </div>
        </>
    );
}

export default CategorySelector;







