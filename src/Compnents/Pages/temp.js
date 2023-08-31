{
  "billingName": "John Doe",
    "userName": "Alice",
      "userEmailId": "alice@example.com",
        "customerMobileNo": "555-555-5555",
          "customerAadharNo": "5555555555",
            "customerPassNo": "9876543210",
              "billAmount": 0.0,
                "fuelStatus": "full",
                  "startDate": "2023-08-31T12:00:00",
                    "endDate": "2023-09-01T12:00:00",
                      "categoryId": 1,
                        "car": {
    "carId": 3
  },
  "booking": {
    "bookingId": 1
  },
  "pickupHub": {
    "hubId": 1
  },
  "dropHub": {
    "hubId": 2
  }
}


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HandOver() {
  // ... your existing state and functions ...

  const createBillingRecord = async () => {
    
    
    try {
      const billingData = {
        billingName: "John Doe",
        userName: "Alice",
        userEmailId: "alice@example.com",
        customerMobileNo: "555-555-5555",
        customerAadharNo: "5555555555",
        customerPassNo: "9876543210",
        billAmount: 0.0,
        fuelStatus: "full",
        startDate: "2023-08-31T12:00:00",
        endDate: "2023-09-01T12:00:00",
        categoryId: 1,
        car: {
          carId: 3
        },
        booking: {
          bookingId: 1
        },
        pickupHub: {
          hubId: 1
        },
        dropHub: {
          hubId: 2
        }
      };

      const response = await fetch('http://localhost:8080/api/billing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(billingData)
      });

      if (response.ok) {
        console.log('Billing record created successfully.');
        // Perform any additional actions after successful creation
      } else {
        console.error('Failed to create billing record.');
      }
    } catch (error) {
      console.error('Error creating billing record:', error);
    }

  };

  return (
    <div>
      {/* ... your existing JSX ... */}
      <Button variant="primary" onClick={createBillingRecord}>
        Create Billing Record
      </Button>
    </div>
  );
}

export default HandOver;
