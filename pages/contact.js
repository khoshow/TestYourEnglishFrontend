import Layout from "../components/Layout";
import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaultHeader";

const contact = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact info
                </div>
                <h2 className="main-title fw-500 tx-dark">Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />

        <div className="contact-section-one mt-60 lg-mt-30">
          <div className="container">
            <div className="row">
              <BlockContact />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                  Any question? Send us message.
                </h2>
              </div>
              <div className="col-xl-11 m-auto">
                <ContactForm />
                {/* /.form-style-one */}
              </div>
            </div>
          </div>
        </div>

        <DefaultFooter />
      </Layout>
    </>
  );
};

export default contact;
