import { useEffect, useState } from "react";
import Link from "next/link";
import { isAuth, getCookie } from "../../actions/auth";

const privateProfileLeftNavBar = ({ username, authStatus }) => {
  // const [username, setUsername] = useState();
  // useEffect(() => {
  //   const checkIsAuth = isAuth();

  //   if (checkIsAuth) {
  //     const token = getCookie("token");

  //     const user = isAuth().username;
  //     setUsername(user);
  //   } else {
  //     router.push(`/signin`);
  //   }
  // }, []);
  console.log("Usre", username);
  console.log("AuthStatus", authStatus);

  return (
    <nav className="navigation">
      <h4>Navigation</h4>
      <Link href="/vocabulary/correct-word">
        <i className="ph-browsers"></i>
        <span>Correct Word</span>
      </Link>

      <Link href="/vocabulary/correct-meaning">
        <i className="ph-check-square"></i>
        <span>What it means</span>
      </Link>

      <Link href="/vocabulary/synonyms">
        <i className="ph-browsers"></i>
        <span>Synonyms</span>
      </Link>
      {authStatus ? (
        <>
          <Link href={`/my-profile/${username}`}>
            <i className="ph-browsers"></i>
            <span>Profile</span>
          </Link>

          <Link href={`/my-profile/${username}/score`}>
            <i className="ph-check-square"></i>
            <span>Scores</span>
          </Link>

          <Link href={`/my-profile/${username}/edit`}>
            <i className="ph-browsers"></i>
            <span>Edit Profile</span>
          </Link>
        </>
      ) : (
        ""
      )}
    </nav>
  );
};

export default privateProfileLeftNavBar;
