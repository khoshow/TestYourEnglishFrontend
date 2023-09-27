import DefaulHeader from "../../components/header/DefaulHeader";

import Link from "next/link";

const UserIndex = () => {
  return (
    <>
      <DefaulHeader />
      <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>User Dashboard</h2>
            </div>
            <div className="col-md-4">
              <ul class="list-group">
                <li className="list-group-item bg-dark">
                  <Link
                    href="/user/crud/blog"
                    style={{ color: "#E5E5E5", display: "block" }}
                  >
                    Write
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link href="/user/crud/blogs" style={{ display: "block" }}>
                    Delete/Update Blog
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link href="/user/update" style={{ display: "block" }}>
                    Update Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserIndex;
