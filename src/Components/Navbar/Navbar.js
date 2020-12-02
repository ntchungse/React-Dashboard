import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from '../../useDetectOutsideClick.js';

import './Navbar.css';

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);
  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  return (
    <div className="menu-container">
      <button onClick={handleClick} className="menu-trigger">
      <MdAccountCircle/>
      </button>
      <nav ref={dropdownRef} className={`dropdown ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to="#">Profile</Link></li>
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function Navbar({ sidebar }) {
  return (
    <div className={ sidebar ? "navbar navbarActive" : "navbar"}>
      <div className="navbar__search">
        <input placeholder="Search" />
        <button>
          <FaSearch />
        </button>
      </div>
     <DropdownMenu />
    </div>
  );
}

export default Navbar;
