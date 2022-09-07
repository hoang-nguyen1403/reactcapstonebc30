import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductAPI } from "../../redux/reducers/productReducer";

export default function Home() {
  const dispatch = useDispatch();
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);

  const getAllProductAPI = () => {
    const actionThunk = getProductAPI();
    dispatch(actionThunk);
    // dispatch(thunkAction);
  };
  useEffect(() => {
    getAllProductAPI();
  }, []);

  const renderProduct = () => {
    return arrProduct.slice(0, 6).map((item, index) => {
      let shortDescription =
        item.shortDescription.length > 70
          ? item.shortDescription.substring(0, 30)
          : "...";
      return (
        <div className="product-card col-4" key={index}>
          <div className="card-body">
            <img src={item.image} alt />
            <div className="titles">
              <h3 className="product-title">{item.name}</h3>
              <p className="product-description">{shortDescription}</p>
            </div>
          </div>
          <div className="card-actions">
            <a
              className="btn-buy"
              href="./views/detail.html?productid=${product.id}"
            >
              Buy Now
            </a>
            <p className="price-text">{item.price}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <section className="landingpage">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="content row">
                  <div className="main-img col-7">
                    <img src="./Images/image 4.png" alt="img4" />
                  </div>
                  <div className="description col-5">
                    <h3 className="title">Nike Mercurial Superfly</h3>
                    <p className="subtitle">
                      Find the right boost to suit your game
                    </p>
                    <a className="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="content row">
                  <div className="main-img col-7">
                    <img src="./Images/image 4.png" alt />
                  </div>
                  <div className="description col-5">
                    <h3 className="title">Nike Mercurial Superfly</h3>
                    <p className="subtitle">
                      Find the right boost to suit your game
                    </p>
                    <NavLink className="btn btn-primary" to="/buyNow">
                      Buy now
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="content row">
                  <div className="main-img col-7">
                    <img src="./Images/image 4.png" alt />
                  </div>
                  <div className="description col-5">
                    <h3 className="title">Nike Mercurial Superfly</h3>
                    <p className="subtitle">
                      Find the right boost to suit your game
                    </p>
                    <a className="btn btn-primary">Buy now</a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="product-feature">
        <div className="container">
          <div className="row">
            <div className="feature-header">
              <h2>- Product Feature -</h2>
            </div>
            <div className="feature-body row">{renderProduct()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
