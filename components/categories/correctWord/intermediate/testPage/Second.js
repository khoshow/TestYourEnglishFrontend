import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { isAuth } from "../../../../../actions/auth";
import { getCookie } from "../../../../../actions/auth";
import { postScore } from "../../../../../actions/categories/correct-word/intermediate";
import Card from "@mui/material/Card";
// import { getRanking } from "../../../../../actions/correct-word";

function Second2(pageData, next) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctSelection, setCorrectSelection] = useState(null);
  const [quizInfo, setquizInfo] = useState(pageData.data.questions);
  const [rightlyAnswered, setRightlyAnswered] = useState([]);
  const [wronglyAnswered, setWronglyAnswered] = useState([]);
  const [disableAfterSelect, setDisableAfterSelect] = useState(false);
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  const [messageWhenCorrect, setMessageWhenCorrect] = useState();
  const [messageWhenWrong, setMessageWhenWrong] = useState();
  const [messageToDisplay, setMessageToDisplay] = useState();
  const [messageStatus, setMessageStatus] = useState();

  const slug = currentUrl.split("/").pop();
  const testNo = parseInt(slug.split("-").pop());

  const finalSlug = "test-" + testNo;

  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const token = getCookie("token");
  const userId = isAuth()._id;
  const username = isAuth().username;

  const updateUserScore = () => {
    const dataToSend = {
      userId: userId,
      username: username,
      testId: pageData.data.testId,
      testNo: testNo,
      rightlyAnswered: rightlyAnswered,
      wronglyAnswered: wronglyAnswered,
    };

    postScore(dataToSend, token)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const wrongOrRight = (option) => {
    if (selectedOption === quizInfo[currentQuestion].correctAnswer) {
      return "selectCorrect";
    } else return "selectIncorrect";
  };

  const handleOptionClick = (option) => {
    setDisableAfterSelect(true);
    setSelectedOption(option);
    if (option === quizInfo[currentQuestion].correctAnswer) {
      setRightlyAnswered([
        ...rightlyAnswered,
        {
          question: quizInfo[currentQuestion].question,
          answer: quizInfo[currentQuestion].correctAnswer,
          id: quizInfo[currentQuestion].id,
        },
      ]);
      let correctMessagesArray = pageData.correctMessages;

      if (correctMessagesArray && correctMessagesArray.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * correctMessagesArray.length
        );
        setMessageToDisplay(correctMessagesArray[randomIndex]);
      }
      setMessageStatus("correctAnswer");
      setScore(score + 1);
    } else {
      setWronglyAnswered([
        ...wronglyAnswered,
        {
          question: quizInfo[currentQuestion].question,
          answer: quizInfo[currentQuestion].correctAnswer,
          id: quizInfo[currentQuestion].id,
        },
      ]);

      let wrongMessagesArray = pageData.wrongMessages;

      if (wrongMessagesArray && wrongMessagesArray.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * wrongMessagesArray.length
        );
        setMessageToDisplay(wrongMessagesArray[randomIndex]);
      }
      setMessageStatus("wrongAnswer");
      setScore(score);
    }
    // if (selectedOption === option) {
    // }
    if (option === quizInfo[currentQuestion].correctAnswer) {
      setCorrectSelection(true);
    } else {
      setCorrectSelection(false);
    }
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct

    setDisableAfterSelect(false);
    if (selectedOption === quizInfo[currentQuestion].correctAnswer) {
      setScore(score + 1);
      // setRightlyAnswered([
      //   ...rightlyAnswered,
      //   quizInfo[currentQuestion].question,
      // ]);
    }
    // else {
    //   setWronglyAnswered([
    //     ...wronglyAnswered,
    //     quizInfo[currentQuestion].question,
    //   ]);
    // }

    // Move to the next question

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizInfo.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setMessageToDisplay(null);
      setMessageStatus(null);
    } else {
      setShowScore(true);
      // getRanking(score);
      // updateUserScore();
      if (isAuth()) {
        updateUserScore();
      }
    }
  };
  const handleNextTest = (e) => {
    // e.preventDefault();
    setShowScore(false);
    next();
    // Set the new URL

    setSelectedOption(null);
  };
  const handlePreviousTest = () => {
    // Set the new URL
    const newUrl = `/vocabulary/correct-word/intermediate/test-${testNo - 1}`; // Replace this with your desired URL
    // Change the window location to the new URL, which will reload the page
    window.location.href = newUrl;
  };

  const displayScore = () => {
    if (!isAuth()) {
      return (
        <div>
          {" "}
          <Card className="myCard text-center ">
            <h3 className="cardTitle">Score Card</h3>

            <div className="weave2">{score}</div>
            <div className="p-4">
              <p className="scoreDescription">
                Out of {quizInfo.length} questions.
              </p>
            </div>
            <div className="d-flex">
              <Link
                href={`/vocabulary/correct-word/intermediate/test-${
                  testNo - 1
                }`}
                onClick={(e) => {
                  handleNextTest(e);
                }}
                className={`btn btn-primary test${testNo - 1}`}
              >
                Prev Test
              </Link>
              <Link
                href={`/vocabulary/correct-word/intermediate/test-${
                  testNo + 1
                }`}
                onClick={(e) => {
                  handleNextTest(e);
                }}
                className="btn btn-primary"
              >
                Next Test
              </Link>
            </div>

            <div className="quote-content pt-4">
              <p>
                Sign in to track your score and continue learning.<br></br>
                <span>
                  <Link className=" btn-outline tx-danger" href="/signin">
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
          </Card>
        </div>
        // <div className="scoreSection text-center">
        //   <div>
        //     {" "}
        //     <p>
        //       You scored <span className="scoreBox">{score}</span> out of{" "}
        //       {quizInfo.length} questions.
        //     </p>
        //   </div>
        //   <div className="requestSignIn">
        // <p>
        //   Sign in to track your score and continue learning.{" "}
        //   <span>
        //     <Link className="btn-primary" href="/signin">
        //       Sign In
        //     </Link>
        //   </span>{" "}
        // </p>
        //   </div>
        //   <div className="">
        // <Link
        //   href={`/vocabulary/correct-word/intermediate/test-${testNo + 1}`}
        //   onClick={(e) => {
        //     handleNextTest(e);
        //   }}
        //   className="btn btn-primary"
        // >
        //   Next Test
        // </Link>
        //   </div>
        // </div>
      );
    } else if (isAuth()) {
      return (
        <Card className="myCard text-center ">
          <h3 className="cardTitle">Score Card</h3>
          <div className="weave2">{score}</div>
          <div className="p-4">
            <p className="scoreDescription">
              Out of {quizInfo.length} questions.
            </p>
          </div>
          <div className="d-flex">
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${testNo - 1}`}
              onClick={(e) => {
                handleNextTest(e);
              }}
              className={`btn btn-primary test${testNo - 1}`}
            >
              Prev Test
            </Link>
            <Link
              href={`/vocabulary/correct-word/intermediate/test-${testNo + 1}`}
              onClick={(e) => {
                handleNextTest(e);
              }}
              className="btn btn-primary"
            >
              Next Test
            </Link>
          </div>
        </Card>
      );
    }
  };

  return (
    <div>
      <div className="heading alt-two">
        <h1>
          Choose the Correct Word
          <span className="subHeading">Intermediate Level</span>
        </h1>
      </div>
      <div className="quizContainer">
        {showScore ? (
          <div> {displayScore()}</div>
        ) : (
          // <div className="scoreSection">
          //   <p>
          //     You scored {score} out of {quizInfo.length} questions.
          //   </p>

          //   {/* <Link className="btn btn-primary" onClick={handlePreviousTest}>
          //   Previous Test
          // </b> */}
          //   <Link
          //     href={`/vocabulary/correct-word/intermediate/test-${testNo + 1}`}
          //     onClick={(e) => {
          //       handleNextTest(e);
          //     }}
          //     className="btn btn-primary"
          //   >
          //     Next Test
          //   </Link>
          // </div>
          <>
            <div className="questionSection">
              <div className="questionCount">
                <div>
                  Test &nbsp; <span className="questionNo">{testNo}</span>
                  &nbsp; Question &nbsp;
                  <span className="questionNo">
                    {currentQuestion + 1}/{quizInfo.length}
                  </span>
                </div>
                <div
                  className={`${messageStatus}`}
                  style={{ height: "150px", display: "flex" }}
                >
                  {messageToDisplay ? (
                    <div className="messageDisplay">{messageToDisplay}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="questionText">
                {quizInfo[currentQuestion].question}
              </div>
            </div>
            <div className="optionSection">
              {quizInfo[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`optionButton  ${
                    disableAfterSelect === true ? "buttonUnClickable" : ""
                  }  ${selectedOption === option ? wrongOrRight(option) : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleNextQuestion} className="nextButton">
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Second2;
