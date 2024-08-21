import React from 'react';
import './Login.css'; // Import the CSS file

function Login() {
  return (
    </>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email"/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"/>
      <br/>
      <button>OK</button>
    </>
  );
}

export default Login;
