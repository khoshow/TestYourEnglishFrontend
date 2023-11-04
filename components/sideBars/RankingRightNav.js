import { useEffect, useState } from "react";
import Link from "next/link";

const RankingList = ({ rankTop10, loading }) => {
  console.log("data here", rankTop10);
  console.log("data loading here", loading);
  const [rankingData, setRankingData] = useState();

  useEffect(() => {
    if (loading == true) {
      setRankingData("Loading");
    } else {
      setRankingData(rankTop10);
    }
  }, [loading]);

  console.log("Da", rankingData);
  if (!rankingData) {
    return (
      <div className="">
        <div className="">
          <h3 className="textCenter">Top 10</h3>
        </div>

        <nav className="navigation">
          <div className="level-side-category">
            <a href="#" className="level-side-category"></a>
            <p>Loading</p>
          </div>
          ;
        </nav>
      </div>
    );
  }

  return (
    <div className="">
      <div className="">
        <h3 className="textCenter">Top 10</h3>
      </div>

      <nav className="navigation">
        {rankingData.map((item, index) => {
          return (
            <div className="level-side-category" key={index}>
              <a href="#" className=""></a>

              <div className="right-widget ms-auto d-flex align-items-center ">
                <Link href="#" className="userProfileRightNav">
                  <span>{index + 1}</span>
                  <span>
                    <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
                  </span>
                  <span>
                    {item.userName} ({item.score})
                  </span>
                </Link>
                {/* <Link
                href={`/profile/${firstName}`}
                className="login-btn-three rounded-circle d-flex"
              >
                <p>{firstName}</p> <i className="bi bi-person" />
              </Link> */}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default RankingList;
