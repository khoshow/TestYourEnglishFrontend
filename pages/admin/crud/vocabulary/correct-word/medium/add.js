import Layout from "../../../../../../components/Layout";
import Admin from "../../../../../../components/auth/Admin";
import CorrectWordMedium from "../../../../../../components/crud/create/correct-word/medium";

import Link from "next/link";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pt-5 pb-5">
                <h2>Section - Choose the Correct Word - Medium Level</h2>
              </div>
              {/* <div className="col-md-6">
                            <Category />
                        </div> */}
              <div className="col-md-6">
                <CorrectWordMedium />
              </div>

              {/* <div className="col-md-6">
                            <Cat />
                        </div> */}
            </div>
            <div>{/* <Cat2 /> */}</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
