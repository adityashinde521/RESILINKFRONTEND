/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ListProperty = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [estPossessionOn, setEstPossessionOn] = useState(null);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get('https://localhost:7245/api/City'); // Replace '/api/cities' with the actual endpoint URL to fetch cities
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      cityName: selectedCity,
      estPossessionOn,
      // Include other form fields
    };
    try {
      const response = await axios.post('https://localhost:7245/api/Property', formData); // Replace '/api/add-property' with the actual endpoint URL to add a property
      console.log('Property added successfully:', response.data);
      // Reset the form or perform any other necessary actions
    } catch (error) {
      console.error('Error adding property:', error);
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
      <div>
        <div className="container mt-5">
          <h1 className="mb-4">Add Property</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="propertyName">Property Name</label>
              <input type="text" className="form-control" id="propertyName" required />
            </div>
           
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                className="form-control"
                id="city"
                required
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="" disabled>Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="propertyType">Property Type</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="house" value="house" required />
                <label className="form-check-label" htmlFor="house">House</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="apartment" value="apartment" required />
                <label className="form-check-label" htmlFor="apartment">Apartment</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="villa" value="villa" required />
                <label className="form-check-label" htmlFor="villa">Villa</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="pg" value="pg" required />
                <label className="form-check-label" htmlFor="pg">PG</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="bunglow" value="bunglow" required />
                <label className="form-check-label" htmlFor="bunglow">Bunglow</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="furnishType">Furnish Type</label>
              <select className="form-control" id="furnishType" required>
                <option value="" disabled>Select Furnish Type</option>
                <option value="full">Fully Furnished</option>
                <option value="semi">Semi Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="builtArea">Built Area</label>
              <input type="number" className="form-control" id="builtArea" required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" id="price" required />
            </div>
            <div className="form-group">
              <label htmlFor="floor">Floor</label>
              <input type="number" className="form-control" id="floor" required />
            </div>
            <div className="form-group">
              <label htmlFor="totalFloors">Total Floors</label>
              <input type="number" className="form-control" id="totalFloors" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea className="form-control" id="address" rows="2" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="readyToMove">Ready to Move</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="readyToMove" id="readyYes" value="yes" required />
                <label className="form-check-label" htmlFor="readyYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="readyToMove" id="readyNo" value="no" required />
                <label className="form-check-label" htmlFor="readyNo">No</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="estPossessionOn">Estimated Possession Date and Time </label>
              <DatePicker
                id="estPossessionOn"
                className="form-control"
                selected={estPossessionOn}
                onChange={(date) => setEstPossessionOn(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText=" Estimated Date and Time"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age of Property (In Years)</label><br />
              <div className="form-check form-check-inline">
                <input type="number" className="form-control" id="propertyage" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gatedCommunity">Gated Community</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gatedCommunity" id="gatedYes" value="yes" required />
                <label className="form-check-label" htmlFor="gatedYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gatedCommunity" id="gatedNo" value="no" required />
                <label className="form-check-label" htmlFor="gatedNo">No</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ListProperty;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ListProperty = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [estPossessionOn, setEstPossessionOn] = useState(null);
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    furnishType: '',
    builtArea: '',
    price: '',
    floor: '',
    totalFloors: '',
    address: '',
    readyToMove: '',
    age: '',
    gatedCommunity: '',
    description: '',
  });

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get('https://localhost:7245/api/City'); // Replace '/api/cities' with the actual endpoint URL to fetch cities
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7245/api/Property', formData); // Replace '/api/add-property' with the actual endpoint URL to add a property
      console.log('Property added successfully:', response.data);
      // Reset the form or perform any other necessary actions
      setFormData({
        propertyName: '',
        propertyType: '',
        furnishType: '',
        builtArea: '',
        price: '',
        floor: '',
        totalFloors: '',
        address: '',
        readyToMove: '',
        age: '',
        gatedCommunity: '',
        description: '',
      });
      setSelectedCity('');
      setEstPossessionOn(null);
    } catch (error) {
      console.error('Error adding property:', error);
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
      <div>
        <div className="container mt-5">
          <h1 className="mb-4">Add Property</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="propertyName">Property Name</label>
              <input
                type="text"
                className="form-control"
                id="propertyName"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="saleRent">Sale/Rent</label><br />
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="saleRent" id="sale" value="sale" required />
                <label className="form-check-label" htmlFor="sale">Sale</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="saleRent" id="rent" value="rent" required />
                <label className="form-check-label" htmlFor="rent">Rent</label>
            </div>
            </div>
            <div className="form-group">
            <label htmlFor="bhk">BHK</label>
            <select className="form-control" id="bhk" required>
                <option value="" disabled>Select BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="propertyType">Property Type</label><br />
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="house" value="house" required />
                <label className="form-check-label" htmlFor="house">House</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="apartment" value="apartment" required />
                <label className="form-check-label" htmlFor="apartment">Apartment</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="villa" value="villa" required />
                <label className="form-check-label" htmlFor="villa">Villa</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="pg" value="pg" required />
                <label className="form-check-label" htmlFor="pg">PG</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="propertyType" id="bunglow" value="bunglow" required />
                <label className="form-check-label" htmlFor="bunglow">Bunglow</label>
            </div>
            </div>
            <div className="form-group">
            <label htmlFor="furnishType">Furnish Type</label>
            <select className="form-control" id="furnishType" required>
                <option value="" disabled>Select Furnish Type</option>
                <option value="full">Fully Furnished</option>
                <option value="semi">Semi Furnished</option>
                <option value="unfurnished">Unfurnished</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="builtArea">Built Area</label>
            <input type="number" className="form-control" id="builtArea" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                className="form-control"
                id="city"
                name="cityName"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                required
              >
                <option value="" disabled>Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="builtArea">Built Area</label>
              <input type="number" className="form-control" id="builtArea" required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" id="price" required />
            </div>
            <div className="form-group">
              <label htmlFor="floor">Floor</label>
              <input type="number" className="form-control" id="floor" required />
            </div>
            <div className="form-group">
              <label htmlFor="totalFloors">Total Floors</label>
              <input type="number" className="form-control" id="totalFloors" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea className="form-control" id="address" rows="2" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="readyToMove">Ready to Move</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="readyToMove" id="readyYes" value="yes" required />
                <label className="form-check-label" htmlFor="readyYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="readyToMove" id="readyNo" value="no" required />
                <label className="form-check-label" htmlFor="readyNo">No</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="estPossessionOn">Estimated Possession Date and Time </label>
              <DatePicker
                id="estPossessionOn"
                className="form-control"
                selected={estPossessionOn}
                onChange={(date) => setEstPossessionOn(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText=" Estimated Date and Time"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age of Property (In Years)</label><br />
              <div className="form-check form-check-inline">
                <input type="number" className="form-control" id="propertyage" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gatedCommunity">Gated Community</label><br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gatedCommunity" id="gatedYes" value="yes" required />
                <label className="form-check-label" htmlFor="gatedYes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gatedCommunity" id="gatedNo" value="no" required />
                <label className="form-check-label" htmlFor="gatedNo">No</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
       </div>
      </div>
    </>
  );
};

export default ListProperty;
