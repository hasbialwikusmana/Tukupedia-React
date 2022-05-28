import React from "react";
import "../../../assets/css/auth.css";
import "../../../assets/css/style.css";
import Logo from "../../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="logo text-center d-flex justify-content-center mt-5">
            <img src={Logo} alt="logo" />
            <p className="text-logo mt-4 ms-2">Tukupedia</p>
          </div>
          <p className="text-center text-auth mt-3">Reset Password</p>
          <div className="form-login-custommer">
            <form action="" className="px-5 px-md-0 px-lg-0">
              <div className="row">
                <div className="col-md-6 offset-md-3 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 offset-md-3 mb-3">
                  <Link
                    to="/auth/resetPassword"
                    className="text-end text-forgot-password d-block"
                  >
                    Forgot Password?
                  </Link>
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
                    Don't have a Tukupedia account?
                    <Link to="/auth/register" className="text-register">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
