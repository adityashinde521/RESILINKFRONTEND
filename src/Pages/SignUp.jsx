import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  
  const navigate = useNavigate();
  
  const [creds, setCreds] = useState({
    firstName:"",
    lastName:"",
    userName: "",
    email: "",
    password: "",
    userrole: "",

  });

  const onChange = (e) => {
    
    const value = e.target.value;
    const field = e.target.name;

    setCreds({...creds, [field]:value})

  }
  const signUp = async (userData) => {
    try {
      const response = await axios.post('https://localhost:7245/api/Auth/register', userData);
      console.log('Sign up successful:', response.data);
      // Handle success
      navigate("/login")
    } catch (error) {
      console.error('Sign up failed:', error.response.data);
      // Handle error
      alert("Sign up failed")
    }
  };
  const onSubmit = (e) => {
    //prevent page from refreshing
    e.preventDefault();
    
    if(!creds.firstName){
      alert("First name required");
      return;
    }
    
    if(!creds.lastName){
      alert("Last name required");
      return;
    }
    
    if(!creds.userName){
      alert("Username required");
      return;
    }
    if(!creds.email){
      alert("Email required");
      return;
    }

    if(!creds.password){
      alert("Password is required")
      return;
    }
    if(!creds.userrole){
        alert("UserRole is required")
        return;
      }
    
    signUp(creds);
  }
 
  return (
    <div className="w-100 col_center items_center" style={{ height: "100vh", backgroundColor: "#FFE5B4" }}>

    <div className="w_100 max_700">
      <div className="row_center">
        <div className="login-form pd_md bg-white rounded mg_lg w_100 max_500">
          <h2>Sign Up</h2>
          <form onSubmit={(e)=>e.preventDefault()}>
            <div className="form-group mg_t_md">
              <label for="username">First name</label>
              <input type="text" onChange={onChange} value={creds.firstName} name="firstName" required className="form-control mg_v_sm" id="username" placeholder="Enter your first name"/>
            </div>
            <div className="form-group mg_t_md">
              <label for="username">Last name</label>
              <input type="text" onChange={onChange} value={creds.lastName} name="lastName" required className="form-control mg_v_sm" id="username" placeholder="Enter your last name"/>
            </div>
            <div className="form-group mg_t_md">
              <label for="username">Username</label>
              <input type="text" onChange={onChange} value={creds.userName} name="userName" required className="form-control mg_v_sm" id="username" placeholder="Enter your username"/>
            </div>

            <div className="form-group mg_t_md">
              <label for="email">Email</label>
              <input type="text" onChange={onChange} value={creds.email} name="email" required className="form-control mg_v_sm" id="username" placeholder="Enter your email"/>
            </div>

          
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" onChange={onChange} value={creds.password} name="password" required className="form-control mg_v_sm" id="password" placeholder="Enter your password"/>
            </div>
          
          <div className="form-group">
            <input type="radio" id="userrole" onChange={onChange} required className="form-control mg_v_sm" name="userrole" value="TENANT"/>
                <label for="TENANT">TENANT</label>
                <input type="radio" onChange={onChange}  required className="form-control mg_v_sm" name="userrole" value="ADMIN"/>
                <label for="ADMIN">ADMIN</label> 
                <input type="radio" onChange={onChange}  required className="form-control mg_v_sm" name="userrole" value="PROPERTYMANAGER"/>
                <label for="PROPERTYMANAGER">PROPERTYMANAGER</label> 
            </div>  
            <button type="submit" onClick={onSubmit} className="btn btn-primary">Sign Up</button>
          </form>
          <a href='/'>Go to Login.</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp;

