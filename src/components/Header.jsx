import React from 'react';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => (
  <div className="nav-bar">
    <nav className="nav">
      <h1>Bookstore CMS</h1>
      <ul className="nav-list">
        <li className="item">
          <Link className="item-link" to="/">BOOKS</Link>
        </li>
        <li className="item">
          <Link className="item-link" to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <div className="icon">
      <ImUser className="user" />
    </div>
  </div>
);
export default Header;
