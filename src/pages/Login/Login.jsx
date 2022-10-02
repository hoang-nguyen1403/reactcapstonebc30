import React from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { logInAPI } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("email should'nt emtry")
        .email("Please enter valid email")
        .matches(
          "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          "Please enter valid email"
        ),
      password: Yup.string()
        .required("password should'nt emtry")
        .min(2, "password from 2 to 32")
        .max(32, "password from 2 to 32"),
    }),
    onSubmit: (values) => {
      
      dispatch(logInAPI(values))
    },
  });
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login-content">
              <h3>Login</h3>
              <hr />
              <div className="form-login">
                <form action="form" onSubmit={frm.handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.email ? (
                      <span className="text-danger">{frm.errors.email}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    {frm.errors.password ? (
                      <span className="text-danger">{frm.errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="submit-form-group">
                    <NavLink className="register-link" to="/register">
                      {" "}
                      Register now ?{" "}
                    </NavLink>
                    <button className="loginBtn" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="form-group">
                    <button className="login-facebook">
                      <i className="fa-brands fa-facebook"></i>
                      <span>Continue with Facebook </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
