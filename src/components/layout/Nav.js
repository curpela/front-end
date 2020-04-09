import React from "react";
import { Link } from "react-router-dom";
import CurpelaWordLogo from "../sharable/CurpelaWordLogo";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">
          <CurpelaWordLogo
            fill="white"
            width="120"
            className="nav__left__word-logo"
          />
        </Link>
      </div>
      <div className="center-nav">
        <ul>
          <Link to="/FAQ">
            <li>FAQ</li>
          </Link>
          <Link to="/How-it-works">
            <li>How it Works</li>
          </Link>
        </ul>
      </div>

      <div className="right-nav"></div>
    </div>
  );
};
export default Nav;
