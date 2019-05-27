import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Carousel</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName='active'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" exact activeClassName='active'>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/products/add" activeClassName='active'>Add Product</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
