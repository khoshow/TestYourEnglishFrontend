import { useEffect, useState } from "react";
import Link from "next/link";

const RankingList = ({ rankTop10, loading }) => {
  const [rankingData, setRankingData] = useState();

  useEffect(() => {
    if (loading == true) {
      setRankingData("Loading");
    } else {
      setRankingData(rankTop10);
    }
  }, [loading]);

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
      <div className="mt-4">
        <h3 className="textCenter">Top 10</h3>
      </div>

      <nav className="navigation">
        {rankingData.map((item, index) => {
          return (
            <div className="level-side-category" key={index}>
              <a href="#" className=""></a>

              <div className="right-widget ms-auto d-flex align-items-center ">
                <Link
                  href={`/profile/${item.username}`}
                  className="userProfileRightNav"
                >
                  <span>{index + 1}</span>
                  <span>
                    <img src={item.photoUrl} />
                  </span>
                  <span>
                    {item.name} ({item.score})
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
