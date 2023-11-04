import { useEffect, useState } from "react";

const ScoresRightNav = ({ data, user, authStatus, loading }) => {
  const [score, setScore] = useState();

  useEffect(() => {
    if (loading == true) {
      setScore("Loading");
    } else {
 
      if (!data.correctIntermediate) {
        setScore("-");
      } else {
        setScore(data.correctIntermediate.scores);
      }
    }
  }, [loading]);

  return (
    <div>
      <div>
        {authStatus ? (
          <div className="">
            <div className="">
              <h3 className="textCenter">Sectional Score</h3>
            </div>
            <div className="aboveRoundedFrame">
              <div className="roundedScoreFrame">{score ? score : ""}</div>
              <div></div>
            </div>{" "}
           
          </div>
        ) : (
          <div>
            <div className="card">Log In or Sign Up</div>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default ScoresRightNav;
