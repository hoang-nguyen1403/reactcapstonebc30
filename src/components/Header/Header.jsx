import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/reducers/userReducer";

export default function Header() {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(userLogin);
  const renderLogin = () => {
    if (!userLogin) {
      return (
        <>
          <NavLink className="nav-link" to="/login">
            <i className="fa-solid fa-user" /> <span>Login</span>
          </NavLink>
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </>
      );
    }
    return (
      <>
        <div className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle" to="/profile"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hello {userLogin.name}
          </NavLink>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            <li>
              <NavLink className="dropdown-item" to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <button className="dropdown-item" href="#" onClick={()=>{
                logOut()
              }}> 
                Log out
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  };
  return (
    <header className="header">
      <div className="navbar-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <NavLink className="logo-brand" to="/">
                <img
                  className="img-logo"
                  src="./images/image3.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="col">
              <div className="header-items">
                <NavLink className="shopping-cart" to="/cart">
                  <i className="fa-solid fa-cart-shopping" />
                  <span id="cart-number" className="cart-number">
                    (1)
                  </span>
                </NavLink>
                {renderLogin()}
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
