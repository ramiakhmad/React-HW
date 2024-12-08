import React from 'react';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questonnaire/questionnaireSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (event) => {
    dispatch(answerQuestion({ questionId: question.id, answer: event.target.value }));
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      {question.answers.map((answer, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={answer}
              checked={question.selectedAnswer === answer}
              onChange={handleAnswer}
            />
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;
