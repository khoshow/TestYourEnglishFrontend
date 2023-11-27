import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Link from "next/link";
import Button from "@mui/material/Button";
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
            Router.push(`/admin/${data.user.username}`);
          } else {
            Router.push(`/my-profile/${data.user.username}`);
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
      <form className=" mt-40 lg-mt-30 p-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label className="form-label">Email</label>
              <input
                className="form-control"
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
              <label className="form-label">Password</label>
              <div className="d-flex">
                <input
                  className="form-control pass_log_id"
                  value={password}
                  onChange={handleChange("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                />
                <span
                  className="placeholder_icon"
                  onClick={handleTogglePassword}
                >
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
          </div>
          {/* End .col-12 */}

          {/* <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
              </div>
            </div>
          </div> */}
          {/* End .col-12 */}

          <div className="text-center">
            <button className="btn btn-success mt-30">Login</button>
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
      {/* <p className="text-center">OR</p> */}
      {showForm && signinForm()}
      <div className="text-center">
        <br />
        <p>
          New Here?{" "}
          <Link href="/signup">
            <Button
              size="small"
              className=" btn-primary"
              style={{ margin: "auto auto" }}
            >
              Sign Up
            </Button>
          </Link>
        </p>
      </div>
      <div className="text-center">
        <br />
        {/* <Link href="/auth/password/forgot">Forgot password?</Link> */}
      </div>
    </>
  );
};

export default SigninForm;
