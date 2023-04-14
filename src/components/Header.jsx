import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" width="150px" height="76px" />
          </Link>
        </div>

        <div className="header__nav">
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Plan Your Visit</Link>
              </li>

              <li>
                <Link to="/">Animals</Link>
              </li>

              <li>
                <Link to="/">About</Link>
              </li>

              <li>
                <Link to="/">Career</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header