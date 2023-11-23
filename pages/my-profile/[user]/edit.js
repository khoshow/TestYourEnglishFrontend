import { useState, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import Link from "next/link";
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
import { getPrivateProfile } from "../../../actions/profile/privateProfile";
import { isAuth, getCookie } from "../../../actions/auth";

const profileEdit = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
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
  const [error, setError] = useState();
  const [imageUrl, setImageUrl] = useState();
  const editor = useRef(null);
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
      loadUserProfile(checkIsAuth._id);
    } else {
      router.push(`/signin`);
    }
  }, []);
  const loadUserProfile = async (user) => {
    setLoading(true);
    try {
      const res = await getPrivateProfile(user);
      console.log("resdsgf", res);
      setData(res);
      setImageUrl(res.photoUrl);
    } catch (err) {
      console.log("err", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageLoading("loading");
    console.log("Status", formData.message);
    let toChange = { newMessage: formData.message };
    try {
      const res = await updateMessage(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setMessageLoading("loaded");
    }
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNameLoading("loading");
    console.log("Message", formData.name);
    let toChange = { newName: formData.name };
    try {
      const res = await updateName(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setNameLoading("loaded");
    }
  };
  const handleSubmitUsername = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUsernameLoading("loading");
    console.log("Username", formData.username);
    let toChange = { newUsername: formData.username };
    try {
      const res = await updateUsername(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setUsernameLoading("loaded");
    }
  };
  const handleSubmitSex = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSexLoading("loading");
    console.log("Sex", formData.sex);
    let toChange = { newSex: formData.sex };
    try {
      const res = await updateSex(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setSexLoading("loaded");
    }
  };
  const handleSubmitDOB = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDobLoading("loading");
    console.log("DOB", formData.dob);
    let toChange = { newDob: formData.dob };
    try {
      const res = await updateDOB(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setDobLoading("loaded");
    }
  };
  const handleSubmitCountry = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCountryLoading("loading");
    console.log("Country", formData.country);
    let toChange = { newCountry: formData.country };
    try {
      const res = await updateCountry(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setCountryLoading("loaded");
    }
  };
  const handleSubmitState = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStateLoading("loading");
    console.log("State", formData.state);
    let toChange = { newStatus: formData.state };
    try {
      const res = await updateState(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setStateLoading("loaded");
    }
  };
  const handleSubmitAbout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAboutLoading("loading");
    console.log("About", formData.about);
    let toChange = { newAbout: formData.about };
    try {
      const res = await updateAbout(toChange, token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setAboutLoading("loaded");
    }
  };
  // const handleSubmitPhoto = (e) => {
  //   e.preventDefault();
  //   setPhotoLoading("loading");
  //   // Here, you can perform actions with formData, like sending it to an API endpoint.
  //   console.log("Form submitted with data:", formData);
  // };

  const buttonLoadStatus = () => {
    if (statusLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
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
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadMessage = () => {
    if (messageLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (messageLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };

  const buttonLoadName = () => {
    if (nameLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (nameLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadUsername = () => {
    if (usernameLoading == "loading") {
      return (
        <div className="btn btn-primary p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (usernameLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadSex = () => {
    if (sexLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (sexLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadDOB = () => {
    if (dobLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (dobLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadCountry = () => {
    if (countryLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (countryLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadState = () => {
    if (stateLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (stateLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadAbout = () => {
    if (aboutLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (aboutLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
        </button>
      );
    }
  };
  const buttonLoadPhoto = () => {
    if (photoLoading == "loading") {
      return (
        <div className="p-2 bg-primary">
          <i className="clock-loader bg-warning"></i>
        </div>
      );
    } else if (photoLoading == "loaded") {
      return (
        <div className="p-2 bg-warning">
          <i className="bi bi-check-circle-fill bg-warning"></i>
        </div>
      );
    } else {
      return (
        <button className="p-2 bg-primary ">
          <i className="bi bi-check2-circle bg-primary text-white"></i>
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
        <div className="row">
          <div className="col-md-9 rounded bg-white mt-5 mb-5 ">
            <div className="row">
              <div className="col-md-3 border-right ">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <div className="p-2">
                    {imageUrl && (
                      <div>
                        <AvatarEditor
                          ref={editor}
                          image={imageUrl}
                          width={250}
                          height={250}
                          border={50}
                          color={[255, 255, 255, 0.6]} // RGBA
                          // scale={1.2} // Zoom factor
                        />
                        <div className="text-center">
                          <input
                            className="marginLeft:auto, maginRight:auto"
                            type="file"
                            onChange={handleImageChange}
                          />
                          <button
                            onClick={handleSave}
                            className="btn btn-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="font-weight-bold">{username}</p>
                    <p className="text-black-50">{userEmail}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Edit</h4>
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

                    <form onSubmit={handleSubmitMessage}>
                      <label className="labels mt-3 ">
                        Have a message to say to the world today?
                      </label>
                      <div className="input-group mb-3 d-flex">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Your message."
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        {buttonLoadMessage()}
                      </div>
                    </form>
                    <form onSubmit={handleSubmitName}>
                      <label className="labels mt-3 ">Name</label>
                      <div className="input-group mb-3 d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your full name."
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        {buttonLoadName()}
                      </div>
                    </form>

                    <form onSubmit={handleSubmitUsername}>
                      <label className="labels mt-3 ">Username</label>
                      <div className="input-group mb-3 d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Choose a unique username."
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                        {buttonLoadUsername()}
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-md-6">
                        <form onSubmit={handleSubmitSex}>
                          <label className="labels mt-3 ">Sex</label>
                          <div className="input-group mb-3 d-flex">
                            <select
                              className="form-control"
                              id="sex"
                              name="sex"
                              value={formData.sex}
                              onChange={handleInputChange}
                            >
                              <option
                                value="0"
                                label="Female ... "
                                className="bi bi-chevron-compact-down"
                              >
                                Female ...
                              </option>
                              <option value="DZ" label="Female">
                                Female
                              </option>
                              <option value="AO" label="Male">
                                Male
                              </option>
                            </select>
                            {buttonLoadSex()}
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6">
                        <form onSubmit={handleSubmitDOB}>
                          <label className="labels mt-3 ">D.O.B</label>
                          <div className="input-group mb-3 d-flex">
                            <input
                              type="date"
                              className="form-control"
                              name="dob"
                              value={formData.dob}
                              onChange={handleInputChange}
                              placeholder="D.O.B"
                            />
                            {buttonLoadDOB()}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <form onSubmit={handleSubmitCountry}>
                        <label className="labels mt-3 ">Country</label>
                        <div className="input-group mb-3 d-flex">
                          <select
                            className="form-control"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                          >
                            <option value="0" label="Select a country ... ">
                              Select a country ...{" "}
                            </option>
                            <optgroup
                              id="country-optgroup-Africa"
                              label="Africa"
                            >
                              <option value="Algeria" label="Algeria">
                                Algeria
                              </option>
                              <option value="Angola" label="Angola">
                                Angola
                              </option>
                              <option value="Benin" label="Benin">
                                Benin
                              </option>
                              <option value="Botswana" label="Botswana">
                                Botswana
                              </option>
                              <option value="Burkina Faso" label="Burkina Faso">
                                Burkina Faso
                              </option>
                              <option value="Burundi" label="Burundi">
                                Burundi
                              </option>
                              <option value="Cameroon" label="Cameroon">
                                Cameroon
                              </option>
                              <option value="Cape Verde" label="Cape Verde">
                                Cape Verde
                              </option>
                              <option
                                value="Central African Republic"
                                label="Central African Republic"
                              >
                                Central African Republic
                              </option>
                              <option value="Chad" label="Chad">
                                Chad
                              </option>
                              <option value="Comoros" label="Comoros">
                                Comoros
                              </option>
                              <option
                                value="Congo - Brazzaville"
                                label="Congo - Brazzaville"
                              >
                                Congo - Brazzaville
                              </option>
                              <option
                                value="Congo - Kinshasa"
                                label="Congo - Kinshasa"
                              >
                                Congo - Kinshasa
                              </option>
                              <option
                                value="Côte d’Ivoire"
                                label="Côte d’Ivoire"
                              >
                                Côte d’Ivoire
                              </option>
                              <option value="Djibouti" label="Djibouti">
                                Djibouti
                              </option>
                              <option value="Egypt" label="Egypt">
                                Egypt
                              </option>
                              <option
                                value="Equatorial Guinea"
                                label="Equatorial Guinea"
                              >
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea" label="Eritrea">
                                Eritrea
                              </option>
                              <option value="Ethiopia" label="Ethiopia">
                                Ethiopia
                              </option>
                              <option value="Gabon" label="Gabon">
                                Gabon
                              </option>
                              <option value="Gambia" label="Gambia">
                                Gambia
                              </option>
                              <option value="Ghana" label="Ghana">
                                Ghana
                              </option>
                              <option value="Guinea" label="Guinea">
                                Guinea
                              </option>
                              <option
                                value="Guinea-Bissau"
                                label="Guinea-Bissau"
                              >
                                Guinea-Bissau
                              </option>
                              <option value="Kenya" label="Kenya">
                                Kenya
                              </option>
                              <option value="Lesotho" label="Lesotho">
                                Lesotho
                              </option>
                              <option value="Liberia" label="Liberia">
                                Liberia
                              </option>
                              <option value="Libya" label="Libya">
                                Libya
                              </option>
                              <option value="Madagascar" label="Madagascar">
                                Madagascar
                              </option>
                              <option value="Malawi" label="Malawi">
                                Malawi
                              </option>
                              <option value="Mali" label="Mali">
                                Mali
                              </option>
                              <option value="Mauritania" label="Mauritania">
                                Mauritania
                              </option>
                              <option value="Mauritius" label="Mauritius">
                                Mauritius
                              </option>
                              <option value="Mayotte" label="Mayotte">
                                Mayotte
                              </option>
                              <option value="Morocco" label="Morocco">
                                Morocco
                              </option>
                              <option value="Mozambique" label="Mozambique">
                                Mozambique
                              </option>
                              <option value="Namibia" label="Namibia">
                                Namibia
                              </option>
                              <option value="Niger" label="Niger">
                                Niger
                              </option>
                              <option value="Nigeria" label="Nigeria">
                                Nigeria
                              </option>
                              <option value="Rwanda" label="Rwanda">
                                Rwanda
                              </option>
                              <option value="Réunion" label="Réunion">
                                Réunion
                              </option>
                              <option value="Saint Helena" label="Saint Helena">
                                Saint Helena
                              </option>
                              <option value="Senegal" label="Senegal">
                                Senegal
                              </option>
                              <option value="Seychelles" label="Seychelles">
                                Seychelles
                              </option>
                              <option value="Sierra Leone" label="Sierra Leone">
                                Sierra Leone
                              </option>
                              <option value="Somalia" label="Somalia">
                                Somalia
                              </option>
                              <option value="South Africa" label="South Africa">
                                South Africa
                              </option>
                              <option value="Sudan" label="Sudan">
                                Sudan
                              </option>
                              <option value="Swaziland" label="Swaziland">
                                Swaziland
                              </option>
                              <option
                                value="São Tomé and Príncipe"
                                label="São Tomé and Príncipe"
                              >
                                São Tomé and Príncipe
                              </option>
                              <option value="Tanzania" label="Tanzania">
                                Tanzania
                              </option>
                              <option value="Togo" label="Togo">
                                Togo
                              </option>
                              <option value="Tunisia" label="Tunisia">
                                Tunisia
                              </option>
                              <option value="Uganda" label="Uganda">
                                Uganda
                              </option>
                              <option
                                value="Western Sahara"
                                label="Western Sahara"
                              >
                                Western Sahara
                              </option>
                              <option value="Zambia" label="Zambia">
                                Zambia
                              </option>
                              <option value="Zimbabwe" label="Zimbabwe">
                                Zimbabwe
                              </option>
                            </optgroup>
                            <optgroup
                              id="country-optgroup-Americas"
                              label="Americas"
                            >
                              <option value="Anguilla" label="Anguilla">
                                Anguilla
                              </option>
                              <option
                                value="Antigua and Barbuda"
                                label="Antigua and Barbuda"
                              >
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina" label="Argentina">
                                Argentina
                              </option>
                              <option value="Aruba" label="Aruba">
                                Aruba
                              </option>
                              <option value="Bahamas" label="Bahamas">
                                Bahamas
                              </option>
                              <option value="Barbados" label="Barbados">
                                Barbados
                              </option>
                              <option value="Belize" label="Belize">
                                Belize
                              </option>
                              <option value="Bermuda" label="Bermuda">
                                Bermuda
                              </option>
                              <option value="Bolivia" label="Bolivia">
                                Bolivia
                              </option>
                              <option value="Brazil" label="Brazil">
                                Brazil
                              </option>
                              <option
                                value="British Virgin Islands"
                                label="British Virgin Islands"
                              >
                                British Virgin Islands
                              </option>
                              <option value="Canada" label="Canada">
                                Canada
                              </option>
                              <option
                                value="Cayman Islands"
                                label="Cayman Islands"
                              >
                                Cayman Islands
                              </option>
                              <option value="Chile" label="Chile">
                                Chile
                              </option>
                              <option value="Colombia" label="Colombia">
                                Colombia
                              </option>
                              <option value="Costa Rica" label="Costa Rica">
                                Costa Rica
                              </option>
                              <option value="Cuba" label="Cuba">
                                Cuba
                              </option>
                              <option value="Dominica" label="Dominica">
                                Dominica
                              </option>
                              <option
                                value="Dominican Republic"
                                label="Dominican Republic"
                              >
                                Dominican Republic
                              </option>
                              <option value="Ecuador" label="Ecuador">
                                Ecuador
                              </option>
                              <option value="El Salvador" label="El Salvador">
                                El Salvador
                              </option>
                              <option
                                value="Falkland Islands"
                                label="Falkland Islands"
                              >
                                Falkland Islands
                              </option>
                              <option
                                value="French Guiana"
                                label="French Guiana"
                              >
                                French Guiana
                              </option>
                              <option value="Greenland" label="Greenland">
                                Greenland
                              </option>
                              <option value="Grenada" label="Grenada">
                                Grenada
                              </option>
                              <option value="Guadeloupe" label="Guadeloupe">
                                Guadeloupe
                              </option>
                              <option value="Guatemala" label="Guatemala">
                                Guatemala
                              </option>
                              <option value="Guyana" label="Guyana">
                                Guyana
                              </option>
                              <option value="Haiti" label="Haiti">
                                Haiti
                              </option>
                              <option value="Honduras" label="Honduras">
                                Honduras
                              </option>
                              <option value="Jamaica" label="Jamaica">
                                Jamaica
                              </option>
                              <option value="Martinique" label="Martinique">
                                Martinique
                              </option>
                              <option value="Mexico" label="Mexico">
                                Mexico
                              </option>
                              <option value="Montserrat" label="Montserrat">
                                Montserrat
                              </option>
                              <option
                                value="Netherlands Antilles"
                                label="Netherlands Antilles"
                              >
                                Netherlands Antilles
                              </option>
                              <option value="Nicaragua" label="Nicaragua">
                                Nicaragua
                              </option>
                              <option value="Panama" label="Panama">
                                Panama
                              </option>
                              <option value="Paraguay" label="Paraguay">
                                Paraguay
                              </option>
                              <option value="Peru" label="Peru">
                                Peru
                              </option>
                              <option value="Puerto Rico" label="Puerto Rico">
                                Puerto Rico
                              </option>
                              <option
                                value="Saint Barthélemy"
                                label="Saint Barthélemy"
                              >
                                Saint Barthélemy
                              </option>
                              <option
                                value="Saint Kitts and Nevis"
                                label="Saint Kitts and Nevis"
                              >
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia" label="Saint Lucia">
                                Saint Lucia
                              </option>
                              <option value="Saint Martin" label="Saint Martin">
                                Saint Martin
                              </option>
                              <option
                                value="Saint Pierre and Miquelon"
                                label="Saint Pierre and Miquelon"
                              >
                                Saint Pierre and Miquelon
                              </option>
                              <option
                                value="Saint Vincent and the Grenadines"
                                label="Saint Vincent and the Grenadines"
                              >
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="Suriname" label="Suriname">
                                Suriname
                              </option>
                              <option
                                value="Trinidad and Tobago"
                                label="Trinidad and Tobago"
                              >
                                Trinidad and Tobago
                              </option>
                              <option
                                value="Turks and Caicos Islands"
                                label="Turks and Caicos Islands"
                              >
                                Turks and Caicos Islands
                              </option>
                              <option
                                value="U.S. Virgin Islands"
                                label="U.S. Virgin Islands"
                              >
                                U.S. Virgin Islands
                              </option>
                              <option
                                value="United States"
                                label="United States"
                              >
                                United States
                              </option>
                              <option value="Uruguay" label="Uruguay">
                                Uruguay
                              </option>
                              <option value="Venezuela" label="Venezuela">
                                Venezuela
                              </option>
                            </optgroup>

                            <optgroup id="country-optgroup-Asia" label="Asia">
                              <option value="Afghanistan" label="Afghanistan">
                                Afghanistan
                              </option>
                              <option value="Armenia" label="Armenia">
                                Armenia
                              </option>
                              <option value="Azerbaijan" label="Azerbaijan">
                                Azerbaijan
                              </option>
                              <option value="Bahrain" label="Bahrain">
                                Bahrain
                              </option>
                              <option value="Bangladesh" label="Bangladesh">
                                Bangladesh
                              </option>
                              <option value="Bhutan" label="Bhutan">
                                Bhutan
                              </option>
                              <option value="Brunei" label="Brunei">
                                Brunei
                              </option>
                              <option value="Cambodia" label="Cambodia">
                                Cambodia
                              </option>
                              <option value="China" label="China">
                                China
                              </option>
                              <option value="Georgia" label="Georgia">
                                Georgia
                              </option>
                              <option
                                value="Hong Kong SAR China"
                                label="Hong Kong SAR China"
                              >
                                Hong Kong SAR China
                              </option>
                              <option value="India" label="India">
                                India
                              </option>
                              <option value="Indonesia" label="Indonesia">
                                Indonesia
                              </option>
                              <option value="Iran" label="Iran">
                                Iran
                              </option>
                              <option value="Iraq" label="Iraq">
                                Iraq
                              </option>
                              <option value="Israel" label="Israel">
                                Israel
                              </option>
                              <option value="Japan" label="Japan">
                                Japan
                              </option>
                              <option value="Jordan" label="Jordan">
                                Jordan
                              </option>
                              <option value="Kazakhstan" label="Kazakhstan">
                                Kazakhstan
                              </option>
                              <option value="Kuwait" label="Kuwait">
                                Kuwait
                              </option>
                              <option value="Kyrgyzstan" label="Kyrgyzstan">
                                Kyrgyzstan
                              </option>
                              <option value="Laos" label="Laos">
                                Laos
                              </option>
                              <option value="Lebanon" label="Lebanon">
                                Lebanon
                              </option>
                              <option
                                value="Macau SAR China"
                                label="Macau SAR China"
                              >
                                Macau SAR China
                              </option>
                              <option value="Malaysia" label="Malaysia">
                                Malaysia
                              </option>
                              <option value="Maldives" label="Maldives">
                                Maldives
                              </option>
                              <option value="Mongolia" label="Mongolia">
                                Mongolia
                              </option>
                              <option
                                value="Myanmar [Burma]"
                                label="Myanmar [Burma]"
                              >
                                Myanmar [Burma]
                              </option>
                              <option value="Nepal" label="Nepal">
                                Nepal
                              </option>
                              <option value="Neutral Zone" label="Neutral Zone">
                                Neutral Zone
                              </option>
                              <option value="North Korea" label="North Korea">
                                North Korea
                              </option>
                              <option value="Oman" label="Oman">
                                Oman
                              </option>
                              <option value="Pakistan" label="Pakistan">
                                Pakistan
                              </option>
                              <option
                                value="Palestinian Territories"
                                label="Palestinian Territories"
                              >
                                Palestinian Territories
                              </option>
                              <option
                                value="People's Democratic Republic of Yemen"
                                label="People's Democratic Republic of Yemen"
                              >
                                People's Democratic Republic of Yemen
                              </option>
                              <option value="Philippines" label="Philippines">
                                Philippines
                              </option>
                              <option value="Qatar" label="Qatar">
                                Qatar
                              </option>
                              <option value="Saudi Arabia" label="Saudi Arabia">
                                Saudi Arabia
                              </option>
                              <option value="Singapore" label="Singapore">
                                Singapore
                              </option>
                              <option value="South Korea" label="South Korea">
                                South Korea
                              </option>
                              <option value="Sri Lanka" label="Sri Lanka">
                                Sri Lanka
                              </option>
                              <option value="Syria" label="Syria">
                                Syria
                              </option>
                              <option value="Taiwan" label="Taiwan">
                                Taiwan
                              </option>
                              <option value="Tajikistan" label="Tajikistan">
                                Tajikistan
                              </option>
                              <option value="Thailand" label="Thailand">
                                Thailand
                              </option>
                              <option value="Timor-Leste" label="Timor-Leste">
                                Timor-Leste
                              </option>
                              <option value="Turkey" label="Turkey">
                                Turkey
                              </option>
                              <option value="Turkmenistan" label="Turkmenistan">
                                Turkmenistan
                              </option>
                              <option
                                value="United Arab Emirates"
                                label="United Arab Emirates"
                              >
                                United Arab Emirates
                              </option>
                              <option value="Uzbekistan" label="Uzbekistan">
                                Uzbekistan
                              </option>
                              <option value="Vietnam" label="Vietnam">
                                Vietnam
                              </option>
                              <option value="Yemen" label="Yemen">
                                Yemen
                              </option>
                            </optgroup>

                            <optgroup
                              id="country-optgroup-Europe"
                              label="Europe"
                            >
                              <option value="Albania" label="Albania">
                                Albania
                              </option>
                              <option value="Andorra" label="Andorra">
                                Andorra
                              </option>
                              <option value="Austria" label="Austria">
                                Austria
                              </option>
                              <option value="Belarus" label="Belarus">
                                Belarus
                              </option>
                              <option value="Belgium" label="Belgium">
                                Belgium
                              </option>
                              <option
                                value="Bosnia and Herzegovina"
                                label="Bosnia and Herzegovina"
                              >
                                Bosnia and Herzegovina
                              </option>
                              <option value="Bulgaria" label="Bulgaria">
                                Bulgaria
                              </option>
                              <option value="Croatia" label="Croatia">
                                Croatia
                              </option>
                              <option value="Cyprus" label="Cyprus">
                                Cyprus
                              </option>
                              <option
                                value="Czech Republic"
                                label="Czech Republic"
                              >
                                Czech Republic
                              </option>
                              <option value="Denmark" label="Denmark">
                                Denmark
                              </option>
                              <option value="East Germany" label="East Germany">
                                East Germany
                              </option>
                              <option value="Estonia" label="Estonia">
                                Estonia
                              </option>
                              <option
                                value="Faroe Islands"
                                label="Faroe Islands"
                              >
                                Faroe Islands
                              </option>
                              <option value="Finland" label="Finland">
                                Finland
                              </option>
                              <option value="France" label="France">
                                France
                              </option>
                              <option value="Germany" label="Germany">
                                Germany
                              </option>
                              <option value="Gibraltar" label="Gibraltar">
                                Gibraltar
                              </option>
                              <option value="Greece" label="Greece">
                                Greece
                              </option>
                              <option value="Guernsey" label="Guernsey">
                                Guernsey
                              </option>
                              <option value="Hungary" label="Hungary">
                                Hungary
                              </option>
                              <option value="Iceland" label="Iceland">
                                Iceland
                              </option>
                              <option value="Ireland" label="Ireland">
                                Ireland
                              </option>
                              <option value="Isle of Man" label="Isle of Man">
                                Isle of Man
                              </option>
                              <option value="Italy" label="Italy">
                                Italy
                              </option>
                              <option value="Jersey" label="Jersey">
                                Jersey
                              </option>
                              <option value="Latvia" label="Latvia">
                                Latvia
                              </option>
                              <option
                                value="Liechtenstein"
                                label="Liechtenstein"
                              >
                                Liechtenstein
                              </option>
                              <option value="Lithuania" label="Lithuania">
                                Lithuania
                              </option>
                              <option value="Luxembourg" label="Luxembourg">
                                Luxembourg
                              </option>
                              <option value="Macedonia" label="Macedonia">
                                Macedonia
                              </option>
                              <option value="Malta" label="Malta">
                                Malta
                              </option>
                              <option
                                value="Metropolitan France"
                                label="Metropolitan France"
                              >
                                Metropolitan France
                              </option>
                              <option value="Moldova" label="Moldova">
                                Moldova
                              </option>
                              <option value="Monaco" label="Monaco">
                                Monaco
                              </option>
                              <option value="Montenegro" label="Montenegro">
                                Montenegro
                              </option>
                              <option value="Netherlands" label="Netherlands">
                                Netherlands
                              </option>
                              <option value="Norway" label="Norway">
                                Norway
                              </option>
                              <option value="Poland" label="Poland">
                                Poland
                              </option>
                              <option value="Portugal" label="Portugal">
                                Portugal
                              </option>
                              <option value="Romania" label="Romania">
                                Romania
                              </option>
                              <option value="Russia" label="Russia">
                                Russia
                              </option>
                              <option value="San Marino" label="San Marino">
                                San Marino
                              </option>
                              <option value="Serbia" label="Serbia">
                                Serbia
                              </option>
                              <option
                                value="Serbia and Montenegro"
                                label="Serbia and Montenegro"
                              >
                                Serbia and Montenegro
                              </option>
                              <option value="Slovakia" label="Slovakia">
                                Slovakia
                              </option>
                              <option value="Slovenia" label="Slovenia">
                                Slovenia
                              </option>
                              <option value="Spain" label="Spain">
                                Spain
                              </option>
                              <option
                                value="Svalbard and Jan Mayen"
                                label="Svalbard and Jan Mayen"
                              >
                                Svalbard and Jan Mayen
                              </option>
                              <option value="Sweden" label="Sweden">
                                Sweden
                              </option>
                              <option value="Switzerland" label="Switzerland">
                                Switzerland
                              </option>
                              <option value="Ukraine" label="Ukraine">
                                Ukraine
                              </option>
                              <option
                                value="Union of Soviet Socialist Republics"
                                label="Union of Soviet Socialist Republics"
                              >
                                Union of Soviet Socialist Republics
                              </option>
                              <option
                                value="United Kingdom"
                                label="United Kingdom"
                              >
                                United Kingdom
                              </option>
                              <option value="Vatican City" label="Vatican City">
                                Vatican City
                              </option>
                              <option
                                value="Åland Islands"
                                label="Åland Islands"
                              >
                                Åland Islands
                              </option>
                            </optgroup>
                            <optgroup
                              id="country-optgroup-Oceania"
                              label="Oceania"
                            >
                              <option
                                value="American Samoa"
                                label="American Samoa"
                              >
                                American Samoa
                              </option>
                              <option value="Antarctica" label="Antarctica">
                                Antarctica
                              </option>
                              <option value="Australia" label="Australia">
                                Australia
                              </option>
                              <option
                                value="Bouvet Island"
                                label="Bouvet Island"
                              >
                                Bouvet Island
                              </option>
                              <option
                                value="British Indian Ocean Territory"
                                label="British Indian Ocean Territory"
                              >
                                British Indian Ocean Territory
                              </option>
                              <option
                                value="Christmas Island"
                                label="Christmas Island"
                              >
                                Christmas Island
                              </option>
                              <option
                                value="Cocos [Keeling] Islands"
                                label="Cocos [Keeling] Islands"
                              >
                                Cocos [Keeling] Islands
                              </option>
                              <option value="Cook Islands" label="Cook Islands">
                                Cook Islands
                              </option>
                              <option value="Fiji" label="Fiji">
                                Fiji
                              </option>
                              <option
                                value="French Polynesia"
                                label="French Polynesia"
                              >
                                French Polynesia
                              </option>
                              <option
                                value="French Southern Territories"
                                label="French Southern Territories"
                              >
                                French Southern Territories
                              </option>
                              <option value="Guam" label="Guam">
                                Guam
                              </option>
                              <option
                                value="Heard Island and McDonald Islands"
                                label="Heard Island and McDonald Islands"
                              >
                                Heard Island and McDonald Islands
                              </option>
                              <option value="Kiribati" label="Kiribati">
                                Kiribati
                              </option>
                              <option
                                value="Marshall Islands"
                                label="Marshall Islands"
                              >
                                Marshall Islands
                              </option>
                              <option value="Micronesia" label="Micronesia">
                                Micronesia
                              </option>
                              <option value="Nauru" label="Nauru">
                                Nauru
                              </option>
                              <option
                                value="New Caledonia"
                                label="New Caledonia"
                              >
                                New Caledonia
                              </option>
                              <option value="New Zealand" label="New Zealand">
                                New Zealand
                              </option>
                              <option value="Niue" label="Niue">
                                Niue
                              </option>
                              <option
                                value="Norfolk Island"
                                label="Norfolk Island"
                              >
                                Norfolk Island
                              </option>
                              <option
                                value="Northern Mariana Islands"
                                label="Northern Mariana Islands"
                              >
                                Northern Mariana Islands
                              </option>
                              <option value="Palau" label="Palau">
                                Palau
                              </option>
                              <option
                                value="Papua New Guinea"
                                label="Papua New Guinea"
                              >
                                Papua New Guinea
                              </option>
                              <option
                                value="Pitcairn Islands"
                                label="Pitcairn Islands"
                              >
                                Pitcairn Islands
                              </option>
                              <option value="Samoa" label="Samoa">
                                Samoa
                              </option>
                              <option
                                value="Solomon Islands"
                                label="Solomon Islands"
                              >
                                Solomon Islands
                              </option>
                              <option
                                value="South Georgia and the South Sandwich Islands"
                                label="South Georgia and the South Sandwich Islands"
                              >
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Tokelau" label="Tokelau">
                                Tokelau
                              </option>
                              <option value="Tonga" label="Tonga">
                                Tonga
                              </option>
                              <option value="Tuvalu" label="Tuvalu">
                                Tuvalu
                              </option>
                              <option
                                value="U.S. Minor Outlying Islands"
                                label="U.S. Minor Outlying Islands"
                              >
                                U.S. Minor Outlying Islands
                              </option>
                              <option value="Vanuatu" label="Vanuatu">
                                Vanuatu
                              </option>
                              <option
                                value="Wallis and Futuna"
                                label="Wallis and Futuna"
                              >
                                Wallis and Futuna
                              </option>
                            </optgroup>
                          </select>
                          {buttonLoadCountry()}
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      {" "}
                      <form onSubmit={handleSubmitState}>
                        <label className="labels mt-3 ">State/Region</label>
                        <div className="input-group mb-3 d-flex">
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="State"
                          />
                          {buttonLoadState()}
                        </div>
                      </form>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitAbout}>
                    <label className="labels mt-3 ">About yourself</label>
                    <div className="input-group mb-3 d-flex">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Tell the world something about yourself."
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                      />
                      {buttonLoadAbout()}
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

export default profileEdit;
