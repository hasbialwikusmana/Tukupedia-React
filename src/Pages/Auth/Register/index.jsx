import React from "react";
import "../../../assets/css/auth.css";
import "../../../assets/css/style.css";
import Logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    // <!-- Start Section -->
    <section className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="logo text-center d-flex justify-content-center mt-5">
            <img src={Logo} alt="logo" />
            <p className="text-logo mt-4 ms-2">Tukupedia</p>
          </div>
          <p className="text-center text-auth mt-3">
            Please sign up with your account
          </p>
          {/* <!-- Switch role --> */}
          <div className="switch-role-login mt-4">
            <ul
              className="nav nav-pills mb-3 d-flex justify-content-center"
              id="role-login"
            >
              <li className="nav-item">
                <button
                  className="nav-link active rounded-start"
                  data-bs-toggle="pill"
                  data-bs-target="#role-custommer"
                >
                  Custommer
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link rounded-end"
                  data-bs-toggle="pill"
                  data-bs-target="#role-seller"
                >
                  Seller
                </button>
              </li>
            </ul>
            {/* <!-- Content Register --> */}
            <div className="tab-content mt-4">
              {/* <!-- Form Register Custummer --> */}
              <div className="tab-pane fade show active" id="role-custommer">
                <div className="form-login-custommer">
                  <form action="" className="px-5 px-md-0 px-lg-0">
                    <div className="row">
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-4 d-grid">
                        <Link
                          to="/auth/login"
                          className="btn btn-submit rounded-pill"
                        >
                          PRIMARY
                        </Link>
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <p className="text-center">
                          Already have a Tukupedia account?
                          <Link to="/auth/login" className="text-register">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Form Register End --> */}
              {/* <!-- Form Register Custummer --> */}
              <div className="tab-pane fade" id="role-seller">
                <div className="form-login-seller">
                  <form action="" className="px-5 px-md-0 px-lg-0">
                    <div className="row">
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Store Name"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-md-6 offset-md-3 mb-4 d-grid">
                        <Link
                          to="/auth/login"
                          className="btn btn-submit rounded-pill"
                        >
                          PRIMARY
                        </Link>
                      </div>
                      <div className="col-md-6 offset-md-3 mb-3">
                        <p className="text-center">
                          Already have a Tukupedia account?
                          <Link to="/auth/login" className="text-register">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- Form Register End --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
