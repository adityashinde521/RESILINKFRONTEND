import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    userrole: '',
  });

  const onChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;

    setCreds({ ...creds, [field]: value });
  };

  const signUp = async (userData) => {
    try {
      const response = await axios.post(
        'https://localhost:7245/api/Auth/register',
        userData
      );
      console.log('Sign up successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Sign up failed:', error.response.data);
      alert('Sign up failed');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!creds.firstName) {
      alert('First name required');
      return;
    }

    if (!creds.lastName) {
      alert('Last name required');
      return;
    }

    if (!creds.userName) {
      alert('Username required');
      return;
    }
    if (!creds.email) {
      alert('Email required');
      return;
    }

    if (!creds.password) {
      alert('Password is required');
      return;
    }
    if (!creds.userrole) {
      alert('UserRole is required');
      return;
    }

    signUp(creds);
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
            <h2 className="card-title text-center">Sign Up</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group" >
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  onChange={onChange}
                  value={creds.firstName}
                  name="firstName"
                  required
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group" >
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  onChange={onChange}
                  value={creds.lastName}
                  name="lastName"
                  required
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  onChange={onChange}
                  value={creds.userName}
                  name="userName"
                  required
                  className="form-control"
                  id="userName"
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={onChange}
                  value={creds.email}
                  name="email"
                  required
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
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
              <div className="form-group">
                <label>User Role</label>
                <div className="d-flex">
                <div className="form-check">
                  <input
                    type="radio"
                    onChange={onChange}
                    required
                    className="form-check-input"
                    name="userrole"
                    value="TENANT"
                    id="tenant"
                  />
                  <label htmlFor="tenant" className="form-check-label">
                    Tenant
                  </label>
                </div>
                <div className="form-check" mr-4>
                  <input
                    type="radio"
                    onChange={onChange}
                    required
                    className="form-check-input"
                    name="userrole"
                    value="ADMIN"
                    id="admin"
                  />
                  <label htmlFor="admin" className="form-check-label">
                    Admin 
                  </label>
                </div>
                <div className="form-check" mr-4>
                  <input
                    type="radio"
                    onChange={onChange} 
                    required
                    className="form-check-input"
                    name="userrole"
                    value="PROPERTYMANAGER"
                    id="propertyManager"
                  />
                  <label htmlFor="propertyManager" className="form-check-label">
                    Property Manager
                  </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </form>
            <p className="mt-3 mb-0 text-center">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
