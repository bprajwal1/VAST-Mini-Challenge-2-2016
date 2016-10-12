import React from 'react';

module.exports = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Juan Pablo Ramírez.</p>
    </footer>
  );
}
