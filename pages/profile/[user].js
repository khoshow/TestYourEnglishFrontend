import {useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { isAuth } from "../../actions/auth";


const userPage = () => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    if (isAuth) {
      console.log("Is Auth", isAuth());
      const user = isAuth().username;
      setUserName(user);
    }
  }, []);
  return (
    <>
      <Layout>
        <div>
        {userName ? (
        <h1>Welcome back! {userName}</h1>
      ) : (
        <h1>Please sign up or log in.</h1>
      )}
          <p>User Page </p>
        </div>
      </Layout>
    </>
  );
};

export default userPage;
