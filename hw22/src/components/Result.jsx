import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return <div className="result">{result && <h2>{result}</h2>}</div>;
};

export default Result;
