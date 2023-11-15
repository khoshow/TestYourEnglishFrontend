import { useState, useRef } from "react";

import DefaultHeader from "../../components/header/DefaultHeader";
import Link from "next/link";
import { getTestTypes } from "../../actions/test";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ThreeSides from "../../components/TwoSides2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Test = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  const testCategories = [
    {
      url: currentUrl + "/vocabulary",
      title: "Vocabulary Test",
      image: "/images/icon/vocabulary.png",
      categories: ["Correct Word", "Correct Meaning", "Synonyms"],
      level: ["Intermediate", "Advanced"],
    },
    {
      url: currentUrl + "/idiom-phrases",
      title: "Idioms & Phrases",
      image: "/images/icon/idioms.png",
    },
    {
      url: currentUrl + "/grammar",
      title: "Grammar",
      image: "/images/icon/english.png",
    },
  ];

  const ref = useRef(null);
  const displayAnId = (id) => {
    // let getId = document.getElementById(id);
    // console.log(getId);
    // getId.style.display = "block";

    const element2 = ref.current;
    console.log(element2);
  };
  return (
    <>
      <Layout>
        {/* <DefaultHeader /> */}

        {/* <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60"> */}
        <>
          {/* <div className="row justify-content-center d-flex" style={{}}> */}

          <div
            className=" d-flex flex-wrap "
            style={{ justifyContent: "center" }}
          >
            <Card
              className=" text-center "
              sx={{
                // border: "1px solid black",
                boxShadow: 3,
                backgroundColor: "#1769aa",
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 10px",
              }}
            >
              <CardMedia
                sx={{ height: 80, width: 80, marginTop: "1rem" }}
                image="/images/icon/vocabulary.png"
                title="green iguana"
              />

              <CardContent>
                <h5>Correct Word</h5>
                <Typography variant="body2" color="#ede7f6">
                  You have to choose the correct word from the four options
                  provided.
                </Typography>
              </CardContent>

              <CardActions className="">
                <Button
                  size="small"
                  className="btn "
                  style={{ margin: "auto auto" }}
                >
                  Start
                </Button>
              </CardActions>
              <CardActions>
                <Link
                  href="/vocabulary/correct-word/intermediate"
                  size="small"
                  className="btn-outline plainLink"
                >
                  Intermediate
                </Link>
                <Link
                  href="/vocabulary/correct-word/advanced"
                  size="small"
                  className="plainLink"
                >
                  Advanced
                </Link>
              </CardActions>
            </Card>
            <Card
              className=" text-center "
              sx={{
                //   width: "200px",
                marginLeft: "10px",
                boxShadow: "3",

                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 10px",
              }}
            >
              <CardMedia
                sx={{ height: 80, width: 80, marginTop: "1rem" }}
                image="/images/icon/english.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Correct Meaning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  You have to choose the correct meaning for the given word from
                  four options.
                </Typography>
              </CardContent>
              <CardActions className="">
                <Button
                  size="small"
                  className="btn btn-info"
                  style={{ margin: "auto auto" }}
                >
                  Start
                </Button>
              </CardActions>
              <CardActions>
                <Link
                  href="/vocabulary/correct-word/intermediate"
                  size="small"
                  className=" plainLinkLightbackground"
                >
                  Intermediate
                </Link>
                <Link
                  href="/vocabulary/correct-word/advanced"
                  size="small"
                  className="plainLinkLightbackground"
                >
                  Advanced
                </Link>
              </CardActions>
            </Card>
            <Card
              className=" text-center "
              sx={{
                // border: "1px solid black",
                boxShadow: 3,
                backgroundColor: "#1769aa",
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 10px",
              }}
            >
              <CardMedia
                sx={{ height: 80, width: 80, marginTop: "1rem", borderRadius:"50%" }}
                image="/images/icon/synonyms.png"
                title="green iguana"
              />

              <CardContent>
                <h5>Synonyms</h5>
                <Typography variant="body2" color="#ede7f6">
                  Pick the synonym for the given word from the four options.
                </Typography>
              </CardContent>

              <CardActions className="">
                <Button
                  size="small"
                  className="btn "
                  style={{ margin: "auto auto" }}
                >
                  Start
                </Button>
              </CardActions>
              <CardActions>
                <Link
                  href="/vocabulary/correct-word/intermediate"
                  size="small"
                  className="btn-outline plainLink"
                >
                  Intermediate
                </Link>
                <Link
                  href="/vocabulary/correct-word/advanced"
                  size="small"
                  className="plainLink"
                >
                  Advanced
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="">
            <div
              className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
              style={{ textAlign: "center" }}
            >
              {/* <Link href="/vocabulary/correct-word" className="read-btn mt-auto "> */}
              <div
                className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
                style={{ minWidth: "300px" }}
              >
                <Link
                  href="/vocabulary/correct-word"
                  className="read-btn mt-auto "
                >
                  <div>
                    <div className="icon d-flex justify-content-center">
                      <img
                        src="/images/icon/vocabulary.png"
                        alt="icon"
                        className="lazy-img "
                      />
                    </div>
                    <h4 className="fw-300 mt-20 mb-50">The Correct Word</h4>
                    <p className="btn-eleven fs-15 fw-500  text-center">
                      Start
                    </p>
                  </div>
                </Link>
                <div className=" p-2">
                  <div className=" " style={{}}>
                    <div
                      className="d-flex"
                      style={{
                        height: "100%",
                        fontSize: "14px",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ margin: "5px" }}>
                        <Link
                          href="/vocabulary/correct-word/intermediate"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Intermediate
                        </Link>
                      </div>
                      <div style={{ textAlign: "" }}>
                        {/* <button className="">Correct Meaning</button> */}
                        <Link
                          href="/vocabulary/correct-word/advanced"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Advanced
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
              style={{ textAlign: "center" }}
            >
              {/* <Link href="/vocabulary/correct-meaning" className="read-btn mt-auto "> */}
              <div
                className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
                style={{ minWidth: "300px" }}
              >
                <Link href="/vocabulary" className="read-btn mt-auto ">
                  <div>
                    <div className="icon d-flex justify-content-center">
                      <img
                        src="/images/icon/vocabulary.png"
                        alt="icon"
                        className="lazy-img "
                      />
                    </div>
                    <h4 className="fw-300 mt-20 mb-50">The Correct Meaning</h4>
                    <p className="btn-eleven fs-15 fw-500 tran3s text-center">
                      Start
                    </p>
                  </div>
                </Link>
                <div className=" p-2">
                  <div className=" " style={{}}>
                    <div
                      className="d-flex"
                      style={{
                        height: "100%",
                        fontSize: "14px",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ margin: "5px" }}>
                        <Link
                          href="/vocabulary/correct-meaning/intermediate"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Intermediate
                        </Link>
                      </div>
                      <div style={{ textAlign: "" }}>
                        {/* <button className="">Correct Meaning</button> */}
                        <Link
                          href="/vocabulary/correct-meaning/advanced"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Advanced
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
              style={{ textAlign: "center" }}
            >
              {/* <Link href="/vocabulary" className="read-btn mt-auto "> */}
              <div
                className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
                style={{ minWidth: "300px" }}
              >
                <Link href="/vocabulary/synonym" className="read-btn mt-auto ">
                  <div>
                    <div className="icon d-flex justify-content-center">
                      <img
                        src="/images/icon/vocabulary.png"
                        alt="icon"
                        className="lazy-img "
                      />
                    </div>
                    <h4 className="fw-300 mt-20 mb-50">Synonym</h4>
                    <p className="btn-eleven fs-15 fw-500 tran3s text-center">
                      Start
                    </p>
                  </div>
                </Link>
                <div className=" p-2">
                  <div className=" " style={{}}>
                    <div
                      className="d-flex"
                      style={{
                        height: "100%",
                        fontSize: "14px",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div style={{ margin: "5px" }}>
                        <Link
                          href="/vocabulary/synonyms/intermediate"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Intermediate
                        </Link>
                      </div>
                      <div style={{ textAlign: "" }}>
                        {/* <button className="">Correct Meaning</button> */}
                        <Link
                          href="/vocabulary/synonyms/advanced"
                          className=""
                          style={{
                            textDecoration: "",
                          }}
                        >
                          Advanced
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* </div> */}
      </Layout>
    </>
  );
};

// Test.getInitialProps = async function () {
//   let skip = 0;
//   let limit = 4;
//   return getTestTypes().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       return {
//         testName: data.name,
//       };
//     }
//   });
// };

export default Test;
