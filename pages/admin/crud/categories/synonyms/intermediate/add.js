import Layout from "../../../../../../components/Layout";
import Admin from "../../../../../../components/auth/Admin";
// import CorrectWordMedium from "../../../../../../components/crud/create/correct-word/medium";
import CorrectWordIntermediate from "../../../../../../components/crud/correct-word/intermediate";

import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="col-md-6 ">
                <h2>Section - Choose the Correct Word - Intermediate Level</h2>
                <CorrectWordIntermediate />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
