import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { isAuth } from "../../../../../actions/auth";
import { getCookie } from "../../../../../actions/auth";
import { postScore } from "../../../../../actions/categories/correct-word/advanced";
import Card from "@mui/material/Card";
import { testGiveOrNot } from "../../../../../actions/privateInfo/testGiven";
import Layout3 from "../../../../Layout3";
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
  const [correctAnswer, setCorrectAnswer] = useState();
  const [attempted, setAttempted] = useState(false);
  const slug = currentUrl.split("/").pop();
  const testNo = parseInt(slug.split("-").pop());

  const finalSlug = "test-" + testNo;
  console.log("Page Data2", pageData);
  console.log("Final Slug Tes no", testNo);
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

  if (isAuth()) {
    console.log("testCheck called");
    testGiveOrNot(
      { testCategory: "correct-word-advanced", testNo: testNo },

      token
    )
      .then((res) => {
        console.log("test given or not 1", res);
        if (res.attempt == true) {
          setAttempted(true);
        } else {
          setAttempted(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  // if (!pageData) {
  //   return (
  //     <div>
  //       <Layout3>
  //         <div style={{ marginTop: "100px" }}>Loading...</div>
  //       </Layout3>
  //     </div>
  //   );
  // }
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
      setCorrectAnswer(true);
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
      setCorrectAnswer(false);
      setMessageStatus("wrongAnswer");
      setScore(score);
    }

    if (option === quizInfo[currentQuestion].correctAnswer) {
      setCorrectSelection(true);
    } else {
      setCorrectSelection(false);
    }
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct

    setDisableAfterSelect(false);
    // if (selectedOption === quizInfo[currentQuestion].correctAnswer) {
    //   setScore(score + 1);
    // }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizInfo.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setMessageToDisplay(null);
      setMessageStatus(null);
    } else {
      setShowScore(true);

      if (isAuth() && !attempted) {
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
    const newUrl = `/category/correct-word/advanced/test-${testNo - 1}`; // Replace this with your desired URL
    // Change the window location to the new URL, which will reload the page
    window.location.href = newUrl;
  };

  const displayScore = () => {
    if (!isAuth()) {
      return (
        <div>
          {" "}
          <Card className="myCard text-center scoreCard ">
            <h3 className="cardTitle">Score Card</h3>

            <div className="weave2">{score}</div>
            <div className="p-4">
              <p className="scoreDescription">
                Out of {quizInfo.length} questions.
              </p>
            </div>
            <div className="d-flex">
              <Link
                href={`/category/correct-word/advanced/test-${
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
                href={`/category/correct-word/advanced/test-${
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

            <div className="signInRequest mt-4">
              <p>
                Sign in to track your score and continue learning.<br></br>
                
                  <Link className="myLink " href="/signin">
                    Sign In
                  </Link>
              
              </p>
            </div>
          </Card>
        </div>
      );
    } else if (isAuth()) {
      return (
        <Card className="myCard text-center scoreCard">
          <h3 className="cardTitle">Score Card</h3>
          <div className="weave2">{score}</div>
          <div className="p-4">
            <p className="scoreDescription">
              Out of {quizInfo.length} questions.
            </p>
          </div>
          <div className="d-flex">
            <Link
              href={`/category/correct-word/advanced/test-${testNo - 1}`}
              onClick={(e) => {
                handleNextTest(e);
              }}
              className={`btn btn-primary test${testNo - 1}`}
            >
              Prev Test
            </Link>
            <Link
              href={`/category/correct-word/advanced/test-${testNo + 1}`}
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

  const messageContent = () => {
    if (correctAnswer) {
      return (
        <div className="messageBarContent">
          <div className="correctAnswerColumn1 d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-emoji-sunglasses-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z" />
            </svg>
          </div>
          <div className="correctAnswerColumn2">{messageToDisplay}</div>
        </div>
      );
    } else {
      return (
        <div className="messageBarContent">
          <div className="wrongAnswerColumn1 d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-emoji-tear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.5 3.5a.5.5 0 0 0 .5.5c.838 0 1.65.416 2.053 1.224a.5.5 0 1 0 .894-.448C12.351 3.584 11.162 3 10 3a.5.5 0 0 0-.5.5M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5M4.5 13c.828 0 1.5-.746 1.5-1.667 0-.706-.882-2.29-1.294-2.99a.238.238 0 0 0-.412 0C3.882 9.044 3 10.628 3 11.334 3 12.253 3.672 13 4.5 13M8 11.197c.916 0 1.607.408 2.25.826.212.138.424-.069.282-.277-.564-.83-1.558-2.049-2.532-2.049-.53 0-1.066.361-1.536.824.083.179.162.36.232.535.045.115.092.241.135.373A3.1 3.1 0 0 1 8 11.197M10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8M6.5 3c-1.162 0-2.35.584-2.947 1.776a.5.5 0 1 0 .894.448C4.851 4.416 5.662 4 6.5 4a.5.5 0 0 0 0-1" />
            </svg>
          </div>
          <div className="wrongAnswerColumn2">{messageToDisplay}</div>
        </div>
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
          <>
            <div className="messageBar">
              <div>
                Test &nbsp; <span className="questionNo">{testNo}</span>
                &nbsp; Question &nbsp;
                <span className="questionNo">
                  {currentQuestion + 1}/{quizInfo.length}
                </span>
              </div>
              <div className={`${messageStatus}`} style={{ display: "flex" }}>
                {messageToDisplay ? messageContent() : ""}
              </div>
            </div>
            <div className="contentSection">
              <div className="questionSection">
                <div className="questionText">
                 Q. {quizInfo[currentQuestion].question}
                </div>
              </div>
              <div className="optionSection">
                {quizInfo[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`optionButton  ${
                      disableAfterSelect === true ? "buttonUnClickable" : ""
                    }  ${
                      selectedOption === option ? wrongOrRight(option) : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button onClick={handleNextQuestion} className="nextButton">
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Second2;
