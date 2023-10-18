import {useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { isAuth } from "../../actions/auth";

const userPage = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    if (isAuth) {
      const user = isAuth().username;
      setUserName(user);
    }
  }, []);
  return (
    <>
      <Layout>
        <div>
          {userName}
          <p>User Page </p>
        </div>
      </Layout>
    </>
  );
};

export default userPage;
