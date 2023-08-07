import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API call to the backend to check the login
        axios.get(`http://localhost:8080/api/v1/users/auth/${username}/${password}`).then((response)=>{
        props.setLog(response.data);
        if(response.data === true)
        {
            setLoginResult('Success');
        }    
        else
        {
            setLoginResult('Incorrect Username or Password');
        }  
      }).catch((e) => {
        console.error('Error occurred while logging in:', e);
        // Handle error, e.g., show an error message
        setLoginResult('Cannot have empty fields');
      });


    } catch (error) {
      console.error('Error occurred while logging in:', error);
      // Handle error, e.g., show an error message
      setLoginResult('Error');
    }
  };
  const changePage = async (event) => {
    event.preventDefault();
    props.setReg(true)
  };
  return (
    <div>
      <h2>Login Page</h2>
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
        <button type="submit">Login</button>
      </form>
      <form onSubmit={changePage}>
        <button>Register</button>
      </form>
      {loginResult && <p style={{color:'red'}}>{loginResult}</p>}
    </div>
  );
};

export default LoginPage;
