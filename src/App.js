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
import Order from "./Pages/Order";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reset" component={ResetPassword} />
          <React.Fragment>
            <div className={sidebar ? "main activeMain" : "main"}>
              <Link to="#" className={sidebar ? "menu activeMenu" : "menu"}>
                <FaBars style={{ fontSize: "2.5rem" }} onClick={showSidebar} />
              </Link>
              <Navbar sidebar={sidebar} />
              <Sidebar sidebar={sidebar} />
              {/* <ProtectedRoute path="/dashboard" component={App} /> */}
              <ProtectedRoute path="/product" component={Product} />
              <ProtectedRoute path="/order" component={Order} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
