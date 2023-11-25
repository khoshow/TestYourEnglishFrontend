import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const UserIndex = () => {
  return (
    <>
      <Layout>
        <Admin>
          <div>Admin Section</div>
        </Admin>
      </Layout>
    </>
  );
};

export default UserIndex;
