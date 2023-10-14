import React from "react";
import PaginatedList from "../../../../components/playground/PaginatedComponent";
import Link from "next/link";

const data = 30; // Your data array containing 20 components

const App = () => {
  const itemsPerPage = 4; // Number of items to display per page

  return (
    <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
      <div className="container">
      
        <div className="container">
          <div className="row ">
            <div className="col-md-3">Hello</div>
            <div className="col-md-6">
              <div className=" row justify-content-center " style={{}}>
                <PaginatedList itemsPerPage={itemsPerPage} data={data} />
              </div>
            </div>
            <div className="col-md-3">Last column </div>
          </div>
          {/* End .container */}
          <div className="shapes shape-one rounded-circle" />
          <div className="shapes shape-two rounded-circle" />
          <div className="shapes shape-three rounded-circle" />
          <img
            src="/images/shape/shape_88.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
          <img
            src="/images/shape/shape_89.svg"
            alt="shape"
            className="lazy-img shapes shape-five"
          />
          <div
            className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 ms-auto d-flex align-items-center justify-content-center text-center text-sm-start mt-40"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
