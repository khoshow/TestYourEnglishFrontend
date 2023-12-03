import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import Script from "next/script";
import ScrollToTop from "../components/common/ScrollTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1200,
  //   });
  // }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFKLHBCC')`,
        }}
      ></Script>
      <Component {...pageProps} />
      {/* <ScrollToTop /> */}
    </>
  );
}
