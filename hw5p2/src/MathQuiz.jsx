import { useState } from "react";
import Answer from "./Answer";

function MathQuiz() {
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);

  const updatePoints = (isCorrect) => {
    setScore(score + (isCorrect ? 1 : -1));
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  return (
    <div>
      <h1>Math Quiz</h1>
      <p>
        What is {a} + {b}?
      </p>
      <Answer a={a} b={b} updatePoints={updatePoints} />
      <p>Score: {score}</p>
    </div>
  );
}

export default MathQuiz;
