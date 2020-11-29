import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom";

import './Navbar.css';

const DropdownMenu = () => {
  const drowdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  return (
    <div className="menu-container">
      <button onClick={handleClick} className="menu-trigger">
      <MdAccountCircle/>
      </button>
      <nav ref={drowdownRef} className={`dropdown ${isActive ? 'active' : 'inactive'}`}>
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
