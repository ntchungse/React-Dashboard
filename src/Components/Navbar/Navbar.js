import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md"
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar({ sidebar }) {
  return (
    <div className={ sidebar ? "navbar navbarActive" : "navbar"}>
      <div className="navbar__search">
        <input placeholder="Search" />
        <button>
          <FaIcons.FaSearch />
        </button>
      </div>
      <div className="navbar__icons">
        {/* <MdIcons.MdNotifications /> */}
        <Link to="#">
        <MdIcons.MdAccountCircle />
        </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
