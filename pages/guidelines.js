import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Layout from "../components/Layout";

export default function Rules() {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Guidelines || Test My English Level";
    const metaDesc =
      "Rules and user information for scores, ranking, tests and other guidelines for Test My English Level.";
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
  // const head = () => (
  //   <Head>
  //     <title>Test My English Online || Guidelines</title>
  //     <meta name="title" content="Rules and usage of Test My English Online" />
  //     <meta
  //       name="description"
  //       content="Rules for scores, ranking, tests and other guidelines of Test My English Level"
  //     />

  //     <meta name="robots" content="index, follow" />
  //     <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  //     <meta name="language" content="English"></meta>
  //   </Head>
  // );
  return (
    <div>
      {head()}
      <Layout>
        <div className="mt-50 lg-mt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto">
                <div className="lg-pb-50 mobileViewTopMargin">
                  <h1 className="tx-dark heading">Guidelines:</h1>
                  <ol>
                    <li>
                      Hi there! Welcome to Test My English Level platform. Our
                      aim here is to make your English learning journey
                      enjoyable, complimentary, and interactive. Through these
                      features, we strive to create an environment that fosters
                      an enhanced language proficiency experience just for you.
                    </li>
                    <li>
                      At present, we offer assessments in three distinct
                      categories: one focusing on gauging your understanding of
                      word meanings, another on selecting the accurate word for
                      specific contexts, and a third centered around enhancing
                      your vocabulary through synonyms.
                    </li>
                    <li>
                      Each of these categories is further divided into
                      Intermediate and Advanced levels.
                    </li>
                    <li>
                      Feel free to choose any test you wish to take, and for
                      every unattempted test, scores will be accumulated.
                    </li>
                    <li>
                      The total score will be displayed at the end of each test.
                    </li>
                    <li>
                      For logged-in users, it&apos;s important to note that if
                      you have already taken a test, reattempting it will not
                      impact your overall score. This ensures that your
                      cumulative score accurately reflects your initial
                      performance, promoting fairness and transparency in the
                      assessment of your language proficiency.
                    </li>
                    <li>
                      After a period of one month of taking a test, you will
                      have the opportunity to retake the same test. During this
                      attempt, the new score will be added to your overall
                      score, providing a chance to track and showcase your
                      progress over time.
                    </li>
                    <li>
                      Please note that if you&apos;re not logged in or do not
                      have an account, your scores will not be saved.
                    </li>
                    <li>
                      For those with an account and logged in, your scores will
                      be saved, allowing you to access them anytime.
                    </li>
                    <li>
                      To further support your English learning journey, we
                      recommend creating an account to track your progress.
                    </li>
                    <li>
                      We also provide a world ranking for each category,
                      measured based on user scores.
                    </li>
                    <li>
                      Additionally, you have the option to personalize your
                      profile by adding a photo, updating your status, and more.
                    </li>
                    <li>
                      So what are you waiting for! Join us, have some fun, and
                      let&apos;s continue enhancing our English skills together.
                    </li>
                    <li>
                      For any queries or feedback, please contact us at
                      testmyenglish123@gmail.com or use the &nbsp;
                      <Link style={{ color: "#6c757D" }} href="/contact">
                        contact form.
                      </Link>
                    </li>
                  </ol>
                  <Link
                    href="/vocabulary/correct-word/intermediate"
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
