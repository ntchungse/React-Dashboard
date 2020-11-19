import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import { AiFillCaretDown } from "react-icons/ai";
import "./Sidebar.css";

function Sidebar({ sidebar }) {
  const [userDropdown, setUserDropdown] = useState(false);
  const handleDropdown = () => {
    setUserDropdown(!userDropdown);
  };
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar__logo">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </div>
      <div className="sidebar__ul">
        {SidebarData.map((item, index) => {
          if (item.title === "User") {
            return (
              <React.Fragment>
                <NavLink
                  key={index}
                  className={item.cName}
                  style={{ display: "flex" }}
                  onClick={handleDropdown}
                  to="#"
                >
                  {item.icon}
                  <span style={{ flexGrow: "0.8" }}>{item.title}</span>
                  {<AiFillCaretDown style={{ fontSize: "1rem" }} />}
                </NavLink>
                {userDropdown && (
                  <div className="sidebar__userDropdown">
                    <NavLink to="/customer" activeClassName="open">
                      Customer
                    </NavLink>
                    <NavLink to="/employee" activeClassName="open">
                      Employee
                    </NavLink>
                  </div>
                )}
              </React.Fragment>
            );
          } else {
            return (
              <NavLink
                key={index}
                className={item.cName}
                exact
                to={item.path}
                activeClassName="open"
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            );
          }
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
