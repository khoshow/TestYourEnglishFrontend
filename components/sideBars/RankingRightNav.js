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
          
        </div>

        <nav className="navigation">
          <div className="level-side-category">
            
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
        <h3 className="px-3 subHeading">Top Scorers</h3>
      </div>

      <nav className="navigation">
        {rankingData.map((item, index) => {
          return (
            <div className="" key={index}>
              <a href="#" className=""></a>

              <div className="right-widget ms-auto d-flex align-items-center ">
                <Link
                  href={`/profile/${item.username}`}
                  className="userProfileRightNav"
                >
                  <span className="rankItem">{index + 1}.</span>
                  <span>
                    <img src={item.photoUrl} /> 
                  </span>
                  <span>
                  &nbsp; {item.name} ({item.score})
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
