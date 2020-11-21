import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect} from "react-router-dom";
import isLoggedIn from "../CheckAuth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://3.25.210.151/api/Admin/auth/Login", data)
      .then((res) => {
        localStorage.setItem("token", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      {isLoggedIn() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <div className="login__logo">
            <img src="https://via.placeholder.com/100" alt="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login__input">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__input">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/reset">
              Forgot password ?
            </Link>

            <button type="submit" className="login__button">
              Login
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

export default Login;
