import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <a href="#" style={styles.link}>Home</a>
      <a href="#" style={styles.link}>About</a>
      <a href="#" style={styles.link}>Services</a>
      <a href="#" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: '20px',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

export default Navbar;
