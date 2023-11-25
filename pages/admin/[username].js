import DefaultHeader from "../../components/header/DefaultHeader";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const UserIndex = () => {
  return (
    <>
      <Layout>
        <Admin>
          <div className="container-fluid">
            <div className="row">
              <div className="bg-primary d-block p-4">
                <h1 className="text-center">Admin Dashboard</h1>
              </div>

              <div className="row">
                <h2 className="text-center mt-4 mb-4">Vocabulary Section</h2>
                <div className="row mt-4 mb-4 justify-content-center ">
                  <h3 className="text-center">Correct Word</h3>
                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Intermediate
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/correct-word/intermediate/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Advanced
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/correct-word/advanced/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4 mb-4 justify-content-center">
                  <h3 className="text-center">Correct Meaning</h3>

                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Intermediate
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/correct-meaning/intermediate/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Advanced
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/correct-meaning/advanced/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row mt-4 mb-4 justify-content-center">
                  <h3 className="text-center">Synonyms</h3>
                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Intermediate
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/synonyms/intermediate/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul className="list-group">
                      <li className="list-group-item bg-dark text-light">
                        Advanced
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/admin/crud/categories/synonyms/advanced/add"
                          style={{ display: "block" }}
                        >
                          Add
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link
                          href="/user/crud/blogs"
                          style={{ display: "block" }}
                        >
                          Delete/Update
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-12 pt-5 pb-5 ">
                <h2 className="text-center">Idioms & Phrases Section</h2>
              </div>
              <div className="row mt-8 justify-content-center">
                <div className="col-md-4">
                  <ul className="list-group">
                    <li className="list-group-item bg-dark text-light">
                      Idiom & Phrases
                    </li>
                    <li className="list-group-item">
                      <Link
                        href="/user/crud/blogs"
                        style={{ display: "block" }}
                      >
                        Add
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link
                        href="/user/crud/blogs"
                        style={{ display: "block" }}
                      >
                        Delete/Update
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-4 mb-4 justify-content-center">
              <div className="col-md-12 pt-5 pb-5">
                <h2 className="txt-dark text-center">Grammar Section</h2>
              </div>
              <div className="col-md-4">
                <ul className="list-group">
                  <li className="list-group-item bg-dark text-light">Medium</li>
                  <li className="list-group-item">
                    <Link href="/user/crud/blogs" style={{ display: "block" }}>
                      Add
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/user/crud/blogs" style={{ display: "block" }}>
                      Delete/Update
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="list-group">
                  <li className="list-group-item bg-dark text-light">
                    Advanced
                  </li>
                  <li className="list-group-item">
                    <Link href="/user/crud/blogs" style={{ display: "block" }}>
                      Add
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/user/crud/blogs" style={{ display: "block" }}>
                      Delete/Update
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
        </Admin>
      </Layout>
    </>
  );
};

export default UserIndex;
