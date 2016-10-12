import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

module.exports = ({ children }) => {
  return (
    <div className="container">
      <Menu />
      {children}
      <Footer />
    </div>
  );
}
