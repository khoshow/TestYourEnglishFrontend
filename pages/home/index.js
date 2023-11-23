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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
      <div style={{ backgroundColor: "#dee1ec" }}>
        <Layout>
          <div className="heading alt-two">
            <h1 id="h1Home">
              Enhance your English skills
              <span className="subHeading">
                With our comprehensive testing platform.
              </span>
            </h1>
          </div>

          <br></br>
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
                <Link href="/vocabulary/correct-word">
                  <Button
                    size="small"
                    className="btn "
                    style={{ margin: "auto auto" }}
                  >
                    Start
                  </Button>
                </Link>
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
                  You have to choose the correct meaning for a given word from
                  four options.
                </Typography>
              </CardContent>
              <CardActions className="">
                <Link href="/vocabulary/correct-meaning">
                  <Button
                    size="small"
                    className="btn btn-info"
                    style={{ margin: "auto auto" }}
                  >
                    Start
                  </Button>
                </Link>
              </CardActions>
              <CardActions>
                <Link
                  href="/vocabulary/correct-meaning/intermediate"
                  size="small"
                  className=" plainLinkLightbackground"
                >
                  Intermediate
                </Link>
                <Link
                  href="/vocabulary/correct-meaning/advanced"
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
                sx={{
                  height: 80,
                  width: 80,
                  marginTop: "1rem",
                  borderRadius: "50%",
                }}
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
                <Link href="/vocabulary/synonyms">
                  <Button
                    size="small"
                    className="btn btn-info"
                    style={{ margin: "auto auto" }}
                  >
                    Start
                  </Button>
                </Link>
              </CardActions>
              <CardActions>
                <Link
                  href="/vocabulary/synonyms/intermediate"
                  size="small"
                  className="btn-outline plainLink"
                >
                  Intermediate
                </Link>
                <Link
                  href="/vocabulary/synonyms/advanced"
                  size="small"
                  className="plainLink"
                >
                  Advanced
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className="container">
            <div class="container my-5">
              <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
                <h1 class="text-body-emphasis">
                  Time to enhance your English skills!
                </h1>
                <p class="col-lg-6 mx-auto mb-4">
                  Our approach is crafted to be enjoyable, complimentary, and
                  interactive, fostering an enhanced language proficiency
                  experience.
                </p>
                <Link href="/vocabulary/correct-word/intermediate">
                  <button class="btn btn-primary px-5 mb-5" type="button">
                    Start Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Test;
