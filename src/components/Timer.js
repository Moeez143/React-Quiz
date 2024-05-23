import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const {dispatch, secondRemaining} = useQuiz();

  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        // console.log('tick');
        dispatch({ type: "timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
