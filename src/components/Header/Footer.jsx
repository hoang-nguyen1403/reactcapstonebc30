import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="item-info">
                <h2 className="item-header">Product Info</h2>
                <a href="#" className="item-link">
                  Contact-us
                </a>
                <a href="#" className="item-link">
                  Shoping
                </a>
                <a href="#" className="item-link">
                  NIKEID
                </a>
                <a href="#" className="item-link">
                  Nike+
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="item-info border-left">
                <h2 className="item-header">Orders</h2>
                <a href="#" className="item-link">
                  Payment options
                </a>
                <a href="#" className="item-link">
                  Shipping and delivery
                </a>
                <a href="#" className="item-link">
                  Returns
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="item-info border-left">
                <h2 className="item-header">Register</h2>
                <p href="#" className="item-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="item-link item-red-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="item-info">
                <h2 className="item-header">EMAIL SIGN UP</h2>
                <p className="bottom-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#" className="item-link item-red-link">
                  Sign up now
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="item-info">
                <h2 className="item-header">GIFT CARDS</h2>
                <p className="bottom-description">Lorem ipsum dolor sit.</p>
                <a href="#" className="item-link item-red-link">
                  View card
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="item-info">
                <h2 className="item-header">STOREs NEAR YOU</h2>
                <p className="bottom-description">
                  Locate a Nike real store or authorized retailer
                </p>
                <a href="#" className="item-link  item-red-link">
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
