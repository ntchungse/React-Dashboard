import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ResetPassword() {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://3.25.210.151/api/Admin/auth/forgot-password', e.target.value)
        .then((res) => <Link to='/' />)
        .catch((err) => console.log(err))
    }
    return (
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
              />
            </div>
            <button type="submit" className="reset__button">Reset</button>
          </form>
        </div>
    )
}

export default ResetPassword
