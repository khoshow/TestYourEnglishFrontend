import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import { getCookie, isAuth } from "../../../../../actions/auth";
import { testGiveOrNot } from "../../../../../actions/privateInfo/testGiven";
import { getCardMessages } from "../../../../../actions/publicInfo/cardMessages";
const ListComponent = ({ items }) => {
  const pathName = useRouter().asPath;
  const head = () => {
    const siteName = "Test My English Level";
    const siteUrl = "https://www.testmyenglishlevel.com"; // Replace with your actual website URL
    const metaTitle = "Choose the correct synonym || Master English Vocabulary";
    const metaDesc =
      "Begin your learning journey by choosing a test and diving into an interactive experience that makes vocabulary improvement both effective and enjoyable!";
    const canonicalLink = siteUrl + pathName;
    const metaImage =
      "https://www.testmyenglishlevel.com/images/logo/Logo8.png";
    return (
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDesc} />

        {/* Open Graph and Twitter Meta Tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={siteUrl || canonicalLink} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={metaImage} />

        <title>{`${metaTitle}`}</title>
        <link rel="canonical" href={canonicalLink} />
      </Head>
    );
  };
  const [attempted1, setAttempted1] = useState("notAttemptedCard");
  const [attempted2, setAttempted2] = useState("notAttemptedCard");
  const [attempted3, setAttempted3] = useState("notAttemptedCard");
  const [attempted4, setAttempted4] = useState("notAttemptedCard");
  const [attempted5, setAttempted5] = useState("notAttemptedCard");
  const [attempted6, setAttempted6] = useState("notAttemptedCard");
  const [scoreAttempted1, setScoreAttempted1] = useState();
  const [scoreAttempted2, setScoreAttempted2] = useState();
  const [scoreAttempted3, setScoreAttempted3] = useState();
  const [scoreAttempted4, setScoreAttempted4] = useState();
  const [scoreAttempted5, setScoreAttempted5] = useState();
  const [scoreAttempted6, setScoreAttempted6] = useState();
  const [loading, setLoading] = useState(true);
  const [myCardMessages, setMyCardMessages] = useState();

  const token = getCookie("token");

  useEffect(() => {
    if (isAuth()) {
      testCheck();
    } else {
      setAttempted1("notSignedInCard");
      setAttempted2("notSignedInCard");
      setAttempted3("notSignedInCard");
      setAttempted4("notSignedInCard");
      setAttempted5("notSignedInCard");
      setAttempted6("notSignedInCard");
    }
    cardMessages();
  }, [items]);

  const testCheck = () => {
    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 5 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted1("attemptedCard");
          setScoreAttempted1(res.data.testArray[0]);
        } else {
          setAttempted1("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });

    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 4 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted2("attemptedCard");
          setScoreAttempted2(res.data.testArray[0]);
        } else {
          setAttempted2("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });

    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 3 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted3("attemptedCard");
          setScoreAttempted3(res.data.testArray[0]);
        } else {
          setAttempted3("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 2 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted4("attemptedCard");
          setScoreAttempted4(res.data.testArray[0]);
        } else {
          setAttempted4("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 1 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted5("attemptedCard");
          setScoreAttempted5(res.data.testArray[0]);
        } else {
          setAttempted5("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
    testGiveOrNot(
      { testCategory: "synonyms-intermediate", testNo: items * 6 - 0 },

      token
    )
      .then((res) => {
        if (res.attempt == true) {
          setAttempted6("attemptedCard");
          setScoreAttempted6(res.data.testArray[0]);
        } else {
          setAttempted6("notAttemptedCard");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const cardMessages = () => {
    getCardMessages()
      .then((data) => {
        setMyCardMessages(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const attemptedScore1 = () => {
    if (
      scoreAttempted1 &&
      scoreAttempted1.rightlyAnsweredQuestions &&
      scoreAttempted1.wronglyAnsweredQuestions
    ) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted1.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted1.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
    return null;
  };
  const attemptedScore2 = () => {
    if (
      scoreAttempted2 &&
      scoreAttempted2.rightlyAnsweredQuestions &&
      scoreAttempted2.wronglyAnsweredQuestions
    ) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted2.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted2.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
    return null;
  };
  const attemptedScore3 = () => {
    if (scoreAttempted3) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted3.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted3.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
  };
  const attemptedScore4 = () => {
    if (scoreAttempted4) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted4.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted4.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
  };
  const attemptedScore5 = () => {
    if (scoreAttempted5) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted5.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted5.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
  };
  const attemptedScore6 = () => {
    if (scoreAttempted6) {
      return (
        <div className="attemptedScore">
          <p>
            Attempted: You got {scoreAttempted6.rightlyAnsweredQuestions.length}
            &nbsp; right and {scoreAttempted6.wronglyAnsweredQuestions.length}
            &nbsp;wrong
          </p>
        </div>
      );
    }
  };
  return (
    <>
      <div>
        {head()}
        <div
          className=" d-flex flex-wrap "
          style={{ justifyContent: "center", marginTop: "2rem" }}
        >
          <Card className={`myCard text-center ${attempted1}`}>
            <Link
              href={`/category/synonyms/intermediate/test-${items * 6 - 5}`}
            >
              {attempted1 == "attemptedCard"
                ? attemptedScore1(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 5}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[0].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[0].author} ` : ""}{" "}
                </p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card className={`myCard text-center ${attempted2}`}>
            <Link
              href={`/category/synonyms/intermediate/test-${items * 6 - 4}`}
            >
              {attempted1 == "attemptedCard"
                ? attemptedScore2(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 4}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[1].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[1].author} ` : ""}{" "}
                </p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card className={`myCard text-center ${attempted3}`}>
            <Link
              href={`/category/synonyms/intermediate/test-${items * 6 - 3}`}
            >
              {attempted1 == "attemptedCard"
                ? attemptedScore3(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 3}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[2].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[2].author} ` : ""}{" "}
                </p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card className={`myCard text-center ${attempted4}`}>
            <Link
              href={`/category/synonyms/intermediate/test-${items * 6 - 2}`}
            >
              {attempted1 == "attemptedCard"
                ? attemptedScore4(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 2}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[3].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[3].author} ` : ""}{" "}
                </p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card className={`myCard text-center ${attempted5}`}>
            <Link
              href={`/category/synonyms/intermediate/test-${items * 6 - 1}`}
            >
              {attempted1 == "attemptedCard"
                ? attemptedScore5(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6 - 1}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[4].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[4].author} ` : ""}{" "}
                </p>
              </div>

              <button className="btn btn-primary">continue</button>
            </Link>
          </Card>
          <Card className={`myCard text-center ${attempted6}`}>
            <Link href={`/category/synonyms/intermediate/test-${items * 6}`}>
              {attempted1 == "attemptedCard"
                ? attemptedScore6(scoreAttempted1)
                : ""}
              <h3 className="cardTitle">Test No.</h3>
              <div className="weave2">{items * 6}</div>
              <div className="quote-content">
                <p className="quote">
                  {myCardMessages ? `"${myCardMessages[5].quote}" ` : ""}
                </p>
                <p className="author">
                  {" "}
                  {myCardMessages ? `-${myCardMessages[5].author} ` : ""}{" "}
                </p>
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
