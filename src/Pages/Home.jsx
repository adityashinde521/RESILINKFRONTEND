import React from 'react';

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
              <a className="nav-link" href="/homepage">
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
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header">Filters</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="filterInput">Filter Property</label>
                  <input
                    type="text"
                    className="form-control"
                    id="filterInput"
                    placeholder="Enter keywords"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="sortBy">Sort By</label>
              <select className="form-control" id="sortBy">
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
                <option value="bhk_asc">BHK (Low to High)</option>
                <option value="bhk_desc">BHK (High to Low)</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src="house.png"
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
              {/* Repeat the card code for the remaining properties */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RESILINK;
