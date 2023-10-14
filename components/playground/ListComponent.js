import React from "react";
import Link from "next/link";

const ListComponent = ({ items }) => {
  console.log("Items", items);
  return (
    <>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 8}`} className="read-btn mt-auto">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 8}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 7}`} className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 7}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 6}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 5}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 4}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 3}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 2}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9 - 1}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
      <div
        className="col-lg-4 col-md-4 col-sm-6 mt-40"
        style={{ textAlign: "center" }}
      >
        <Link href="#" className="read-btn mt-auto ">
          <div
            className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
            style={{ minWidth: "" }}
          >
            <p className="fw-300 mt-20 mb-50">{items * 9}</p>
            <p className="btn-eleven fs-15 tran3s text-center">Start</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListComponent;
