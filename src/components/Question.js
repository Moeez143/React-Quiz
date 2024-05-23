import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const {questions, index} = useQuiz();
  const question = questions.at(index);

  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
