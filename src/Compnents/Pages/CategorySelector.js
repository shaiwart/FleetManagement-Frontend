import React, { useState, useEffect } from 'react';
import '../../Style/VehicleSelection.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../PageNavigation';
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CategorySelector() {
  const [CarCategory, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/car_category");
      const result = await response.json();
      setCategory(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, you can navigate to an error page here
    }
  }

  const handleCategorySelect = (categoryId, dailyRates, weeklyRates, monthlyRates) => {
    sessionStorage.setItem("pickCategoryId", categoryId);
    sessionStorage.setItem("dailyRate", dailyRates);
    sessionStorage.setItem("weeklyRate", weeklyRates);
    sessionStorage.setItem("monthlyRate", monthlyRates);
  }

  const continueBookingHandler = () => {
    navigate('/addonpage');
  }

  const cancelHandler = () => {
    navigate('/');
  }

  return (
    <>
      
      <div className="vehicle-selection">
        <Row>
          {CarCategory.map((cat, index) => (
            <Col key={index}>
              <Card border='info' style={{ width: "18rem" }}>
                <Card.Header>{cat.categoryName}</Card.Header>
                <Card.Img src={cat.imgPath} alt={cat.categoryName} />
                <Card.Body>
                  <Card.Text>
                    <p>Daily Rate: {cat.dailyRates}</p>
                    <p>Weekly Rate: {cat.weeklyRates}</p>
                    <p>Monthly Rate: {cat.monthlyRates}</p>
                  </Card.Text>
                </Card.Body>
                <button
                  className="select-button"
                  onClick={() =>
                    handleCategorySelect(
                      cat.categoryId,
                      cat.dailyRates,
                      cat.weeklyRates,
                      cat.monthlyRates
                    )
                  }
                >
                  Select
                </button>
              </Card>
            </Col>
          ))}
        </Row>
        <button id="continue" style={{ fontSize: '20px' }} onClick={continueBookingHandler}>Continue Booking</button>
        <button type="reset" id="cancel" style={{ fontSize: '20px' }} onClick={cancelHandler}>Cancel</button>
      </div>
    </>
  );
}

export default CategorySelector;
