import Layout from "../../../../../../components/Layout";
import Admin from "../../../../../../components/auth/Admin";
// import CorrectWordMedium from "../../../../../../components/crud/create/correct-word/medium";
import SynonymsAdvanced from "../../../../../../components/crud/synonyms/advanced";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="col-md-6 ">
                <h2>Section - Synonyms - Advanced Level</h2>
                <SynonymsAdvanced />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
