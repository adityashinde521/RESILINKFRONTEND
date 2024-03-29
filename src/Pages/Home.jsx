/* import React from 'react';
import houseImage from '../Pages/house.png';


const RESILINK = () => {
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
              <a className="nav-link" href="/listproperty">
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <label htmlFor="searchInput" className="mr-2">Search Property</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    placeholder="Enter keywords"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control mr-3" id="sortBy">
                  <option value="price_asc">Price (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                </select>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control mr-3" id="cityFilter">
                  <option value="">Cities</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                
                </select>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control" id="typeFilter">
                  <option value="">Property Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 1</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 2</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 2</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RESILINK; */


import houseImage from '../Pages/house.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('https://localhost:7245/api/Properties'); // Replace '/api/Properties' with the actual endpoint URL to fetch properties
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
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
              <a className="nav-link" href="/listproperty">
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <label htmlFor="searchInput" className="mr-2">Search Property</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    placeholder="Enter keywords"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control mr-3" id="sortBy">
                  <option value="price_asc">Price (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                </select>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control mr-3" id="cityFilter">
                  <option value="">Cities</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>

                </select>
              </div>
              <div className="d-flex align-items-center">
                <select className="form-control" id="typeFilter">
                  <option value="">Property Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>

                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 1</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 2</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <img
                src={houseImage}
                className="card-img-top"
                alt="Property Image"
              />
              <div className="card-body">
                <h5 className="card-title">Property 3</h5>
                <p className="card-text">Property description goes here.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <h1>Properties</h1>
            <div className="row">
              {properties.map((property) => (
                <div className="col-md-4 mb-4" key={property.id}>
                  <div className="card">
                    <img src={property.image} className="card-img-top" alt={property.name} />
                    <div className="card-body">
                      <h5 className="card-title">{property.name}</h5>
                      <p className="card-text">{property.description}</p>
                      <a href={`/property/${property.id}`} className="btn btn-primary">
                        View Property Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Home;
