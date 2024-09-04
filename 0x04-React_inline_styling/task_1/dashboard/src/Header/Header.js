import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../holberton-logo.jpg'; // Adjust the path if needed

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '3px solid #e0354b',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  title: {
    marginLeft: '20px',
    fontSize: '24px',
    color: '#e0354b',
  },
});

export default Header;
