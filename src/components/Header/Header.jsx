import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>List Of Villagers</h1>
      <Link to={'/'}>Home</Link>
    </header>

  );
};

export default Header;
