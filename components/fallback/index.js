import DefaultHeader from "../header/DefaultHeader";
import Layout from "../Layout"

const Fallback = ({ message }) => {
  return (
    <>
    <Layout>
      <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <div className=" me-auto  md-mt-10">
                <div className="title-style-two">
                  <p>Error: {message}</p>
                  <h2 className="main-title fw-normal tx-dark m0"></h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center"></div>
          {/* End .row */}
        </div>
      </div>
      </Layout>
    </>
  );
};
export default Fallback;
