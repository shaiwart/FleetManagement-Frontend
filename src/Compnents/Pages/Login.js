import React, { useState } from 'react';
import Navbar from "../PageNavigation";
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

// import './LoginForm.css'; // You can create your own CSS file for styling 

function LoginPage({ setUserData }) {
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
    <div>
      <Navbar/>
      <h3>Login Page</h3> 
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Login
        </button>
      </form>

      <Link to='/registrationform' element={< RegistrationForm />}> Go Ahead Without Login </Link> 

    </div>
  );
}

export default LoginPage;
