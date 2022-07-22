import "./header.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";

import classnames from "classnames";

//@ts-ignore
import logo from "../../assets/icons/logo.png";

const DEFAULT_CLASSNAME = "app-header";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
  LOGO: `${DEFAULT_CLASSNAME}__logo`,
  LOGO_IMAGE: `${DEFAULT_CLASSNAME}__logo-image`,
  NAVIGATION: `${DEFAULT_CLASSNAME}__nav`,
  NAVIGATION_LIST: `${DEFAULT_CLASSNAME}__nav-list`,
  NAVIGATION_ITEM: `${DEFAULT_CLASSNAME}__nav-item`,
  NAVIGATION_LINK: `${DEFAULT_CLASSNAME}__nav-link`,
};

const Header = () => {
  return (
    <div className={classnames(CLASSNAMES.WRAPPER, "wrapper")}>
      <header className={DEFAULT_CLASSNAME}>
        <Link className={CLASSNAMES.LOGO} to="/">
          <img src={logo} alt="logo" className={CLASSNAMES.LOGO_IMAGE} />
        </Link>
        <nav className={CLASSNAMES.NAVIGATION}>
          <ul className={CLASSNAMES.NAVIGATION_LIST}>
            <li className={CLASSNAMES.NAVIGATION_ITEM}>
              <NavLink to="/" exact className={CLASSNAMES.NAVIGATION_LINK}>
                Home
              </NavLink>
            </li>
            <li className={CLASSNAMES.NAVIGATION_ITEM}>
              <NavLink to="/countries" className={CLASSNAMES.NAVIGATION_LINK}>
                Countries list
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
