import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <NavLink className="logo-brand" to="/">
                <img
                  className="img-logo"
                  src="./Images/image 3.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="col">
              <div className="header-items">
                <div className="shopping-cart">
                  <i className="fa-solid fa-cart-shopping" />
                  <p id="cart-number" className="cart-number">
                    1
                  </p>
                </div>
                <NavLink to="/LogIn">
                  <i className="fa-solid fa-user" /> <span>Login</span>
                </NavLink>
                <NavLink to="/register">
                  <span>Register</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-bar">
        <div className="container">
          <div className="row">
            <div className="menu-items">
              <NavLink to="/" className="menu-item active">
                Home
              </NavLink>
              <NavLink to="/man" className="menu-item">
                Man 
              </NavLink>
              <NavLink to="/women" className="menu-item">
                Women
              </NavLink>
              <NavLink to="/kid" className="menu-item">
                Kid
              </NavLink>
              <NavLink to="./sport" className="menu-item">
                Sport
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
