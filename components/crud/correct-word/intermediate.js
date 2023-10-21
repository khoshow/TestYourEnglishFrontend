import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";
import { getCookie } from "../../../actions/auth";
// import {
//   create,
//   //   getCorrectWordsMedium,
//   removeCorrectWordMedium,
// } from "../../../actions/correct-word/medium";
import {create} from "../../../actions/correct-word/intermediate"

const CorrectWordMedium = () => {
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

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    // loadCorrectWordMedium();
  }, [success, removed]);

  //   const loadCorrectWordMedium = () => {
  //     getCorrectWordsMedium().then((data) => {
  //       if (data.error) {
  //         console.log(data.error);
  //       } else {
  //         setValues({ ...values, getCorrectWordsMedium: data });
  //       }
  //     });
  //   };

  // const showCorrectWordMedium = () => {
  //   return correctWordMedium.map((c, i) => {
  //     return (
  //       <button
  //         onDoubleClick={() => deleteConfirm(c.slug)}
  //         title="Double click to delete"
  //         key={i}
  //         className="btn btn-outline-primary mr-1 ml-1 mt-3"
  //       >
  //         {c.name}
  //       </button>
  //     );
  //   });
  // };

  const deleteConfirm = (slug) => {
    let answer = window.confirm("Are you sure you want to delete this word?");
    if (answer) {
      deleteCorrectWordMedium(slug);
    }
  };

  const deleteCorrectWordMedium = (slug) => {
    // console.log('delete', slug);
    removeCorrectWordMedium(slug, token).then((data) => {
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

    create(values, token)
    // .then((data) => {
    //   if (data.error) {
    //     setValues({ ...values, error: data.error, success: false });
    //   } else {
    //     setValues({ ...values, error: false, success: true, name: "" });
    //   }
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      wrongOptions: [wrongOption1, wrongOption2, wrongOption3],
    });

    // setValues({
    //   ...values,
    //   [name]: value,
    //   wrongOptions: [wrongOption1, wrongOption2, wrongOption3],
    // });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <p className="text-success">
          A new Word for 'Choose the Correct Word' section is created
        </p>
      );
    }
  };

  const showError = () => {
    if (error) {
      return <p className="text-danger">This word already exist</p>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <p className="text-danger">The word is removed</p>;
    }
  };

  const mouseMoveHandler = (e) => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };

  const newCorrectWordForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Write the sentence</label>
        <input
          type="text"
          name="question"
          className="form-control"
          value={question}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Write the correct Option</label>
        <input
          type="text"
          name="correctOption"
          className="form-control"
          value={correctOption}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Wrong option 1</label>
        <input
          type="text"
          name="wrongOption1"
          className="form-control"
          value={wrongOption1}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Wrong option 2</label>
        <input
          type="text"
          name="wrongOption2"
          className="form-control"
          value={wrongOption2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Wrong option 3</label>
        <input
          type="text"
          name="wrongOption3"
          className="form-control"
          value={wrongOption3}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    </form>
  );

  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {showRemoved()}
      <div onMouseMove={mouseMoveHandler}>
        {newCorrectWordForm()}
        {/* {showCorrectWordMedium()} */}
      </div>
    </React.Fragment>
  );
};

export default CorrectWordMedium;
