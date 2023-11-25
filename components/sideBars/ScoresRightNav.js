import { useEffect, useState } from "react";

const ScoresRightNav = ({ data, user, authStatus, loading }) => {
  const [score, setScore] = useState();

  useEffect(() => {
    if (loading == true) {
      setScore("Loading");
    } else {
      if (!data.correctWordIntermediate) {
        setScore("-");
      } else {
        setScore(data.correctWordIntermediate.scores);
      }
    }
  }, [loading]);

  return (
    <div>
      <div>
        {authStatus ? (
          <div className="">
            <div className="">
              <h3
                className="textCenter subHeading"
                style={{ marginTop: "50px" }}
              >
               My Sectional Score
              </h3>
            </div>
            <div className="aboveRoundedFrame">
              <div className="roundedScoreFrame">{score ? score : ""}</div>
              <div></div>
            </div>{" "}
          </div>
        ) : (
          <div>
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
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default ScoresRightNav;
