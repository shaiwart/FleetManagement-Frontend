import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Compnents/Pages/HomePage';
import AboutUs from './Compnents/Pages/AboutUs';
import ContactUs from './Compnents/Pages/ContactUs'; 
import ErrorPage from './Compnents/Pages/ErrorPage'; 
import PickupHubSelector from './Compnents/Pages/PickupHubSelector';
import DropHubSelector from './Compnents/Pages/DropHubSelector';
import RegistrationForm from './Compnents/Pages/FillUserDetail';
import Booking from './Compnents/Pages/Booking'; 
import CategorySelector from './Compnents/Pages/CategorySelector'; 
import AddOnPage from './Compnents/Pages/AddOnPage'; 
import Membership from './Compnents/Pages/Membership'; 
import SuccessPage from './Compnents/Pages/SuccessPage'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FillUserDetail from './Compnents/Pages/FillUserDetail'; 
import UserLogin from './Compnents/Pages/UserLogin'; 


function App() {

  return (
    <BrowserRouter> 


      <Routes> 
        
          <Route path='/' element={<HomePage />} />
          <Route path='PickupHubSelector' element={<PickupHubSelector />} /> 
          <Route path='DropHubSelector' element={<DropHubSelector />} /> 
          <Route path='categoryselector' element={<CategorySelector />} /> 
          <Route path='addonpage' element={<AddOnPage />} /> 
          <Route path='filluserdetails' element={<FillUserDetail />} />  
          <Route path='userlogin' element={<UserLogin />} /> 
          <Route path='membership' element={<Membership />} /> 
          <Route path='registrationform' element={<RegistrationForm />} /> 
          <Route path='booking' element={<Booking  />} /> 
          <Route path='successpage' element={<SuccessPage />} /> 
          
          <Route path='about' element={<AboutUs/>} /> 
          <Route path='contact' element={<ContactUs/>} /> 
          {/* <Route path='products/:productId' element={<SingleProduct/>} /> */}
          {/* <Route path='login' element={<Login setUser={setUser} />} /> */}
          {/* <Route path='dashboard' element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>} />  */} 
              
          <Route path='*' element={<ErrorPage/>} /> 
      </Routes> 

    </BrowserRouter>
  );
}

export default App;
