import React from "react";
import Navbar from "../../Components/Modules/Navbar/Navbar";
import "../../assets/css/style.css";
import "../../assets/css/myBag.css";
import { Link } from "react-router-dom";

const MyBag = () => {
  return (
    <div>
      <Navbar />
      <section className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product ms-0">My bag</p>
          </div>
          <div className="col-md-8">
            <div className="card card-body shadow-sm mb-2">
              <div className="d-flex flex-wrap justify-content-between align-items-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input form-check-product"
                    id="selectAllProduct"
                    checked
                  />
                  <label
                    className="form-check-label card-product-title"
                    for="selectAllProduct"
                  >
                    Select all item
                    <label for="selectAllProduct" className="text-black-50">
                      (2 items selected)
                    </label>
                  </label>
                </div>
                <span className="text-red">Delete</span>
              </div>
            </div>
            {/* <!-- start myBag --> */}
            <div className="card card-body shadow-sm my-2">
              <div className="row align-items-center">
                <div className="col-12 col-md-7 col-lg-7 d-flex flex-wrap align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-check-product"
                      id="product1"
                      checked
                    />
                  </div>
                  <img
                    className="img-mybag-product rounded-3"
                    src={require("../../assets/images/products/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png")}
                    alt="logo-product"
                  />
                  <div className="mybag-product-header ms-3">
                    <p className="card-product-title">
                      Men's formal suit - Black
                    </p>
                    <p className="card-product-brand mt-n3">Zalora Cloth</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex flex-wrap justify-content-start mt-md-0 mt-3">
                  <button className="btn-decrement-product">&#9866;</button>
                  <input
                    type="number"
                    className="form-control-quantity"
                    min="0"
                    value="1"
                  />
                  <button className="btn-increment-product">+</button>
                </div>
                <div className="col-6 col-md-2 col-lg-2 d-flex flex-wrap justify-content-end ">
                  <span className="card-product-title fw-bold">$ 20.0</span>
                </div>
              </div>
            </div>
            <div className="card card-body shadow-sm my-2">
              <div className="row align-items-center">
                <div className="col-12 col-md-7 col-lg-7 d-flex flex-wrap align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input form-check-product"
                      id="product1"
                      checked
                    />
                  </div>
                  <img
                    className="img-mybag-product rounded-3"
                    src={require("../../assets/images/products/kemal-alkan-_BDBEP0ePQc-unsplash 1.png")}
                    alt="logo-product"
                  />
                  <div className="mybag-product-header ms-3">
                    <p className="card-product-title">Men's Jacket jeans</p>
                    <p className="card-product-brand mt-n3">Zalora Cloth</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-3 d-flex flex-wrap justify-content-start mt-md-0 mt-3">
                  <button className="btn-decrement-product">&#9866;</button>
                  <input
                    type="number"
                    className="form-control-quantity"
                    value="1"
                  />
                  <button className="btn-increment-product">+</button>
                </div>
                <div className="col-6 col-md-2 col-lg-2 d-flex flex-wrap justify-content-end ">
                  <span className="card-product-title fw-bold">$ 20.0</span>
                </div>
              </div>
            </div>
            {/* <!-- start myBag --> */}
          </div>
          <div className="col-md-4">
            <div className="card card-body shadow-sm mt-md-0 mt-4">
              <p className="card-product-title fw-bold">Shopping summary</p>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50">Total price</p>
                <p className="shopping-summary-total-price">$ 40.0</p>
              </div>
              <Link to="/checkout" className="btn btn-green rounded-pill">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBag;
