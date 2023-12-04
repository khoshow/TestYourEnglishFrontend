import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";

export default function Privacy() {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Privacy Policy || Test My English Level";
    const metaDesc = "Privacy policy page for Test My English Level.";
    const canonicalLink = siteName + pathName;
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
                  <h1 className="tx-dark heading">Privacy Policy:</h1>
                  <p>Last Updated: 4th Dec 2023</p>
                  <br></br>
                  {/* <h3>Welcome to Test My English Level!</h3> */}
                  <p>
                    This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your personal information when you visit our
                    website.
                  </p>
                  <p>
                    By using the Site, you agree to the terms of this Privacy
                    Policy. If you do not agree with the practices described in
                    this policy, please do not use the Site.
                  </p>
                  <br></br>
                  <ul>
                    <h4>
                      <strong>Information We Collect:</strong>
                    </h4>
                    <li>
                      <strong>Personal Information: </strong> We may collect
                      personal information such as your name, email address, and
                      other contact details when you voluntarily submit them
                      through our website.
                    </li>
                    <li>
                      <strong>Automatically Collected Information: </strong> We
                      may automatically collect certain information about your
                      device, including your IP address, browser type, and
                      operating system.
                    </li>
                    <li>
                      <strong>Cookies:</strong> We may use cookies to enhance
                      your experience on the Site. You can disable cookies
                      through your browser settings.
                    </li>
                    <li>
                      <strong>How We Use Your Information: </strong>
                      <ul>
                        <li>To provide and maintain our services.</li>
                        <li>
                          To communicate with you, respond to your inquiries,
                          and provide updates.
                        </li>
                        <li>
                          To analyze and improve the content and functionality
                          of the Site.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Information Sharing: </strong> We do not sell,
                      trade, or otherwise transfer your personal information to
                      third parties without your consent, except as described in
                      this Privacy Policy.
                    </li>
                    <li>
                      <strong>Third-Party Links: </strong> Our website may
                      contain links to third-party websites. These sites have
                      their own privacy policies, and we are not responsible for
                      their practices.
                    </li>
                    <li>
                      <strong>Security: </strong>
                      We implement security measures to protect your personal
                      information. However, no method of transmission over the
                      internet is 100% secure.
                    </li>
                    <li>
                      <strong>Your Choices: </strong>You can update or delete
                      your personal information by contacting us at
                      testmyenglish123@gmail.com.
                    </li>
                    <li>
                      <strong>Updates to this Privacy Policy: </strong>We may
                      update this Privacy Policy periodically. The date of the
                      latest update will be displayed at the top of this page.
                    </li>
                    <li>
                      <strong>Contact Us: </strong>If you have any questions or
                      concerns about this Privacy Policy, please contact us at
                      testmyenglish123@gmail.com.
                    </li>
                    <p>
                      Thank you for visiting &nbsp;
                      <Link href="/">www.testmyenglishlevel.com!</Link>
                    </p>
                  </ul>

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
