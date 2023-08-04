// 'http://localhost:8080/api/v1/users/register/${username}/${password}/${firstName}/${lastName}'
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [registrationResult, setRegistrationResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Destructuring the formData object
    const { username, password, firstName, lastName } = formData;
  
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    const queryParams = `${username}/${password}/${firstName}/${lastName}`;
  
    axios.get(`http://localhost:8080/api/v1/users/register/${queryParams}`)
      .then((response) => {
        if(response.data === true)
        {
            setRegistrationResult('Success');
        }    
        else
        {
            setRegistrationResult('Failed');
        }  
        
      })
      .catch((error) => {
        console.error(error);
        setRegistrationResult('Error occurred during registration.');
      });
  };
  

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {registrationResult && (
        <div>
          <h2>Registration Result:</h2>
          <p>{registrationResult}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
