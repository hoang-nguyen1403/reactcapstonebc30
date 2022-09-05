import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style
import "./assets/scss/styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element = {<App/>}>
        <Route path='' element={<Home></Home>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

