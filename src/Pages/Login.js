import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect, useHistory} from "react-router-dom";
import isLoggedIn from "../CheckAuth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false)

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
        history.push("/dashboard");
      })
      .catch((err) => {
        setError(true);
        console.log(err)
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
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link className="forgot" to="/reset">
              Forgot password ?
            </Link>
            {
            error && (
              <div className="error">
                Something went wrong!
              </div>
            )
          }
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
