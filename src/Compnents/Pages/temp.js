import React, { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/${email}/${password}`);

            if (response.ok) {
                const user = await response.json();
                setLoggedIn(true);
                setUserData(user);
            } else {
                setErrorMessage('Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    mobileNumber: userData.mobileNumber,
                    emailId: userData.emailId,
                    address: userData.address,
                    password: userData.password,
                    dlNo: userData.dlNo,
                    aadharNo: userData.aadharNo,
                    passportNo: userData.passportNo,
                    isRegisteredUser: userData.isRegisteredUser,
                    isEmployee: userData.isEmployee,
                }),
            });

            if (response.ok) {
                console.log('User data submitted successfully');
            } else {
                console.log('Error submitting user data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section>

        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Login</h1>
            {/* ... (Login Card) */}
            <h1>Login</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {loggedIn ? (
                    <div style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                        <h2>User Data</h2>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={userData.firstName}
                            readOnly
                        />
                        <br />
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={userData.lastName}
                            readOnly
                        />
                        <br />
                        <label>Email:</label>
                        <input
                            type="text"
                            value={userData.emailId}
                            readOnly
                        />
                    </div>
                ) : (
                    <div style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                        <h2>Login Card</h2>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button onClick={handleLogin}>Login</button>
                        <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
                    </div>
                )}
            </div>

            {/* ... (User Information Form) */}
            <h2 style={{ marginTop: '30px' }}>User Information Form</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.firstName : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.lastName : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Email:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.emailId : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.mobileNumber : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Address:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.address : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={loggedIn ? '********' : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>DL Number:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.dlNo : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Aadhar Number:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.aadharNo : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Passport Number:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.passportNo : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Registered User:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.isRegisteredUser : ''}
                        readOnly={loggedIn}
                    />
                    <br />
                    <label>Employee:</label>
                    <input
                        type="text"
                        value={loggedIn ? userData.isEmployee : ''}
                        readOnly={loggedIn}
                    />
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form style={{ width: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                    {/* ... (Fields) */}
                    <br />
                    <button onClick={handleFormSubmit} disabled={!loggedIn}>
                        Submit
                    </button>
                </form>
            </div>
        </div>

        

        </section>
    );
}

export default LoginPage;
