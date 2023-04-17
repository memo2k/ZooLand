import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav footer__links">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Zoo Map</Link>
            </li>

            <li>
              <Link to="/">Volunteering</Link>
            </li>

            <li>
              <Link to="/">Corporations</Link>
            </li>

            <li>
              <Link to="/">Events</Link>
            </li>

            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__nav footer__socials">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/"><i className="fa-brands fa-facebook fa-2xl"></i></Link>
            </li>
            <li>
              <Link to="/"><i className="fa-brands fa-twitter fa-2xl"></i></Link>
            </li>
            <li>
              <Link to="/"><i className="fa-brands fa-instagram fa-2xl"></i></Link>
            </li>
            <li>
              <Link to="/"><i className="fa-brands fa-youtube fa-2xl"></i></Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__nav footer__policy">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Cookie Information</Link>
            </li>
            <li>
              <Link to="/">Complaint Policy</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Charitable Solicitations</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__copyright">
        <p>&copy; 2023 Zoo Land</p>
      </div>
    </footer>
  )
}

export default Footer