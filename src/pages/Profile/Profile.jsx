import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import HistoryOrderTable from "../../components/Product/HistoryOrderTable";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log("userLogin", userLogin);
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      // Du lieu ban dau cua form
      email: "",
      name: "",
      phone: "",
      password: "",
      gender: userLogin.gender ? "male" : "female",
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
      passwordConfirmation: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
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
    },
  });
  const renderOrderHistory = () => {
    return userLogin.ordersHistory.map((item, index) => {
      if (item.orderDetail.length === 0) {
        return <></>;
      }
      return (
        <div key={index}>
          <p className="orderTime">
            + Orders have been placed on {item.date.split("T")[0]}{" "}
          </p>
          <HistoryOrderTable orderDetail={item.orderDetail} />
        </div>
      );
    });
  };
  return (
    <div className="profile">
      <div className="container">
        <p className="profile_header">Profile</p>
        <div className="profile_body">
          <div className="row">
            <div className="col-2">
              <div className="avatar ">
                <img src={userLogin.avatar} alt="avatar" />
              </div>
            </div>
            <form className="col-10" onSubmit={frm.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                    value={userLogin.email}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputEmail4">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                    value={userLogin.name}
                  />
                </div>
                <div className="form-group col-6">
                  <label>Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    id="phone"
                    placeholder="phone"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                    value={userLogin.phone}
                  />
                </div>
                <div className="form-group col-6">
                  <label>Password</label>
                  <div className="password-box">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={
                        userLogin.password ? userLogin.password : undefined
                      }
                    />
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="gender-box">
                    <label>Gender</label>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={userLogin.gender ? true : false}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={!userLogin.gender ? true : false}
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <span className="checkmark"></span>
                    <label className="form-check-label" htmlFor="male">
                      Fmale
                    </label>
                  </div>
                  <button className="registerBtn" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="profile_footer">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav_order_history"
                type="button"
                role="tab"
                aria-controls="nav_order_history"
                aria-selected="true"
              >
                Order History
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Favourite
              </button>
            </div>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            <div>
              <div
                className="tab-pane fade show active"
                id="nav_order_history"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {renderOrderHistory()}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
