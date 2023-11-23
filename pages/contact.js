import Layout from "../components/Layout";
import Seo from "../components/common/Seo";

import ContactForm from "../components/contact/ContactForm";

import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaultHeader";

const contact = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8 m-auto">
              <h4 className="tx-dark text-center mt-100 mb-40 lg-mt-40 lg-mb-40  ">
                Please use the form to send us a Feedback or
                Query.
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

export default contact;
