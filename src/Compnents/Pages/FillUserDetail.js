import React, { useState } from 'react';
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
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]); 

  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [emailId, setEmailId] = useState('');
  const [dlNo, setDlNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [cityName, setCityName] = useState('');
  const [stateName, setStateName] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    console.log("A");
    fetch(`http://localhost:8080/api/user/${email}/${password}`)
      .then(response => response.json())
      .then(result => {
        setUserData(result);
        setFirstName(result.firstName);
        setLastName(result.lastName);
        setMobileNumber(result.mobileNumber);
        setAddress(result.address);
        setEmailId(result.emailId);
        setDlNo(result.dlNo);
        setAadharNo(result.aadharNo);
        setPassportNo(result.passportNo);
        setCityName(result.city.cityName); // 
        setStateName(result.state.stateName); // 
        console.log(result);
      });
  }

  const handelSubmit=()=>{
    

  }
  

  console.log(email);
  console.log(password);
  console.log(firstName);


  const columnStyle = {
    border: '1px solid gray',
    backgroundColor: 'lightgray',
  };

  return (
    <div>
      <Navbar />
      <h3 className='welcome-message'>Enter your details</h3>
      <Container>
        <Row>
          <Col xs={3} style={columnStyle}>
            Login area
            <Form onSubmit={signIn}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
              </FloatingLabel>
              <br />

              <Button variant="primary" type="submit">Login232</Button>
            </Form>
          </Col>

          <Col style={columnStyle}>
            User details area
            <Form onSubmit={handelSubmit}> 
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(event) => { setLastName(event.target.value) }} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile Number" value={mobileNumber} onChange={(event) => { setMobileNumber(event.target.value) }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(event) => { setAddress(event.target.value) }} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" value={emailId} onChange={(event) => { setEmailId(event.target.value) }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDLNo">
                  <Form.Label>Driver's License No</Form.Label>
                  <Form.Control type="text" placeholder="Enter DL No" value={dlNo} onChange={(event) => { setDlNo(event.target.value) }} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAadharNo">
                  <Form.Label>Aadhar No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Aadhar No" value={aadharNo} onChange={(event) => { setAadharNo(event.target.value) }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassportNo">
                  <Form.Label>Passport No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Passport No" value={passportNo} onChange={(event) => { setPassportNo(event.target.value) }} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* <section>
                  <Form.Select aria-label="Select State" onChange={onChangeHandler} onClick={handelClick} >
                    <option> Select State</option>
                    {stateList.map(state => (
                      <option key={state.stateId} value={state.stateId} >
                        {state.stateName}
                      </option>
                    ))}
                  </Form.Select>
                </section>

                <section>
                  <Form.Select aria-label="Select City" onChange={onChangeHandler} onClick={handelClick} >
                    <option> Select City</option>
                    {cityList.map(city => (
                      <option key={city.cityId} value={city.cityId}>
                        {city.cityName}
                      </option>
                    ))}
                  </Form.Select>
                </section> */}



                <Form.Group as={Col} controlId="formGridCityName">
                  <Form.Label>City Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter City Name" value={cityName} onChange={(event) => { setCityName(event.target.value) }} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridStateName">
                  <Form.Label>State Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter State Name" value={stateName} onChange={(event) => { setStateName(event.target.value) }} />
                </Form.Group>
              </Row>

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
