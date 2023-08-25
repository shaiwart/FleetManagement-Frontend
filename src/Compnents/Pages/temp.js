import React, { useState, useEffect } from 'react';
import Navbar from "../PageNavigation";
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from './FillUserDetail';
import './LoginForm.css'; // You can create your own CSS file for styling 

const LoginPage = ({ setUserData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:8085/api/user/${email}/${password}`);
        const result = await response.json();
        setUserData(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
      // Navigate to the registration form
      navigate('/registrationform');
    }

  return (
    <div className="login-page-container">
      {isLoggedIn ? (
        <div className="welcome-message">
          <h2>Welcome, {userData && userData.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      <div className="buttons">
        <button className="register-button">Register User</button>
        <button className="direct-booking-button">Direct Booking</button>
      </div>
    </div>
  );
};

export default LoginPage;