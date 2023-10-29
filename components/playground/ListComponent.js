import React from "react";
import Link from "next/link";

const ListComponent = ({ items }) => {
  console.log("Items", items);

  return (
    <>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 8}`}
        >
          <div className="bg-lightgrey d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 8}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">"yay, everything is working."</p>
            </div>

            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 7}`}
        >
          <div className="bg-lightgrey text-group d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 7}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">"yay, everything is working."</p>
            </div>
            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 6}`}
        >
          <div className="bg-lightgrey d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 6}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">
                "yay, everything is working. But is there anytnbing more we can
                do"
              </p>
            </div>

            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 8}`}
        >
          <div className="bg-lightgrey d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 8}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">"yay, everything is working."</p>
            </div>

            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 8}`}
        >
          <div className="bg-lightgrey d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 8}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">"yay, everything is working."</p>
            </div>

            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
      <div
        className="col-xl-4 col-md-6 col-sm-6 col-12 mt-40 p-2 dynamic-height"
        style={{ textAlign: "center" }}
      >
        <Link
          href={`/vocabulary/correct-word/intermediate/test-${items * 9 - 8}`}
        >
          <div className="bg-lightgrey d-flex flex-column p-2">
            <h3 className="card-title">Group</h3>
            <div className="weave">{items * 9 - 8}</div>
            <div className="quote-content">
              {" "}
              <p className="font-light">"yay, everything is working."</p>
            </div>

            <button className="btn btn-primary">continue</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListComponent;
