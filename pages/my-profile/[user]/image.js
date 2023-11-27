import { useState, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import Layout from "../../../components/Layout";
import PrivateProfileLeftNavBar from "../../../components/sideBars/PrivateProfileLeftBar";

import {
  updateStatus,
  updateMessage,
  updateName,
  updateUsername,
  updateSex,
  updateDOB,
  updateCountry,
  updateState,
  updateAbout,
  updateUserPhoto,
} from "../../../actions/profile/profile-update";
import { isAuth, getCookie } from "../../../actions/auth";

const ProfileEditImage = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_1280.jpg"
  );
  const editor = useRef(null);
  const [loading, setLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState();
  const [username, setUsername] = useState();
  const [userEmail, setUserEmail] = useState();
  const [statusLoading, setStatusLoading] = useState("");
  const [messageLoading, setMessageLoading] = useState("");
  const [nameLoading, setNameLoading] = useState("");
  const [usernameLoading, setUsernameLoading] = useState("");
  const [sexLoading, setSexLoading] = useState("");
  const [countryLoading, setCountryLoading] = useState("");
  const [stateLoading, setStateLoading] = useState("");
  const [aboutLoading, setAboutLoading] = useState("");
  const [dobLoading, setDobLoading] = useState("");
  const [photoLoading, setPhotoLoading] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    status: "",
    message: "",
    about: "",
    country: "",
    state: "",
    photo: "",
    sex: "",
    dob: "",
  });
  const token = getCookie("token");
  useEffect(() => {
    const checkIsAuth = isAuth();
    console.log("IsAu", checkIsAuth);
    if (checkIsAuth) {
      console.log("Is Auth", isAuth());
      setAuthStatus(true);

      const user = isAuth().username;
      setUsername(user);
      setUserEmail(isAuth().email);
    } else {
      router.push(`/signin`);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusLoading("loading");
    console.log("Status", formData.status);
    let toChange = { newStatus: formData.status };
    try {
      const res = await updateStatus(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setStatusLoading("loaded");
    }
  };

  const buttonLoadStatus = () => {
    if (statusLoading == "loading") {
      return (
        <div className="p-2 bg-secondary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (statusLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-secondary ">
          <i className="bi bi-check2-circle bg-secondary text-white"></i>
        </button>
      );
    }
  };

  const handlePhotoChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmitPhoto = (event) => {
    event.preventDefault();
    if (file) {
      console.log("Phot", file);
      const formData = new FormData();
      formData.append("photo", file);
      console.log("Phot form", formData);
      try {
        const res = updateUserPhoto(formData, token);
        console.log("res", res);
      } catch (err) {
        console.log("err", err);
      } finally {
        setLoading(false);
        setPhotoLoading("loaded");
      }
    } else {
      setLoading(true);
      setErrorMessage("No photo selected! ");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // Use the FileReader API to read the image data as a data URL
      const imageUrl = reader.result;
      setImageUrl(imageUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (editor.current) {
      const canvas = editor.current.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        // You can use the resized blob or send it to the server
        console.log("Image", blob);
        try {
          const res = updateUserPhoto(blob, token);
          console.log("res", res);
        } catch (err) {
          console.log("err", err);
        } finally {
          setLoading(false);
          setPhotoLoading("loaded");
        }
      });
    } else {
      setLoading(true);
      setErrorMessage("No photo selected! ");
    }
  };

  return (
    <>
      <Layout>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div>
                  <input type="file" onChange={handleImageChange} />
                  {imageUrl && (
                    <div>
                      <AvatarEditor
                        ref={editor}
                        image={imageUrl}
                        width={250}
                        height={250}
                        border={50}
                        color={[255, 255, 255, 0.6]} // RGBA
                        scale={1.2} // Zoom factor
                      />
                      <button onClick={handleSave}>Save</button>
                    </div>
                  )}
                </div>
                <span className="font-weight-bold">{username}</span>
                <span className="text-black-50">{userEmail}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-8 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>

                <div className="row mt-3">
                  <form onSubmit={handleSubmitStatus}>
                    <label className="labels mt-3 ">Status</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="How you feeling today!"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                      />

                      {buttonLoadStatus()}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfileEditImage;
