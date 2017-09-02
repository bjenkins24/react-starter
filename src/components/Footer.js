import React from 'react';
import APP from '../config/constants';

const Footer = () => (
  <footer>
    <p>&copy; {APP.brand} {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
