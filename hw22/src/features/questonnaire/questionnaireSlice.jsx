import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, question: 'Do you like React?', answers: ['Yes', 'No'], selectedAnswer: null },
    { id: 2, question: 'Do you use Redux?', answers: ['Yes', 'No'], selectedAnswer: null },
    { id: 3, question: 'Do you use Redux Toolkit?', answers: ['Yes', 'No'], selectedAnswer: null },
    { id: 4, question: 'Do you like JavaScript?', answers: ['Yes', 'No'], selectedAnswer: null },
    { id: 5, question: 'Do you like CSS?', answers: ['Yes', 'No'], selectedAnswer: null },
  ],
  result: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
      }
    },
    submitAnswers: (state) => {
      const correctAnswers = state.questions.filter(q => q.selectedAnswer === 'Yes').length;
      state.result = `You score ${correctAnswers} of ${state.questions.length}`;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
