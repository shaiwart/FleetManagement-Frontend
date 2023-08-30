import { Link } from "react-router-dom";
import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Pages/Login";
import RegistrationForm from "./Pages/FillUserDetail";
import Booking from "./Pages/Booking";
import Membership from "./Pages/Membership";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


export default function PageNavigation() { 
    const [isUserLoggedIn, setIsUserLoggedIn] = useState( sessionStorage.getItem("isUserLoggedIn") ? 
    sessionStorage.getItem("isUserLoggedIn") : false); 
    const navigate = useNavigate(); 

    function handleLogout() {
        sessionStorage.clear(); 
        navigate("/"); 
    }

    

    return (
        <section>

            <Navbar collapseOnSelect expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="/" className='logoname'>INDIA DRIVE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="Modify">Modify/Cancel Booking</Nav.Link>
                            <Nav.Link href="membership">Membership Registration</Nav.Link>
                            <Nav.Link href="about">About IndiaDrive</Nav.Link>
                            <Nav.Link href="contact">Customer Care</Nav.Link>
                        </Nav>
                        <Nav>
                             
                            {isUserLoggedIn ? <Nav.Link onClick={handleLogout} className='login-button'>Logout</Nav.Link> : 
                            <Nav.Link href="userlogin" className='login-button'>Login</Nav.Link>} 

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>



    )
} // RegistrationForm




{/* <nav className="navbarX" >
<Link to='/' element={<Home />}> Home </Link>
<Link to='/membership' element={<Membership />}> Membership </Link>
<Link to='/about' element={<AboutUs />}> About </Link>
<Link to='/contact' element={<ContactUs />}> Contact </Link>
<Link to='/loginpage' element={< LoginPage />}> Login </Link>
</nav> */}

{/* <Link to='/booking' element={< Booking />}> Booking </Link>  */}
{/* <Link to='/registrationform' element={< RegistrationForm />}> RegistrationForm </Link>  */}
