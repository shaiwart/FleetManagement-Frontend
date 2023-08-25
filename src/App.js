import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Compnents/Pages/Home';
import AboutUs from './Compnents/Pages/AboutUs';
import ContactUs from './Compnents/Pages/ContactUs'; 
import ErrorPage from './Compnents/Pages/ErrorPage'; 
import HubSelector from './Compnents/Pages/HubSelector';
import LoginPage from './Compnents/Pages/Login';
import RegistrationForm from './Compnents/Pages/FillUserDetail';
import Booking from './Compnents/Pages/Booking'; 
import CategorySelector from './Compnents/Pages/CategorySelector'; 
import AddOnPage from './Compnents/Pages/AddOnPage'; 
import Membership from './Compnents/Pages/Membership'; 


function App() {


  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    address: '',
    dlNo: '',
    aadharNo: '',
    passportNo: '',
    state: '',
    city: '',
    hub: '',
    categoryId: ''
  }); 


  const [homePageData, setHomePageData] = useState({ 
    bookingDateAndTime: '', // Add it later 
    pickupHub: '', 
    dropHub: '', 
    category: '', 
    pickupState: '', 
    dropState: '', 
    pickupCity: '', // this is the city by which hubs will be fetched from database
    dropCity: '' 
  }); 

  console.log("main data"); 
  console.log(homePageData.pickupHub); 
  console.log(homePageData.category); 



  return (
    <BrowserRouter> 


      <Routes> 
        
          <Route path='/' element={<Home homePageData={homePageData} setHomePageData={setHomePageData} />} />
          <Route path='hubselector' element={<HubSelector setUserData={setUserData} setHomePageData={setHomePageData} homePageData={homePageData} />} /> 
          <Route path='categoryselector' element={<CategorySelector setUserData={setUserData} setHomePageData={setHomePageData} homePageData={homePageData} />} /> 
          <Route path='addonpage' element={<AddOnPage setUserData={setUserData} setHomePageData={setHomePageData} homePageData={homePageData} />} /> 
          <Route path='loginpage' element={<LoginPage setUserData={setUserData}/>} /> 
          <Route path='membership' element={<Membership />} /> 
          <Route path='registrationform' element={<RegistrationForm userData={userData} setUserData={setUserData} />} /> 
          <Route path='booking' element={<Booking userData={userData} homePageData={homePageData} />} /> 
          
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
