import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/style.css";
import Logo from "../../../assets/icons/logo.svg";
import Filter from "../../../assets/icons/filter.svg";
import Search from "../../../assets/icons/Search.svg";
import ShoppingCart from "../../../assets/icons/shopping-cart.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex" to="/">
          <img className="brand-logo" src={Logo} alt=" logo" />
          <p className="text-logo mb-0 pt-1 ps-1">Tukupedia</p>
        </Link>
        <button
          className="navbar-toggler btn-sm btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-tuku"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-tuku">
          <div className="row flex-grow-1 mt-md-2 mt-4">
            <div className="col-md-6 col-lg-6 col-12 mb-md-0 mb-3">
              <div className="row flex-grow-1">
                <div className="col-sm-10 col-9">
                  <div className="input-group input-group-sm home-search rounded-pill">
                    <input
                      type="text"
                      className="form-control border-end-0 rounded-pill-start"
                      placeholder="Search"
                    />
                    <span className="input-group-text bg-white border-start-0 rounded-pill-end">
                      <img src={Search} alt="logo-search" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-2 col-3 d-flex">
                  <button
                    className="btn-filter ms-md-0 ms-n3"
                    data-bs-target="#filter-products"
                    data-bs-toggle="modal"
                  >
                    <img src={Filter} alt="icon-filter" />
                  </button>
                  <Link to="/mybag" className="btn-icon d-md-none d-block">
                    <img src={ShoppingCart} alt="icon-chart" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="row flex-grow-1 gx-0">
                <div className="offset-4 col-2 d-none d-md-block">
                  <Link to="/mybag" className="btn-icon ms-lg-4">
                    <img src={ShoppingCart} alt="" />
                  </Link>
                </div>
                <div className="col-md-6 col-8 d-flex">
                  <Link
                    to="/auth/login"
                    className="btn btn-primary button-auth-active rounded-pill w-50 me-3"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-sm button-auth rounded-pill w-50"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
