import Layout from "../../../../../../components/Layout";
import Admin from "../../../../../../components/auth/Admin";
import SynonymsIntermediate from "../../../../../../components/crud/synonyms/intermediate";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="col-md-6 ">
                <h2>Section - Synonyms - Intermediate Level</h2>
                <SynonymsIntermediate />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
