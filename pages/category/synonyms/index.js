import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../components/header/DefaultHeader";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const CorrectWordsMedium = ({}) => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="title-style-two">
            <div className="heading alt-two">
              <h1>
                Choose a Level
                <span className="subHeading">
                  Select to embark on a personalized journey of mastery.
                </span>
              </h1>
            </div>

            <div
              className=" d-flex flex-wrap "
              style={{ justifyContent: "center", marginTop: "2rem" }}
            >
              <Card
                className=" text-center "
                sx={{
                  // border: "1px solid black",
                  boxShadow: 3,
                  backgroundColor: "#1769aa",
                  minWidth: 300,
                  padding: "20px 20px",
                  maxWidth: 345,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "20px 10px",
                }}
              >
                <i
                  className="bi bi-flag-fill cardIcon cardIconOrange"
                  style={{}}
                ></i>

                <CardContent>
                  <h5 className="cardTitle">Intermediate</h5>
                </CardContent>

                <CardActions className="">
                  <Link href="/category/correct-word/intermediate">
                    <Button
                      size="small"
                      className="btn "
                      style={{ margin: "auto auto" }}
                    >
                      Start
                    </Button>
                  </Link>
                </CardActions>
              </Card>
              <Card
                className=" text-center "
                sx={{
                  // border: "1px solid black",
                  boxShadow: 3,
                  backgroundColor: "#1769aa",
                  padding: "20px 20px",
                  minWidth: 300,
                  maxWidth: 345,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "20px 10px",
                }}
              >
                <i className="bi bi-flag-fill cardIcon cardIconGreen"></i>

                <CardContent>
                  <h5 className="cardTitle">Advanced</h5>
               
                </CardContent>

                <CardActions className="">
                  <Link href="/category/correct-word/advanced">
                    <Button
                      size="small"
                      className="btn "
                      style={{ margin: "auto auto" }}
                    >
                      Start
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center"></div>
        </div>
      </Layout>
    </>
  );
};

export default CorrectWordsMedium;
