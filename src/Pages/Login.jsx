import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  const navigate = useNavigate();
  
  const [creds, setCreds] = useState({
    userName: "",
    password: "",
  });

  const onChange = (e) => {
    
    const value = e.target.value;
    const field = e.target.name;

    setCreds({...creds, [field]:value})

  }
  const Login = async (userData) => {
    try {
      const response = await axios.post('https://localhost:7245/api/Auth/login', userData);
      console.log('Login successful:', response.data);
      // Handle success
      localStorage.setItem("user",JSON.stringify(response.data));
      navigate("/home")
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle error
      alert("Login failed")
    }
  };
  const onSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    
    if(!creds.userName){
      alert("Username required");
      return;
    }
    if(!creds.password){
      alert("Password is required")
      return;
    }
    Login(creds);
  }

  return (
    <div className="w-100 col_center items_center" style={{ height: "100vh", backgroundColor: "#FFE5B4" }}>
    <div className="w_100 max_700">
      <div className="row_center">
        <div className="login-form pd_md bg-white rounded mg_lg w_100 max_500">
          <h2>Login</h2>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="form-group mg_t_md">
              <label for="username">Username</label>
              <input type="text" onChange={onChange} value={creds.userName} name="userName" required className="form-control mg_v_sm" id="username" placeholder="Enter your username"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" onChange={onChange} value={creds.password} name="password" required className="form-control mg_v_sm" id="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" onClick={onSubmit} className="btn btn-primary">Login</button>
          </form>
       
          <a href='/signup'>No account? Sign Up.</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login