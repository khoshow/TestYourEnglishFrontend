import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  const head = () => (
    <Head>
      <title>Test My English Online || About</title>
      <meta name="title" content="About Test My English Online" />
      <meta
        name="description"
        content="About Page for Test My English Online"
      />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>
    </Head>
  );
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
                    <li>
                      Thank you for being here. Test My English Online is
                      crafted to make your English learning journey enjoyable,
                      complimentary, and interactive. Through these features, we
                      strive to create an environment that fosters an enhanced
                      language proficiency experience just for you.
                    </li>

                    <li>
                      For any queries or feedback, please contact us at
                      khoshow.official@gmail.com or use the &nbsp;
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
