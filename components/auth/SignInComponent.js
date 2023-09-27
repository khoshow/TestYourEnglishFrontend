import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Link from "next/link";
import Router from "next/router";
// import LoginGoogle from './LoginGoogle'

const SigninForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });
  const { email, password, error, loading, message, showForm } = values;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";
  const signinForm = () => {
    return (
      <form className="user-data-form mt-40 lg-mt-30" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Email</label>
              <input
                value={email}
                onChange={handleChange("email")}
                type="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                value={password}
                onChange={handleChange("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="pass_log_id"
                required
              />
              <span className="placeholder_icon" onClick={handleTogglePassword}>
                <span className=" d-flex align-items-center">
                  {showPassword ? (
                    <>
                      <i className="fa-regular fa-eye"></i>
                    </>
                  ) : (
                    <>
                      <i className=" fa-regular fa-eye-slash"></i>
                    </>
                  )}
                </span>
              </span>
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
              <a href="#">Forget Password?</a>
            </div>
            {/* /.agreement-checkbox */}
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
              Login
            </button>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    );
  };
  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {/* <LoginGoogle /> */}
      <p>OR</p>
      {showForm && signinForm()}
      <div className="text-center">
        <br />
        <p>New Here? Sign Up</p>
        <Link href="/signup" className="btn btn-outline-primary">
          Sign Up
        </Link>
      </div>
      <div className="text-center">
        <br />
        <Link href="/auth/password/forgot">Forgot password?</Link>
      </div>
    </>
  );
};

export default SigninForm;
