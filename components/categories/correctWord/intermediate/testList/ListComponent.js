import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";

const ListComponent = ({ items }) => {
  console.log("Items", items);

  return (
    <>
      <div>
        <div className="heading alt-two">
          <h1>
            Correct Word Intermediate
            <span className="subHeading">
              Best of Luck
            </span>
          </h1>
        </div>

        <div
          className=" d-flex flex-wrap "
          style={{ justifyContent: "center", marginTop: "2rem" }}
        >
          <Card
            className="myCard text-center "
           
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${
                items * 6 - 5
              }`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 5}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card
            className="myCard text-center "
          
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${
                items * 6 - 4
              }`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 4}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card
            className="myCard text-center "
            
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${
                items * 6 - 3
              }`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 3}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card
            className="myCard text-center "
           
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${
                items * 6 - 2
              }`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 2}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card
            className="myCard text-center "
            
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${
                items * 6 - 1
              }`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 1}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card
            className="myCard text-center "
           
          >
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${items * 6}`}
            >
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6}</div>
              <div className="quote-content">
                <p className="">"Yay, everything is working."</p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ListComponent;
