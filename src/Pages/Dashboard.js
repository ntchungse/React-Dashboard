import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Dashboard.css";

import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";

import Product from "./Product";

function Dashboard() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <React.Fragment>
      <div>
        <Router>
          <React.Fragment>
            <Link to="#" className={sidebar ? "menu activeMenu" : "menu"}>
              <FaBars style={{ fontSize: "2.5rem" }} onClick={showSidebar} />
            </Link>
            <Navbar sidebar={sidebar} />
            <Sidebar sidebar={sidebar} />
            <Switch>
              <div className={sidebar ? "main activeMain" : "main"}>
                <Route path="/product" exact component={Product} />
              </div>
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
