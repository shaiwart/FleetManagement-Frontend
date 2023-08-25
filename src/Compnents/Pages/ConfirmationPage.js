import React from 'react';
import Navbar from './Navbar';

function ConfirmationPage({ bookingDetails }) {
  return (
    <div>
      <Navbar />
      <h1>Booking Confirmation</h1>
      <div className="confirmation-details">
        <p><strong>Car Category:</strong> {bookingDetails.carCategory}</p>
        <p><strong>Selected Add-Ons:</strong></p>
        <ul>
          {bookingDetails.selectedAddOns.map(addon => (
            <li key={addon.id}>{addon.name} (+${addon.price})</li>
          ))}
        </ul>
        <p><strong>Total Price:</strong> ${bookingDetails.totalPrice}</p>
        <p><strong>Booking Date:</strong> {bookingDetails.bookingDate}</p>
        <p><strong>Booking Reference:</strong> {bookingDetails.bookingReference}</p>
      </div>
      <p>Thank you for booking with us!</p>
    </div>
  );
}

export default ConfirmationPage;
