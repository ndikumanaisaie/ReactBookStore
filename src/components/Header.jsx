import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="nav-bar">
    <h2>Bookstore CMS</h2>
    <div className="nav">
      <Link to="/">Books</Link>
      <Link to="status">Ckeck Status</Link>
    </div>
  </div>
);

export default Header;
