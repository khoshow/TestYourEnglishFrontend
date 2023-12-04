import Link from "next/link";
import Seo from "../components/common/Seo";
import Head from "next/head";
import { useRouter } from "next/router";
import SignupForm from "../components/auth/SignUpComponent";
import Layout from "../components/Layout";

const SignUp = () => {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Sign Up || Test My English Level";
    const metaDesc =
      "Embark on a rewarding journey of English learning with Test My English Level. Sign up today!";
    const canonicalLink = siteUrl + pathName;
    const metaImage =
      "https://www.testmyenglishlevel.com/images/logo/Logo8.png";
    return (
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDesc} />

        {/* Open Graph and Twitter Meta Tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={siteUrl || canonicalLink} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={metaImage} />

        <title>{`${metaTitle}`}</title>
        <link rel="canonical" href={canonicalLink} />
      </Head>
    );
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      {head()}
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
