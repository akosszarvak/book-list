import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="navbar flex">
      <div className="">Book List</div>
      <div className="links">
        <div className="nav-menu flex">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/favorites">
            favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
