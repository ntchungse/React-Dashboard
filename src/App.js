import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="App">
      <Router>
        <Link to="#" className={sidebar ? "menu activeMenu" : "menu"}>
          <FaBars style={{ fontSize: "2.5rem" }} onClick={showSidebar} />
        </Link>
        <Navbar sidebar={sidebar} />
        <Sidebar sidebar={sidebar} />
        <Switch>
          <div className={sidebar ? "main activeMain" : "main"}>
            <Route path="/shop" exact component={Shop} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
