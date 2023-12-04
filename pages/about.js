import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "About || Test My English Level";
    const metaDesc =
      "Discover the joy of learning English with Test My English Level. Our platform is designed to transform your language journey into a delightful, complimentary, and interactive experience.";
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
    <div>
      {head()}
      <Layout>
        <div className="mt-50 lg-mt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto">
                <div className="lg-pb-50 mobileViewTopMargin">
                  <h1 className="tx-dark heading">About:</h1>
                  <ol>
                    <li>Welcome to www.testmyenglishlevel.com!</li>
                    <li>
                      Test My English Level is crafted to make your English
                      learning journey enjoyable, complimentary, and
                      interactive. Through these features, we strive to create
                      an environment that fosters an enhanced language
                      proficiency experience just for you.
                    </li>

                    <li>
                      For any queries or feedback, please contact us at
                      testmyenglish123@gmail.com or use the &nbsp;
                      <Link style={{ color: "#6c757D" }} href="/contact">
                        contact form.
                      </Link>
                    </li>
                    <li>Best wishes!</li>
                  </ol>
                  <Link
                    href="/category/correct-meaning/intermediate"
                    className="btn m-2"
                  >
                    Take a Test
                  </Link>
                  <Link href="/" className="btn m-2">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </Layout>
    </div>
  );
}
