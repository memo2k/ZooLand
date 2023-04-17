import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

const Header = () => {
  const [hamburger, setHamburger] = useState("hamburger");
  const [ulClass, setUlClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setHamburger("hamburger active");
      setUlClass("active");
      document.body.style.overflow = 'hidden';
    } else {
      setHamburger("hamburger");
      setUlClass("");
      document.body.style.overflow = 'unset';
    }
    setIsMenuClicked(!isMenuClicked);
  }

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
            <ul className={ulClass}>
              <li>
                <Link to="/">Plan Your Visit</Link>
              </li>

              <li>
                <Link to="/">Animals</Link>
              </li>

              <li>
                <Link to="/">Membership</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={hamburger} onClick={updateMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  )
}

export default Header