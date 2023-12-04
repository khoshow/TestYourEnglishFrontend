import Link from "next/link";
import SigninForm from "../components/auth/SignInComponent";
import Head from "next/head";
import { useRouter } from "next/router";
import Seo from "../components/common/Seo";
import Layout from "../components/Layout";
const LogIn = () => {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Sign In || Test My English Level";
    const metaDesc =
      "Discover the joy of learning English with Test My English Level. Start your path to English Mastery today!";
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
