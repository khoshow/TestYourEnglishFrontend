import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";
import {
  preSignup,
  isAuth,
  signupWithoutPreSignUp,
  signup,
} from "../../actions/auth";

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
    signupWithoutPreSignUp(user).then((data) => {
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
      }
    });
    // preSignup(user).then((data) => {
    //   if (data.error) {
    //     setValues({ ...values, error: data.error, loading: false });
    //   } else {
    //     setValues({
    //       ...values,
    //       name: "",

    //       email: "",
    //       password: "",
    //       error: "",
    //       loading: false,
    //       message: data.message,
    //       showForm: false,
    //     });
    //   }
    // });
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
    message ? (
      <div className="alert alert-info text-center">
        {message} <br></br>
        <Link className="btn text-center" href="/signin">
          Sign In
        </Link>
      </div>
    ) : (
      ""
    );

  const signUpForm = () => {
    return (
      <form className=" mt-40 lg-mt-30 p-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label className="form-label">Name</label>
              <input
                className="form-control"
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

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label className="form-label">Password</label>
              <div className="d-flex">
                <input
                  className="form-control pass_log_id"
                  value={password}
                  onChange={handleChange("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label className="form-label">Confirm Password</label>
              <div className="d-flex">
                <input
                  value={confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="form-control pass_log_id"
                  required
                />
                <span
                  className="placeholder_icon align-item-center d-flex"
                  onClick={handleToggleConfirmPassword}
                >
                  <span className=" ">
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

          <div className=" text-center">
            <button className="btn  mt-30">Sign Up</button>
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
