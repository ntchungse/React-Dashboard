import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import { FaBars } from "react-icons/fa";

import "./App.css";
import Product from "./Pages/Product";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Router>
        <Link to="#" className={sidebar ? "menu activeMenu" : "menu"}>
          <FaBars style={{ fontSize: "2.5rem" }} onClick={showSidebar} />
        </Link>
        <Navbar sidebar={sidebar} />
        <Sidebar sidebar={sidebar} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={App} />
          <Route path="/reset" component={ResetPassword} />
          <div className={sidebar ? "main activeMain" : "main"}>
            <ProtectedRoute path="/product" component={Product} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
