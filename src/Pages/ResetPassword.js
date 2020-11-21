import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import isLoggedIn from "../CheckAuth";
import "./ResetPassword.css";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
    };
    axios
      .post("http://3.25.210.151/api/Admin/auth/forgot-password", data)
      .then((res) => {
        alert("Check email bro!!");
        history.push("/");
      })
      .catch((err) => {
        setStatus(err.response.status);
      });
  };
  return (
    <React.Fragment>
      {isLoggedIn() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="reset">
          <div className="reset__logo">
            <img src="https://via.placeholder.com/100" alt="logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="reset__input">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {status !== 0 && <p>Sai email rui ban ei !!</p>}
            <button type="submit" className="reset__button">
              Reset
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

export default ResetPassword;
