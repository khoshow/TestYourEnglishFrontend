import Link from "next/link";
import SigninForm from "../components/auth/SignInComponent";
import Seo from "../components/common/Seo";
import Layout from "../components/Layout";
const LogIn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Layout>
        <div className="pt-4 d-flex align-items-center justify-content-center flex-column position-relative">
          <div className=" position-relative m-auto">
            <div className="text-center">
              <h2 className="tx-dark mb-30 lg-mb-10 mt-4">Login</h2>
              <p className="fs-20 tx-dark">
                Still don&lsquo;t have an account?{" "}
                <Link href="/signup">Sign up</Link>
              </p>
            </div>
            <div className="">
              <SigninForm />
            </div>
          </div>

          <p className="mt-auto pt-50">
            Copyright @{currentYear} Test My English Level
          </p>
        </div>
      </Layout>
    </>
  );
};

export default LogIn;
