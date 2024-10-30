import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setTimeRemaining(() => {
  //       if (timeRemaining === 0) {
  //         onAnswered(false)
  //         return 10
  //       } else {
  //         return timeRemaining - 1
  //       }
  //     })
  //   }, 1000);
  
  //   return function cleanup() {
  //     clearTimeout(interval)
  //   }

  // });

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearTimeout(interval);
    } else {
      onAnswered(false);
    }
  }, [timeRemaining]);


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
