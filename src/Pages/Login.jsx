import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({
    userName: '',
    password: '',
  });

  const onChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;

    setCreds({ ...creds, [field]: value });
  };

  const login = async (userData) => {
    try {
      const response = await axios.post(
        'https://localhost:7245/api/Auth/login',
        userData
      );
      console.log('Login successful:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert('Login failed');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!creds.userName) {
      alert('Username required');
      return;
    }
    if (!creds.password) {
      alert('Password is required');
      return;
    }
    login(creds);
  };

  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          RESILINK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listing">
                List Property
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>  
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="card w-50 max-500">
          <div className="card-body">
            <h2 className="card-title text-center">Login</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  onChange={onChange}
                  value={creds.userName}
                  name="userName"
                  required
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={onChange}
                  value={creds.password}
                  name="password"
                  required
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p className="text-center mt-3 mb-0">
              No account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
