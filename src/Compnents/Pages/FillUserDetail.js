import React, { useState } from 'react';
// import './RegistrationForm.css';
import Navbar from "../PageNavigation";
import { useNavigate } from 'react-router-dom';
import '../../Style/FillUserDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FillUserDetail() {

  // let localUserData = {
  //   firstName: userData.firstName,
  //   lastName: userData.lastName,
  //   emailId: userData.emailId,
  //   mobileNumber: userData.mobileNumber,
  //   address: userData.address,
  //   dlNo: userData.dlNo,
  //   aadharNo: userData.aadharNo,
  //   passportNo: userData.passportNo,
  //   state: userData.state.stateId,
  //   city: userData.city.cityId
  //   // hub: '', 
  //   // categoryId: ''
  // }; 


  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // const data = { // This data will be serialised and send to the Database 
  //   firstName: formData.firstName,
  //   lastName: formData.lastName,
  //   mobileNumber: formData.mobileNumber,
  //   address: formData.address,
  //   emailId: formData.emailId,
  //   dlNo: formData.dlNo,
  //   aadharNo: formData.aadharNo,
  //   passportNo: formData.passportNo,
  //   city: {
  //     cityId: 2110
  //   },
  //   state: {
  //     stateId: 21
  //   }
  // };


  const dataere = { // This data will be serialised and send to the Database 
    firstName: formData.firstName,
    lastName: formData.lastName,
    mobileNumber: formData.mobileNumber,
    address: formData.address,
    emailId: formData.emailId,
    dlNo: formData.dlNo,
    aadharNo: formData.aadharNo,
    passportNo: formData.passportNo,
    city: {
      cityId: localStorage.getItem("city")
    },
    state: {
      stateId: 21
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create an object with the entered data 
  //   const userObject = { ...formData };

  //   try { 
  //     const response = await fetch('http://localhost:8085/api/user/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data) // 
  //     });

  //     if (response.ok) {
  //       console.log('User data successfully submitted.');
  //     } else {
  //       console.error('Failed to submit user data.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending data:', error);
  //   }

  //   navigate('/booking'); // Navigate to confirmation page or other route 
  // }

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  }

  const handleCancel = () => {
    navigate('/');
  };


  const columnStyle = {
    border: '1px solid gray', // Add border
    backgroundColor: 'lightgray', // Add gray background color
    // padding: '10px', // Add padding for spacing
  };

  return (
    <div>
      <Navbar />
      <h3 className='welcome-message'>Enter your details</h3>
      <Container>
        <Row>
          <Col xs={3} style={columnStyle}>
            Login area
            <Form>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="Enter email" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <br/> 

              <Button variant="primary" type="submit">Login</Button>
            </Form>



          </Col>

          <Col style={columnStyle}> 
          User details area 
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

        </Row>


      </Container>









    </div>
  );
}

export default FillUserDetail;
