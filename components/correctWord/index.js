import React, { useState, useEffect } from "react";
// import { getRanking } from "../../actions/correct-word";

function QuizForm(pageData) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctSelection, setCorrectSelection] = useState(null);
  // const [quizInfo, setquizInfo] = useState(pageData.data().data);
  const [rightlyAnswered, setRightlyAnswered] = useState([]);
  const [wronglyAnswered, setWronglyAnswered] = useState([]);
  const [disableAfterSelect, setDisableAfterSelect] = useState(false);

  console.log("PageDataCom", pageData);
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const wrongOrRight = (option) => {
    if (selectedOption === quizInfo[currentQuestion].correctAnswer) {
      return "selectCorrect";
    } else return "selectIncorrect";
  };

  const handleOptionClick = (option) => {
    setDisableAfterSelect(true);
    setSelectedOption(option);
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
      setRightlyAnswered([
        ...rightlyAnswered,
        quizInfo[currentQuestion].question,
      ]);
    } else {
      setWronglyAnswered([
        ...wronglyAnswered,
        quizInfo[currentQuestion].question,
      ]);
    }

    // Move to the next question

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizInfo.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
      // getRanking(score);
      console.log("Rightly Answered", rightlyAnswered);
      console.log("Wrongly Answered", wronglyAnswered);
    }
  };

  return (
    // <div></div>
    <div className="quizContainer">
      {showScore ? (
        <div className="scoreSection">
          You scored {score} out of {quizInfo.length} questions.
        </div>
      ) : (
        <>
          <div className="questionSection">
            <div className="questionCount">
              <span>Question {currentQuestion + 1}</span>/{quizInfo.length}
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
  );
}

export default QuizForm;
