import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputContainer)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className={css(styles.input)}/>
      </div>
      <div className={css(styles.inputContainer)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className={css(styles.input)}/>
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    margin: '20px',
  },
  inputContainer: {
    margin: '10px 0',
  },
  input: {
    marginLeft: '10px',
  },
  button: {
    marginTop: '10px',
  },
});

export default Login;
