import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './features/questonnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className="app">
      <h1>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <Result />
    </div>
  );
};

export default App;

