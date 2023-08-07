import React, { useState } from 'react';
import axios from 'axios';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerResult, setRegisterResult] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API call to the backend to check the login
        axios.post(`http://localhost:8080/api/v1/users/register/${username}/${password}/${firstName}/${lastName}`).then((response)=>{
        if(response.data === true)
        {
            setRegisterResult('Success');
            props.setReg(false);
        }    
        else
        {
            setRegisterResult('Username Already in Use');
        }  
      }).catch((e) => {
        console.error('Error occurred while logging in:', e);
        // Handle error, e.g., show an error message
        setRegisterResult('Cannot have empty fields');
      });



    } catch (error) {
      console.error('Error occurred while logging in:', error);
      // Handle error, e.g., show an error message
      setRegisterResult('Error');
    }
  };
  const changePage = async (event) => {
    event.preventDefault();
    props.setReg(false)
  };
  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <form onSubmit={changePage}>
        <button>Login</button>
      </form>
      {registerResult && <p style={{color:'red'}}> {registerResult}</p>}
    </div>
  );
};

export default Register;
