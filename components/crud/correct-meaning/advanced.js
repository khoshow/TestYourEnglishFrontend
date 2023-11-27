import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";
import { getCookie } from "../../../actions/auth";
import { createCorrectMeaningAdvanced } from "../../../actions/categories/correct-meaning/advanced";

const CorrectMeaningAdvanced = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    question: "",
    wrongOptions: [],
    correctOption: "",
    wrongOption1: "",
    wrongOption2: "",
    wrongOption3: "",
    removed: false,
    formData: "",
  });
  //  [wrongOption1, wrongOption2, wrongOption3] = wrongOptions;

  const {
    name,
    error,
    success,
    question,
    wrongOptions,
    correctOption,
    wrongOption1,
    wrongOption2,
    wrongOption3,
    removed,
    formData,
  } = values;

  const token = getCookie("token");

  // useEffect(() => {
  //   setValues({ ...values, formData: new FormData() });
  //   // loadCorrectWordMedium();
  // }, []);

  const deleteConfirm = (slug) => {
    let answer = window.confirm("Are you sure you want to delete this word?");
    if (answer) {
      deleteCorrectMeaningAdvanced(slug);
    }
  };

  const deleteCorrectMeaningAdvanced = (slug) => {
    // console.log('delete', slug);
    removeCorrectMeaningAdvanced(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          removed: !removed,
        });
      }
    });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    console.log("create Data values", values);

    createCorrectMeaningAdvanced(values, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
          correctOption: "",
          wrongOption1: "",
          wrongOption2: "",
          wrongOption3: "",
        });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      wrongOptions: [wrongOption1, wrongOption2, wrongOption3],
    });
  };

  // const mouseMoveHandler = (e) => {
  //   setValues({ ...values, error: false, success: false, removed: "" });
  // };

  const newCorrectMeaningForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group mt-4">
        <label className="text-muted">Write the word</label>
        <input
          type="text"
          name="question"
          className="form-control"
          value={question}
          onChange={handleChange}
        />
      </div>
      <div className="form-group  ">
        <label className="text-muted">Write the correct meaning</label>
        <textarea
          type="text"
          name="correctOption"
          className="form-control "
          value={correctOption}
          onChange={handleChange}
          style={{ backgroundColor: "#30e3ca" }}
        />
      </div>
      <div className="form-group margin10">
        <label className="text-muted">Wrong option 1</label>
        <textarea
          type="text"
          name="wrongOption1"
          className="form-control"
          value={wrongOption1}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Wrong option 2</label>
        <textarea
          type="text"
          name="wrongOption2"
          className="form-control"
          value={wrongOption2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Wrong option 3</label>
        <textarea
          type="text"
          name="wrongOption3"
          className="form-control"
          value={wrongOption3}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary mt-4">
          Create
        </button>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      <div>{newCorrectMeaningForm()}</div>
      {success ? (
        <div className="mt-4" style={{ borderRadius: "20px" }}>
          <p className="bg-success text-light p-4">
            A new item for &apos;Choose the Correct Meaning&apos; of Advanced
            level is created
          </p>
        </div>
      ) : (
        ""
      )}
      {error ? <p className="text-danger">{error}</p> : ""}
    </React.Fragment>
  );
};

export default CorrectMeaningAdvanced;
