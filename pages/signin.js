import Link from "next/link";
import SigninForm from "../components/auth/SignInComponent";
import Seo from "../components/common/Seo";
import Layout from "../components/Layout";
const LogIn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Layout>
       
        <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
          <div className="form-wrapper position-relative m-auto">
            <div className="text-center">
              <h2 className="tx-dark mb-30 lg-mb-10">Login</h2>
              <p className="fs-20 tx-dark">
                Still don&lsquo;t have an account?{" "}
                <Link href="/signup">Sign up</Link>
              </p>
            </div>
            <SigninForm />
          </div>
          {/* End form-wrapper */}

          <p className="mt-auto pt-50">
            Copyright @{currentYear} Test My English Online
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

export default LogIn;
