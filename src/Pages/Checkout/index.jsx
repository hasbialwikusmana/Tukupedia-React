import React from "react";
import Navbar from "../../Components/Modules/Navbar/Navbar";
import "../../assets/css/style.css";
import "../../assets/css/checkout.css";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <section className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product ms-0">Checkout</p>
            <p>Shipping Adress</p>
          </div>
          <div className="col-md-8">
            <div className="card card-body shadow-sm mb-2">
              <p className="text-black-16px font-semi-bold">Andreas Jane</p>
              <p className="text-black-14px mt-n2">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <div className="button-action">
                <button
                  className="btn rounded-pill btn-hover"
                  data-bs-target="#choose-another-address"
                  data-bs-toggle="modal"
                >
                  Choose another address
                </button>
              </div>
            </div>
            {/* <!-- start myBag --> */}
            <div className="card card-body shadow-sm my-2">
              <div className="row align-items-center">
                <div className="col-8 col-sm-8 col-md-8 col-lg-8 d-flex flex-wrap align-items-center">
                  <img
                    className="img-mybag-product rounded-3 me-2"
                    src={require("../../assets/images/products/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png")}
                    alt="logo-product"
                  />
                  <div className="mybag-product-header">
                    <p className="card-product-title">
                      Men's formal suit - Black
                    </p>
                    <p className="card-product-brand mt-n3">Zalora Cloth</p>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex flex-wrap justify-content-end">
                  <span className="card-product-title fw-bold">$ 20.0</span>
                </div>
              </div>
            </div>
            <div className="card card-body shadow-sm my-2">
              <div className="row align-items-center">
                <div className="col-8 col-sm-8 col-md-8 col-lg-8 d-flex flex-wrap align-items-center">
                  <img
                    className="img-mybag-product rounded-3 me-2"
                    src={require("../../assets/images/products/kemal-alkan-_BDBEP0ePQc-unsplash 1.png")}
                    alt="logo-product"
                  />
                  <div className="mybag-product-header">
                    <p className="card-product-title">Men's Jacket jeans</p>
                    <p className="card-product-brand mt-n3">Zalora Cloth</p>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex flex-wrap justify-content-end">
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
                <p className="card-product-title text-black-50 lh-1">Order</p>
                <p className="shopping-summary-total-price lh-1">$ 40.0</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-product-title text-black-50 lh-1">
                  Delivery
                </p>
                <p className="shopping-summary-total-price lh-1">$ 5.0</p>
              </div>
              <hr className="border-secondary mt-0" />
              <div className="d-flex justify-content-between">
                <p className="card-product-title fw-bold">Shopping summary</p>
                <p className="shopping-summary-total-price text-orange lh-1">
                  $ 45.0
                </p>
              </div>
              <button
                className="btn btn-green rounded-pill"
                data-bs-target="#payment-method"
                data-bs-toggle="modal"
              >
                Select payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
