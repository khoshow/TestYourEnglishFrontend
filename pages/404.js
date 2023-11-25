import Link from "next/link";

import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <div className="text-center">
          <h4 className="mt-4">Error: 404</h4>
          <h3 className="mt-4">"Oops! You've navigated to the wrong page."</h3>

          <p className="">
            Take a moment and do a search below or start from our Homepage.
          </p>
          <Link href="/" className="btn mt-4">
            Back to home
          </Link>

          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        {/* /.error-page-content */}
      </Layout>
    </>
  );
};

export default ErrorPage;
