import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <div className="text-center">
          <h4 className="mt-4">Error: 404</h4>
          <h3 className="mt-4">
            &quot;Oops! You have navigated to the wrong page.&quot;
          </h3>

          <p className="">
            Take a moment and start from our Homepage.
          </p>
          <Link href="/" className="btn mt-4">
            Back to home
          </Link>

          <Image
            src="/images/assets/404-error.png"
            alt="404 error"
            width="500"
            height="398"
            className="m-auto"
          />
        </div>
        {/* End .container */}

        {/* /.error-page-content */}
      </Layout>
    </>
  );
};

export default ErrorPage;
