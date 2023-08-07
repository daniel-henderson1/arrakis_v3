import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";

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
    <div style = {{marginLeft:'10%'}}>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div style = {{marginBottom:'2%'}}>
          <label>Username: &nbsp;</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div style = {{marginBottom:'2%'}}>
          <label>Password:&nbsp;&nbsp;&nbsp;</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div style = {{marginBottom:'2%'}}>
          <label>First Name:&thinsp;</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div style = {{marginBottom:'2%'}}>
          <label>Last Name:&nbsp;</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div style = {{marginBottom:'5%'}}>
            {registerResult && <p style={{color:'red'}}> {registerResult}</p>}
            <Button variant="contained" color='grey' onClick={handleSubmit}>Register</Button>
        </div>
        <button style= {{display:"none"}} type = "submit"></button>
      </form>
        <div>
            <h3>Already Have an Account?</h3>
        </div>
        <Button variant="contained" color='grey' onClick={changePage}>Login</Button>
    </div>
  );
};

export default Register;
