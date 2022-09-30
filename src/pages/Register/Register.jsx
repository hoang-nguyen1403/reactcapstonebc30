import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { changeEyeIcon, registerAPI } from "../../redux/reducers/registerReducer";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Register() {
  const dispatch = useDispatch();
  const { eyeIcon } = useSelector((state) => state.registerReducer);

  const openEye = (e) => {
    e.preventDefault();
    let passwordType = "password";
    if (eyeIcon.status) {
      passwordType = "text";
    }

    const action = changeEyeIcon({
      status: !eyeIcon.status,
      passwordType: passwordType,
    });
    dispatch(action);
  };

  // lây dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      // Du lieu ban dau cua form
      email: "",
      name: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
      gender: ""
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
      passwordConfirmation:  Yup.string().required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required(),
      phone: Yup.string()
        .max(10, "Please enter valid phone number")
        .required("phone number should'nt entry"),
      gender: Yup.string().required("phone number should'nt entry"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerAPI(values))
    },
  });
  return (
    <div className="register container">
      <div className="container">
        <div className="row">
          <div className="header">Register</div>
          <hr />
          <form id="registerForm" className="" onSubmit={frm.handleSubmit}>
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={frm.handleChange} onBlur={frm.handleBlur}
                />
                {frm.errors.email ? (
                  <span className="text-danger">{frm.errors.email}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="name"
                  onChange={frm.handleChange} onBlur={frm.handleBlur}
                />
                {frm.errors.name ? (
                  <span className="text-danger">{frm.errors.name}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <label>Password</label>
                <div className="password-box">
                  <input
                    type={eyeIcon.passwordType}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={frm.handleChange} onBlur={frm.handleBlur}
                  />
                  <button
                    className="eye"
                    onClick={(e) => {
                      openEye(e);
                    }}
                  >
                    {eyeIcon.status ? (
                      <FontAwesomeIcon icon="fa-solid fa-eye" />
                    ) : (
                      <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                    )}
                  </button>
                </div>

                {frm.errors.password ? (
                  <span className="text-danger">{frm.errors.password}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-6">
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  id="phone"
                  placeholder="phone"
                  onChange={frm.handleChange} onBlur={frm.handleBlur}
                />
                {frm.errors.phone ? (
                  <span className="text-danger">{frm.errors.phone}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-6">
                <label>Password Confirm</label>
                <input
                  type={eyeIcon.passwordType}
                  className="form-control"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  onChange={frm.handleChange} onBlur={frm.handleBlur}
                />
                {frm.errors.passwordConfirmation ? (
                  <span className="text-danger">
                    {frm.errors.passwordConfirmation}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group col-6">
                <div className="gender-box">
                  <label>Gender</label>
                  <input type="radio" name="gender" id="male" value="male" onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                  <input type="radio" name="gender" id="female"  value="female"  onChange={frm.handleChange} onBlur={frm.handleBlur}/>
                  <span className="checkmark"></span>
                  <label className="form-check-label" htmlFor="male">
                    Fmale
                  </label>
                </div>
                {frm.errors.gender ? (
                  <span className="text-danger">{frm.errors.gender}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="col-6"></div>
              <div className="col-6">
                <button className="registerBtn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
