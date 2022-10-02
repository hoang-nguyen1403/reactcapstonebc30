import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// style
import "./assets/scss/styles.scss";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

//setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//import page
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/detail">
            <Route path=":id" element={<Detail></Detail>} />
          </Route>
          <Route path="LogIn" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
