import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";

import "./App.css"
import Product from "./Pages/Product";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/reset" component={ResetPassword} />
          <ProtectedRoute path="/product" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
