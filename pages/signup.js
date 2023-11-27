import Link from "next/link";
import Seo from "../components/common/Seo";
import SignupForm from "../components/auth/SignUpComponent";
import Layout from "../components/Layout";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Layout>
        <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
          <div className="form-wrapper position-relative m-auto">
            <div className="text-center">
              <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
              <p className="fs-20 tx-dark">
                Have an account? <Link href="/signin">Login Here</Link>
              </p>
            </div>
            <SignupForm />
          </div>
          {/* End form-wrapper */}

          <p className="mt-auto pt-50">
            Copyright @{currentYear} Test My English Online.
          </p>
          <img
            src="/images/assets/ils_11.png"
            alt="illustration"
            className="lazy-img illustration-one wow fadeInRight"
          />
          <img
            src="/images/assets/ils_12.png"
            alt="illustration"
            className="lazy-img illustration-two wow fadeInLeft"
          />
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
