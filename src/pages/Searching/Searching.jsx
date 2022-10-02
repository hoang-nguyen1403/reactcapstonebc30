import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailCard from "../../components/DetailCard/DetailCard";

export default function Searching() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);
  const renderSearchedProduction = (searchedProduct) => {
    return searchedProduct.map((item, index) => {
      let shortDescription =
        item.shortDescription.length > 70
          ? item.shortDescription.substring(0, 30)
          : "...";
      return (
        <div className="col-4" key={index}>
          <DetailCard
            id={item.id}
            image={item.image}
            name={item.name}
            shortDescription={item.shortDescription}
            price={item.price}
          ></DetailCard>
        </div>
      );
    });
  };
  return (
    <div className="searching">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>search</p>
            <input id="searchingBar" type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="header">Searching results</p>
          </div>
          <section className="product-feature">
            <div className="container">
              <div className="row">
                <div className="feature-body row">{renderSearchedProduction(arrProduct)}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
