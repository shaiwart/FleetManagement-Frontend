import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Compnents/Pages/HomePage';
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
import SuccessPage from './Compnents/Pages/SuccessPage'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FillUserDetail from './Compnents/Pages/FillUserDetail';


function App() {


  // const [userData, setUserData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   emailId: '',
  //   mobileNumber: '',
  //   address: '',
  //   dlNo: '',
  //   aadharNo: '',
  //   passportNo: '',
  //   state: '',
  //   city: ''
  //   // hub: '',
  //   // categoryId: '' 
  // }); 


  // const [homePageData, setHomePageData] = useState({ 
  //   bookingDateAndTime: '', // Add it later 
  //   pickupHub: '', 
  //   dropHub: '', 
  //   category: '', 
  //   pickupState: '', 
  //   dropState: '', 
  //   pickupCity: '', // this is the city by which hubs will be fetched from database
  //   dropCity: '' 
  // }); 

  // console.log("main data"); 
  // console.log(homePageData.pickupHub); 
  // console.log(homePageData.category); 



  return (
    <BrowserRouter> 


      <Routes> 
        
          <Route path='/' element={<HomePage />} />
          <Route path='hubselector' element={<HubSelector />} /> 
          <Route path='categoryselector' element={<CategorySelector />} /> 
          <Route path='addonpage' element={<AddOnPage />} /> 
          <Route path='filluserdetails' element={<FillUserDetail />} /> 
          <Route path='errorpage' element={<ErrorPage />} /> 

          <Route path='loginpage' element={<LoginPage />} /> 
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
