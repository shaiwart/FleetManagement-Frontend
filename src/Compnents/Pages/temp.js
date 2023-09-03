{
  "firstName": "John",
  "lastName": "Doe",
  "mobileNumber": "1234567890",
  "emailId": "johndoe@example.com",
  "address": "123 Main St",
  "password": "secretpassword",
  "dlNo": "DL123456",
  "aadharNo": "123456789012",
  "passportNo": "AB123456",
  "isEmployee": 0, // or 1 for employee
  "state": {
    "stateId": 1 // Replace with the actual state ID
  },
  "city": {
    "cityId": 1 // Replace with the actual city ID
  },
  "hubs": {
    "hubId": 1 // Replace with the actual hub ID
  }
}






const signIn = (e) => {
  e.preventDefault();
  console.log("A");
  fetch(`http://localhost:8080/api/user/${email}/${password}`)
    .then(response => response.json())
    .then(result => {
      sessionStorage.setItem("isUserLoggedIn", true);
      setUserData(result);
      sessionStorage.setItem("userId", result.userId);

      setFirstName(result.firstName);
      sessionStorage.setItem("firstName", result.firstName);

      setLastName(result.lastName);
      sessionStorage.setItem("lastName", result.lastName);

      setMobileNumber(result.mobileNumber);
      sessionStorage.setItem("mobileNumber", result.mobileNumber);

      setAddress(result.address);
      sessionStorage.setItem("address", result.address);

      setEmailId(result.emailId);
      sessionStorage.setItem("emailId", result.emailId);

      setDlNo(result.dlNo);
      sessionStorage.setItem("dlNo", result.dlNo);

      setAadharNo(result.aadharNo);
      sessionStorage.setItem("aadharNo", result.aadharNo);

      setPassportNo(result.passportNo);
      sessionStorage.setItem("passportNo", result.passportNo);

      setCityName(result.city.cityName);
      sessionStorage.setItem("userCityName", result.city.cityName);

      setCityId(result.city.cityId);
      sessionStorage.setItem("userCityId", result.city.cityId);

      setStateName(result.state.stateName);
      sessionStorage.setItem("userStateName", result.state.stateName);

      setStateId(result.state.stateId);
      sessionStorage.setItem("userStateId", result.state.stateId);


      console.log(result);
    })
    .then(setIsLoggedIn(true))
    .catch(() => { console.log("Failed to fetch data"); navigate("errorpage") }); 
}




const signIn = (e) => {
  e.preventDefault();
  console.log("A");
  fetch(`http://localhost:8080/api/user/${email}/${password}`)
    .then(response => response.json())
    .then(result => {
      sessionStorage.setItem("isUserLoggedIn", true);
      setUserData(result);
      sessionStorage.setItem("userId", result.userId);

      setFirstName(result.firstName);
      sessionStorage.setItem("firstName", result.firstName);

      setLastName(result.lastName);
      sessionStorage.setItem("lastName", result.lastName);

      setMobileNumber(result.mobileNumber);
      sessionStorage.setItem("mobileNumber", result.mobileNumber);

      setAddress(result.address);
      sessionStorage.setItem("address", result.address);

      setEmailId(result.emailId);
      sessionStorage.setItem("emailId", result.emailId);

      setDlNo(result.dlNo);
      sessionStorage.setItem("dlNo", result.dlNo);

      setAadharNo(result.aadharNo);
      sessionStorage.setItem("aadharNo", result.aadharNo);

      setPassportNo(result.passportNo);
      sessionStorage.setItem("passportNo", result.passportNo);

      setCityName(result.city.cityName);
      sessionStorage.setItem("userCityName", result.city.cityName);

      setCityId(result.city.cityId);
      sessionStorage.setItem("userCityId", result.city.cityId);

      setStateName(result.state.stateName);
      sessionStorage.setItem("userStateName", result.state.stateName);

      setStateId(result.state.stateId);
      sessionStorage.setItem("userStateId", result.state.stateId);


      console.log(result);
    })
    .then(setIsLoggedIn(true))
    .catch(() => { console.log("Failed to fetch data"); navigate("errorpage") });
}

