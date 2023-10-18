import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";
import { preSignup, isAuth, signup,  } from "../../actions/auth";

// import Router from "next/router";
// import SignupGoogle from "./SignupGoogle";

const SignupForm = () => {
  const [values, setValues] = useState({
    name: "",

    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const {
    name,
    email,
    password,
    confirmPassword,
    error,
    loading,
    message,
    showForm,
  } = values;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [username, setUsername] = useState();
  // const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  // const handleUsernameChange = (e) => {
    
  //     // Set the state after 1 second (1000 milliseconds)
  //     setUsername(e.target.value);
  //     console.log(username);
    
  // };

  // const checkUsernameAvailability = (username) => {
  //   // Call your API endpoint to check if the username is available in the database
  //   // Example API call using fetch:
  //    checkUsername(username);
  //   // console.log("Response", response);
  //   // const data =  response.json();
  //   // return data.isAvailable; // Assume the API returns an object like { isAvailable: true }
  // };

  // const userNameLoad = () => {
  //   if (!isUsernameAvailable) {
  //     return <p>Loading Username</p>;
  //   } else return <p>Username Available!</p>;
  // };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    isAuth() && Router.push(`/`);

    // timer();
  }, []);

  // const timer = () => {
  //   if (username) {
  //     const timer = setTimeout(() => {
  //       // Set the state after 1 second (1000 milliseconds)
  //       checkUsernameAvailability(username);
  //     }, 1000);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password, confirmPassword };

    if (password !== confirmPassword) {
      return setValues({
        ...values,
        name: name,

        email: email,
        password: password,
        error: "Password Mismatch. Please try again.",
        loading: false,
        showForm: true,
      });
    }
    preSignup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",

          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
        setUsername("");
      }
    });
    // Call your signup API endpoint here
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

  const signUpForm = () => {
    return (
      <form className="user-data-form mt-40 lg-mt-30" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleChange("name")}
                required
              />
            </div>
          </div>

          {/* <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Username</label>
              <input
                value={username}
                onChange={handleUsernameChange}
                type="text"
                placeholder="Enter your username"
                required
              />
              {userNameLoad()}
            </div>
          </div> */}

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

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                value={password}
                onChange={handleChange("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={handleChange("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="pass_log_id"
                required
              />
              <span
                className="placeholder_icon"
                onClick={handleToggleConfirmPassword}
              >
                <span className=" d-flex align-items-center">
                  {showConfirmPassword ? (
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

          {/* <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="agree_to_policy" />
              <label htmlFor="agree_to_policy">
                By clicking &quot;SIGN UP&quot; I agree to the Terms and
                Conditions and Privacy Policy.
              </label>
            </div>
          </div>
       
        </div> */}

          <div className="col-12">
            <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      {showForm && signUpForm()}
      <br></br>
      {showError()}
      {showLoading()}
      {showMessage()}
    </>
  );
};

export default SignupForm;
