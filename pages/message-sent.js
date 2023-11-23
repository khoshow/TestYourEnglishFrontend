import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Layout from "../components/Layout";

export default function Confirmation() {
  const head = () => (
    <Head>
      <title>Test My English Online || Message Sent</title>
      <meta name="title" content="Thank you visiting Test My English Online" />
      <meta
        name="description"
        content="Confirmation Page of Test My English Online Contact Page"
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
        <div className="mt-170 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 m-auto" data-aos="fade-up">
                <div className="title-style-seven text-center  lg-pb-50 mobileViewTopMargin">
                  <h2 className="heading">
                    Message Sent. Thank you. <br />
                  </h2>
                  <p className="tx-dark text-center">
                    We will contact you shortly.
                  </p>
                </div>
              </div>

              <div className="text-center ">
                <Link href="/contact" className="btn m-2">
                  Send Again
                </Link>
                <Link href="/" className="btn m-2">
                  Home
                </Link>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
      </Layout>
    </div>
  );
}
