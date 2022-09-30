import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAPI } from "../../redux/reducers/productReducer";
import DetailCard from "../../components/DetailCard/DetailCard";
import Size from "../../components/DetailCard/Size";

export default function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);
  console.log("getProductDetail", productDetail)
  const getProductDetail = () => {
    // bước 1 : đispatch action thunk
    const actionThunk = getProductDetailAPI(params);
    dispatch(actionThunk);
  };
  const renderRelatedProduct = () => {
    return productDetail.relatedProducts?.map((item, index) => {
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
  const renderSizes = ()=>{
    return productDetail.size?.map((item, index)=>{
        return <Size  size={item} key={index}></Size>
    })
  } 

  useEffect(() => {
    // call api
    getProductDetail(params);
  }, []);
  
  return (
    <div>
      <section className="detail-product">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="left-side">
                <div className="product-illustration">
                  <img
                    className="detail-product"
                    src={productDetail.image}
                    alt={productDetail.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="right-side">
                <h2 className="product-name" >{productDetail.name}</h2>
                <p className="product-description" >{productDetail.description}</p>
                <p className="des-size">Available size</p>
                <div className="sizes">{renderSizes()}</div>
                <p className="price"> {productDetail.price} $</p>
                <div className="product-number">
                  <button className="add-btn">+</button>
                  <p className="quantity">1</p>
                  <button className="sub-btn">-</button>
                </div>
                <button className="adding-btn"> Add to cart </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-feature">
        <div className="container">
          <div className="row">
            <div className="feature-header">
              <h2>- Related Products -</h2>
            </div>
            <div className="feature-body row">{renderRelatedProduct()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
