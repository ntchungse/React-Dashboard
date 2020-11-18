import React from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";

import "./Sidebar.css";

function Sidebar({ sidebar }) {
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar__logo">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </div>
      <div className="sidebar__ul">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
