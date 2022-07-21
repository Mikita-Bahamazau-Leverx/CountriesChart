import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="foot__wrapper wrapper">
      <footer className="foot">
        <div className="foot__credits">
          <p className="credits__company">LeverX 2022</p>
        </div>
        <nav className="foot__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link"></a>
            </li>
            <li className="nav__item">
              <a className="nav__link"></a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
