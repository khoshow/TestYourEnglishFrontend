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
                              <option value="AO" label="Angola">
                                Angola
                              </option>
                              <option value="BJ" label="Benin">
                                Benin
                              </option>
                              <option value="BW" label="Botswana">
                                Botswana
                              </option>
                              <option value="BF" label="Burkina Faso">
                                Burkina Faso
                              </option>
                              <option value="BI" label="Burundi">
                                Burundi
                              </option>
                              <option value="CM" label="Cameroon">
                                Cameroon
                              </option>
                              <option value="CV" label="Cape Verde">
                                Cape Verde
                              </option>
                              <option
                                value="CF"
                                label="Central African Republic"
                              >
                                Central African Republic
                              </option>
                              <option value="TD" label="Chad">
                                Chad
                              </option>
                              <option value="KM" label="Comoros">
                                Comoros
                              </option>
                              <option value="CG" label="Congo - Brazzaville">
                                Congo - Brazzaville
                              </option>
                              <option value="CD" label="Congo - Kinshasa">
                                Congo - Kinshasa
                              </option>
                              <option value="CI" label="Côte d’Ivoire">
                                Côte d’Ivoire
                              </option>
                              <option value="DJ" label="Djibouti">
                                Djibouti
                              </option>
                              <option value="EG" label="Egypt">
                                Egypt
                              </option>
                              <option value="GQ" label="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="ER" label="Eritrea">
                                Eritrea
                              </option>
                              <option value="ET" label="Ethiopia">
                                Ethiopia
                              </option>
                              <option value="GA" label="Gabon">
                                Gabon
                              </option>
                              <option value="GM" label="Gambia">
                                Gambia
                              </option>
                              <option value="GH" label="Ghana">
                                Ghana
                              </option>
                              <option value="GN" label="Guinea">
                                Guinea
                              </option>
                              <option value="GW" label="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="KE" label="Kenya">
                                Kenya
                              </option>
                              <option value="LS" label="Lesotho">
                                Lesotho
                              </option>
                              <option value="LR" label="Liberia">
                                Liberia
                              </option>
                              <option value="LY" label="Libya">
                                Libya
                              </option>
                              <option value="MG" label="Madagascar">
                                Madagascar
                              </option>
                              <option value="MW" label="Malawi">
                                Malawi
                              </option>
                              <option value="ML" label="Mali">
                                Mali
                              </option>
                              <option value="MR" label="Mauritania">
                                Mauritania
                              </option>
                              <option value="MU" label="Mauritius">
                                Mauritius
                              </option>
                              <option value="YT" label="Mayotte">
                                Mayotte
                              </option>
                              <option value="MA" label="Morocco">
                                Morocco
                              </option>
                              <option value="MZ" label="Mozambique">
                                Mozambique
                              </option>
                              <option value="NA" label="Namibia">
                                Namibia
                              </option>
                              <option value="NE" label="Niger">
                                Niger
                              </option>
                              <option value="NG" label="Nigeria">
                                Nigeria
                              </option>
                              <option value="RW" label="Rwanda">
                                Rwanda
                              </option>
                              <option value="RE" label="Réunion">
                                Réunion
                              </option>
                              <option value="SH" label="Saint Helena">
                                Saint Helena
                              </option>
                              <option value="SN" label="Senegal">
                                Senegal
                              </option>
                              <option value="SC" label="Seychelles">
                                Seychelles
                              </option>
                              <option value="SL" label="Sierra Leone">
                                Sierra Leone
                              </option>
                              <option value="SO" label="Somalia">
                                Somalia
                              </option>
                              <option value="ZA" label="South Africa">
                                South Africa
                              </option>
                              <option value="SD" label="Sudan">
                                Sudan
                              </option>
                              <option value="SZ" label="Swaziland">
                                Swaziland
                              </option>
                              <option value="ST" label="São Tomé and Príncipe">
                                São Tomé and Príncipe
                              </option>
                              <option value="TZ" label="Tanzania">
                                Tanzania
                              </option>
                              <option value="TG" label="Togo">
                                Togo
                              </option>
                              <option value="TN" label="Tunisia">
                                Tunisia
                              </option>
                              <option value="UG" label="Uganda">
                                Uganda
                              </option>
                              <option value="EH" label="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="ZM" label="Zambia">
                                Zambia
                              </option>
                              <option value="ZW" label="Zimbabwe">
                                Zimbabwe
                              </option>
                            </optgroup>
                            <optgroup
                              id="country-optgroup-Americas"
                              label="Americas"
                            >
                              <option value="AI" label="Anguilla">
                                Anguilla
                              </option>
                              <option value="AG" label="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="AR" label="Argentina">
                                Argentina
                              </option>
                              <option value="AW" label="Aruba">
                                Aruba
                              </option>
                              <option value="BS" label="Bahamas">
                                Bahamas
                              </option>
                              <option value="BB" label="Barbados">
                                Barbados
                              </option>
                              <option value="BZ" label="Belize">
                                Belize
                              </option>
                              <option value="BM" label="Bermuda">
                                Bermuda
                              </option>
                              <option value="BO" label="Bolivia">
                                Bolivia
                              </option>
                              <option value="BR" label="Brazil">
                                Brazil
                              </option>
                              <option value="VG" label="British Virgin Islands">
                                British Virgin Islands
                              </option>
                              <option value="CA" label="Canada">
                                Canada
                              </option>
                              <option value="KY" label="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="CL" label="Chile">
                                Chile
                              </option>
                              <option value="CO" label="Colombia">
                                Colombia
                              </option>
                              <option value="CR" label="Costa Rica">
                                Costa Rica
                              </option>
                              <option value="CU" label="Cuba">
                                Cuba
                              </option>
                              <option value="DM" label="Dominica">
                                Dominica
                              </option>
                              <option value="DO" label="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="EC" label="Ecuador">
                                Ecuador
                              </option>
                              <option value="SV" label="El Salvador">
                                El Salvador
                              </option>
                              <option value="FK" label="Falkland Islands">
                                Falkland Islands
                              </option>
                              <option value="GF" label="French Guiana">
                                French Guiana
                              </option>
                              <option value="GL" label="Greenland">
                                Greenland
                              </option>
                              <option value="GD" label="Grenada">
                                Grenada
                              </option>
                              <option value="GP" label="Guadeloupe">
                                Guadeloupe
                              </option>
                              <option value="GT" label="Guatemala">
                                Guatemala
                              </option>
                              <option value="GY" label="Guyana">
                                Guyana
                              </option>
                              <option value="HT" label="Haiti">
                                Haiti
                              </option>
                              <option value="HN" label="Honduras">
                                Honduras
                              </option>
                              <option value="JM" label="Jamaica">
                                Jamaica
                              </option>
                              <option value="MQ" label="Martinique">
                                Martinique
                              </option>
                              <option value="MX" label="Mexico">
                                Mexico
                              </option>
                              <option value="MS" label="Montserrat">
                                Montserrat
                              </option>
                              <option value="AN" label="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="NI" label="Nicaragua">
                                Nicaragua
                              </option>
                              <option value="PA" label="Panama">
                                Panama
                              </option>
                              <option value="PY" label="Paraguay">
                                Paraguay
                              </option>
                              <option value="PE" label="Peru">
                                Peru
                              </option>
                              <option value="PR" label="Puerto Rico">
                                Puerto Rico
                              </option>
                              <option value="BL" label="Saint Barthélemy">
                                Saint Barthélemy
                              </option>
                              <option value="KN" label="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="LC" label="Saint Lucia">
                                Saint Lucia
                              </option>
                              <option value="MF" label="Saint Martin">
                                Saint Martin
                              </option>
                              <option
                                value="PM"
                                label="Saint Pierre and Miquelon"
                              >
                                Saint Pierre and Miquelon
                              </option>
                              <option
                                value="VC"
                                label="Saint Vincent and the Grenadines"
                              >
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="SR" label="Suriname">
                                Suriname
                              </option>
                              <option value="TT" label="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option
                                value="TC"
                                label="Turks and Caicos Islands"
                              >
                                Turks and Caicos Islands
                              </option>
                              <option value="VI" label="U.S. Virgin Islands">
                                U.S. Virgin Islands
                              </option>
                              <option value="US" label="United States">
                                United States
                              </option>
                              <option value="UY" label="Uruguay">
                                Uruguay
                              </option>
                              <option value="VE" label="Venezuela">
                                Venezuela
                              </option>
                            </optgroup>
                            <optgroup id="country-optgroup-Asia" label="Asia">
                              <option value="AF" label="Afghanistan">
                                Afghanistan
                              </option>
                              <option value="AM" label="Armenia">
                                Armenia
                              </option>
                              <option value="AZ" label="Azerbaijan">
                                Azerbaijan
                              </option>
                              <option value="BH" label="Bahrain">
                                Bahrain
                              </option>
                              <option value="BD" label="Bangladesh">
                                Bangladesh
                              </option>
                              <option value="BT" label="Bhutan">
                                Bhutan
                              </option>
                              <option value="BN" label="Brunei">
                                Brunei
                              </option>
                              <option value="KH" label="Cambodia">
                                Cambodia
                              </option>
                              <option value="CN" label="China">
                                China
                              </option>
                              <option value="GE" label="Georgia">
                                Georgia
                              </option>
                              <option value="HK" label="Hong Kong SAR China">
                                Hong Kong SAR China
                              </option>
                              <option value="IN" label="India">
                                India
                              </option>
                              <option value="ID" label="Indonesia">
                                Indonesia
                              </option>
                              <option value="IR" label="Iran">
                                Iran
                              </option>
                              <option value="IQ" label="Iraq">
                                Iraq
                              </option>
                              <option value="IL" label="Israel">
                                Israel
                              </option>
                              <option value="JP" label="Japan">
                                Japan
                              </option>
                              <option value="JO" label="Jordan">
                                Jordan
                              </option>
                              <option value="KZ" label="Kazakhstan">
                                Kazakhstan
                              </option>
                              <option value="KW" label="Kuwait">
                                Kuwait
                              </option>
                              <option value="KG" label="Kyrgyzstan">
                                Kyrgyzstan
                              </option>
                              <option value="LA" label="Laos">
                                Laos
                              </option>
                              <option value="LB" label="Lebanon">
                                Lebanon
                              </option>
                              <option value="MO" label="Macau SAR China">
                                Macau SAR China
                              </option>
                              <option value="MY" label="Malaysia">
                                Malaysia
                              </option>
                              <option value="MV" label="Maldives">
                                Maldives
                              </option>
                              <option value="MN" label="Mongolia">
                                Mongolia
                              </option>
                              <option value="MM" label="Myanmar [Burma]">
                                Myanmar [Burma]
                              </option>
                              <option value="NP" label="Nepal">
                                Nepal
                              </option>
                              <option value="NT" label="Neutral Zone">
                                Neutral Zone
                              </option>
                              <option value="KP" label="North Korea">
                                North Korea
                              </option>
                              <option value="OM" label="Oman">
                                Oman
                              </option>
                              <option value="PK" label="Pakistan">
                                Pakistan
                              </option>
                              <option
                                value="PS"
                                label="Palestinian Territories"
                              >
                                Palestinian Territories
                              </option>
                              <option
                                value="YD"
                                label="People's Democratic Republic of Yemen"
                              >
                                People's Democratic Republic of Yemen
                              </option>
                              <option value="PH" label="Philippines">
                                Philippines
                              </option>
                              <option value="QA" label="Qatar">
                                Qatar
                              </option>
                              <option value="SA" label="Saudi Arabia">
                                Saudi Arabia
                              </option>
                              <option value="SG" label="Singapore">
                                Singapore
                              </option>
                              <option value="KR" label="South Korea">
                                South Korea
                              </option>
                              <option value="LK" label="Sri Lanka">
                                Sri Lanka
                              </option>
                              <option value="SY" label="Syria">
                                Syria
                              </option>
                              <option value="TW" label="Taiwan">
                                Taiwan
                              </option>
                              <option value="TJ" label="Tajikistan">
                                Tajikistan
                              </option>
                              <option value="TH" label="Thailand">
                                Thailand
                              </option>
                              <option value="TL" label="Timor-Leste">
                                Timor-Leste
                              </option>
                              <option value="TR" label="Turkey">
                                Turkey
                              </option>
                              <option value="TM" label="Turkmenistan">
                                Turkmenistan
                              </option>
                              <option value="AE" label="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="UZ" label="Uzbekistan">
                                Uzbekistan
                              </option>
                              <option value="VN" label="Vietnam">
                                Vietnam
                              </option>
                              <option value="YE" label="Yemen">
                                Yemen
                              </option>
                            </optgroup>
                            <optgroup
                              id="country-optgroup-Europe"
                              label="Europe"
                            >
                              <option value="AL" label="Albania">
                                Albania
                              </option>
                              <option value="AD" label="Andorra">
                                Andorra
                              </option>
                              <option value="AT" label="Austria">
                                Austria
                              </option>
                              <option value="BY" label="Belarus">
                                Belarus
                              </option>
                              <option value="BE" label="Belgium">
                                Belgium
                              </option>
                              <option value="BA" label="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="BG" label="Bulgaria">
                                Bulgaria
                              </option>
                              <option value="HR" label="Croatia">
                                Croatia
                              </option>
                              <option value="CY" label="Cyprus">
                                Cyprus
                              </option>
                              <option value="CZ" label="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="DK" label="Denmark">
                                Denmark
                              </option>
                              <option value="DD" label="East Germany">
                                East Germany
                              </option>
                              <option value="EE" label="Estonia">
                                Estonia
                              </option>
                              <option value="FO" label="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="FI" label="Finland">
                                Finland
                              </option>
                              <option value="FR" label="France">
                                France
                              </option>
                              <option value="DE" label="Germany">
                                Germany
                              </option>
                              <option value="GI" label="Gibraltar">
                                Gibraltar
                              </option>
                              <option value="GR" label="Greece">
                                Greece
                              </option>
                              <option value="GG" label="Guernsey">
                                Guernsey
                              </option>
                              <option value="HU" label="Hungary">
                                Hungary
                              </option>
                              <option value="IS" label="Iceland">
                                Iceland
                              </option>
                              <option value="IE" label="Ireland">
                                Ireland
                              </option>
                              <option value="IM" label="Isle of Man">
                                Isle of Man
                              </option>
                              <option value="IT" label="Italy">
                                Italy
                              </option>
                              <option value="JE" label="Jersey">
                                Jersey
                              </option>
                              <option value="LV" label="Latvia">
                                Latvia
                              </option>
                              <option value="LI" label="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="LT" label="Lithuania">
                                Lithuania
                              </option>
                              <option value="LU" label="Luxembourg">
                                Luxembourg
                              </option>
                              <option value="MK" label="Macedonia">
                                Macedonia
                              </option>
                              <option value="MT" label="Malta">
                                Malta
                              </option>
                              <option value="FX" label="Metropolitan France">
                                Metropolitan France
                              </option>
                              <option value="MD" label="Moldova">
                                Moldova
                              </option>
                              <option value="MC" label="Monaco">
                                Monaco
                              </option>
                              <option value="ME" label="Montenegro">
                                Montenegro
                              </option>
                              <option value="NL" label="Netherlands">
                                Netherlands
                              </option>
                              <option value="NO" label="Norway">
                                Norway
                              </option>
                              <option value="PL" label="Poland">
                                Poland
                              </option>
                              <option value="PT" label="Portugal">
                                Portugal
                              </option>
                              <option value="RO" label="Romania">
                                Romania
                              </option>
                              <option value="RU" label="Russia">
                                Russia
                              </option>
                              <option value="SM" label="San Marino">
                                San Marino
                              </option>
                              <option value="RS" label="Serbia">
                                Serbia
                              </option>
                              <option value="CS" label="Serbia and Montenegro">
                                Serbia and Montenegro
                              </option>
                              <option value="SK" label="Slovakia">
                                Slovakia
                              </option>
                              <option value="SI" label="Slovenia">
                                Slovenia
                              </option>
                              <option value="ES" label="Spain">
                                Spain
                              </option>
                              <option value="SJ" label="Svalbard and Jan Mayen">
                                Svalbard and Jan Mayen
                              </option>
                              <option value="SE" label="Sweden">
                                Sweden
                              </option>
                              <option value="CH" label="Switzerland">
                                Switzerland
                              </option>
                              <option value="UA" label="Ukraine">
                                Ukraine
                              </option>
                              <option
                                value="SU"
                                label="Union of Soviet Socialist Republics"
                              >
                                Union of Soviet Socialist Republics
                              </option>
                              <option value="GB" label="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="VA" label="Vatican City">
                                Vatican City
                              </option>
                              <option value="AX" label="Åland Islands">
                                Åland Islands
                              </option>
                            </optgroup>
                            <optgroup
                              id="country-optgroup-Oceania"
                              label="Oceania"
                            >
                              <option value="AS" label="American Samoa">
                                American Samoa
                              </option>
                              <option value="AQ" label="Antarctica">
                                Antarctica
                              </option>
                              <option value="AU" label="Australia">
                                Australia
                              </option>
                              <option value="BV" label="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option
                                value="IO"
                                label="British Indian Ocean Territory"
                              >
                                British Indian Ocean Territory
                              </option>
                              <option value="CX" label="Christmas Island">
                                Christmas Island
                              </option>
                              <option
                                value="CC"
                                label="Cocos [Keeling] Islands"
                              >
                                Cocos [Keeling] Islands
                              </option>
                              <option value="CK" label="Cook Islands">
                                Cook Islands
                              </option>
                              <option value="FJ" label="Fiji">
                                Fiji
                              </option>
                              <option value="PF" label="French Polynesia">
                                French Polynesia
                              </option>
                              <option
                                value="TF"
                                label="French Southern Territories"
                              >
                                French Southern Territories
                              </option>
                              <option value="GU" label="Guam">
                                Guam
                              </option>
                              <option
                                value="HM"
                                label="Heard Island and McDonald Islands"
                              >
                                Heard Island and McDonald Islands
                              </option>
                              <option value="KI" label="Kiribati">
                                Kiribati
                              </option>
                              <option value="MH" label="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="FM" label="Micronesia">
                                Micronesia
                              </option>
                              <option value="NR" label="Nauru">
                                Nauru
                              </option>
                              <option value="NC" label="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="NZ" label="New Zealand">
                                New Zealand
                              </option>
                              <option value="NU" label="Niue">
                                Niue
                              </option>
                              <option value="NF" label="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option
                                value="MP"
                                label="Northern Mariana Islands"
                              >
                                Northern Mariana Islands
                              </option>
                              <option value="PW" label="Palau">
                                Palau
                              </option>
                              <option value="PG" label="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="PN" label="Pitcairn Islands">
                                Pitcairn Islands
                              </option>
                              <option value="WS" label="Samoa">
                                Samoa
                              </option>
                              <option value="SB" label="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option
                                value="GS"
                                label="South Georgia and the South Sandwich Islands"
                              >
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="TK" label="Tokelau">
                                Tokelau
                              </option>
                              <option value="TO" label="Tonga">
                                Tonga
                              </option>
                              <option value="TV" label="Tuvalu">
                                Tuvalu
                              </option>
                              <option
                                value="UM"
                                label="U.S. Minor Outlying Islands"
                              >
                                U.S. Minor Outlying Islands
                              </option>
                              <option value="VU" label="Vanuatu">
                                Vanuatu
                              </option>
                              <option value="WF" label="Wallis and Futuna">
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
