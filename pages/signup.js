import Link from "next/link";
import Seo from "../components/common/Seo";
import SignupForm from "../components/auth/SignUpComponent";
import Layout from "../components/Layout";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Layout>
        <div className=" d-flex align-items-center justify-content-center flex-column position-relative">
          <div className=" position-relative m-auto">
            <div className="text-center">
              <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
              <p className="fs-20 tx-dark">
                Have an account? <Link href="/signin">Login Here</Link>
              </p>
            </div>
            <div>
              <SignupForm />
            </div>
          </div>
          {/* End form-wrapper */}

          <p className="mt-auto pt-50">
            Copyright @{currentYear} Test My English Level.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
