import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { withRouter } from "next/router";
import { signup } from "../../../../actions/auth";
import Layout from "../../../../components/Layout";

const ActivateAccount = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    error: "",
    loading: false,
    success: false,
    showButton: true,
  });

  const { name, token, error, loading, success, showButton } = values;

  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const { name } = jwt.decode(token);
      setValues({ ...values, name, token });
    }
  }, [router]);

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    signup({ token }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          showButton: false,
        });
      } else {
        setValues({
          ...values,
          loading: false,
          success: true,
          showButton: false,
        });
      }
    });
  };
  const showLoading = () => (loading ? <h2>Loading...</h2> : "");

  return (
    <>
      <Layout>
        <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
          <div className="container">
            {!success ? (
              <h3 className="pb-4">
                Dear {name}, your account is being activated. Please click the
                activation button to continue.
              </h3>
            ) : (
              ""
            )}

            {showLoading()}
            {error && error}
            {success && (
              <div>
                <h3>Yay! You have successfully activated your account.</h3>
                <p>
                  We are thrilled to have you as a member of our community. Your
                  presence makes us stronger, and we look forward to the
                  positive contributions you&apos;ll bring.
                </p>
                <p>
                  Feel free to explore our platform, connect with other members,
                  and make the most out of your experience.
                </p>
                <p>
                  If you have any questions or need assistance, don&apos;t hesitate
                  to reach out to us.
                </p>
                <p className="mt-4">
                  Log in now to begin enriching your journey towards improving
                  your English skills.
                </p>
                <Link className="btn btn-success mt-4" href="/signin">
                  Sign In
                </Link>
              </div>
            )}
            {showButton && (
              <button className="btn btn-outline-primary" onClick={clickSubmit}>
                Acivate account
              </button>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default withRouter(ActivateAccount);
