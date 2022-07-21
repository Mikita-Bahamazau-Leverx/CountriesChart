import React from "react";
import { Link } from "react-router-dom";

//@ts-ignore
import logo from "../../assets/icons/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="head__wrapper wrapper">
      <header className="head">
        <Link className="head__logo" to="/">
          <img src={logo} alt="logo" className="head__logo__img" />
        </Link>
        <nav className="head__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link"></a>
            </li>
            <li className="nav__item">
              <a className="nav__link"></a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
