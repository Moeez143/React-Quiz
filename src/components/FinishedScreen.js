import React from "react";
import { useQuiz } from "../context/QuizContext";

function FinishedScreen() {
  const {points, maxPossiblePoints, dispatch} = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={()=> dispatch({ type: 'reset' })} >Restart</button>
    </>
  );
}

export default FinishedScreen;
