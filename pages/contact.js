import Layout from "../components/Layout";
import Seo from "../components/common/Seo";
import Head from "next/head";
import { useRouter } from "next/router";
import ContactForm from "../components/contact/ContactForm";

import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaultHeader";

const Contact = () => {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Contact || Master English Vocabulary";
    const metaDesc =
      "We would love to hear from you! Please contact us for any query or feedbacks. Discover the joy of learning English with Test My English Level.";
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
  return (
    <>
      <Layout>
        {head()}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8 m-auto">
              <h4 className="tx-dark text-center mt-100 mb-40 lg-mt-40 lg-mb-40  ">
                Please use the form to send us a Feedback or Query.
              </h4>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
